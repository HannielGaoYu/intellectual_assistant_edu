<template>
  <div class="code-left" ref="codeRef" :style="`height:${totalHeight}px;`">
    <div class="code-left-nav">
      <template v-for="(item, index) in coderSideData" key="item.title">
        <div
          :class="`item ${currentIndex === index ? 'active' : ''} `"
          @click="currentClick(index)"
        >
          <RouterLink :to="item.link">{{ item.title }}</RouterLink>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { coderSideData } from '@/assets/data/local-data'
const currentIndex = ref(0)
function currentClick(index: number) {
  currentIndex.value = index
}
const totalHeight = ref(window.innerHeight - 70)
window.addEventListener('resize', () => {
  totalHeight.value = window.innerHeight - 70
})
</script>

<style scoped lang="less">
.code-left {
  font-size: 18px;
  background-color: rgba(131, 111, 238, 0.1);
  .code-left-nav {
    color: #000;
    .item {
      padding: 10px 0;
      text-align: center;
    }
    .item:hover {
      background-color: #fff;
    }
    .item.active {
      background-color: #fff;
    }
  }
}
</style>
