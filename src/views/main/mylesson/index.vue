<template>
  <div class="my-lession">
    <LessionList ></LessionList>
    <RouterView :key="$route.fullPath"></RouterView>
    <!-- <ShowContent :data="data"></ShowContent> -->
  </div>
</template>

<script setup lang="ts">
import LessionList from './c-cpns/lession-list.vue'
import ShowContent from './c-views/show-content.vue'
import { useRoute } from 'vue-router'
import {ref} from 'vue'
import {useMylessonStore} from '@/store/main/mylesson'
import {storeToRefs} from 'pinia'
import { localCache } from '@/utils/useStorage'

const mylessonStore = useMylessonStore()
mylessonStore.getTeacherCourseListAction(localCache.getStorage('userInfo').id)
const {teacherCourseList} = storeToRefs(mylessonStore)
mylessonStore.getStudentCourseListAction(localCache.getStorage('userInfo').id)
const {studentCourseList} = storeToRefs(mylessonStore) 
const route = useRoute()

</script>

<style scoped lang="less">
.my-lession {
  display: flex;
}
</style>
