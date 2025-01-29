<template>
  <section>
    <h1>Restaurante</h1>
    {{ categories }}
  </section>
</template>

<script>
import { getCategories } from "@/axios/getCategories";
export default {
  data() {
    return {
      categories: [], // Armazena as categorias carregadas
    };
  },
  methods: {
    async fetchCategory() {
      const categoryId = this.$route.params.categoryId || "restaurant";
      this.categories = await getCategories(categoryId);
    },
  },
  created() {
    this.fetchCategory();
  },
  watch: {
    "$route.params.categoryId"(newCategory) {
      this.fetchCategory(newCategory);
    },
  },
};
</script>

<style></style>
