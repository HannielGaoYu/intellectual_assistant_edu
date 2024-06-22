<template>
  <div class="main">
    <NavHeader/>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import NavHeader from './c-cpns/nav-header.vue'

</script>

<style scoped lang="less">
  .main {
    color: deepskyblue;
  }
</style>