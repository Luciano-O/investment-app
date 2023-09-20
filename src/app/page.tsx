"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../components/header'
import { api } from '../lib/axios'
import { Separator } from '../components/ui/separator'

interface User {
  name: string,
  id?: number,
  balance?: number, 
  email?: string,
  stocks?: object[]
}

export default function Home() {
  const [ user, setUser ] = useState<User>({ name: ''})
  const router = useRouter()

  useEffect(() => {
    const bringUser = async (token: string) => {
      const { data } = await api.get('/conta', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(data)
    }

    const token = localStorage.getItem('token')

    if(!token) return router.push('/login')

    bringUser(token)
  }, [])

  return (
    <div className='flex flex-col items-center h-screen'>
      <Header name={user.name}/>
      <Separator className='w-screen bg-gray-600'/>
    </div>
  )
}
