<template>
  <div class="lession-list">
    <h2 class="mb-2" align="left">我的课程</h2>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="fn()"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in class_nav">
        <el-sub-menu :index="`/main/mylession/${index + 1}`">
          <template #title>
            <div class="box">
              <span>{{ item.title }}</span>

              <span class="change_name">
                <el-icon><Edit /></el-icon>
              </span>
              <span class="add-chapter">
                <el-icon><Plus /></el-icon>
              </span>
            </div>
          </template>
          <template v-for="(item_chapter, index_chapter) in item.chapters">
            <el-sub-menu
              :index="`/main/mylession/${index + 1}/${index_chapter + 1}`"
            >
              <template #title>
                <div class="box-chapter">
                  <span>{{ item_chapter.ChapterTitle }}</span>
                  <span class="change_name">
                    <el-icon><Edit /></el-icon>
                  </span>
                  <span class="add-section">
                    <el-icon><Plus /></el-icon>
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
                      index_chapter_section + 1
                    )
                  "
                >
                  {{ item_chapter_section.SectionTitle }}
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { class_nav } from '@/assets/data/local-data'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function fn() {
  let jk = route.path.split('/')
  jk[jk.length - 1] = ''
  let jkk = jk.join('/')
  return jkk
}

const handleOpen = (key: string, keyPath: string[]) => {}
const handleClose = (key: string, keyPath: string[]) => {}

const handleContentPush = (
  lessionIndex: number,
  chapterIndex: number,
  sectionIndex: number
) => {
  router.push({
    path: `/main/mylession/${lessionIndex}/${chapterIndex}/${sectionIndex}/video`
  })
}
</script>

<style scoped lang="less">
.lession-list {
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
        margin-left: 110px;
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
