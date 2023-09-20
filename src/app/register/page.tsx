"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { FormEvent, useState, useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { Separator } from '../../components/ui/separator'
import { api } from '../../lib/axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Login() {
  const [ passwordType, setPasswordType ] = useState('password')
  const [ openedEye, setOpenedEye ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ buttonDisabled, setButtonDisabled ] = useState(true)

  const router = useRouter()

  function handleEyeClick() {
    if (passwordType === 'password') {
      setPasswordType('text')
      setOpenedEye(true)
    }
    else {
      setPasswordType('password')
      setOpenedEye(false)
    }
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { data } = await api.post('/conta/register', {
      email,
      password,
      name
    })

    localStorage.setItem('token', data.token)

    router.push('/')
  }

  useEffect(() => {
    if (email.match(emailRegex) && password.length > 5 && name.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [email, password, name])



  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card>
        <CardHeader className='pb-4 pr-10 pl-10'>
          <CardTitle>Register</CardTitle>
          <CardDescription>If you already have an account, <Link className='text-blue-600' href="/login">login</Link></CardDescription>
        </CardHeader>
        <Separator className='w-4/5 ml-auto mr-auto mb-4 gap-4' />
        <CardContent>
          <form onSubmit={submitHandler}>
            <div className='grid w-full items-center gap-4'>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="example@gmail.com" value={email} onChange={({target}) => setEmail(target.value)}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={({target}) => setName(target.value)}/>
              </div>
              <div className="relative">
                <Label htmlFor="password" >Password</Label>
                <div className='flex flex-row items-center'>
                  <Input id="password" type={passwordType} value={password} onChange={({target}) => setPassword(target.value)} />
                  {
                    openedEye ? 
                    <Eye className='absolute right-2 cursor-pointer w-4 h-4' onClick={handleEyeClick}/> :
                    <EyeOff className='absolute right-2 cursor-pointer w-4 h-4' onClick={handleEyeClick}/>
                  }
                </div>
              </div>
              <Button type="submit" variant='outline' disabled={buttonDisabled}>Register</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}