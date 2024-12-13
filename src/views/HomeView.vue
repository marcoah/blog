<template>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
    
    <div class="home">
        <h1>Blog</h1>
        <BlogList />
    </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';
export default {
    components: { BlogList },
    methods: {
        goToAbout() {
            this.$router.push('/about')
        },
    },
}
</script>

<style scoped>
    .home { padding: 20px; }
</style>
<style src="../assets/css/styles.css"></style>