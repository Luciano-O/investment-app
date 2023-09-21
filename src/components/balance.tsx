import { User } from '../interfaces/user.interface';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button';
import { ArrowBigUpDash, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface balanceProps {
  user: User
}

export function BalanceCard(props: balanceProps) {
  const [ openedEye, setOpenedEye ] = useState(false)
  const { user } = props

  function handleEyeClick() {
    setOpenedEye(!openedEye)
  }

  return (
    <Card className='w-80 p-3 m-4'>
      <div className='flex justify-around m-4 relative items-center'>
        <CardTitle>Balance:</CardTitle>
        <p>R$
          {
            openedEye ? user.balance?.toFixed(2) : ' *****'
          }
        </p>
        {
          openedEye ? 
          <Eye className='absolute right-2 cursor-pointer w-4 h-4' onClick={handleEyeClick}/> :
          <EyeOff className='absolute right-2 cursor-pointer w-4 h-4' onClick={handleEyeClick}/>
        }
      </div>
      <div className='flex justify-around m-4'>
        <Button> <ArrowBigUpDash /> Withdrawal</Button>
        <Button> <ArrowBigUpDash className='rotate-180'/> Deposit</Button>
      </div>
    </Card>
  )
}