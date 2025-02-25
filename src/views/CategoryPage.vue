<template>
  <article
    aria-label="Lojas de Referência"
    aria-labelledby="title"
    class="container-primary merchandise_container"
    id="merchant-content"
  >
    <section>
      <!-- <div class="flex-row category_loading" v-if="isLoading">
        <Loading class="category-loading__item" v-for="n in 6" :key="n" />
      </div> -->
      <div class="cardstack-section-container">
        <div class="merchant-content">
          <ul class="merchant-list__wrapper hover-zoom-shadow">
            <li
              class="merchant-list__item"
              v-for="(product, index) in category"
              :key="index"
            >
              <router-link to="#" class="teste">
                <div class="merchant-card__img">
                  <img :src="product.imagem" :alt="product.name" />
                </div>
                <div class="merchant-card">
                  <span class="merchant_title">
                    {{ product.name }}
                    <i class="bi bi-star-fill" v-if="product.champion"></i>
                  </span>

                  <span>
                    <i class="bi bi-star-fill bi-yelow"></i>
                    <span class="bi-yelow">{{ product.rating }}</span>
                    {{ product.store_type }} • {{ product.distance_km }} km
                  </span>
                  <span v-if="product.delivery_fee > 0">
                    {{ product.delivery_time_min }} min •
                    {{ product.delivery_fee | numberInReal }} reias
                  </span>
                  <span v-else>
                    {{ product.delivery_time_min }} min |
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
import { api } from "@/axios/getCategories";
// import Loading from "@/components/partial/loading.vue";

export default {
  name: "CategoryPage",
  data() {
    return {
      category: "",
      name: "",
      isLoading: true,
    };
  },
  // components: { Loading },
  methods: {
    async getCategory() {
      this.isLoading = true;
      try {
        const response = await api.get(`/${this.$route.params.id}Category`);
        console.log(response.data);
        this.category = response.data;
        console.log(this.category);
      } catch (err) {
        console.log(`Erro no produto ${err}`);
        this.isLoading = false;
      }
    },
  },
  created() {
    this.category = this.$route.params.categoryPage;
    this.getCategory();
  },
  watch: {
    "$route.params.categoryPage"(newCategory) {
      this.category = newCategory;
    },
  },
};
</script>

<style>
.merchant-list__item {
  border-radius: 8px;
}
.category__menu_list {
  gap: 16px;
  margin-top: 1rem;
}
.category__menu_list {
  padding: 0.8rem;
  margin: 0.5rem 1.4rem;
  border-radius: 8px;
  text-align: center;
  width: 11rem;
  transition: 0.3s ease-out;
}
.merchant-card__img {
  max-width: 10rem;
  height: 10rem;
}
.merchant-card__img img {
  border-radius: 8px;
}
</style>
