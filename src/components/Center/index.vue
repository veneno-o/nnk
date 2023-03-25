<template>
    <div class="center">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps(["height", "width"]);
</script>

<style scoped>
.center {
    max-width: 1422px;
    /* height: auto; */
    margin: 0 auto;
    overflow: hidden;
    /* background: red; */
}
</style>