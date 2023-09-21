import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from './ui/card'
import { useEffect, useState } from 'react'
import { Stock } from '../interfaces/user.interface'
import { api } from '../lib/axios'

export function AllStocks() {
  const [ stocks, setStocks ] = useState<Stock[]>()

  useEffect(() => {
    const bringStocks = async () => {
      const { data } = await api.get('/ativos')

      setStocks(data)
    }

    bringStocks()
  }, [])

  return (
    <Card>
      <Table>
        <TableCaption className='mb-2'>All Stocks</TableCaption>
        <TableHeader>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableHeader>
      <TableBody>
          {
            stocks?.map((stock) => {
              return(
                <TableRow key={stock.id}>
                  <TableCell className='font-medium'>{stock.name}</TableCell>
                  <TableCell>{`R$ ${stock.price.toFixed(2)}`}</TableCell>
                  <TableCell className='text-right'>{stock.quantity}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </Card>
  )
}