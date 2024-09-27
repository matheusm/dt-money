import * as Dialog from '@radix-ui/react-dialog';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    control
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input 
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input 
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <TransactionType 
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}