<template>
    <div class="carousel" :style="{
        marginTop: props.marginTop + 'px',
        marginBottom: props.marginBottom + 'px',
    }">
        <TransitionCom>
            <h1>{{ title }}</h1>
            <p class="line"></p>
        </TransitionCom>
        <!-- 字母大写 -->
        <TransitionCom>
            <p class="text">{{ UpperCase }}</p>
        </TransitionCom>
    </div>
</template> 

<script setup>
import TransitionCom from "../TransitionContainer/index.vue";
const props = defineProps(["title", "content", "marginTop", "marginBottom"]);
const UpperCase = props.content.toUpperCase();

</script>

<style scoped>
@import "./index.css";
</style>