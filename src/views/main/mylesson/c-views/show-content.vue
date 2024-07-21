<template>
  <div class="show-content">
    <div class="title">
      <h2>{{ CourseList[lession - 1]?.chapters[chapter - 1]?.sections[section - 1]?.name}}</h2>
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
import { useRoute, } from 'vue-router'
import { ref } from 'vue'
import { top_bar_student, top_bar_teather } from '@/assets/data/local-data'
import {storeToRefs} from 'pinia'
import {useMylessonStore} from '@/store/main/mylesson'
import { localCache } from '@/utils/useStorage'
let top_bar: any = ref([])
if(localCache.getStorage('userInfo').user.role === "student") {
  top_bar.value = top_bar_student
} else {
  top_bar.value = top_bar_teather
}
const route = useRoute()

const userInfo = localCache.getStorage('userInfo')
let CourseList: any

const mylessonStore: any = useMylessonStore()
if(userInfo.user.role === 'teacher') {
  CourseList = storeToRefs(mylessonStore).teacherCourseList
} else {
  CourseList= storeToRefs(mylessonStore).studentCourseList
}
const lession = parseInt(String(route.params.lession))
const chapter = parseInt(String(route.params.chapter))
const section = parseInt(String(route.params.section))

function fn(title: string) {
  let jk = route.path.split('/')
  jk[jk.length - 1] = title
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
      margin-bottom: 10px;
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
