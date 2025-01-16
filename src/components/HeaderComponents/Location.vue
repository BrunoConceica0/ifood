<template>
  <div class="marmita-modal__inner-content" @click="closeModal" v-if="modal">
    <div class="marmita-modal__inner-content-scroll">
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
              Onde Você quer receber seu pedido?
            </h2>
          </div>
          <div class="marmita-modal__from">
            <div>
              <button
                @click="locationOpen"
                class="address-search-input__button btn-seach-input-primary"
                aria-label="Buscar endereço e número"
              >
                <i class="bi bi-search"></i> Buscar endereço e número
              </button>
            </div>
            <div class="">
              <button
                class="btn-address--full-size btn-seach-input-secondary"
                aria-label="Usar minha localização"
              >
                <i class="bi bi-crosshair"></i>Usar minha localização
              </button>
            </div>
          </div>
          <div class="marmita-addrres">
            <h3 class="address__subtitle">Já tem um endereço salvo?</h3>
            <span class="address-text"
              >Entre na sua conta para selecionar seu endereço.</span
            >
            <div>
              <button class="address-register btn">
                <router-link :to="{ path: 'login' }">
                  Entre ou cadastre</router-link
                >
              </button>
            </div>
          </div>
          <div class="address-search-input__field" v-if="location">
            <button class="btn-seach-input-secondary" aria-label="Continuar">
              Continuar
            </button>
          </div>
        </div>
        <div v-if="location">
          <button
            class="btn-seach-input-primary"
            aria-label="Buscar endereço e número"
          >
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Busque endereço e número" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anddress: null,
      location: false,
      modal: true,
    };
  },
  methods: {
    locationOpen() {
      this.location = true;
    },
    closeModal({ target, currentTarget }) {
      if (currentTarget === target) this.modal = false;
      console.log(currentTarget, target);
      console.log(this.modal);
    },
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
}
.marmita-modal__inner-content {
  display: grid;
  grid-auto-rows: min-content auto;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000 !important;
  overflow-y: auto;
  overflow: hidden;
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
  margin: 9.5rem auto;
  border-radius: 0.4rem;
  max-width: 70rem;
  width: 100%;
  padding: 3rem;
}
.marmita-modal__inner-content__img {
  margin: 2rem 0 1rem 0;
  width: 23rem;
  height: 15rem;
  align-self: center;
  margin: 0 auto;
}
.marmita-content {
  display: grid;
  grid-auto-rows: min-content auto;
  margin-bottom: 3rem;
}
.marmita-modal__from {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: min-content;
}
.marmita-addrres {
  margin-top: 7rem;
}
.marmita-modal__subtitle {
  color: var(--cor-text-primary);
  font: var(--font-mp2);
  text-align: center;
  margin-bottom: 2rem;
}
.address-search-input__button {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 70rem;
  text-align: start;
}
.bi-search {
  padding-right: 2rem;
  font-size: 2rem;
}
.address-search-input__button:focus {
  outline: none;
}
.btn-address--full-size {
  text-align: start;
}
.bi-crosshair {
  color: var(--cor-text-primary);
  padding-right: 2rem;
}

.btn-address--full-size:hover {
  box-shadow: -2px 3px 8px rgba(0, 0, 0, 0.2), 1px -1px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
}
.address__subtitle {
  text-align: center;
  font: var(--font-lp1);
  margin: 0.7rem;
  color: var(--cor-text-input);
}
.address-text {
  display: block;
  color: var(--cor-span);
  text-align: center;
  font: var(--font-mp1);
}
.address-register {
  align-items: center;
  background: transparent;
  padding: 2rem 1.8rem;
  cursor: pointer;
  border: none;
  width: 100%;
}
.address-register a {
  color: var(--color-ifood);
  font: var(--font-mp3);
  width: 100%;
  max-width: max-content;
}
.address-register a:active {
  opacity: 0.8;
}
.address-register a:focus {
  outline: none;
}
</style>
