<template>
    <div class="longimage" id="plan" ref="longimageRef">
        <div :style="{
            width: '100vw',
            padding: `${0.06 * viewHeight}px 0`
        }">
            <TransformContainer>
                <div class="poster1" :style="{
                    width: viewHeight * 0.38 * 3.03 + 'px',
                    height: viewHeight * 0.38 + 'px',
                    marginBottom: viewHeight * 0.12 + 'px'
                }">
                    <img :src="LongImage1" alt="TS数字人" style="width: 100%;height: 100%;">
                    <div class="text-content">
                        <h2 class="title1">创世元数字人</h2>
                        <h2 class="title2">视频生成平台</h2>
                        <p class="content1">一键孪生数字人，多模态驱动视频内容创作</p>
                        <p class="content2">生成快、场景多、易操作、质量高</p>
                    </div>
                </div>
            </TransformContainer>
            <TransformContainer>
                <div class="poster2" :style="{
                    width: viewHeight * 0.38 * 3.03 + 'px',
                    height: viewHeight * 0.38 + 'px',
                    marginBottom: viewHeight * 0.12 + 'px'
                }">
                    <img :src="LongImage2" alt="AI实时" style="width: 100%;height: 100%;">
                    <div class="text-content">
                        <h2 class="title1">AI实时</h2>
                        <h2 class="title2">真人驱动直播平台</h2>
                        <p class="content1">真人驱动数字形象与行为动作</p>
                        <p class="content2">可24小时不间断数字人互动营销</p>
                        <p class="content3">五倍降本，双倍提效</p>
                    </div>
                </div>
            </TransformContainer>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import TransformContainer from "../TransitionContainer/index.vue";

import LongImage1 from "@/assets/image/LongImage/LongImage1.png";
import LongImage2 from "@/assets/image/LongImage/LongImage2.png";

const { docWidthRef } = defineProps(["docWidthRef"]);

const longimageRef = ref(null);
let viewHeight = ref(0);
onMounted(() => {
    viewHeight.value = longimageRef.value.clientHeight;
})
</script>

<style scoped>@import "./index.css";</style>