
<script setup>
import Header from "./components/Header/index.vue";
import Banner from "./components/Banner/index.vue";
import Footer from "./components/Footer/index.vue";
import Accordion from "./components/Accordion/index.vue";
import Center from "./components/Center/index.vue";
import TextAndImage from "./components/TextAndImage/index.vue";
import LongImage from "./components/LongImage/index.vue";
import CardList from "./components/CardList/index.vue";
import Carousel from "./components/Carousel/index.vue";

import {ref} from "vue";
const docHieghtRef = ref(document.body.clientHeight);
const docWidthRef = ref(document.body.clientWidth);

</script>

<template>
  <div class="page">
    <!-- 导航栏 -->
    <Header />
    <!-- 首页 -->
    <Banner ref="viewHieghtRef" />

    <Center>
      <!-- 关键技术 -->
      <Accordion/>
      <!-- 应用场景 -->
      <Carousel :docHieghtRef="docHieghtRef" :docWidthRef="docWidthRef" />
      <!-- 应用价值 -->
      <CardList />
    </Center>

    <!-- 解决方案 -->
    <LongImage :docWidthRef="docWidthRef" />

    <Center>
    <!-- 关于我们 -->
      <TextAndImage />
    </Center>

    <Footer />
  </div>
</template>

<style scoped>
.page{
  width: 100%;
}
</style>

