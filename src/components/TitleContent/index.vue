<template>
    <div class="carousel" :style="{
        marginTop: props.marginTop + 'px',
        marginBottom: props.marginBottom + 'px',
    }">
        <h1>{{ title }}</h1>
        <p class="line"></p>
        <!-- 字母大写 -->
        <p class="text">{{ content.toUpperCase() }}</p>
    </div>
</template> 

<script setup>
const props = defineProps(["title", "content", "marginTop", "marginBottom"])
console.log(props.marginTop)
</script>

<style scoped>
@import "./index.css";
</style>