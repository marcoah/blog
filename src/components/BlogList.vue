<!-- src/components/BlogList.vue -->
<template>
    <div class="blog-list">
        <div v-for="post in posts" :key="post.id" class="blog-item">
            <h2>{{ post.title }}</h2> <p>{{ post.content.substring(0, 100) }}...</p>
            <!-- Muestra un resumen del contenido -->
            <router-link :to="{ name: 'Post', params: { id: post.id } }">
                <button>Leer más</button>
            </router-link>
        </div>
    </div>
</template>
  
<script>
    //import BlogPost from './BlogPost.vue';
    
    export default {
        //components: { BlogPost },
        data() {
            return {
                posts: [
                    { id: 1, title: 'Primer Post', content: 'Este es el contenido del primer post.' },
                    { id: 2, title: 'Segundo Post', content: 'Este es el contenido del segundo post.' }
                ]
            };
        }
    };
</script>
  
<style scoped>
.blog-list { display: flex; flex-direction: column; }
.blog-item { margin-bottom: 20px; }
button { background-color: #42b983; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; }
button:hover { background-color: #359a6d; }
</style>
  