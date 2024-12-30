<template>
  <section class="store-content">
    <div class="store-content__feild">
      <div class="store-content__item">
        <button class="store__btn">
          Proxímo de você
          <i class="bi bi-arrow-down"></i>
        </button>
      </div>
      <div class="store-content__item">
        <router-link :to="{ path: 'login' }" class="store-login">
          <i class="bi bi-box-arrow-in-right"></i>
        </router-link>
      </div>
      <div class="store-content__item" @click="openRestaurantCart">
        <button class="store-card">
          <i class="bi bi-bag"></i>
          <div class="store-card__trolley">
            <span>R$ {{ totalTrolley }}</span>
            <span>{{ itemsTrolley }} itens</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Modal Store -->
    <transition name="modal">
      <div
        class="restaurant-cart"
        v-if="restaurantCart"
        @click="closeModal"
        ref="modal"
      >
        <div class="restaurant-cart__empty-content">
          <div class="restaurant-cart__empty-content__img">
            <img src="@/assets/image/empty-cart-variant.png" alt="" />
          </div>
          <span class="estaurant-cart__empty-content-large"
            >Sua sacola está vazia</span
          >
          <span class="estaurant-cart__empty-content-small"
            >Adicione itens</span
          >
          <button
            type="button"
            class="restaurant-cart__empty-content__btn"
            @click="closerestaurantCart"
          >
            X
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "HeaderStoreComponent",
  data() {
    return {
      totalTrolley: 0,
      itemsTrolley: 0,
      restaurantCart: false,
    };
  },
  methods: {
    closeModal({ target, currentTarget }) {
      if (target === currentTarget) this.restaurantCart = false;
    },
    closerestaurantCart() {
      this.restaurantCart = false;
    },

    openRestaurantCart() {
      this.restaurantCart = true;
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
}
.store-content__feild {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
}
.store__btn {
  font: var(--font-bp1);
  color: var(--color-text-main);
}
.store-card {
  padding: 1rem;
  border-radius: 15rem;
  display: flex;
}
.store-card__trolley {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  text-align: left;
}
.store-card__trolley span {
  font: var(--font-mp0);
  color: var(--color-text-main);
}
.store-card:hover {
  background: var(--color-bg-secund);
}

/* Modal Store Styles*/

.restaurant-cart {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
/* caso eu querer colocar um fundo no modal como principal*/
/* .restaurant-cart::before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: red;
  height: 100vh;
} */
.restaurant-cart__empty-content {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  max-width: 100%;
  height: 100vh;
  top: 95px;
  z-index: 100;
  right: 0;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2);
}
.estaurant-cart__empty-content-large {
  color: #3e3e3e;
  font-size: 18.4px;
  font-weight: 500;
  text-align: center;
}
.estaurant-cart__empty-content-small {
  color: #3e3e3e;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 10px 0px 0px;
}
.restaurant-cart__empty-content__btn {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px 0 0 20px;
  color: var(--color-ifood);
  font-size: 20px;
  font-weight: 500;
}

.modal-enter-active,
.modal-leave-active {
  opacity: 1;
  transition: 0.5s;
  transform: translate3d(30px, 0, 0);
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: translate3d(30px, 0, 0);
}
</style>
