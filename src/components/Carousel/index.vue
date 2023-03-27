<script setup>
import TitleContent from "@/components/TitleContent/index.vue";
import CarouselItem from "./components/CarouselItem.vue"
</script>

<template>
    <div class="carousel">
        <TitleContent title="全场景数字人形象" content="虚拟助手、营销互动、IP形象孵化、情感陪伴" />
        <div class="carousel-content">
            <el-row :gutter="20">
                <el-col :span="4">
                    <CarouselItem />
                </el-col>
                <el-col :span="4">
                    <CarouselItem />
                </el-col>
                <el-col :span="4">
                    <CarouselItem />
                </el-col>
                <el-col :span="4">
                    <CarouselItem />
                </el-col>
                <el-col :span="4">
                    <CarouselItem />
                </el-col>
                <el-col :span="4">
                    <CarouselItem />
                </el-col>
            </el-row>
        </div>
    </div>
</template>



<style scoped>@import "./index.css";</style>