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

interface UserStocksProps {
  stocks: Stock[]
}

interface Stock {
  id: number,
  name: string,
  price: number,
  quantity?: number
}

export function UserStocks(props: UserStocksProps) {
  const { stocks } = props
  return (
    <Card className='m-4'>
      <Table>
        <TableCaption className='mb-2'>User buyed stocks</TableCaption>
        <TableHeader>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className='text-right'>Total</TableHead>
        </TableHeader>
        <TableBody>
          {
            stocks.map((stock) => {
              return(
                <TableRow key={stock.id}>
                  <TableCell className='font-medium'>{stock.name}</TableCell>
                  <TableCell>{`R$ ${stock.price.toFixed(2)}`}</TableCell>
                  <TableCell>{stock.quantity}</TableCell>
                  <TableCell
                    className='text-right'
                  >
                    {`R$ ${((stock.price * (stock.quantity || 1)).toFixed(2))}`}
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </Card>
  )
}