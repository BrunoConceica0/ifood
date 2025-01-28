<template>
  <section>
    <h1>Restaurante</h1>
    {{ categories }}
  </section>
</template>

<script>
import { getCategoryRestaunt } from "@/axios/getCategoryRestaunt";
export default {
  data() {
    return {
      categories: [], // Armazena as categorias carregadas
      error: null, // Para armazenar erros
    };
  },
  methods: {
    async fetchCategory() {
      try {
        const response = await getCategoryRestaunt();
        this.categories = response.data;
        this.error = null; // Limpa qualquer erro anterior
      } catch (error) {
        this.error = "Não foi possível carregar as categorias."; // Exibe uma mensagem de erro
      }
    },
  },
  created() {
    this.fetchCategory();
  },
};
</script>

<style></style>
