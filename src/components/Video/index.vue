<template>
    <video 
    ref="videoRef"
    :src="src" 
    height="500"
    @pause="pause"
    @ended="ended"
    @play="play"
    @canplaythrough="canplaythrough"
    ></video>
</template>

<script setup>
import {ref, onMounted} from "vue";
const {src} = defineProps(["src"]);
const videoRef = ref(null);

onMounted(()=>{
    window.video = videoRef.value;
})

function canplaythrough(){
    console.log("canplaythrough")
}

function pause(){
    console.log("pause")
}

function play(){
    console.log("play")
}

function ended(){
    console.log("end")
}
</script>

<style scoped>

</style>