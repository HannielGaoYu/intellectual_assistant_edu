<template>
  <div class="video">
    <div class="left">
      <div class="title">
        {{ videoList[currentIndex]?.fileName }}
      </div>
      <div class="video-v">
        <video
          :src="videoList[currentIndex]?.filePath"
          controls
          preload="metadata"
          style="width: 535px"
        ></video>
      </div>
      <div class="fun-bar">
        <div class="genenator-sum">
          <div class="see">
            <div
              class="bar-name"
              @click="handlerBarClick(1)"
              :class="`${currentBarIndex === 1 ? 'active' : ''}`"
            >
              AI文稿
            </div>
          </div>
          <div class="sum" v-if="currentBarIndex !== 2">
            <div class="item">
              <div class="pick">
                {{ videoList[currentIndex]?.file_toText === null ? '请稍等，正在生成中...'  :  videoList[currentIndex]?.file_toText}}
              </div>
            </div>
          </div>
        </div>
        <div class="genenator-word">
          <div class="word">
            <div
              class="bar-name"
              @click="handlerBarClick(2)"
              :class="`${currentBarIndex === 2 ? 'active' : ''}`"
            >
              AI总结
            </div>
          </div>
          <div class="content" v-if="currentBarIndex !== 1">
            <div class="item">
              {{seeSum}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="add">
        <el-button
          type="primary"
          size="large"
          style="width: 255px; margin-bottom: 10px"
          @click="handlerAddClick"
          v-if="userInfo.user.role !== 'student'"
          >添加视频</el-button
        >
      </div>
      <el-menu
        active-text-color="#409EFF"
        background-color="rgb(241,242,243)"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#000"
        style="height: 100%"
      >
        <h3 style="margin-left: 10px; margin-top: 10px">
          视频选集 ({{ currentIndex + 1 }}/{{ videoList.length }})
        </h3>
        <template v-for="(item, index) in videoList">
          <div class="menu-item">
            <el-menu-item :index="`${index + 1}`" @click="handlerClick(index)">
              <div class="text">{{ item.fileName }}</div>
            </el-menu-item>
            <div class="icon-plus icon" @click="handlerAddClick" v-if="userInfo.user.role !== 'student'">
              <el-button
                type="primary"
                :icon="Plus"
                circle
                style="width: 25px; height: 25px"
              />
            </div>
            <div class="icon-Edit icon" @click="handlerAddClick" v-if="userInfo.user.role !== 'student'">
              <el-button
                type="success"
                :icon="EditPen"
                circle
                style="width: 25px; height: 25px; display: none;"
              />
            </div>
            <div class="icon-delete icon" @click="handlerDeleteClick(item.id)" v-if="userInfo.user.role !== 'student'">
              <el-button
                type="danger"
                :icon="Delete"
                circle
                style="width: 25px; height: 25px"
              />
            </div>
          </div>
        </template>
      </el-menu>
    </div>
    <video-message-box
      v-if="showMessageBox"
      :sectionId="sectionId"
      @message-box-click="handlerMessageBoxExitClick()"
    ></video-message-box>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import VideoMessageBox from './c-cpns/video-MessageBox/video-message-box.vue'
import { Plus, EditPen, Delete } from '@element-plus/icons-vue'
import { Request } from '@/service/index'
import { useMylessonStore } from '@/store/main/mylesson/index'
// import { class_nav } from '@/assets/data/local-data'
// import {getCurrentInstance} from 'vue';
// const instance: any = getCurrentInstance();
import { getCurrentInstance, type ComponentInternalInstance } from 'vue'
import { send } from '@/utils/chat'
import { videoPromptWordsOrigin } from '@/assets/data/local-data'
import { text1 } from '@/assets/data/c'
import { localCache } from '@/utils/useStorage'
const userInfo = localCache.getStorage('userInfo')
const update = getCurrentInstance() as ComponentInternalInstance | null

const route = useRoute()
const router = useRouter()
const seeSum = ref('请稍等，正在生成中...')
let sectionId: string = ''
if (route.query.sectionId !== undefined) {
  localStorage.setItem('sectionId', String(route.query.sectionId))
}
sectionId = localStorage.getItem('sectionId') || ''

const videoList: any = ref([])

Request.get({
  url: `/sections/${sessionStorage.getItem('sectionId1')}/download/video`
}).then((res) => {
  videoList.value = res
  Request.post({
    url: `/sections/recognizeText/${res[0].id}`
  }).then((res) => {
    videoList.value[0].file_toText = res
  })
})

const currentIndex = ref(0)
const currentBarIndex = ref(1)
const showMessageBox = ref(false)

function handlerClick(index: any) {
  currentIndex.value = index
  Request.post({
    url: `/sections/recognizeText/${videoList.value[currentIndex.value].id}`
  }).then((res) => {
    videoList.value[currentIndex.value].file_toText = res
  })
}

function handlerDeleteClick(id: any) {
  console.log(sessionStorage.getItem('sectionId1'), id)
  Request.delete({
    url: `/sections/${sessionStorage.getItem('sectionId1')}/${id}/video`
  }).then(res => {
    console.log(res)
    videoList.value = res
  })
}

async function handlerMessageBoxExitClick() {
  showMessageBox.value = false

  update!.proxy!.$forceUpdate()
  // instance.proxy.$forceUpdate();
  // videoList.value = await useMylessonStore().getTeacherCourseListAction(2)
  location.reload()
  // router.go(0)
}

function handlerBarClick(barindex: any) {
  if (barindex === 1) {
    currentBarIndex.value = barindex
    Request.post({
      url: `/sections/recognizeText/${videoList.value[currentIndex.value].id}`
    }).then((res) => {
      videoList.value[currentIndex.value].file_toText = res
    })
  } else {
    currentBarIndex.value = barindex
    // send(videoList.value[currentIndex.value].file_toText + videoPromptWordsOrigin, seeSum)
    Request.post({
      headers: {
        'Content-Type': 'text/plain'
      },
      url: `/api/ai`,
      data: `${videoList.value[currentIndex.value].file_toText + videoPromptWordsOrigin}`
    }).then(res => {
      console.log(res)
      seeSum.value = res
    })
  }
  
}

function handlerAddClick() {
  showMessageBox.value = !showMessageBox.value
}
</script>

<style scoped lang="less">
.video {
  position: relative;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  .left {
    width: 66%;
    height: 560px;
    overflow: auto;
    margin-left: -12px;
    .fun-bar {
      display: flex;
      justify-content: space-between;
      height: 36px;
      line-height: 30px;
      margin-top: 12px;
      text-align: center;
      background-color: rgba(147, 112, 219, 0.2);
      .genenator-sum {
        position: relative;
        flex: 1;
        .see {
          .bar-name {
            margin: 0 auto;
            width: 30%;
            // border-bottom: 2px solid #409eff;
            cursor: pointer;
            &.active {
              border-bottom: 2px solid #409eff;
            }
          }
          .bar-name:hover {
            border-bottom: 2px solid #409eff;
          }
        }
        .sum {
          position: absolute;
          left: 0;
          text-align: left;
          .item {
            width: 520px;
            .pick {
              margin-top: 10px;
              width: fit-content;
              word-wrap: break-word;
              word-break: break-all;
              overflow: hidden;
              line-height: normal;
            }
          }
        }
      }
      .genenator-word {
        position: relative;
        flex: 1;
        .word {
          .bar-name {
            margin: 0 auto;
            width: 30%;
            box-sizing: border-box;
            padding: 0;
            // border-bottom: 2px solid #409eff;
            cursor: pointer;
            &.active {
              border-bottom: 2px solid #409eff;
            }
          }
          .bar-name:hover {
            border-bottom: 2px solid #409eff;
          }
        }
        .content {
          position: absolute;
          text-align: left;
          left: -270px;
          width: 520px;
          .item {
            margin-top: 10px;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
            line-height: normal;
          }
        }
      }
    }
  }
  .right {
    width: 30%;
    height: 400px;
    margin-right: -10px;
    .el-menu-vertical-demo {
      overflow: auto;
      .menu-item {
        position: relative;
        overflow-x: hidden;
        .text {
          width: 130px;
          overflow: hidden;
          word-spacing: normal;
          text-overflow: ellipsis;
          font-size: 12px;
        }
        .icon {
          position: absolute;
          width: 30px;
          height: 30px;
          margin: 0 auto;
          text-align: center;
        }
        .icon-plus {
          left: 150px;
          top: 13px;
        }
        .icon-Edit {
          left: 180px;
          top: 13px;
        }
        .icon-delete {
          // left: 210px;
          // top: 12px;
          left: 180px;
          top: 13px;
        }
      }
    }
  }
}
</style>
