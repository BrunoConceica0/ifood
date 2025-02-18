<template>
  <div>
    <ul>
      <li v-for="page in pageTotal" :key="page">
        <router-link :to="{}">{{ page }}</router-link>
      </li>
    </ul>
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
    totalItem: {
      type: Number,
      default: 1,
    },
    urlCompletMerchant: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
