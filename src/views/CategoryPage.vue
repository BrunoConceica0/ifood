<template>
  <article aria-label="Página de Categoria" class="container-primary">
    <div>
      <!-- {{ categoryData }} -->
      <h1 class="category_title">
        Pedir seu delivery no iFood é rápido e prático! Conheça as categorias
      </h1>
      <div class="category__menu" v-if="categoryData.length">
        <ul class="category__menu_list flex-row hover-zoom-shadow">
          <li v-for="({ name, img }, index) in categoryData" :key="index">
            <router-link :to="{ path: id }">
              <img class="category__menu__img" :src="img" :alt="name" />

              <span class="category__menu__subtitle">{{ name }} </span>
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
      searchQuery: "",
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

      let url = "http://localhost:3000/categories/";

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
      } else {
        this.isLoading = false;
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
<style scoped>
.category_title {
  font: var(--font-bp2);
  color: var(--cor-text-primary);
}
.category__menu_list {
  gap: 16px;
  margin-top: 1rem;
}
.category__menu_list li {
  padding: 0.8rem;
  margin: 0.5rem 1.4rem;
  border-radius: 8px;
  text-align: center;
  width: 11rem;
  transition: 0.3s ease-out;
}

.category__menu__subtitle {
  color: var(--cor-text-secondary);
  font: var(--font-mp0);
  display: inline;
}
.category__menu__img {
  display: block;
  width: 8rem;
  height: 7rem;
  border-radius: 4px;
}
/* loading */
.category_loading {
  gap: 6rem;
}
.category-loading__item {
  background: var(--cor-feild-input);
  border-radius: 4px;
  width: 8rem;
  height: 8rem;
}
</style>
