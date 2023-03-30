<template>
    <div class="header">
        <div class="center">
            <div class="left">
                <div class="logo">
                    <img :src="Logo" alt="logo">
                </div>
            </div>
            <div class="right">
                <a :class="{active:index === 0}" @click="index = 0" href="#">首页</a>
                <a :class="{active:index === 1}" @click="index = 1" href="#technology">关键技术</a>
                <a :class="{active:index === 2}" @click="index = 2" href="#scenes">应用场景</a>
                <a :class="{active:index === 3}" @click="index = 3" href="#worth">应用价值</a>
                <a :class="{active:index === 4}" @click="index = 4" href="#plan">解决方案</a>
                <a :class="{active:index === 5}" @click="index = 5" href="#about">关于我们</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import Center from "../Center/index.vue";
import Logo from "../../image/logo.png";
// import 'element-plus/theme-chalk/display.css';

const index = ref(0);

</script>

<style scoped>
/* @import "index.css"; */
@import "min.css";
</style>