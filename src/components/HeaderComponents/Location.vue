<template>
  <div v-if="modal" class="marmita-modal__inner-content" @click="closeModal">
    <div class="marmita-modal__inner-content-scroll">
      <button
        class="close-modal-btn"
        @click="closeModal"
        aria-label="Fechar modal"
      >
        ×
      </button>
      <div class="marmita-modal__inner-content__img">
        <img
          src="@/assets/image/marmita-modal.png"
          alt="Ilustração de localização"
        />
      </div>
      <div class="marmita-content">
        <div v-if="!location">
          <div class="marmita-modal">
            <h2 class="marmita-modal__subtitle">
              Onde você quer receber seu pedido?
            </h2>
          </div>
          <div class="marmita-modal__from">
            <button
              @click="locationOpen"
              class="address-search-input__button btn-seach-input-primary"
              aria-label="Buscar endereço e número"
            >
              <i class="bi bi-search"></i> Buscar endereço e número
            </button>
            <button
              class="btn-address--full-size btn-seach-input-secondary"
              aria-label="Usar minha localização"
            >
              <i class="bi bi-crosshair"></i> Usar minha localização
            </button>
          </div>
          <div class="marmita-addrres">
            <h3 class="address__subtitle">Já tem um endereço salvo?</h3>
            <span class="address-text">
              Entre na sua conta para selecionar seu endereço.
            </span>
            <button class="address-register btn">
              <router-link :to="{ path: 'login' }"
                >Entre ou cadastre</router-link
              >
            </button>
          </div>
        </div>
        <div v-else>
          <div class="address-search-input__field">
            <input
              type="text"
              placeholder="Busque endereço e número"
              class="address-input"
              aria-label="Digite endereço e número"
            />
            <button class="btn-seach-input-primary" aria-label="Continuar">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: false,
      modal: true,
    };
  },
  methods: {
    locationOpen() {
      this.location = true;
    },
    closeModal({ target, currentTarget }) {
      if (target === currentTarget) this.modal = false;
    },
    handleKeyDown(event) {
      if (event.key === "Escape") this.modal = false;
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<style scoped>
/* Estilos básicos */
button:focus {
  outline: none;
}
.marmita-modal__inner-content {
  display: grid;
  grid-auto-rows: min-content auto;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  overflow-y: auto;
}
.marmita-modal__inner-content::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
}
.marmita-modal__inner-content-scroll {
  position: relative;
  background: var(--cor-bg);
  margin: 10rem auto;
  border-radius: 0.4rem;
  max-width: 70rem;
  width: 100%;
  padding: 3rem;
}
.marmita-modal__inner-content__img {
  width: 23rem;
  height: 15rem;
  margin: 2rem auto;
}
.marmita-content {
  display: grid;
  grid-auto-rows: min-content auto;
  margin-bottom: 3rem;
}
.marmita-modal__from {
  display: grid;
  gap: 1rem;
}
.address__subtitle {
  text-align: center;
  font: var(--font-lp1);
  margin: 0.7rem;
  color: var(--cor-text-input);
}
.address-text {
  display: block;
  text-align: center;
  font: var(--font-mp1);
  color: var(--cor-span);
}
.address-register {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 2rem 1.8rem;
  text-align: center;
}
.address-register a {
  color: var(--color-ifood);
  font: var(--font-mp3);
}
.address-register a:active {
  opacity: 0.8;
}

/* Estilo do botão de fechar */
.close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
</style>
