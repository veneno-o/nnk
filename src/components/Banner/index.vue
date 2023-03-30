<template>
    <div class="banner">
        <div class="asider" v-show="!state">
            <div class="left-video" :style="{
                width: widthRef1,
                height: heightRef1
            }">
                <video-background 
                :loop="false"
                :src="LefeMp4" 
                style="width:100%;height: 100%;"
                @playing="playing"
                @ended="end1" />
            </div>
            <div class="right-video" :style="{
                width: widthRef2,
                height: heightRef2
            }">
                <video-background 
                :loop="false"
                :autoplay="false"
                ref="videobackground" 
                :src="RightMp4" 
                style="width:100%;height: 100%;" 
                @ended="end2" />
            </div>
        </div>
        <div class="pg" v-show="state">
            <video-background 
            ref="Lastvideobackground" 
            :src="LastMp4" 
            style="width:100%;height: 100%;" 
            @ended="end2"
            />
        </div>
        <div class="text" ref="text"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LefeMp4 from "../../assets/movie/left.mp4";
import RightMp4 from "../../assets/movie/right.mp4";
import LastMp4 from "../../assets/movie/eye.mp4";

// 根据视口宽高设置dom宽高
const docHeight = document.body.clientHeight;
const docWidth = document.body.clientWidth;

const height1 = docHeight  * (1006 / 1125);
const width1 = height1 * 0.72;

const height2 = docHeight;
const width2 = height2 * 0.72;

const heightRef1 = ref(height1 + "px");
const widthRef1 = ref(width1 + "px");
const heightRef2 = ref(height2 + "px");
const widthRef2 = ref(width2 + "px");

// 是否播放完成
const state = ref(false);
const videobackground = ref(null);
const Lastvideobackground = ref(null);

onMounted(()=>{
    // console.log("dom",videobackground.value);
    // console.log("text",text.value);
})

function end1() {
    console.log("end")
}
// 第二屏视频播放完成，播放第三屏
function end2() {
    Lastvideobackground.value.player.play();
    state.value = true;
}


// 第一屏视频播放完后1s，第二屏视频开始播放
function playing() {
    setTimeout(() => {
        videobackground.value.player.play();
        // console.log(videobackground.value.player.play())
    }, 1000);
}
</script>

<style scoped>
@import "./index.css";
</style>