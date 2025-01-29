<template>
  <header id="header" class="header-content container">
    <article class="header-container">
      <div class="header-img">
        <img src="../assets/icon/ifood-43.svg" alt="Logo do Ifood" />
      </div>
      <nav class="header-nav" aria-label="Navegação Principal">
        <ul class="header-nav__list">
          <li
            v-for="({ name, link }, index) in navigation"
            :key="index"
            @click="setActive(index)"
            :class="{ active: activeIndex === index }"
          >
            <router-link
              :to="link"
              :class="{ active: $route.path === link }"
              aria-current="$route.path === link ? 'page' : null"
            >
              {{ name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </article>
    <InputSearch />
    <HeaderStore />
  </header>
</template>

<script>
import InputSearch from "@/components/HeaderComponents/InputSearch";
import HeaderStore from "@/components/HeaderComponents/HeaderStore";
import { navigationLinks } from "@/constants/navigationLinks";

export default {
  name: "Header",
  data() {
    return {
      navigation: navigationLinks,
      activeIndex: null, // Índice do item ativo
    };
  },
  components: { InputSearch, HeaderStore },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: var(--cor-bg);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.header-content {
  display: flex;
  justify-content: space-between;
}
.header-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.header-nav__list {
  display: flex;
}
.header-img img {
  width: 5.6rem;
  height: 4.7rem;
}
.header-nav__list li {
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}
.header-nav__list li > a {
  color: var(--cor-text-secondary);
  font: var(--font-mp1);
}
.header-nav__list li.active > a,
.header-nav__list a:hover,
.active {
  color: var(--color-ifood);
}
</style>
