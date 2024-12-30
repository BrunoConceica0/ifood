<template>
  <div>
    <section class="login">
      <div class="icon-marmita--logo-ifood-plain">
        <router-link to="/">
          <img
            src="@/assets/icon/ifood-43.svg"
            alt="Marca da IFOOD"
            width="1004"
            height="531"
          />
        </router-link>
      </div>
      <div class="login-content">
        <h2 class="titulo-login">
          Falta pouco para <br />
          matar sua fome!
        </h2>
        <p class="text-login">Como deseja continuar?</p>
        <form @submit.prevent="" action="/" class="login-buttons">
          <button class="btn-facebook">
            <i class="bi bi-facebook"></i> Entrar com Facebook
          </button>
          <button class="btn-google">
            <i class="bi bi-google"></i> Entrar com Google
          </button>
          <div class="btn-outher">
            <button class="btn-outher__authentication">Celular</button>
            <button class="btn-outher__authentication">Email</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
};
</script>

<style scope>
.icon-marmita--logo-ifood-plain {
  width: 10rem;
  height: 10rem;
  display: flex;
  position: absolute;
  top: 0;
  margin: 20px;
}
.login {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle at 10% 30%, #fdedee 55%, #fff 40%);
}
.login-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  background: #fff;
  max-width: 100%;
  width: 510px;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
}
.titulo-login {
  color: #414143;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.096px;
  line-height: 50px;
  margin: 0 0 30px;
  text-align: center;
  font-family: "Work Sans", system-ui;
}
.text-login {
  color: #717171;
  font-family: "Work Sans", system-ui;
  font-size: 24px;
  line-height: 27.6px;
  margin: 0 0 32px;
  text-align: center;
}
.login-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
}
.btn-outher {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
}
.btn-outher__authentication {
  background: #fff;
  border: 1px solid #ebebeb;
  color: #a7a7a7;
  width: 100%;
}
.btn-outher__authentication:hover {
  background: var(--color-ifood);
  color: #dcdcdc;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 3px 0;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button i {
  font-size: 20px; /* Tamanho do ícone */
}

/* Botão Facebook */
.btn-facebook {
  background-color: #1877f2; /* Cor oficial do Facebook */
  color: white;
}

.btn-facebook:hover {
  background-color: #145dbf;
}

/* Botão Google */
.btn-google {
  background-color: #ffffff; /* Fundo branco */
  color: #4285f4; /* Azul do Google */
  border: 1px solid #4285f4; /* Borda azul */
}

.btn-google:hover {
  background-color: #f5f5f5;
}

/* Para dispositivos menores */
@media (max-width: 600px) {
  .login-buttons {
    width: 100%; /* Ocupa toda a largura */
    padding: 0 20px;
  }
}
</style>
