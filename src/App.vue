<template>
  <div class="container mt-5">
    <h1 class="text-center">Simple Blog</h1>
    <div class="row">
      <div class="col-md-6">
        <PostList :posts="posts" @selectPost="handleSelectPost" />
      </div>
      <div class="col-md-6">
        <PostDetails v-if="selectedPost" :post="selectedPost" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PostList from './components/PostList.vue'
import PostDetails from './components/PostDetails.vue'

const posts = ref([
  {
    id: 1,
    title: 'Understanding Vue 3',
    content: 'Vue 3 Composition API makes Vue more flexible...'
  },
  {
    id: 2,
    title: 'Learning Vue Router',
    content: 'Vue Router helps in creating single-page applications...'
  },
  {
    id: 3,
    title: 'Exploring Vuex',
    content: 'Vuex is a state management library for Vue applications...'
  }
])

const selectedPost = ref(null)

const handleSelectPost = (post) => {
  selectedPost.value = post
}
</script>
