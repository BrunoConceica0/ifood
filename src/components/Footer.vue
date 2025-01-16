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
        <ul class="footer__links-social flex-row">
          <li>
            <router-link to="#"><i class="bi bi-facebook"></i></router-link>
          </li>
          <li>
            <router-link to="#"> <i class="bi bi-twitter-x"></i></router-link>
          </li>
          <li>
            <router-link to="#"><i class="bi bi-youtube"></i></router-link>
          </li>
          <li>
            <router-link to="#"><i class="bi bi-instagram"></i></router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="footer__copyright flex-row">
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
  max-width: 145rem;
  margin: 0 auto;
  position: relative;
  top: 7.5rem;
  right: 0;
}
.footer-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  justify-items: start;
  gap: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 0;
}
.footer__subtitle {
  color: var(--cor-text-primary);
  font-weight: 500;
  line-height: 19.52px;
  margin: 2rem 0;
  font-size: 1.84rem;
}
.footer__links-social {
  gap: 4rem;
}
.bi {
  color: var(--cor-text-secondary);
  font-size: 3rem;
}
.bi:hover {
  color: var(--cor-text-primary);
}

.footer__links-list {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: repeat(5, min-content);
  grid-auto-flow: column;
  gap: 3rem;
  margin-bottom: 2.4rem;
}
.footer__list-item a {
  color: var(--cor-text-secondary);
  text-align: start;
  font: var(--font-lp1);
}
.footer__list-item a:hover {
  color: var(--cor-text-primary);
}

.footer__copyright {
  justify-content: start;
  gap: 2rem;
  margin: 5rem 0;
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
  padding: 1.5rem 1rem;
}
.footer-img img {
  width: 7rem;
}
.footer__copyright-inf span {
  color: var(--cor-text-secondary);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.75rem;
}
</style>
