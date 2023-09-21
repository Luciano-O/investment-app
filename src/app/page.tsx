"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../components/header'
import { api } from '../lib/axios'
import { Separator } from '../components/ui/separator'
import { User } from '../interfaces/user.interface'
import { BalanceCard } from '../components/balance'


export default function Home() {
  const [ user, setUser ] = useState<User>({ name: ''})
  const router = useRouter()

  useEffect(() => {
    const bringUser = async (token: string) => {
      try{
        const { data } = await api.get('/conta', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setUser(data)
      } catch(e) {
        localStorage.removeItem('token')
        router.push('/login')
      }
    }

    const token = localStorage.getItem('token')

    if(!token) return router.push('/login')

    bringUser(token)
  }, [])

  return (
    <div className='flex flex-col items-center h-screen'>
      <Header name={user.name}/>
      <Separator className='w-screen bg-gray-600'/>
      <div className='flex flex-row w-full'>
        <BalanceCard user={user} />
      </div>
    </div>
  )
}
