"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../components/header'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(!token) router.push('/login')
  }, [])

  return (
    <Header />
  )
}
