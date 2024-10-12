import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextData {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { category, description, price, type } = data

    const res = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date()
    })

    setTransactions((state) => [res.data, ...state])
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}