<template>
  <article aria-label="Página de Categoria" class="container-primary">
    <div>
      {{ categoryData }}
      <h1 class="category_title">
        Pedir seu delivery no iFood é rápido e prático! Conheça as categorias
      </h1>
      <div class="category__menu" v-if="categories.length">
        <ul class="category__menu_list flex-row hover-zoom-shadow">
          <li v-for="({ id, name, img }, index) in categoryData" :key="index">
            <router-link :to="{ path: id }">
              <img class="category__menu__img" :src="img" :alt="name" />

              <span class="category__menu__subtitle"
                >{{ name }} categoria: {{ name }}
              </span>
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
      categories: "",
      categoryData: [],
      categoryPage: "",
      isLoading: true,
      title: "",
    };
  },
  components: { Loading },
  methods: {
    async fetchCategoriesOrSearch() {
      this.isLoading = true;

      const category = this.$route.params.categoryPage;
      /* o route ocorre pq ele esta sendo usado o props:true no roteamento  path: ":categoryPage" */

      // const searchQuery = this.$route.query.q;

      let url = "http://localhost:3000/categories";

      // if (searchQuery) {
      //   this.url += `/?q=${searchQuery}`;
      //   this.title = `Resultados para "${searchQuery}"`;
      // } else if (category) {
      //   url += `/${category}`;

      //   this.title = `Categoria: ${category}`;
      // } else {
      //   this.isLoading = false;
      //   return;
      // }

      try {
        const response = await axios.get(url);
        this.categories = response.data;
        this.filterCategory();

        console.log(category);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        this.categories = [];
      } finally {
        this.isLoading = false;
      }
    },
    filterCategory() {
      const valueCategory = this.categoryPage;
      if (valueCategory && this.categories[valueCategory]) {
        this.categoryData = this.categories[valueCategory];
      }
    },
  },

  created() {
    this.fetchCategoriesOrSearch();
    this.categoryPage = this.$route.params.categoryPage;
  },

  watch: {
    "$route.params.categoryPage"(newCategory) {
      this.categoryPage = newCategory;
      this.fetchCategoriesOrSearch();
    },
    "$route.query.q"() {
      this.fetchCategoriesOrSearch();
    },
  },
};
</script>
