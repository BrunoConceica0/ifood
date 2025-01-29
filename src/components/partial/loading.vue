<template>
  <div class="loading flex-row">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  justify-content: center;
  align-items: center;
}
.loading span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0.4rem;
  animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
  background: var(--color-ifood);
}
.loading span:nth-child(1) {
  animation-delay: 0.1s;
}
.loading span:nth-child(2) {
  animation-delay: 0.2s;
}
@keyframes dots {
  from {
    transform: translate3d(0, 15px, 0);
  }
  to {
    transform: translate3d(0, -15px, 0);
  }
}
</style>
