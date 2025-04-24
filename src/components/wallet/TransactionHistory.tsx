
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History } from 'lucide-react';

const mockTransactions = [
  {
    id: 1,
    date: '2025-04-24',
    type: 'Credit',
    amount: 500,
    status: 'Completed',
    description: 'Added via PhonePe'
  },
  {
    id: 2,
    date: '2025-04-23',
    type: 'Debit',
    amount: 200,
    status: 'Completed',
    description: 'Bet placed on IND vs AUS'
  },
  // Add more mock transactions as needed
];

const TransactionHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Transaction History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell className={transaction.type === 'Credit' ? 'text-green-500' : 'text-red-500'}>
                  {transaction.type === 'Credit' ? '+' : '-'}₹{transaction.amount}
                </TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
