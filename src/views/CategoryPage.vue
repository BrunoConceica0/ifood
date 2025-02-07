<template>
  <article aria-label="Página de Categoria" class="container-primary">
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
    <div class="category_loading flex-row" v-if="isLoading">
      <Loading class="category-loading__item" v-for="n in 5" :key="n" />
    </div>
  </article>
</template>

<script>
import Loading from "@/components/partial/loading";
import axios from "axios";

export default {
  name: "CategoryPage",
  data() {
    return {
      categories: [],
      isLoading: true,
      title: "",
    };
  },
  components: { Loading },
  methods: {
    async fetchCategoriesOrSearch() {
      this.isLoading = true;

      const category = this.$route.params.categoryPage;
      const searchQuery = this.$route.query.q;

      let url = "";

      if (searchQuery) {
        url = `http://localhost:3001/produtos?q=${searchQuery}`;
        this.title = `Resultados para "${searchQuery}"`;
      } else if (category) {
        url = `http://localhost:3001/${category}`;
        this.title = `Categoria: ${category}`;
      } else {
        this.isLoading = false;
        return;
      }

      try {
        const response = await axios.get(url);
        this.categories = response.data;
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        this.categories = [];
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.fetchCategoriesOrSearch();
  },

  watch: {
    "$route.params.categoryPage"() {
      this.fetchCategoriesOrSearch();
    },
    "$route.query.q"() {
      this.fetchCategoriesOrSearch();
    },
  },
};
</script>
