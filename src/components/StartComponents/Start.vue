<template>
  <article
    aria-label="Paginá Ifood início"
    aria-labelledby="Introdução"
    class="container-primary"
  >
    <div>
      <h1 class="category_title">
        Pedir seu delivery no iFood é rápido e prático! Conheça as categorias
      </h1>
      <div class="category__menu">
        <ul class="category__menu__item flex-row">
          <li><router-link :to="{ path: '/' }"></router-link></li>
        </ul>
      </div>
    </div>
    {{ produt }}
  </article>
</template>

<script>
export default {
  data() {
    return {
      produt: "",
    };
  },
  methods: {
    fetchProduts() {
      const url = "../assets/produts/start.json";
      fetch(url).then((r) =>
        r.json().then((data) => {
          console.log(data);
          this.produt = data;
        })
      );
    },
  },
};
</script>

<style scoped>
.category_title {
  font: var(--font-bp2);
  color: var(--cor-text-primary);
}
</style>
