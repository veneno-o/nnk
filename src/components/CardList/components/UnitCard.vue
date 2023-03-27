<template>
    <div class="unitcard">
        <div class="image">
            <img :src= "src" alt="孪生数字人">
        </div>
        <h2>{{ title }}</h2>
        <p>{{ content1 }}</p>
        <p>{{ content2 }}</p>
        <p>{{ content3 }}</p>
    </div>
</template>

<script setup>
const props = defineProps(["src", "title", "content1","content2", "content3"]);
console.log(props.src)
console.log(props.title)
console.log(props.contents)
</script>

<style scoped>
@import "./UnitCard.css";
</style>