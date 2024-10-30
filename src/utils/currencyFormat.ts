export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("es", {
    style: "currency",
    currency: "COL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
