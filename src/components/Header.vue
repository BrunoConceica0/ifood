<template>
  <header id="header" class="header-content container">
    <article class="header-container">
      <div class="header-img">
        <img src="../assets/icon/ifood-43.svg" alt="Logo do Ifood" />
      </div>
      <nav class="header-nav" aria-label="Navegação Principal">
        <ul class="header-nav__list">
          <router-link class="active-hover" to="/"><li>Início</li></router-link>
          <router-link to="/"><li>Restaurante</li></router-link>
          <router-link to="/"><li>Mercado</li></router-link>
          <router-link to="/"><li>Bebibas</li></router-link>
          <router-link to="/"><li>Farmácia</li></router-link>
          <router-link to="/"><li>Shopping</li></router-link>
        </ul>
      </nav>
    </article>
    <InputSearch />
    <HeaderStore />
    <Location />
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";

import InputSearch from "@/components/HeaderComponents/InputSearch";
import HeaderStore from "@/components/HeaderComponents/HeaderStore";
import Location from "@/components/HeaderComponents/Location";
export default {
  name: "Header",
  components: { InputSearch, HeaderStore, Location },
  methods: {
    ...mapActions([]),
    ...mapState([]),
  },
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.header-content {
  display: flex;
  justify-content: space-between;
}

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}
.header-nav__list {
  display: flex;
  flex-direction: row;
}
.header-img img {
  width: 5.6rem;
  height: 4.7rem;
}
.header-nav__list li {
  color: var(--color-text-main);
}
.header-nav__list a {
  font: var(--font-mp1);
  padding: 0.8rem 1rem;
}
.header-nav__list li:hover {
  color: var(--color-ifood);
  transition: 0.2s all ease-in-out;
}
.header-content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
