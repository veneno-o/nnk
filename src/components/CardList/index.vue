<script setup>
import {ref, onMounted} from "vue";
import UnitCard from "./components/UnitCard.vue";

import src1 from "../../assets/image/smallCard/unitCard1.png";
import src2 from "../../assets/image/smallCard/unitCard2.png";
import src3 from "../../assets/image/smallCard/unitCard3.png";
import src4 from "../../assets/image/smallCard/unitCard4.png";
import TitleContent from "@/components/TitleContent/index.vue";

const cardlistRef = ref(null);
let viewHeight = ref(0);

onMounted(()=>{
    viewHeight.value = cardlistRef.value.clientHeight;
})


</script>

<template>
    <div class="cardlist" id="worth" ref="cardlistRef">
        <!-- 标题以及内容 -->
        <TitleContent
            :marginTop="viewHeight * 0.185" :marginBottom="viewHeight * 0.1"
            title="赋能企业降本增效"
            content="ENABLE ENTERPRISES TO REDUCE COSTS AND INCREASE EFFICIENCY"
        />
        <!-- 卡片 -->
        <el-row :gutter="20">
            <el-col :span="6">
                <UnitCard 
                :src="src1" 
                :index="0"
                title="孪生数字人" 
                content1="1分钟真人/视频驱动" 
                content2="极速生成孪生数字人" 
                content3="声形复刻，一键专属，终身可用" />
            </el-col>
            <el-col :span="6">
                <UnitCard 
                :src="src2" 
                :index="1"
                class="card2-before-move"
                title="视频创作" 
                content1="AIGC多模态驱动视频内容创作" 
                content2="行业覆盖广、场景丰富、形象百变"
                content3="内容易修改、视频质量高、时间成本低" />
            </el-col>
            <el-col :span="6">
                <UnitCard 
                :src="src3" 
                :index="2"
                class="card3-before-move"
                title="真人驱动"
                content1="真人驱动3D数字人互动营销" 
                content2="无需真人出境，降低人员匹配成本" 
                content3="造型场景无缝切换，贴合营销环境" />
            </el-col>
            <el-col :span="6">
                <UnitCard 
                :src="src4" 
                :index="3"
                class="card4-before-move"
                title="直播不间断" 
                content1="可24小时数字人互动直播" 
                content2="无谓时段、时节与环境" 
                content3="时间利用更充分，互动营销更高效" />
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
@import "./index.css";
</style>