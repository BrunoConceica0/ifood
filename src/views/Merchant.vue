<template>
  <article
    aria-label="Lojas de Referência"
    aria-labelledby="title"
    class="container-primary"
    id="merchant-content"
  >
    <section>
      <div class="">
        <h2 aria-labelledby="title">Lojas</h2>
        <div class="flex-r">
          <ul class="flex-row">
            <li class="" v-for="(store, index) in stores" :key="index">
              <router-link to="#">
                <div>
                  <span
                    >{{ store.store_name
                    }}<i class="bi bi-star-fill" v-if="store.champion"></i
                  ></span>
                  <span
                    ><i class="bi bi-star-fill"></i> {{ store.store_type }} |
                    {{ store.distance_km }} km</span
                  >
                  <span
                    >{{ store.delivery_time_min }} | Frete:{{
                      store.delivery_fee
                    }}</span
                  >
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
      stores: [],
    };
  },
  methods: {
    async getStores() {
      const url = "http://localhost:3002/start";

      if (!url) console.log("URL not found");

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.stores = data;
        if (this.stores?.length === 0) {
          console.log("No data found");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getStores();
  },
};
</script>

<style>
.teste {
  color: black;
}
</style>
