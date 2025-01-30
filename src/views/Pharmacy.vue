<template>
  <article
    aria-label="Página Ifood início"
    aria-labelledby="Introdução"
    class="container-primary"
  >
    <div>
      <h1 class="category_title">
        Pedir seu delivery no iFood é rápido e prático! Conheça as categorias
      </h1>
      <div class="category__menu" v-if="categories.length">
        <ul class="category__menu_list flex-row hover-zoom-shadow">
          <li v-for="(category, index) in categories" :key="index">
            <router-link :to="{ path: category.id }">
              <img
                class="category__menu__img"
                :src="category.img"
                :alt="category.name"
              />
              <span class="category__menu__subtitle">{{ category.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="category_loading flex-row"
      v-if="!isLoading && !categories.length"
    >
      <Loading class="category-loading__item" v-for="n in 5" :key="n" />
    </div>
  </article>
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
      const categoryId = this.$route.params.categoryId || "pharmacy";
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
