<template>
    <div class="header">
        <div class="center">
            <div class="left">
                <div class="logo">
                    <img :src="Logo" alt="logo">
                </div>
            </div>
            <div class="right">
                <a class="active" href="#">首页</a>
                <a href="#">关键技术</a>
                <a href="#">应用场景</a>
                <a href="#">应用价值</a>
                <a href="#">解决方案</a>
                <a href="#footer">关于我们</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Center from "../Center/index.vue";
import Logo from "../../image/logo.png";
// import 'element-plus/theme-chalk/display.css';
</script>

<style scoped>
/* @import "index.css"; */
@import "min.css";
</style>