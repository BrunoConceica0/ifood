import axios from "axios";

export async function getCategories(categoryId) {
  const urlcomplete = `http://localhost:3000${categoryId}`;

  try {
    const response = await axios.get(urlcomplete);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Erro ao buscar as categorias:", error);
  }
}
