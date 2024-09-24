<template>
  <div class="list-group">
    <a
      v-for="post in posts"
      :key="post.id"
      class="list-group-item list-group-item-action"
      @click="selectPost(post)"
    >
      {{ post.title }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  posts: Array
})

const emit = defineEmits(['selectPost'])

const selectPost = (post) => {
  emit('selectPost', post)
}
</script>
