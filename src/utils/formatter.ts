export const dateFormatter = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR');
}

export const currencyFormatter = (price: number) => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
