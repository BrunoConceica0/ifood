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
      <div class="category__menu">
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
  </article>
</template>

<script>
import { getCategoriesRestaunt } from "@/axios/getCategoriesRestaunt";
export default {
  data() {
    return {
      categories: [], // Armazena as categorias carregadas
      error: null, // Para armazenar erros
    };
  },
  methods: {
    async fetchCategory() {
      try {
        const categories = await getCategoriesRestaunt();
        this.categories = categories;
        this.error = null; // Limpa qualquer erro anterior
      } catch (error) {
        this.error = "Não foi possível carregar as categorias."; // Exibe uma mensagem de erro}
      }
    },
  },
  created() {
    this.fetchCategory();
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
</style>
