<template>
  <div class="marmita-modal__inner-content">
    <div class="marmita-modal__inner-content-scroll">
      <div class="marmita-modal__inner-content__img">
        <img
          src="@/assets/image/marmita-modal.png"
          alt="Ilustração de localização"
        />
      </div>
      <div class="marmita-modal">
        <h2 class="marmita-modal__subtitle">
          Onde Você quer receber seu pedido
        </h2>
      </div>
      <div class="marmita-modal__from"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widthScreen: 0,
      heightScreen: 0,
    };
  },
  methods: {
    centerScreen() {
      this.widthScreen = window.innerWidth;
      this.heightScreen = window.innerHeight;
    },
  },
};
</script>

<style>
.marmita-modal__inner-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 500%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
}
.marmita-modal__inner-content::before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.marmita-modal__inner-content-scroll {
  position: relative;
}
</style>
