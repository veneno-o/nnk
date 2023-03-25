<script setup>
import Menu from "@/components/Menu/index.vue";
import Banner from "@/components/Banner/index.vue";
import Footer from "@/components/Footer/index.vue";
import Accordion from "@/components/Accordion/index.vue";
import Center from "@/components/Center/index.vue";
</script>

<template>
  <div class="page">
    <Menu />
    <Banner />
    <Center>
      <Accordion />
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
