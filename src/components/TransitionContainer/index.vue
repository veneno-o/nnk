<template>
    <div 
        class="transition-container before-move"
        :class="{
            'card2-before-move': index === 1,
            'card3-before-move': index === 2,
            'card4-before-move': index === 3,
        }"
        ref="titleTextRef"
        >
        <slot></slot>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {lazyLoad} from "../../utils/index";

const {index} = defineProps(["index"]);
const titleTextRef = ref(null);
lazyLoad(titleTextRef)

</script>

<style scoped>
.transition-container{
    /* height: 100%; 
    width: 100%; */
    overflow: hidden;
    /* position: relative; */
}
/* .before-move{
  transform: translateY(30px);
  transition-property: transform opacity;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0,0.42,0.2,0.99);
  opacity: 0.3;
} */
</style>