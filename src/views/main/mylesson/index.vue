<template>
  <div class="my-lession">
    <LessionList></LessionList>
    <RouterView :key="$route.fullPath"></RouterView>
    <!-- <ShowContent></ShowContent> -->
  </div>
</template>

<script setup lang="ts">
import LessionList from './c-cpns/lession-list.vue'
import ShowContent from './c-views/show-content.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style scoped lang="less">
.my-lession {
  display: flex;
}
</style>
