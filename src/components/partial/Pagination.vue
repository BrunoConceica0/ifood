<template>
  <div>
    <p @click="nextPage">Por Pagination {{ currentPage }}</p>
    <p>Por Pagination {{ totalPages }}</p>
  </div>
</template>

<script>
export default {
  name: "PaginationPartial",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },

    totalPages: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    nextPage() {
      return this.currentPage + 1;
    },
  },
};
</script>

<style></style>
