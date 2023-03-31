<template>
    <div class="accordion" id="technology" ref="viewHieghtRef">
        <div class="accordion-center">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div style="width: 100%;height: 39%;">
                        <h2 class="title">3D数字人 领先技术</h2>
                        <div class="line"></div>
                    </div>
                    <div style="width: 100%;height: 61%;" class="decorate">
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
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="card-List">
                        <MiddleCard :index="0" :src="technology1" 
                        :style="{
                            flexGrow: growRef === 0 ? 2 : 1,
                            backgroundPosition:`center`,
                            textAlign: growRef === 0 ? 'center' :'left'
                        }" 
                        class="mr20" 
                        :clickHandler="clickHandler"
                        />
                        <MiddleCard :index="1" 
                        :src="technology2" 
                        :style="{
                            flexGrow: growRef === 1 ? 2 : 1,
                            backgroundPosition:`left`
                            }" 
                        class="mr20" 
                        :clickHandler="clickHandler"
                        />
                        <MiddleCard :index="2" 
                        :src="technology3" 
                        :style="{
                            flexGrow: growRef === 2 ? 2 : 1,
                            backgroundPosition:`right`
                            }" 
                        growRef="growRef" 
                        :clickHandler="clickHandler"
                         />
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import technology1 from "@/image/technology/technology1.png";
import technology2 from "@/image/technology/technology2.png";
import technology3 from "@/image/technology/technology3.png";

import { ref, onMounted } from 'vue';
import MiddleCard from "./MiddleCard/index.vue";
const { docHieghtRef, docWidthRef } = defineProps(["docWidthRef", "docHieghtRef"]);
const viewHieghtRef = ref(null);
const growRef = ref(0)

function clickHandler(index){
    growRef.value = index;
    console.log(growRef.value)
}

</script>

<style scoped>
@import "./index.css";
.mr20{
    margin-right:20px
}
</style>