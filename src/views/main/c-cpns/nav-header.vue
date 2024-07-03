<template>
  <div class="nav">
    <div class="nav-header wrap-v1">
      <div class="left">
        <img src="../../../assets/img/sparklogo.svg" alt="" class="logo" />
      </div>
      <div class="right">
        <div class="my-lession">
          <RouterLink
            to="/main/mylession"
            class="nav-item"
            active-class="active"
            >我的课程</RouterLink
          >
          <div class="down-bar">
            <template v-for="(item, index) in class_nav">
              <div class="item" @click="handleLessionContent(index)">
                {{ item.title }}
              </div>
            </template>
          </div>
        </div>
        <div class="learn-process">
          <RouterLink
            to="/main/learn_process"
            class="nav-item"
            active-class="active"
            >学习进度</RouterLink
          >
        </div>
        <div class="code-genger">
          <RouterLink to="/main/coder" class="nav-item" active-class="active"
            >代码纠错</RouterLink
          >
        </div>
        <div class="ranking">
          <RouterLink to="/main/ranking" class="nav-item" active-class="active"
            >排行</RouterLink
          >
        </div>
        <div class="mine">
          <RouterLink to="/main/mine" class="nav-item" active-class="active"
            >我的</RouterLink
          >
        </div>
        <div class="AI-reslove">
          <RouterLink
            to="/main/large_model"
            class="nav-item"
            active-class="active"
            >AI答疑</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import { class_nav } from '@/assets/data/local-data'

const router = useRouter()

const handleLessionContent = (index: number) => {
  router.push({
    path: `/main/mylession/${index + 1}/1/1/video`
  })
}
</script>

<style scoped lang="less">
.nav {
  background-color: rgba(107, 137, 255, 0.1);
  background: url('../../../assets/img/banner-bg.e4af44a0536dfba3cedf.png')
    no-repeat top auto;
  color: #000;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    a {
      margin: 0 20px;
      padding-bottom: 12px;
    }
    a:hover {
      color: steelblue;
      border-bottom: 3px solid steelblue;
    }
    .active {
      color: steelblue;
      border-bottom: 3px solid steelblue;
    }
    .my-lession {
      position: relative;
      .down-bar {
        position: absolute;
        top: 70px;
        width: 98px;
        height: 200px;
        text-align: center;
        overflow: auto;
        display: none;
        background-color: #fff;
        z-index: 99;
        .item {
          border-bottom: 1px solid #eee;
          cursor: pointer;
        }
      }
      &:hover .down-bar {
        display: block;
      }
    }
  }
}
</style>
