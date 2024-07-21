<template>
  <div class="ppt-message-box">
    <div class="exit" @click="handlerRequireBoxExitClick">
      <el-icon class="exit-icon"
        ><Close style="width: 20px; height: 20px"
      /></el-icon>
    </div>
    <div class="ppt-nav-title">
      <h2 style="text-align: left; margin: 20px">创建需求</h2>
    </div>

    <div class="input-require" align="center">
      <el-form label-position="center">
        <el-form-item label="需求">
          <el-input v-model="require" style="width: 200px;" align="cneter" />
        </el-form-item>
      </el-form>
    </div>

    <div class="fun-bar" style="text-align: right; margin-right: 30px">
      <div class="bars">
        <el-button class="cannel" @click="handlerRequireBoxCannelClick()"
          >取消</el-button
        >
        <el-button
          type="primary"
          class="confirm"
          @click="handlerRequireNextClick()"
          >下一步</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const require = ref('')
const emit = defineEmits(['ppt-require-exit', 'ppt-require-next'])

const handlerRequireBoxExitClick = () => {
  emit('ppt-require-exit')
}

const handlerRequireBoxCannelClick = () => {
  emit('ppt-require-exit')
}

const handlerRequireNextClick = () => {
  emit('ppt-require-next')
}
</script>

<style scoped lang="less">
.ppt-message-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 350px;
  height: 220px;
  margin: auto;
  margin-top: 36px;
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
  .fun-bar {
    margin-top: 60px;
  }

}
</style>
