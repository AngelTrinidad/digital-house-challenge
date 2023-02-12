export const formatNumber = (number: number, fractionDigits = 0): string => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
  });
};
