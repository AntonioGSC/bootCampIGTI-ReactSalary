const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const formatterPercent = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatNumber(value) {
  return formatter.format(value);
}

function formatNumberPercent(value) {
  return formatterPercent.format(value);
}

export { formatNumber, formatNumberPercent };
