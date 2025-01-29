<template>
  <section>
    <form
      action="#"
      class="search-input__field"
      @submit.prevent
      @click="closeModal"
    >
      <div @click="fieldReachtRecent">
        <input
          class="search-field"
          type="text"
          v-model="searchItem"
          placeholder="Busque por item ou loja"
          aria-label="Campo de busca por item ou loja"
        />
        <button
          class="search-btn"
          type="submit"
          name="search"
          id="search"
          aria-label="Buscar"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
    </form>

    <!-- Cobertura do modal -->
    <div v-if="searchModal" class="search-modal-overlay" @click="closeModal">
      <section class="search-recent" @click.stop>
        <ul class="search-recent__field">
          <p>Buscas recentes</p>
          <li v-for="(item, index) in recentSearches" :key="index">
            <router-link :to="item.link">
              <i class="bi bi-arrow-clockwise"></i> {{ item.name }}
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import { recentSearchesLinks } from "@/constants/recentSearches";
export default {
  name: "InputSearchComponent",
  data() {
    return {
      searchItem: null,
      searchModal: false,
      recentSearches: recentSearchesLinks,
    };
  },
  methods: {
    fieldReachtRecent() {
      this.searchModal = true;
    },
    closeModal({ target, currentTarget }) {
      if (target === currentTarget) {
        this.searchModal = false;
      }
    },
  },
};
</script>

<style scoped>
/* Campo de busca */
.search-input__field {
  position: relative;
  width: 100%;
  padding: 0 0.5rem;
}
.search-field {
  background: var(--cor-feild-input);
  padding: 2rem;
  border-radius: 0.8rem;
  border: none;
  padding-left: 5rem;
  max-width: 700px;
}
.search-field::placeholder {
  font: var(--font-mp1);
}
.search-field:focus {
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

/* Resultados recentes */
.search-recent {
  font: var(--font-mp1);
  background: var(--cor-bg);
  z-index: 900;
  position: absolute;
  width: 100%;
  max-width: 65rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.search-recent__field {
  padding: 1rem 0;
}
.search-recent__field p {
  color: var(--cor-text-primary);
  font: var(--font-mp2);
  padding: 1rem 2rem;
}
.search-recent__field li {
  padding: 1rem 2rem;
  list-style: none;
  transition: background 0.2s;
}
.search-recent__field li:hover {
  background: var(--cor-feild-input);
}
.search-recent__field a {
  color: var(--cor-text-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.bi-arrow-clockwise {
  font-size: 1.4rem;
  color: var(--cor-text-secondary);
}
</style>
