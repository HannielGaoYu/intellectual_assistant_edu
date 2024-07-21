<template>
  <div class="video-message-box">
    <div class="exit" @click="handlerMessageBoxClick">
      <el-icon class="exit-icon"
        ><Close style="width: 20px; height: 20px"
      /></el-icon>
    </div>
    <div class="upload">
      <el-upload
        ref="uploadRef"
        class="upload-form"
        :action="`http://localhost:8080/sections/${sectionId}/upload/video`"
        :auto-upload="false"
      >
        <template #trigger>
          <div class="select-file">
            <el-button
              style="
                width: 150px;
                background-color: rgb(255, 192, 203);
                color: #000;
              "
              >选择文件</el-button
            >
          </div>
        </template>
        <el-button
          class="ml-3"
          style="width: 150px; color: #000"
          type="primary"
          @click="submitUpload"
        >
          上传
        </el-button>

        <template #tip>
          <div class="el-upload__tip">视频不得大于2GB</div>
        </template>
      </el-upload>
    </div>
    <div class="fun-bar">
      <div class="bars">
        <el-button class="cannel" @click="handlerMessageBoxClick()">取消</el-button>
        <el-button type="primary" class="confirm" @click="handlerEnterMessageBoxClick()">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { UploadInstance } from 'element-plus'

const props = defineProps(['sectionId'])
const emit = defineEmits(['MessageBoxClick'])
const sectionId = props.sectionId

const uploadRef = ref<UploadInstance>()
const fileName = ref('')

const submitUpload = () => {
  uploadRef.value!.submit()

}

const handlerEnterMessageBoxClick = () => {
  uploadRef.value!.submit()
  setTimeout(() => {
    emit('MessageBoxClick')
  }, 800)
}

const handlerMessageBoxClick = () => {
  emit('MessageBoxClick')
}

</script>

<style scoped lang="less">
.video-message-box {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 420px;
  height: 280px;
  margin: auto;
  margin-right: 298px;
  padding: 0;
  border-radius: 20px;
  background: #eee;
  .exit {
    position: relative;
    .exit-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  .upload {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    .upload-form {
      margin-top: 40px;
      .ml-3 {
        margin-top: 12px;
      }
      .el-upload__tip {
        margin-top: 20px;
      }
    }
  }
  .fun-bar {
    // position: relative;
    .bars {
      position: absolute;
      right: -6px;
      bottom: 10px;
      text-align: right;
      // margin-top: 36px;
      margin-right: 20px;
      .cannel {
        margin-right: 13px;
      }
    }
  }
}
</style>
