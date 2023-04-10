<script setup>
import Center from "@/components/Center/index.vue";
import WeChat1 from "@/assets/image/footer/WeChat1.png";
import WeChat2 from "@/assets/image/footer/WeChat2.png";
import Logo from "@/assets/image/footer/logo.png";
import Arrow from "@/assets/image/footer/arrow.png";
</script>

<template>
    <footer>
        <Center>
            <div class="top">
                <div class="left-text">
                    <div style="display: flex;justify-content: flex-end;">
                        <div class="logo">
                            <div>
                            <img :src="Logo" alt="logo"></div>
                            <div><img :src="Arrow" alt="icon"></div>
                        </div>
                        <div class="text">
                            <div class="left">
                                <div class="title">快捷入口</div>
                                <div class="ul">
                                    <a href="#">首页</a>
                                    <a href="#">关键技术</a>
                                    <a href="#">应用场景</a>
                                    <a href="#">应用价值</a>
                                    <a href="#">解决方案</a>
                                    <a href="#">关于我们</a>
                                </div>
                            </div>
                            <div class="right">
                                <div class="title">联系我们</div>
                                <div class="ul">
                                    <p>咨询热线：15395713795</p>
                                    <p>简历投递：hr@nnkosmos.com</p>
                                    <p>公司地址：浙江省杭州市余杭区钱塘汇银中心6幢2单元</p>
                                    <p>北京市海淀区双清路双清大厦4号楼803</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weixin">
                    <div class="left-weixin weixin-box">
                        <div><img :src="WeChat1" alt="官方公众号"></div>
                        <span>官方公众号</span>
                    </div>
                    <div class="right-weixin weixin-box">
                        <div><img :src="WeChat2" alt="合作洽谈"></div>
                        <span>合作洽谈</span>
                    </div>
                </div>
            </div>
        </Center>
        <div class="bottom">
            <div class="text">浙ICP 备2022031939</div>
        </div>
    </footer>
</template>

<style scoped>
@import "index.css";
</style>
