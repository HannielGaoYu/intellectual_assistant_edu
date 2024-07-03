<template>
  <div class="video">
    <template v-for="(item, index) in data">
      <div class="title">
        {{ item.moviesName }}
      </div>
      <video
        :src="item.moviesUrl"
        controls
        preload="metadata"
        style="width: 200px"
      ></video>
    </template>
    <div class="addVideo"></div>
  </div>
</template>

<script setup lang="ts">
import { class_nav } from '@/assets/data/local-data'
import { useRoute } from 'vue-router'

const route = useRoute()
const lession = parseInt(String(route.params.lession))
const chapter = parseInt(String(route.params.chapter))
const section = parseInt(String(route.params.section))
console.log(route.params)
const data =
  class_nav[lession - 1].chapters[chapter - 1].sections[section - 1].video
    ?.videos

console.log(data)
</script>

<style scoped lang="less">
.video {
  color: #000;
  .addVideo {
    width: 200px;
    height: 100px;
    opacity: 0.2;
    background-color: #aaa;
    background-image: url('../../../../../assets/img/OIP-C.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 16px;
    background-size: 200px 100px;
  }
}
</style>
