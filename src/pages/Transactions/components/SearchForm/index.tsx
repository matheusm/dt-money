import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchformInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, (ctx) => {
    return ctx.fetchTransactions
  })
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SearchformInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransaction(data: SearchformInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}