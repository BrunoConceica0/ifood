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
import Loading from "@/components/partial/loading";
export default {
  data() {
    return {
      categories: [],
      error: null, // Para armazenar erros
      isLoading: true,
    };
  },
  components: { Loading },
  methods: {
    async fetchProdut() {
      this.isLoading = true;
      try {
        const categoryItem = this.$route.params.item || "start";
        this.categories = await getCategories(categoryItem);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
      } finally {
        this.isLoading = false;
      }
    },
    setLoading() {
      setTimeout(() => {
        if (this.categories.length === 0) {
          this.isLoading = false;
        }
      }, 1000 * 3);
    },
  },
  created() {
    this.fetchProdut();
    this.setLoading();
  },

  watch: {
    "$route.params.item"(newCategory) {
      this.fetchProdut(newCategory);
    },
  },
};
</script>

<style></style>
