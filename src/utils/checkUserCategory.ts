export const checkUserCat = (category: string, pricesPerCat: number[]) => {
  let pricePerCategory: number = 0;
  switch (category) {
    case "A":
      pricePerCategory = pricesPerCat[0];
      break;
    case "B":
      pricePerCategory = pricesPerCat[1];
      break;
    case "C":
      pricePerCategory = pricesPerCat[2];
      break;
    case "D":
      pricePerCategory = pricesPerCat[3];
      break;
    default:
      break;
  }
  return pricePerCategory;
};
