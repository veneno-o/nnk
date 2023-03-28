<!-- <script setup>
import Menu from "@/components/Menu/index.vue";
import Banner from "@/components/Banner/index.vue";
import Footer from "@/components/Footer/index.vue";
import Accordion from "@/components/Accordion/index.vue";
import Center from "@/components/Center/index.vue";
import TextAndImage from "@/components/TextAndImage/index.vue";
import LongImage from "@/components/LongImage/index.vue";
import CardList from "@/components/CardList/index.vue";
import Carousel from "@/components/Carousel/index.vue";
</script>

<template>
  <div class="page" style="background: #0D101A;">
    <Menu />
    <Banner />
    <Center>
    </Center>

    <div>
      <Center>
        <Accordion />
        <Carousel />
        <CardList />
      </Center>
    </div>
    <LongImage />
    <Center>
      <TextAndImage />
    </Center>
    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style> -->
<script setup>
import { ref, onMounted } from 'vue';
const myRef = ref("");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 判断当前元素是否可见
    if (entry.isIntersecting) {
      const dom = entry.target;
      dom.style.marginTop = 100 + "px";
      // 解除观察，有几张图片就触发几次
      observer.unobserve(dom)
    }
  })
})
onMounted(() => {
  observer.observe(myRef.value);
});
</script>

<template>
  <div class="view"></div>
<div class="box" ref="myRef"></div>
</template>

<style>
  .view{
    width:100vw;
    height:100vh;
    background:red;
  }
  .box{
    width:200px;
    height:200px;
    background:#000;
    margin-top:200px;
    transition:2s;
  }
</style>
