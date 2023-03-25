<template>
    <!-- 当尺寸大于md时显示 -->
    <div class="menu">
        <div class="left">
            <div class="logo">Logo</div>
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

    <!-- 当尺寸小于md时显示的居中logo -->
    <div class="center-logo">
        <div class="logo">
            <div class="logo-image">Logo</div>
        </div>
        <div class="hamburger">
            <span class="icon"></span>
        </div>
    </div>
</template>

<script>
// import 'element-plus/theme-chalk/display.css'
export default {

}
</script>

<style scoped>
@import "index.css";
@import "min.css";

</style>