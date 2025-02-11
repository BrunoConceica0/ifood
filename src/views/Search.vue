<template>
  <div class="search-home container-primary">
    <h3 class="search-home__title">
      Buscando por 
      <span class="search-home__emphasis">{{ $route.query.q }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {},
};
</script>

<style scoped>
.search-home__title {
  font: var(--font-bp2);
  color: var(--cor-text-primary);
}
.search-home__emphasis {
  color: var(--color-ifood);
}
</style>
