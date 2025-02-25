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
        <div class="merchant-content" v-if="stores.length">
          <ul class="merchant-list__wrapper hover-zoom-shadow">
            <li
              class="merchant-list__item"
              v-for="(store, index) in stores"
              :key="index"
            >
              <router-link to="#" class="teste">
                <div class="merchant-card__img">
                  <img src="/img/img-categories/defaulImage.jpg" alt="" />
                </div>
                <div class="merchant-card">
                  <span class="merchant_title">
                    {{ store.store_name }}
                    <i class="bi bi-star-fill" v-if="store.champion"></i>
                  </span>

                  <span>
                    <i class="bi bi-star-fill bi-yelow"></i>
                    <span class="bi-yelow">{{ store.rating }}</span>
                    {{ store.store_type }} • {{ store.distance_km }} km
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

        <div>
          <h2 aria-labelledby="title">Lojas</h2>
        </div>
        <!-- <div>
          <ul>
            <li v-for="page in pageTotal" :key="page">
              <button @click="changePage(page)">{{ page }}</button>
            </li>
          </ul>
        </div> -->
        <!-- Tirei as condições e loading, ainda nã conseguir quando for gerar requisição da paginação, o loaging e ativado -->
        <div class="merchant__btn" @click.prevent="addItemsMerchant">
          <button :disabled="isMaxItemsMerchant">Ver mais</button>
          <!-- <Loading v-else class="merchant__btn__loading" /> -->
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Loading from "@/components/partial/loading.vue";
import { api } from "@/axios/getCategories";
export default {
  components: { Loading },
  name: "MerchantViews",
  data() {
    return {
      stores: [], // Objeto que armazena todas as categorias
      categoriesPage: "", // Categoria selecionada na URL
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
  filters: {
    numberInReal(value) {
      if (!isNaN(value)) {
        return value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
      } else {
        return "";
      }
    },
  },
  methods: {
    async getStores() {
      // Ao deixar apenas um categoria funcionando, ela não consegue sair url que foi filtado e nção ativa a Loadiing, somente dando F5
      this.isLoading = true;
      if (this.categoriesPage === "") {
        this.categoriesPage = "start";
      } else {
        console.log("Erro na categoriesPage");
      }
      try {
        const urlComplet = `/${this.categoriesPage}Stores?_page=${this.pagination.currentPage}&_limit=${this.pagination.perPages}`;

        const response = await api.get(urlComplet);
        this.stores = response.data;

        const totalCount = response.headers.get("x-total-count");

        this.pagination.totalItem = Number(totalCount);
        if (this.totalItem <= 0) {
          console.log("O totalItem esta vazio ");
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.log("url da lojas não esta funciomando", error);
      } finally {
        this.isLoading = false;
      }
    },
    changePage(index) {
      if (this.pagination.currentPage !== index) {
        this.pagination.currentPage = index;
      } else {
        this.pagination.currentPage = 1;
      }
    },
    addItemsMerchant() {
      if (this.pagination.perPages <= this.pagination.totalItem) {
        this.pagination.perPages += 15;
      }
    },
  },
  computed: {
    pageTotal() {
      const total = this.pagination.totalItem / this.pagination.perPages;
      // console.log(Number(total));
      return total !== Infinity ? Math.ceil(total) : 0;
    },
    isMaxItemsMerchant() {
      if (this.pagination.perPages >= this.pagination.totalItem) {
        return true;
      }
      return false;
    },
  },

  created() {
    this.getStores();
    this.categoriesPage = this.$route.params.categoriesPage;
  },
  watch: {
    "$route.params.categoriesPage"(newCategory) {
      this.categoriesPage = newCategory;

      this.getStores();
      this.isLoading = true;
    },
    "pagination.currentPage"(newPage) {
      this.getStores(newPage);
    },
    "pagination.perPages"(newPage) {
      this.getStores(newPage);
    },
    "pagination.totalItem"(newItem) {
      this.getStores(newItem);
    },
  },
};
// Como fazer paginação interna do site:
/*
1- Tem que obter quantidades de item na lista na data:arrary da resposta da requisição de headers, nos headers tem informação extras do fetch do servidor, nele tem o "x-total-count"
2- pegando a API com a resposta do fetch, creie um variante como const totalCount = response.headers.get("x-total-count");, ele vai returnar a quantidade de itens.
3 - Sabendo da quantidade, sendo mais efiente, na criaão de paginação, user um metodo computed props para pode dividir o totalItens com com a quantidade de item que foi denominado. 60item / 15 item por pagina, para não ter números quebrados use o metodo Math.ceil(total)   return total !== Infinity ? Math.ceil(total) : 0;
4 - crei um função methods para o número da pagina e incluir na url internar, changePage
5 - Atualizar a dinamica dos dados recibidos ao clicar'"pagination.currentPage"(newPage) {this.getStores(newPage);'
    },
*/
</script>
<style scoped>

</style>
