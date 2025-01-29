import axios from "axios";

export async function getCategories(item) {
  const urlcomplete = `http://localhost:3000/${item}`;

  try {
    const response = (await axios.get(urlcomplete)).data;
    console.log(response);
    return response;
  } catch (error) {
    console.error("Erro ao buscar as categorias:", error);
  }
}
