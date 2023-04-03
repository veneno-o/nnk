<template>
    <div 
    class="middle-card before-move" 
    ref="cardRef"
    @click="a" 
    :class="{
        'card2-before-move':index === 1,
        'card3-before-move':index === 2,
    }"
    :style="{
        backgroundImage: `url(${srcRef})`
    }">
        <div class="long-text"
            :style="{
                opacity:state === 'expand' ? '1' : '0'
            }"
        >
        <TransitionContainer>
            <h2 class="title">{{longTitle}}</h2>
        </TransitionContainer>
        <TransitionContainer>
            <p class="sub-title">
                {{ subTitleList[0] }}
                <br>
                {{ subTitleList[1] }}
            </p>
        </TransitionContainer>
        </div>
        <div class="short-text"
        :style="{
                opacity:state === 'expand' ? '0' : '1'
            }"
        >
        <TransitionContainer>
            <h2 v-for="title of shortTitle">{{title}}</h2>
        </TransitionContainer>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { lazyLoad } from "../../../utils";

import TransitionContainer from "../../TransitionContainer/index.vue";


const { index, src, clickHandler, state, longTitle, shortTitle, subTitleList } = defineProps(["subTitleList", "index", "src", "clickHandler", "state","longTitle","shortTitle"]);
const srcRef = ref(src);
const cardRef = ref(null);
lazyLoad(cardRef);

function a() {
    console.log("state", state)
    clickHandler(index)
}
// growRef
// clickHandler(index);
</script>

<style scoped> @import "index.css";
</style>