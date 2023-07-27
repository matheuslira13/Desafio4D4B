export const formatMoney = (item: number) => {
  const formattedValue = item.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
};
