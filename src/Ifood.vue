<template>
  <div id="ifood">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "IfoodApp",
  components: { Header, Footer },
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
}
</style>
