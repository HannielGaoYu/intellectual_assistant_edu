<template>
  <div class="login">
    <LoginPanel/>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/LoginPanel.vue'
</script>

<style scoped lang="less">
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
    height: 100%;

    background-image: url('../../assets/imgs/OIP-C.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>
