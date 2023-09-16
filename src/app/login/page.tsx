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
import { useState } from 'react'

export default function Login() {
  const [ passwordType, setPasswordType ] = useState('password')
  const [ openedEye, setOpenedEye ] = useState(false)

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

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your email and password to login</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="example@gmail.com" />
              </div>
              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <div className='flex flex-row items-center'>
                  <Input id="password" type={passwordType} />
                  {
                    openedEye ? 
                    <Eye className='absolute right-2 cursor-pointer' onClick={handleEyeClick}/> :
                    <EyeOff className='absolute right-2 cursor-pointer' onClick={handleEyeClick}/>
                  }
                  
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}