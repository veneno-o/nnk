<template>
    <div class="accordion" id="technology">
        <el-row :gutter="20">
            <el-col :span="8">
                <h2 class="title">3D数字人 领先技术</h2>
                <div class="line"></div>
                <div class="text">
                    <p>Human Avatar Modelin</p>
                    <p>Monocular Realtime Full Body Motion Capture</p>
                    <p>Multimodal AI interaction</p>
                </div>
                <div class="icons">
                    <div class="left">
                        <div class="arrow-top"></div>
                        <div class="arrow-bottom"></div>
                    </div>
                    <div class="right">
                        <div class="round"></div>
                        <span class="text">Full scene</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="card-List">
                    <MiddleCard style="margin-right: 20px;flex-grow: 2;" />
                    <MiddleCard style="margin-right: 20px;" />
                    <MiddleCard />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MiddleCard from "./MiddleCard/index.vue";

const activeNames = ref('2')
const handleChange = (val) => {
  console.log(val)
}
// ref绑定cardList监听子元素变化
// 参考 https://juejin.cn/post/7154704730789249038
const a = ref()
console.log(a)
</script>

<style scoped>
@import "./index.css";
</style>