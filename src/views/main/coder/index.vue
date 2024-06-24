<template>
  <div class="code">
    <div class="main-code">
      <div class="left">
        <CodeLeftTip></CodeLeftTip>
      </div>
      <div class="right">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeLeftTip from './c-cpns/code-left.vue'
</script>

<style scoped lang="less">
  .main-code {
    display: flex;
    .left {
      width: 160px;
    }
    .right {
      box-sizing: border-box;
      margin: 20px;
      margin-bottom: 8px;
      padding: 10px;
      flex: 1;
      background-color: rgba(131, 111, 238, 0.1);
    }
  }
</style>