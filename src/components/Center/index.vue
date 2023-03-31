<template>
    <div class="center">
        <slot></slot>
    </div>
</template>

<script setup>
// const props = defineProps(["height", "width"]);
</script>

<style scoped>
.center {
    max-width: 1440px;
    /* height: auto; */
    margin: 0 auto;
    overflow: hidden;
    /* background: red; */
    /* padding: 0 40px; */
    box-sizing: border-box;
    padding: 0 20px;
}
</style>