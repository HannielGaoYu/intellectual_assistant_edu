<template>
  <div class="show-content">
    <div class="title">
      <h2>{{ data.SectionTitle }}</h2>
    </div>
    <div class="my-task">
      <div class="top-bar">
        <template v-for="(item, index) in top_bar" :key="index">
          <RouterLink :to="fn(item.title)" active-class="active">{{
            item.bar_title
          }}</RouterLink>
        </template>
      </div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, type RouteLocationRaw } from 'vue-router'
import { ref, reactive, watch } from 'vue'

import { top_bar, class_nav } from '@/assets/data/local-data'

const route = useRoute()

let lession = parseInt(String(route.params.lession))
let chapter = parseInt(String(route.params.chapter))
let section = parseInt(String(route.params.section))
let data = class_nav[lession - 1].chapters[chapter - 1].sections[section - 1]
function fn(p: string) {
  let jk = route.path.split('/')
  jk[jk.length - 1] = p
  let jkk = jk.join('/')
  return jkk
}
</script>

<style scoped lang="less">
.show-content {
  flex: 19;
  color: #000;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  margin: 0 10px;
  padding: 10px;
  background-color: #fff;
  .title {
    margin-bottom: 26px;
  }
  .my-task {
    height: calc(100vh - 160px);
    box-sizing: border-box;
    padding: 16px;
    // background-color: #868;
    .top-bar {
      display: flex;
      height: 35px;
      line-height: 35px;
      font-weight: 600;
      a {
        background-color: #ddd;
        padding: 0 12px;
        cursor: pointer;
        &:hover,
        &.active {
          background-color: #f3c258;
        }
      }
    }
  }
}
</style>
