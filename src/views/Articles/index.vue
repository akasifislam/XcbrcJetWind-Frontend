<template>
  <InnerPageHero
    image-url="/images/ipl/with-53-crores-in-their-kitty.jpg"
    title="Articles"
  />

  <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-12">
    <Articles layout="grid" :show-view-all="false" />
    <div class="mt-8 sm:mt-12">
      <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">view more</button>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";
import Articles from "@/components/Articles";
export default {
  components: {
    InnerPageHero,
    Articles,
  },
  props: {},
  setup() {},
};
</script>

<style>
</style>