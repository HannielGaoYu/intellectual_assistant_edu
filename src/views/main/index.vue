<template>
  <div class="main">
    <NavHeader />
    <router-view></router-view>
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
