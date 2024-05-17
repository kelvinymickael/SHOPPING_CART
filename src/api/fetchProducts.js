// Criando uma função que vai bater no endpoint e retornar os dados dos produtos pra gente.
// https://api.mercadolibre.com/sites/MLB/search?q=
const fetchProducts = async (query) => {
  // Esperando o retorno do fetch:
  // Passando para o fetch o endpoint que a gente vai querer fazer a requisição para buscar os dados.
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

  // Convertendo os dados JSON em objeto JavaScript.
  const data = await response.json();

  return data.results;
};

export default fetchProducts;
