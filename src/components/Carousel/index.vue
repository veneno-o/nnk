<script setup>
import {ref} from "vue";
import TitleContent from "../../components/TitleContent/index.vue";
import CarouselItem from "./components/CarouselItem.vue";
import TransitionContainer from "../TransitionContainer/index.vue"

import Scenes1_1 from "../../image/scenes/scenes1-1.png";
import Scenes1_2 from "../../image/scenes/scenes1-2.png";
import Scenes2_1 from "../../image/scenes/scenes2-1.png";
import Scenes2_2 from "../../image/scenes/scenes2-2.png";
import Scenes3_1 from "../../image/scenes/scenes3-1.png";
import Scenes3_2 from "../../image/scenes/scenes3-2.png";
import Scenes4_1 from "../../image/scenes/scenes4-1.png";
import Scenes4_2 from "../../image/scenes/scenes4-2.png";
import Scenes5_1 from "../../image/scenes/scenes5-1.png";
import Scenes5_2 from "../../image/scenes/scenes5-2.png";
import Scenes6_1 from "../../image/scenes/scenes6-1.png";
import Scenes6_2 from "../../image/scenes/scenes6-2.png";

const scenesList1 = ref([Scenes1_1,Scenes1_2,Scenes1_1,Scenes1_2]);
const scenesList2 = ref([Scenes2_1,Scenes2_2,Scenes2_1,Scenes2_2]);
const scenesList3 = ref([Scenes3_1,Scenes3_2,Scenes3_1,Scenes3_2]);
const scenesList4 = ref([Scenes4_1,Scenes4_2,Scenes4_1,Scenes4_2]);
const scenesList5 = ref([Scenes5_1,Scenes5_2,Scenes5_1,Scenes5_2]);
const scenesList6 = ref([Scenes6_1,Scenes6_2,Scenes6_1,Scenes6_2]);

const {docHieghtRef,docWidthRef} = defineProps(["docWidthRef","docHieghtRef"]);
</script>

<template>
    <div class="carousel" id="scenes" :style="{
        height:docHieghtRef + 'px'
    }">
        <TitleContent :marginTop="12" :marginBottom="98" title="全场景数字人形象" content="虚拟助手、营销互动、IP形象孵化、情感陪伴" />
        <TransitionContainer>
        <div class="carousel-content"
            :style="{
                height:docHieghtRef*0.72 + 'px'
            }"
        >
            <el-row :gutter="20">
                <el-col :span="4">
                    <CarouselItem :srcList="scenesList1" direction="on" />
                </el-col>
                <el-col :span="4">
                    <CarouselItem :srcList="scenesList2" direction="down" />
                </el-col>
                <el-col :span="4">
                    <CarouselItem :srcList="scenesList3" direction="on" />
                </el-col>
                <el-col :span="4">
                    <CarouselItem :srcList="scenesList4" direction="down" />
                </el-col>
                <el-col :span="4">
                    <CarouselItem :srcList="scenesList5" direction="on" />
                </el-col>
                <el-col :span="4">
                    <CarouselItem :srcList="scenesList6" direction="down" />
                </el-col>
            </el-row>
            <div class="mask mask-top"></div>
            <div class="mask mask-bottom"></div>
        </div>
    </TransitionContainer>
    </div>
</template>

   

<style scoped>@import "./index.css";</style>