// Função para formatar moedas:
const formatCurrency = (value, currency) => {
  // Convertendo string para um formato de moeda:
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency,
  });
};

export default formatCurrency;