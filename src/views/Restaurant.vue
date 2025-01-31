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
      <div class="category__menu" v-if="categories && categories.length">
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
      v-if="!isLoading && (!categories || !categories.length)"
    >
      <Loading class="category-loading__item" v-for="n in 5" :key="n" />
    </div>
  </article>
</template>

<script>
import { getCategories } from "@/axios/getCategories";
import Loading from "@/components/partial/loading";

export default {
  name: "DrinksCategory",
  data() {
    return {
      categories: null, // Agora começa como `null`
      error: null,
      isLoading: true,
    };
  },
  components: { Loading },
  methods: {
    async fetchProdut() {
      this.isLoading = true;
      try {
        const categoryItem = this.$route.params.item || "restaurant";
        const response = await getCategories(categoryItem);

        // Garante que categories seja sempre um array
        this.categories = Array.isArray(response) ? response : [];
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
        this.categories = []; // Evita erro ao acessar `.length`
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.fetchProdut();
  },
  watch: {
    "$route.params.item"(newCategory) {
      this.fetchProdut(newCategory);
    },
  },
};
</script>

<style></style>
