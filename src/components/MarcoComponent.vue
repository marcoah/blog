<template>
    <div class="hello">
        <img src="@/assets/logo.png" alt="Vue Logo" />
        <h1>{{ message }}</h1>
        <input v-model="userInput" placeholder="Type something..." />
        <p>You typed: {{ userInput }}</p>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                message: "Welcome to Your First Vue App!",
                userInput: "",
            };
        },
    };
</script>
  
<style scoped>
    input {
        padding: 5px;
        font-size: 16px;
        margin-top: 10px;
    }
</style>