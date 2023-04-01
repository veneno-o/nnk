<template>
    <div class="carousel-item">
        <div class="carousel-container"
        :style="{
            animationDirection: direction === 'on' ? 'normal' :'reverse'
        }"
        >
            <div class="box" v-for="src of srcList"
            >
                <div class="card"
                :style="{
                    backgroundImage:`url(${src})`
                    }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,computed } from "vue";
const { srcList, direction } = defineProps(["srcList", "direction"]);

</script>
<style scoped>
@import "./CarouselItem.css";
</style>