<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';
import getPosts from '../composables/getPosts';

export default {
  components: { PostList, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
