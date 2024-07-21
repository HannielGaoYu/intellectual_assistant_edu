<template>
  <div class="mine">
    <div class="top">
      <img src="../../../assets/img/tongxunlu.png" alt="" />
      <span>账号管理</span>
    </div>
    <div class="fun-bar">
      <div class="list">
        <div
          :class="`item ${index === true ? 'active' : ''}`"
          @click="handlerProfileClick"
        >
          <span>基本资料</span>
        </div>
        <div
          class="item"
          @click="handlerAddClassClick"
          :class="`item ${index === false ? 'active' : ''}`"
        >
        </div>
      </div>
    </div>
    <div class="divide-line"></div>
    <div class="fun-show">
      <BaseProfile v-if="index"></BaseProfile>
      <AddClass v-else></AddClass>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseProfile from './c-cpns/base-profile.vue'
import AddClass from './c-cpns/add-class.vue'
import { localCache } from '@/utils/useStorage';



const index = ref(true)

const handlerProfileClick = () => {
  index.value = true
}

const handlerAddClassClick = () => {
  index.value = false
}
</script>

<style scoped lang="less">
.mine {
  color: #000;
  box-sizing: border-box;
  margin: 20px;
  // background-color: #f00;
  .top {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding-left: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d2d2d3;
  }
  .fun-bar {
    margin-top: 20px;
    .list {
      display: flex;
      align-items: center;
      font-size: 16px;
      margin-bottom: 10.5px;
      .item {
        margin-right: 28px;
      }
      .active span {
        padding-bottom: 10px;
        border-bottom: 2.5px solid red;
      }
      .item:hover span {
        padding-bottom: 10px;
        border-bottom: 2.5px solid red;
      }
    }
  }
  .divide-line {
    border: 10px solid #ddd;
  }
}
</style>
