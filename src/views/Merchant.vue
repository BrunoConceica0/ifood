<template>
  <article
    aria-label="Lojas de Referência"
    aria-labelledby="title"
    class="container-primary merchandise_container"
    id="merchant-content"
  >
    <section>
      <div class="flex-row category_loading" v-if="isLoading">
        <Loading class="category-loading__item" v-for="n in 6" :key="n" />
      </div>
      <div class="cardstack-section-container" v-else>
        <div class="" v-if="stores.length">
          <ul class="merchant-list__wrapper hover-zoom-shadow">
            <li
              class="merchant-list__item"
              v-for="(store, index) in stores"
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
        <Pagination
          :currentPage="pagination.currentPage"
          :perPages="pagination.perPages"
          :totalPages="pagination.totalPages"
        />
        <div>
          <h2 aria-labelledby="title">Lojas {{ categoryPage }}</h2>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Loading from "@/components/partial/loading";
import Pagination from "@/components/partial/Pagination";
export default {
  components: { Loading, Pagination },
  name: "MerchantViews",
  data() {
    return {
      stores: [], // Objeto que armazena todas as categorias
      categoryPage: "", // Categoria selecionada na URL
      url: "http://localhost:3001",
      limitPage: 15,
      isLoading: true,
      defaultImage: "/images/defaultImage.jpg", //Se a imagem não der resposta
      pagination: {
        currentPage: 1,
        perPages: 15,
        totalPages: 6,
        totalItem: 0,
      },

      productTotal: 0,
    };
  },
  methods: {
    async getStores() {
      // Ao deixar apenas um categoria funcionando, ela não consegue sair url que foi filtado e nção ativa a Loadiing, somente dando F5
      this.isLoading = true;
      try {
        const urlComplet = `${this.url}/${this.categoryPage}Stores?_page=${this.pagination.currentPage}&_limit=${this.pagination.perPages}`;

        const response = await fetch(urlComplet);

        console.log(this.produtosTotal);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const totalCount = response.headers.get("x-total-count");
        this.totalItem = totalCount;
        const data = await response.json();
        console.log("Total de itens:", totalCount);
        this.stores = data;
      } catch (error) {
        console.log("url da lojas não esta funciomando", error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.getStores();
    this.categoryPage = this.$route.params.categoryPage;
  },
  watch: {
    "$route.params.categoryPage"(newCategory) {
      this.categoryPage = newCategory;

      this.getStores();
      this.isLoading = true;
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
  grid-template-columns: repeat(5, 1fr);
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
