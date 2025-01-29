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
    // this.setLoading();
  },

  watch: {
    "$route.params.item"(newCategory) {
      this.fetchProdut(newCategory);
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
  border-radius: 4px;
  text-align: center;
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
