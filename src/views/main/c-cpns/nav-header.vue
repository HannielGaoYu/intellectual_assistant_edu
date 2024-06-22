<template>
  <div class="nav-header wrap-v1">
    <div class="left">
      <img src="../../../assets/img/sparklogo.svg" alt="" class="logo" />
    </div>
    <div class="right">
      <RouterLink to="/main/large_model">大模型</RouterLink>
      <RouterLink to="/main/mylession">我的课程</RouterLink>
      <RouterLink to="/main/coder">代码纠错</RouterLink>
      <RouterLink to="/main/ranking">排行</RouterLink>
      <RouterLink to="/main/mine">我的</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  line-height: 70px;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #f8f;

  .left {
    display: flex;
    align-items: center;
    .logo {
      height: 30px;
    }
  }
  .right {
    a {
      margin: 0 20px;
    }
  }
}
</style>
