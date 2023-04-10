<!-- 图文混排 -->
<template>
    <div class="text-image" id="about">
        <div style="width:100%;height: 580px;">

            <el-row>
                <el-col :span="10" style="position: relative;">
                    <TransformContainer>
                        <h2 class="company1">新畅元科技</h2>
                    </TransformContainer>
                    <TransformContainer>
                        <h2 class="company2">NNKOSMOS</h2>
                    </TransformContainer>
                    <TransformContainer style="position: absolute;bottom: 0;">
                    <div class="content" style="text-align: justify;">
                        <p>成立于2022年10月，总部位于美丽的西子湖畔-杭州，并在北京/深圳与清华大学联合建立数字人研发中心与产品应用中心。致力于构建人与数字生命数实融合，协同互助发展。</p>
                        <br>
                        <p>公司潜心AGI+虚拟数字人领域研发15年，核⼼团队成员均来自清华⼤学和国内外知名企业，其中技术团队博硕25余⼈ 。依托于清华⼤学成像与智能技术实验室，凭借国际领先的数字人生成技术以及AIGC技术，已成功实现3D数字人生成重建、AIGC+3D数字人、3D数字人AI跨模态实时交互等多项国际领先技术与应用，通过创世元数字人视频生成平台和AI实时驱动直播平台两大核心应用平台，赋能金融、教育、电商、服务、文旅、社交娱乐、广告创意、影视传媒等行业。为企业打造安全、可靠的数字智能产业生态圈，提供高质量、高效率、低成本的3D数字人一站式服务解决方案，为企业助力企业数字化产业变革，构建AGI+3D数字人基础建设与内容创造发展，引领和推动AGI+X全新生态创新和发展。</p>
                    </div>
                </TransformContainer>
                </el-col>
                <el-col :span="10" :offset="4">
                    <TransformContainer>
                        <div class="images"><img :src="Company" alt="公司简介"></div>
                    </TransformContainer>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import Company from "../../assets/image/company.png";
import TransformContainer from "../TransitionContainer/index.vue";
</script>

<style scoped>@import "./index.css";</style>