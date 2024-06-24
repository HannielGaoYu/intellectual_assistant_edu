<template>
  <div class="nav">
    <div class="nav-header wrap-v1">
      <div class="left">
        <img src="../../../assets/img/sparklogo.svg" alt="" class="logo" />
      </div>
      <div class="right">
        <RouterLink to="/main/large_model">大模型</RouterLink>
        <div class="my-lession">
          <RouterLink to="/main/mylession">我的课程</RouterLink>
          <div class="down-bar">
            <template v-for="(item, index) in class_nav">
              <div class="className">
                {{ item.title }}
              </div>
            </template>
          </div>
        </div>
        <RouterLink to="/main/coder">代码纠错</RouterLink>
        <RouterLink to="/main/ranking">排行</RouterLink>
        <RouterLink to="/main/mine">我的</RouterLink>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { class_nav } from '@/assets/data/local-data';
</script>

<style scoped lang="less">
.nav {
  background-color: rgba(107, 137, 255, 0.1);
  background: url('../../../assets/img/banner-bg.e4af44a0536dfba3cedf.png') no-repeat top  auto;
  color: #000;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  line-height: 70px;
  box-sizing: border-box;
  padding: 0 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .left {
    display: flex;
    align-items: center;
    .logo {
      height: 30px;
    }
  }
  .right {
    display: flex;
    a {
      margin: 0 20px;
    }
    .my-lession {
      position: relative;
      .down-bar {
        position: absolute;
        top: 70px;
        display: none;
        overflow: scroll;
        width: 98px;
        height: 300px;
        box-sizing: border-box;
        margin-top: 10px;
        background-color: rgba(234, 234, 255, 0.9);
        z-index: 9;
        text-align: center;
      }
    }
    .my-lession:hover .down-bar, .down-bar:hover {
      display: block;
    }
  }
}
</style>
