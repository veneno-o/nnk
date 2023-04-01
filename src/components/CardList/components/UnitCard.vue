<template>
    <div class="unitcard">
        <div class="image"
            :style="{
                backgroundImage:`url(${src})`
            }"
        >
        </div>
        <h2>{{ title }}</h2>
        <p>{{ content1 }}</p>
        <p>{{ content2 }}</p>
        <p>{{ content3 }}</p>
    </div>
</template>

<script setup>
const props = defineProps(["src", "title", "content1","content2", "content3"]);
</script>

<style scoped>
@import "./UnitCard.css";
</style>