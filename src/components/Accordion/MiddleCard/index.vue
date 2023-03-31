<template>
    <div class="middle-card" @click="a" :style="{
        backgroundImage: `url(${srcRef})`
    }">
        <div class="text">
            <h2 class="title">真人全身外观重构与推演</h2>
            <p class="sub-title">
                基于神经辐射场技术,开发了高逼真真人全身3D重构技术
                支持实时驱动和交互，可全自动、精准还原和推演真人全身形态、面部微表情、服装动态褶皱、毛发毛孔和手部细节运动。</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const { index, src, clickHandler } = defineProps(["index", "src", "clickHandler"]);

const srcRef = ref(src);

function a() {
    console.log(index, src)
    clickHandler(index)
}
// growRef
// clickHandler(index);
</script>

<style scoped> @import "index.css";
</style>