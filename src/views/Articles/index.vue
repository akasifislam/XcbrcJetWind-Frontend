<template>
  <InnerPageHero
    image-url="/images/ipl/with-53-crores-in-their-kitty.jpg"
    title="Articles"
  />

  <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-12">
    <Articles layout="grid" :show-view-all="false" :articles="articles.data" />
    <div class="mt-8 sm:mt-12">
      <button
        class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none"
        @click="showMoreArticle"
      >
        view more
      </button>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";
import Articles from "@/components/Articles";
import { useArticle } from "@/Composable/useArticle.js";
export default {
  components: {
    InnerPageHero,
    Articles,
  },
  props: {},
  setup() {
    let { fetchArticles, loading, articles } = useArticle();

    fetchArticles();

    function showMoreArticle() {
      fetchArticles({
        showMore: true,
        page: articles.value.meta.current_page + 1,
      });
    }

    return {
      articles,
      loading,
      showMoreArticle,
    };
  },
};
</script>

<style>
</style>