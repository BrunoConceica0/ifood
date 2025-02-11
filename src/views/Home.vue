<template>
  <div id="ifood">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Merchant />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/views/Footer";

import Merchant from "./Merchant.vue";
export default {
  name: "IfoodApp",
  components: { Header, Footer, Merchant },
};
</script>

<style>
#ifood {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1;
  margin-top: 150px;
}
</style>
