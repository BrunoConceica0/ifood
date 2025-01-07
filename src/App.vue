<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
body {
  font-family: "Work Sans", system-ui;
}
:root {
  --color-bg: #fff;
  --color-text-main: #3f3e3e;
  --color-text-secund: #7a7a7a;
  --color-text-trity: #717171;
  --color-bg-secund: #f7f7f7;

  --color-ifood: #ea1d2c;
  /* Fonts */

  --font-mp0: 400 1.2rem/1.2 "Work Sans", system-ui;
  --font-mp1: 500 1.4rem/1.3 "Work Sans", system-ui;
  --font-mp2: 500 1.8rem/1.3 "Work Sans", system-ui;
  --font-bp1: 600 1.4rem/1.3 "Work Sans", system-ui;
}

img {
  max-width: 100%;
  height: 100%;
}
</style>
