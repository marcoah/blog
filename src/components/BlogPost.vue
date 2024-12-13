<!-- src/components/BlogPost.vue -->
<template>
    <div class="blog-post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
    </div>
</template>
  
<script>
    export default {
        props: ['post']
    };
</script>
  
<style scoped>
    .blog-post {
        margin-bottom: 20px;
    }
</style>
  