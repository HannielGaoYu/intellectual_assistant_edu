<template>
  <div class="base-profile">
    <div class="profile">
      <div class="name item">
        <span class="title">姓名</span>
        <span>{{ userInfo.name}}</span>
      </div>
      <div class="identity item">
        <span class="title">id</span>
        <span>{{ userInfo.id }}</span>
      </div>
      <div class="geneder item">
        <span class="title">性别</span>
        <span>{{ "男" }}</span>
      </div>
      <div class="phone item">
        <span class="title">邮箱</span>
        <span>{{ userInfo.user.email }}</span>
      </div>
      <div class="department item">
        <span class="title">单位</span>
        <span>{{ "徐海学院" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/useStorage';

const userInfo = localCache.getStorage('userInfo')
</script>

<style scoped lang="less">
  .base-profile {
    color: #000;
    margin-top: 20px;
    .profile {
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .title {
          font-size: 16px;
          font-weight: 600;
          margin-right: 20px;
        }
      }
    }
  }
</style>