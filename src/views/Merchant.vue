<template>
  <article
    aria-label="Lojas de Referência"
    aria-labelledby="title"
    class="container-primary merchandise_container"
    id="merchant-content"
  >
    <section>
      <div class="cardstack-section-container">
        <h2 aria-labelledby="title">Lojas</h2>
        <div class="">
          <ul class="merchant-list__wrapper hover-zoom-shadow">
            <li
              class="merchant-list__item"
              v-for="(store, index) in categoryData"
              :key="index"
            >
              <router-link to="#">
                <div class="teste">
                  <span class="merchant_title">
                    {{ store.store_name }}
                    <i class="bi bi-star-fill" v-if="store.champion"></i>
                  </span>

                  <span>
                    <i class="bi bi-star-fill"></i> {{ store.store_type }} •
                    {{ store.distance_km }} km
                  </span>
                  <span v-if="store.delivery_fee > 0">
                    {{ store.delivery_time_min }} min •
                    {{ store.delivery_fee | numberInReal }} reias
                  </span>
                  <span v-else>
                    {{ store.delivery_time_min }} min |
                    <strong class="merchant_subtitle-free">Gratis</strong>
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "MerchantViews",
  data() {
    return {
      stores: {}, // Objeto que armazena todas as categorias
      categoryPage: "", // Categoria selecionada na URL
      categoryData: [], // Armazena a lista filtrada da categoria

      defaultImage: "/images/defaultImage.jpg",
    };
  },
  methods: {
    async getStores() {
      const url = "http://localhost:3000/stores";

      try {
        const response = await fetch(url);
        const data = await response.json();

        this.stores = data; // Armazena todas as categorias
        this.filterCategoryData(); // Filtra os dados após o carregamento

        if (!Object.keys(this.stores).length) {
          console.log("Nenhuma loja encontrada");
        }
      } catch (error) {
        console.error("Erro ao carregar lojas:", error);
      }
    },
    filterCategoryData() {
      const category = this.categoryPage;

      // Verifica se a categoria existe nos dados carregados
      if (category && this.stores[category]) {
        this.categoryData = this.stores[category]; // Define a categoria correta
      } else {
        this.categoryData = []; // Se a categoria não existe, define como array vazio
      }
    },
  },
  filters: {
    numberInReal(valeu) {
      return valeu.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    // Obtém a categoria da rota
    this.categoryPage = this.$route.params.categoryPage;

    // Carrega as lojas e filtra os dados
    this.getStores();
  },
  watch: {
    "$route.params.categoryPage"(newCategory) {
      this.categoryPage = newCategory;
      this.filterCategoryData(); // Atualiza os dados ao mudar de categoria
    },
  },
};
</script>
<style scoped>
.merchandise_container {
  margin: 0 auto;
}
.merchant-list__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4rem;
}
.teste {
  display: flex;
  flex-direction: column;
  font: var(--font-bp1);
  color: var(--cor-text-secondary);
  font-weight: 400;
}
.bi-star-fill {
  font-size: 0.7rem;
  background: var(--color-ifood);
  color: white;
  border-radius: 50%;
  border: 2px solid var(--color-ifood);
}
.merchant_title {
  font: var(--font-mp3);
  color: var(--cor-text-primary);
  font-weight: 600;
}
.merchant_subtitle-free {
  color: var(--cor-free);
}
</style>
