<template>
    <div class="banner" ref="bannerRef">
        <div class="asider" v-show="!state">
            <div class="left-video" :style="{
                width: widthRef1,
                height: heightRef1,
            }">
                <video 
                    :src="LefeMp4" 
                    :height="height1"
                    @canplaythrough="canplaythrough"
                    @ended="ended1"
                    ref="videoRef1"
                    muted="true"
                ></video>
            </div>
            <div class="right-video" :style="{
                width: widthRef2,
                height: heightRef2,
            }">
                <video 
                    :src="RightMp4" 
                    :height="height2"
                    @ended="ended2"
                    ref="videoRef2"
                    muted="true"
                ></video>
            </div>
        </div>
        <div class="pg" v-show="state">
            <video 
                class="big-pg"
                :src="LastMp4" 
                :width="docWidth"
                ref="videoRef3"
                @ended="ended3"
                muted="true"
            ></video>
        </div>
        <div class="mask"></div>
        <div class="text banner-befor-show" ref="titleRef">
            <p class="company">新畅元NNKOSMOS</p>
            <h1 class="title">助力全场景AI+数字生命产业应用</h1>
            <p class="sub-title">基于AGI+数字生命融合发展，为企业打造安全、可靠的数字智能产业生态圈</p>
            <div class="bottom-text">
                <span>数字人定制</span>
                <div class="dot"></div>
                <span>直播互动营销</span>
                <div class="dot"></div>
                <span>AI短视频创作</span>
            </div>
        </div>
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
const bannerRef = ref(null);
const viewHeightRef = ref(900);

const height1 = ref(viewHeightRef.value * (1006 / 1125));
const width1 = ref(height1.value * 0.72);

const height2 = ref(viewHeightRef.value);
const width2 = ref(height2.value * 0.72);

const heightRef1 = ref(height1.value + "px");
const widthRef1 = ref(width1.value + "px");
const heightRef2 = ref(height2.value + "px");
const widthRef2 = ref(width2.value + "px");

// 是否播放完成
const state = ref(false);
const videoRef1 = ref(null);
const videoRef2 = ref(null);
const videoRef3 = ref(null);

// 懒加载效果
const titleRef = ref(null);

// lazyLoad(titleRef)


onMounted(() => {
    viewHeightRef.value = bannerRef.value.clientHeight;
    setTimeout(() => {
        titleRef.value.style.opacity = 1;
    }, 0);
})

function canplaythrough(){
    console.log("canplaythrough");
    videoRef1.value.play();
    setTimeout(()=>{
        videoRef2.value.play();      
    },1000)
}
function ended1(){
    console.log("ended1")
}
// 第二屏视频播放完成，播放第三屏
function ended2(){
    state.value = true;
    videoRef3.value.play();
    console.log("ended2")
}

function ended3(){
    state.value = false;
    videoRef1.value.play();
    setTimeout(()=>{
        videoRef2.value.play();      
    },1000)
    console.log("ended3")
}
</script>
 
<style scoped>
@import "./index.css";
</style>