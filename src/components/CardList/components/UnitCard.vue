<template>
    <div class="unitcard">
        <TransitionCom :index="props.index">
            <div class="image" :style="{
                backgroundImage: `url(${src})`
            }">
            </div>
        </TransitionCom>
        <TransitionCom :index="props.index">
            <h2>{{ title }}</h2>
            <p>{{ content1 }}</p>
            <p>{{ content2 }}</p>
            <p>{{ content3 }}</p>
        </TransitionCom>
    </div>
</template>

<script setup>
import TransitionCom from "../../TransitionContainer/index.vue";

const props = defineProps(["src", "title", "content1", "content2", "content3", "index"]);
</script>

<style scoped>
@import "./UnitCard.css";
</style>