<template>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
</template>

<script>
    export default {
        methods: {
            goToAbout() {
                this.$router.push('/about')
            },
        },
    }
</script>

<style src="../assets/css/styles.css"></style>