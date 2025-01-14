<template>
  <footer class="footer">
    <section class="footer-main">
      <div class="footer-column">
        <h3 class="footer__subtitle">iFood</h3>
        <ul class="footer__links-list">
          <li class="footer__list-item">
            <router-link to="#">Site Institucional</router-link>
          </li>
          <li class="footer__list-item">
            <router-link to="#">Fale Conosco </router-link>
          </li>
          <li class="footer__list-item">
            <router-link to="#">Conta e Segurança </router-link>
          </li>
          <li class="footer__list-item">
            <router-link to="#">Carreiras</router-link>
          </li>
          <li class="footer__list-item">
            <router-link to="#">Entregadores</router-link>
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="footer__subtitle">Descubra</h3>
        <ul class="footer__links-list">
          <li class="footer__list-item">
            <router-link to="#"
              >Cadastre seu Restaurante ou Mercado</router-link
            >
          </li>
          <li class="footer__list-item">
            <router-link to="#">iFood Shop </router-link>
          </li>
          <li class="footer__list-item">
            <router-link to="#">iFood Card</router-link>
          </li>
          <li class="footer__list-item">
            <router-link to="#">iFood Empresas </router-link>
          </li>
          <li class="footer__list-item">
            <router-link to="#">Blog iFood Empresas</router-link>
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="footer__subtitle">Social</h3>
        <ul class="footer__links-social">
          <li>
            <router-link to="#">f</router-link>
          </li>
          <li>
            <router-link to="#">w</router-link>
          </li>
          <li>
            <router-link to="#">y</router-link>
          </li>
          <li>
            <router-link to="#">i</router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="footer__copyright">
      <div class="footer-img">
        <img src="../assets/icon/ifood-43.svg" alt="ifood marca" />
      </div>
      <div class="footer__copyright-inf flex-col">
        <span
          >Voltar para a home © Copyright 2021 - iFood - Todos os direitos
          reservados iFood com Agência de Restaurantes Online S.A.</span
        >
        <span
          >CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, nº 1496, Vila
          Yara, Osasco/SP - CEP 06.020-902
        </span>
      </div>
      <div class="footer__copyright-terms">
        <ul class="footer__list-item">
          <li class="footer__list-link">
            <router-link to="#">Termos e condições de uso</router-link>
          </li>
          <li class="footer__list-link">
            <router-link to="#"> Código de conduta</router-link>
          </li>
          <li class="footer__list-link">
            <router-link to="#"> Privacidade</router-link>
          </li>
          <li class="footer__list-link">
            <router-link to="#">Dicas de segurança</router-link>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  position: relative;
  top: 75px;
  right: 0;
}
.footer-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  justify-items: start;
  gap: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0;
}
.footer__subtitle {
  color: var(--cor-text-primary);
  font-weight: 500;
  line-height: 19.52px;
  margin: 20px 0;
  font-size: 18.4px;
}
.footer__links-list {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: repeat(5, min-content);
  grid-auto-flow: column;
  gap: 30px;
  margin-bottom: 24px;
}
.footer__list-item a {
  color: var(--cor-text-secondary);
  text-align: start;
  font-size: 18.4px;
  font-weight: 400;
}

.footer__copyright {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
  margin: 50px 0px;
}
.footer__copyright-terms {
  width: 950px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: end;
}
.footer__list-item {
  display: flex;
  flex-direction: row;
  width: max-content;
}
.footer__list-link {
  padding: 15px 10px;
}
.footer-img img {
  width: 70px;
}
.footer__copyright-inf span {
  color: #717171;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.55px;
}
</style>
