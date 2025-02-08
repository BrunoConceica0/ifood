<template>
  <article
    aria-label="Lojas de Referência"
    aria-labelledby="title"
    class="container-primary"
    id="merchant-content"
  >
    <section>
      <div>
        <h2 aria-labelledby="title">Lojas</h2>
        <div class="flex-r">
          <ul class="flex-row">
            <li v-for="(store, index) in categoryData" :key="index">
              <router-link to="#">
                <div>
                  <span>
                    {{ store.store_name }}
                    <i class="bi bi-star-fill" v-if="store.champion"></i>
                  </span>
                  <span>
                    <i class="bi bi-star-fill"></i> {{ store.store_type }} |
                    {{ store.distance_km }} km
                  </span>
                  <span>
                    {{ store.delivery_time_min }} min | Frete:
                    {{ store.delivery_fee }}
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
