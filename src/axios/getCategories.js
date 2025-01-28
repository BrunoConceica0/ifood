import axios from "axios";

export async function getCategories(params) {
  const url = `./api/categories/${params}.json`;

  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Erro ao buscar as categorias:", error);
  }
}
