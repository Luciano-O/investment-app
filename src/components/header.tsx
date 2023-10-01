"use client"
import { Linkedin, Sun, UserCircle } from 'lucide-react';
import { useTheme } from "next-themes";
import { Separator } from './ui/separator';

interface headerProps {
  name: string
}

export function Header(props: headerProps) {
  const { theme, setTheme } = useTheme();
  const { name } = props
  return (
    <header className='flex justify-between w-screen'>
      <Linkedin className='m-2'/>
      <div className='flex m-2'>
        <button
          onClick={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}
        >
          <Sun />
        </button>
        <Separator orientation='vertical' className='mr-1 ml-1 bg-gray-600'/>
        <UserCircle />
        <p className='ml-2'>{name}</p>
      </div>
    </header>
  )
}