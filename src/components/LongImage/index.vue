<template>
    <div class="longimage" id="plan">
        <div style="width:100vw;">
            <div class="poster1" :style="style1">
                <img :src="LongImage1" alt="TS数字人" style="width: 100%;height: 100%;">
                <div class="text-content">
                    <h2 class="title1">TS数字人</h2>
                    <h2 class="title2">视频生成平台</h2>
                    <p class="content1">一键孪生数字人，多模态驱动视频内容创作</p>
                    <p class="content2">生成快、场景多、易操作、质量高</p>
                </div>
            </div>
            <div class="poster2" :style="style2">
                <img :src="LongImage2" alt="AI实时" style="width: 100%;height: 100%;">
                <div class="text-content">
                    <h2 class="title1">AI实时</h2>
                    <h2 class="title2">真人驱动直播平台</h2>
                    <p class="content1">真人驱动数字形象与行为动作</p>
                    <p class="content2">可24小时不间断数字人互动营销</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import LongImage1 from "@/image/LongImage1.png";
import LongImage2 from "@/image/LongImage2.png";
</script>

<style scoped>
@import "./index.css";
</style>