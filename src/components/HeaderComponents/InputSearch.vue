<template>
  <section>
    <form action="#" class="search-input__field" @click="closeModal">
      <div @click="fieldReachtRecent">
        <input
          class="search-field"
          type="text"
          v-model="searchItem"
          placeholder="Busque por item ou loja"
        />
        <button class="search-btn" type="submit" name="search" id="search">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </form>
    <section v-if="searchModal" class="search-recent">
      <ul class="search-recent__field">
        <p>Buscas recentes</p>
        <router-link to="/"
          ><li class="bi bi-arrow-clockwise">Início</li></router-link
        >
        <router-link to="/"
          ><li class="bi bi-arrow-clockwise">Restaurante</li></router-link
        >
        <router-link to="/"
          ><li class="bi bi-arrow-clockwise">Mercado</li></router-link
        >
        <router-link to="/"
          ><li class="bi bi-arrow-clockwise">Bebibas</li></router-link
        >
        <router-link to="/"
          ><li class="bi bi-arrow-clockwise">Farmácia</li></router-link
        >
        <router-link to="/"
          ><li class="bi bi-arrow-clockwise">Shopping</li></router-link
        >
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: "InputSearchComponent",
  data() {
    return {
      searchItem: null,
      searchModal: false,
    };
  },
  methods: {
    fieldReachtRecent() {
      this.searchModal = true;
    },
    closeModal({ target, currentTarget }) {
      if (target === currentTarget) this.searchModal = false;
    },
  },
};
</script>

<style scoped>
.search-input__field {
  position: relative;
  width: 100%;
  padding: 0 5px;
}
.search-field {
  background: var(--color-bg-secund);
  padding: 2rem;
  border-radius: 0.8rem;
  border: none;
  padding-left: 5rem;
}
.search-field::placeholder {
  font: var(--font-mp1);
}
.search-field:focus {
  border: none;
  outline: none;
}
.search-btn {
  background: transparent;
  border: none;
  font-size: 2.5rem;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  cursor: pointer;
}
.search-btn:focus {
  outline: none;
}
.search-recent {
  font: var(--font-mp1);
  background: var(--color-bg);
  z-index: 200;
  position: absolute;
  width: 100%;
  max-width: 70rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.search-recent__field p {
  color: var(--color-text-main);
  font: var(--font-mp2);
  padding: 2rem 1rem 0 2rem;
}
.search-recent__field li {
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}
.search-recent__field li:hover {
  background: var(--color-bg-secund);
}
.search-recent__field a {
  color: var(--color-text-secund);
}
.bi-arrow-clockwise {
  font-size: 1.4rem;
  color: var(--color-text-secund);
}
</style>
