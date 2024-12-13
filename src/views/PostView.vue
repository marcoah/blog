<!-- src/views/Post.vue -->
<template>
    <div class="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: { title: '', content: '' }
      };
    },
    created() {
      const postId = this.$route.params.id;
      // Simular fetch de datos
      const postData = {
        1: { title: 'Primer Post', content: 'Este es el contenido del primer post.' },
        2: { title: 'Segundo Post', content: 'Este es el contenido del segundo post.' }
      };
      this.post = postData[postId] || { title: 'Post no encontrado', content: '' };
    }
  };
  </script>
  
  <style scoped>
  .post {
    padding: 20px;
  }
  </style>
  

<style src="../assets/css/styles.css"></style>