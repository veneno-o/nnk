<template>
    <div class="accordion" id="technology" ref="viewHieghtRef">
        <div class="accordion-center">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div style="width: 100%;height: 39%;" class="before-move" ref="titleTextRef">
                        <h2 class="title">3D数字人 领先技术</h2>
                        <div class="line"></div>
                    </div>
                    <div style="width: 100%;height: 61%;" class="decorate">
                        <div class="text before-move" ref="subTitleTextRef">
                            <p>Human Avatar Modelin</p>
                            <p>Monocular Realtime Full Body Motion Capture</p>
                            <p>Multimodal AI interaction</p>
                        </div>
                        <div class="icons before-move" ref="iconRef">
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
                        <MiddleCard :index="0" 
                        :src="technology1" 
                        :longTitle="titleList[0][0]"
                        :shortTitle="titleList[0][1]"
                        :subTitleList="subTitleList[0]"
                        :state="growRef === 0 ? 'expand' : ''"
                        :style="{
                            flexGrow: growRef === 0 ? 2 : 1,
                            backgroundPosition:`center`,
                        }"
                        class="mr20" 
                        :clickHandler="clickHandler"
                        />
                        <MiddleCard :index="1" 
                        :src="technology2" 
                        :longTitle="titleList[1][0]"
                        :shortTitle="titleList[1][1]"
                        :subTitleList="subTitleList[1]"
                        :state="growRef === 1 ? 'expand' : ''"
                        :style="{
                            flexGrow: growRef === 1 ? 2 : 1,
                            backgroundPosition:`left`,
                            state:growRef === 0 ? 'expand' : ''
                            }" 
                        class="mr20" 
                        :clickHandler="clickHandler"
                        />
                        <MiddleCard :index="2" 
                        :src="technology3"
                        :longTitle="titleList[2][0]"
                        :shortTitle="titleList[2][1]"
                        :subTitleList="subTitleList[2]"
                        :state="growRef === 2 ? 'expand' : ''" 
                        :style="{
                            flexGrow: growRef === 2 ? 2 : 1,
                            backgroundPosition:`right`,
                            state:growRef === 0 ? 'expand' : ''
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
import {lazyLoad} from "../../utils/index";

const { docHieghtRef, docWidthRef } = defineProps(["docWidthRef", "docHieghtRef"]);
const viewHieghtRef = ref(null);
const growRef = ref(0)

const titleTextRef = ref(null);
const subTitleTextRef = ref(null);
const iconRef = ref(null);

const titleList = [
    ["真人全身外观重构与推演", ["真人全身外观", "重构与推演"]], 
    ["极简实时单RGB全身动作捕捉",["极简实时单RGB","全身动作捕捉"]], 
    ["多模态AI智能驱动与交互", ["多模态AI智能", "驱动与交互"]]
];
const subTitleList = [
    ["基于神经辐射场技术,开发了高逼真真人全身3D重构技术", "支持实时驱动和交互，可全自动、精准还原和推演真人全身形态、面部微表情、服装动态褶皱、毛发毛孔和手部细节运动。"],
    ["利用单相机下实时人体精细动作捕捉（面部+手势+动作）", "融合物理动力学约束，解决动捕着地偏移难题。"],
    ["通过融合ChatGPT问答, 实现个人风格化还原的数字人互动", "还原个人形象、声音、神韵、小动作习惯等。"],
]

lazyLoad(titleTextRef,subTitleTextRef,iconRef)

function clickHandler(index){
    growRef.value = index;
    // console.log(growRef.value)
}

</script>

<style scoped>
@import "./index.css";
.mr20{
    margin-right:20px
}
</style>