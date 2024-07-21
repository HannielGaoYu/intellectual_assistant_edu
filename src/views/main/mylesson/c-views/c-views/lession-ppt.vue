<template>
  <div class="lession-ppt">
    <div class="add-ppt">
      <div class="left">课件</div>
      <div class="right" v-if="userInfo.user.role !== 'student'">
        <el-button type="primary" round @click="handlerShowMessageBox"
          >AI添加课件</el-button
        >
      </div>
    </div>

    <template v-for="(item, index) in data">
      <div class="ppt-item">
        <div class="ppt-icon">
          <img src="../../../../../assets/img/ppt-icon.jpg" alt="" />
        </div>
        <div class="info">
          <div class="fileName">{{ item.fileName }}</div>
          <div class="bottom">
            <div class="size">{{ formatSize(item.fileSize) }}KB</div>
            <div class="time">{{ formatTime(item.uploadTime) }}</div>
            <a
              class="presee"
              :href="item.fileUrl"
              target=""
              >查看</a
            >
            <a class="download" :href="item.filePath">下载</a>
            <div class="delete" v-if="userInfo.user.role !== 'student'" @click="handlerDeletePPT(item.id)">删除</div>
          </div>
        </div>
        <div class="add">
          <el-button
            type="danger"
            :icon="Plus"
            circle
            style="width: 30px; height: 30px"
          />
        </div>
      </div>
    </template>

    <el-upload
      class="upload-demo"
      drag
      action="http://localhost:8080/sections/2/upload/ppt"
      v-if="userInfo.user.role !== 'student'"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text" @click="reloadppt()">
        拖拽文件或 <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">PPT文件不得大于2GB</div>
      </template>
    </el-upload>

    <ppt-message-box
      v-if="showMessageBox"
      @ppt-message-exit="handlerShowMessageBox"
      @ppt-message-next="handlerMessageNextBox"
    ></ppt-message-box>
    <ppt-require-box
      v-if="showRequireBox"
      @ppt-require-exit="handlerShowRequireBox"
      @ppt-require-next="handlerRequireNextBox"
    ></ppt-require-box>
    <ppt-outline-box
      v-if="showOutlineBox"
      @ppt-outline-exit="handlerExitOutlineBox"
      @ppt-outline-next="handlerOutlineNextBox(outline)"
    ></ppt-outline-box>
    <ppt-result-box
      v-if="showResultBox"
      @ppt-result-exit="handlerShowResultBox"
      @ppt-result-next="handlerResultNextBox"
      :data="outline_data"
    ></ppt-result-box>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus, UploadFilled } from '@element-plus/icons-vue'
import PptMessageBox from './c-cpns/ppt-cpns/ppt-message-box.vue'
import PptRequireBox from './c-cpns/ppt-cpns/ppt-require-box.vue'
import PptOutlineBox from './c-cpns/ppt-cpns/ppt-outline-box.vue'
import PptResultBox from './c-cpns/ppt-cpns/ppt-result-box.vue'
import Request from '@/service'
import { formatSize, formatTime } from '@/utils/format'
import { outline } from '@/assets/data/ppt-outline'
import { localCache } from '@/utils/useStorage'

const userInfo = localCache.getStorage('userInfo')

const data = ref()
const sectionId = sessionStorage.getItem('sectionId1')
Request.get({
  url: `/sections/${sectionId}/download/ppt`
}).then((res) => {
  data.value = res
})

const showMessageBox = ref(false)
const showOutlineBox = ref(false)
const showRequireBox = ref(false)
const showResultBox = ref(false)
const outline_data = ref([])

const handlerShowMessageBox = () => {
  showMessageBox.value = !showMessageBox.value
}
const handlerMessageNextBox = () => {
  showMessageBox.value = false
  showRequireBox.value = true
}

const handlerShowRequireBox = () => {
  showRequireBox.value = !showRequireBox.value
}
const handlerRequireNextBox = () => {
  console.log('nextOut')
  showOutlineBox.value = true
  showRequireBox.value = false
  // showOutlineBox.value = true
}

const handlerExitOutlineBox = () => {
  console.log('out')
  showOutlineBox.value = false
}

const handlerShowOutlineBox = () => {
  showOutlineBox.value = !showOutlineBox.value
}
const handlerOutlineNextBox = (e: any) => {
  outline_data.value = e
  showOutlineBox.value = false
  showResultBox.value = true
}

const handlerShowResultBox = () => {
  showResultBox.value = !showResultBox.value
}
const handlerResultNextBox = () => {
  showResultBox.value = false
}

const handlerDeletePPT = (id: any) => {
  Request.delete({
    url: `/sections/${sessionStorage.getItem('sectionId1')}/${id}/ppt`
  }).then(res => {
    data.value = res
  })
}

const reloadppt = () => {
  setInterval(() => {
    Request.get({
      url: `/sections/${sectionId}/download/ppt`
    }).then((res) => {
      data.value = res
    })
  }, 1000)
}
</script>

<style scoped lang="less">
.lession-ppt {
  position: relative;
  color: #000;
  margin-top: 10px;
  .add-ppt {
    display: flex;
    justify-content: space-between;
    color: #606266;
    font-size: 22px;
    font-weight: 600;
  }
  .ppt-item {
    position: relative;
    margin-bottom: 15px;
    display: flex;
    align-content: center;
    width: 350px;
    background-color: #f5f5f5;
    .ppt-icon {
      margin-right: 10px;
      img {
        width: 70px;
      }
    }
    .info {
      .fileName {
        font-size: 16px;
        font-weight: 600;
        margin-top: 5px;
      }
      .bottom {
        display: flex;
        width: 260px;
        justify-content: space-between;
        margin-top: 16px;
        font-size: 13px;
        .presee {
          color: #f3c258;
          cursor: pointer;
        }
        .download {
          color: #000;
          cursor: pointer;
        }
        .delete {
          color: #666;
          cursor: pointer;
        }
      }
    }
  }
  .add {
    position: absolute;
    display: none;
    left: 335px;
    top: 20px;
  }
  .add:nth-last-child(0) {
    display: block;
  }
}
</style>
