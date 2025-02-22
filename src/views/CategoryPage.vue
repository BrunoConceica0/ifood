<template>
  <div>
    <h1>{{ $route.params.name }} {{ category }}</h1>
  </div>
</template>

<script>
import { api } from "@/axios/getCategories";
export default {
  name: "CategoryPage",
  data() {
    return {
      category: "",
      name: "",
    };
  },
  methods: {
    async getCategory() {
      try {
        const response = await api.get(`/${this.$route.params.id}Category`);
        console.log(response.data);
        this.category = response.data;
      } catch (err) {
        console.log(`Erro no produto ${err}`);
      }
    },
  },
  created() {
    this.category = this.$route.params.categoryPage;
    this.getCategory();
  },
  watch: {
    "$route.params.categoryPage"(newCategory) {
      this.category = newCategory;
    },
  },
};
</script>

<style></style>
