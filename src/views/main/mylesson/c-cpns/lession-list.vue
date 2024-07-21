<template>
  <div class="lession-list">
    <h2 class="mb-2" align="left">我的课程</h2>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="fn()"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in CourseList">
        <el-sub-menu :index="`/main/mylession/${index + 1}`">
          <template #title>
            <div class="box">
              <span>{{ item.name }}</span>
              <span class="change-bar" v-if="userInfo.user.role !== 'student'">
                <span class="change_name" @click="handleEdit">
                  <el-icon><Edit /></el-icon>
                </span>
                <span class="add-chapter" @click="handleAdd">
                  <el-icon><Plus /></el-icon>
                </span>
                <span class="delete-section" style="color: black">
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
            </div>
          </template>
          <template v-for="(item_chapter, index_chapter) in item.chapters">
            <el-sub-menu
              :index="`/main/mylession/${index + 1}/${index_chapter + 1}`"
            >
              <template #title>
                <div class="box-chapter">
                  <span>{{ item_chapter.name }}</span>
                  <span class="change-bar" v-if="userInfo.user.role !== 'student'">
                    <span class="change_name" >
                      <el-icon><Edit /></el-icon>
                    </span>
                    <span class="add-chapter">
                      <el-icon><Plus /></el-icon>
                    </span>
                    <span class="delete-section" style="color: black">
                      <el-icon><Delete /></el-icon>
                    </span>
                  </span>
                </div>
              </template>
              <template
                v-for="(
                  item_chapter_section, index_chapter_section
                ) in item_chapter.sections"
              >
                <el-menu-item
                  :index="`/main/mylession/${index + 1}/${index_chapter + 1}/${index_chapter_section + 1}/`"
                  @click="
                    handleContentPush(
                      index + 1,
                      index_chapter + 1,
                      index_chapter_section + 1,
                      item_chapter_section.id
                    )
                  "
                >
                  {{ item_chapter_section.name }}
                  <span class="change-bar" v-if="userInfo.user.role !== 'student'">
                    <span class="change_name" style="color: black; margin-left: 6px;" >
                      <el-icon><Edit /></el-icon>
                    </span>
                    <span class="add-chapter" style="color: black">
                      <el-icon><Plus /></el-icon>
                    </span>
                    <span class="delete-section" style="color: black">
                      <el-icon><Delete /></el-icon>
                    </span>
                  </span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
    <AddBox v-if="isAddBox" @add-box="handleAddExit"></AddBox>
  </div>
</template>

<script setup lang="ts">
import AddBox from './c-cpns/add-box.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import Request from '@/service'
import { storeToRefs } from 'pinia'
import { useMylessonStore } from '@/store/main/mylesson'
import { localCache } from '@/utils/useStorage'

const isAddBox = ref(false)
const userInfo = localCache.getStorage('userInfo')

let CourseList: any

const mylessonStore: any = useMylessonStore()

if(userInfo.user.role === 'teacher') {
  CourseList = storeToRefs(mylessonStore).teacherCourseList
} else {
  CourseList= storeToRefs(mylessonStore).studentCourseList
}

// 


const route = useRoute()
const router = useRouter()

// const data = ref()
// Request.get({
//   url: '/courses/teacher/2'
// }).then((res) => {
//   data.value = res
// })

setTimeout(() => {
  if (sessionStorage.getItem('sectionId1') !== null) {
    const place = getPlace()
    router.push({
      path: `/main/mylession/${sessionStorage.getItem('c')}/${sessionStorage.getItem('ch')}/${sessionStorage.getItem('se')}/${place}`,
      query: {
        sectionId: Number(sessionStorage.getItem('sectionId1'))
      }
    })
    return
  }
  for (let i = 0; i < CourseList.value.length; i++) {
    let course: any = CourseList.value[i]
    for (let j = 0; j < course.chapters.length; j++) {
      let chapter = course.chapters[j]
      for (let k = 0; k < chapter?.sections.length; k++) {
        let section = chapter?.sections[k]
        if (section?.id !== undefined) {
          router.push({
            path: `/main/mylession/${i + 1}/${j + 1}/${k + 1}/video`,
            query: {
              sectionId: section.id
            }
          })

          sessionStorage.setItem('sectionId1', section.id)
          sessionStorage.setItem('c', String(i + 1))
          sessionStorage.setItem('ch', String(j + 1))
          sessionStorage.setItem('se', String(k + 1))
          return
        }
      }
    }
  }
}, 100)

function fn() {
  let jk = route.path.split('/')
  jk[jk.length - 1] = ''
  let jkk = jk.join('/')
  return jkk
}

function getPlace() {
  let path = route.path.split('/')
  return path[path.length - 1]
}

function handleEdit() {}

function handleAdd() {
  isAddBox.value = !isAddBox.value
}

function handleAddExit() {
  isAddBox.value = false
}

const handleOpen = (key: string, keyPath: string[]) => {}
const handleClose = (key: string, keyPath: string[]) => {}

const handleContentPush = (
  lessionIndex: number,
  chapterIndex: number,
  sectionIndex: number,
  sectionId: number
) => {
  router.push({
    path: `/main/mylession/${lessionIndex}/${chapterIndex}/${sectionIndex}/video`,
    query: {
      sectionId
    }
  })

  sessionStorage.setItem('sectionId1', String(sectionId))
  sessionStorage.setItem('c', String(lessionIndex))
  sessionStorage.setItem('ch', String(chapterIndex))
  sessionStorage.setItem('se', String(sectionIndex))
}
</script>

<style scoped lang="less">
.lession-list {
  position: relative;
  color: #000;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  flex: 8;
  height: calc(100vh - 70px);
  background-color: #fff;
  .active {
    color: #409eff;
  }
  .el-menu {
    border-right: none;
    user-select: none;
    .box {
      .add-chapter {
        margin-left: 8px;
      }
      .change_name {
        margin-left: 10px;
      }
    }
    .box-chapter {
      .change_name {
        margin-left: 10px;
      }
    }
  }
}
</style>
