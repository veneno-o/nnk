<template>
    <div class="center">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
.center {
    max-width: 1440px;
    margin: 0 auto;
    overflow: hidden;
    /* background: red; */
    /* padding: 0 40px; */
    box-sizing: border-box;
    padding: 0 20px;
}
</style>