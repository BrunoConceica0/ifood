<template>
  <article aria-label="Página de Categoria" class="container-primary">
    <div>
      <h1 class="category_title">
        Pedir seu delivery no iFood é rápido e prático!
      </h1>
      <div class="category__menu" v-if="categories">
        <ul class="category__menu_list flex-row hover-zoom-shadow">
          <li v-for="({ name, img, id }, index) in categories" :key="index">
            <router-link
              :to="{
                name: 'categoryPage',
                params: {
                  categoriesPage: $route.params.id,
                  id: id,
                  name: name,
                },
              }"
            >
              <img
                class="category__menu__img"
                v-if="img"
                :src="img[0].src"
                :alt="name"
              />
              <span class="category__menu__subtitle">{{ name }} </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="category_loading flex-row" v-if="isLoading">
      <Loading class="category-loading__item" v-for="n in 6" :key="n" />
    </div>
    <Merchant />
  </article>
</template>

<script>
import Loading from "@/components/partial/loading";
import Merchant from "@/views/Merchant.vue";
import { api } from "@/axios/getCategories";

export default {
  name: "CategoriesPage",
  data() {
    return {
      categories: [],

      categoriesPage: "",
      searchQuery: "",
      isLoading: true,
      title: "",
    };
  },
  components: { Loading, Merchant },
  methods: {
    async fetchCategories() {
      this.isLoading = true;

      try {
        const urlComplet = `/${this.categoriesPage} `;
        console.log(urlComplet);
        const response = await api.get(urlComplet);
        this.categories = response.data;
      } catch (error) {
        console.log(error, "url não responde ");
      }
      this.isLoading = false;
    },
  },
  created() {
    this.categoriesPage = this.$route.params.categoriesPage || "start";
    this.fetchCategories();
  },
  watch: {
    "$route.params.categoriesPage"(newCategory) {
      if (newCategory) {
        this.categoriesPage = newCategory;
        this.fetchCategories();
      }
    },
  },
  beforeCreate() {
    this.isLoading = false;
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
</style>
