<script setup>
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
      <!-- <Accordion /> -->
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
</style>
