<template>
  <div
    class="text-black sm:text-green-400 sm:text-2xl text-bold mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block"
  >
    <router-link
      v-for="item in list"
      :key="item.to"
      class="block sm:inline-block sm:px-4 py-2 hover:text-primary duration-300"
      :to="item.to"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Articles", to: "/articles" },
        { title: "About", to: "/about" },
        { title: "Contact", to: "/contact" },
      ],
    };
  },
};
</script>

<style>
</style>