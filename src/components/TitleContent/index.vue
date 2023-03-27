<template>
    <div class="carousel">
        <h1>{{title}}</h1>
        <p class="line"></p>
        <!-- 字母大写 -->
        <p class="text">{{content.toUpperCase()}}</p>
    </div>
</template>

<script setup>
const props = defineProps(["title", "content"])
</script>

<style scoped>
@import "./index.css";
</style>