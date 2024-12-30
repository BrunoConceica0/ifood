<template>
  <main class="main-loyout">
    <div class="page-not-found">
      <div class="page-not-found__img">
        <img src="@/assets/icon/ifood-43.svg" alt="" />
      </div>
      <h1 class="page-not-found__title">Puxa, esta página não existe</h1>
      <p class="page-not-found__subtitle">
        Confira se você digitou algo errado. Talvez o endereço não esteja mais
        disponível na web
      </p>

      <router-link to="/" class="page-not-found__button"
        >Ir para o início</router-link
      >
    </div>
    <div class="page-not-found__illustration-wrapper">
      <img
        src="@/assets/image/NotFoundIllustration.png"
        alt="Illustration of a person looking for a website"
        width="800"
        height="800"
      />
    </div>
  </main>
</template>

<script>
export default {
  nome: "NotFund",
};
</script>

<style scope>
.main-loyout {
  display: grid;
  grid-template-columns:
    minmax(100px, 200px) minmax(450px, 1fr) minmax(auto, 1fr)
    minmax(100px, 200px);
  padding: 20px;
  width: 1444px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  gap: 70px;
}
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: start;
  grid-column: 2;
}
.page-not-found__img {
  width: 5.6rem;
  height: 4.7rem;
  margin-top: 60px;
  margin-bottom: 50px;
}
.page-not-found__title {
  color: #3e3e3e;
  font-size: 54px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.page-not-found__subtitle {
  color: #3e3e3e;
  font-size: 26px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.page-not-found__button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 500;

  letter-spacing: -1px;

  background: var(--color-ifood);
  padding: 10px 20px;
  border-radius: 4px;

  margin: 20px auto 0;
  max-width: 250px;
}
.page-not-found__illustration-wrapper {
  width: 100%;
  height: 750px;
  width: 750px;
}

@media (max-width: 1300px) {
  .main-loyout {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .page-not-found {
    grid-column: 1;
  }
}
@media (max-width: 1100px) {
  .main-loyout {
    display: initial;
    gap: 40px;
  }
  .page-not-found {
    grid-column: 1;
  }
}
</style>
