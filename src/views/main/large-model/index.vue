<template>
  <div class="large-model">
    <ModelLogo></ModelLogo>
    <UseModel></UseModel>
  </div>
</template>

<script setup lang="ts">
import ModelLogo from './c-cpns/model-logo.vue';
import UseModel from './c-cpns/use-model.vue';
</script>

<style scoped lang="less">
  .large-model {
    color: #000;
  }
</style>