export default {
  methods: {
    clickOutside({target, currentTarge}) {
      console.log("Clique fora detectado");
      if (target === currentTarge) this.closeModal();

    },
  },
};
