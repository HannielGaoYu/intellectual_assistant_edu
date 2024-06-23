<template>
  <div class="genger-code">
    <div class="input-code">
      <div class="title">输入描述</div>
      <div class="content">
        <el-input
          v-model="text"
          :autosize="{ minRows: 4, maxRows: 4 }"
          type="textarea"
          placeholder="请输入描述"
          class="input"
          size="large"
        />
      </div>
    </div>
    <div class="output-code">
      <div class="title">代码</div>
      <div class="content">
        <el-input
          v-model="text"
          :autosize="{ minRows: 19, maxRows: 19 }"
          type="textarea"
          placeholder="结果"
          class="input"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
</script>

<style scoped lang="less">
.genger-code {
  color: #000;
  .input-code,
  .output-code {
    .title {
      font-size: 16px;
      text-indent: 10px;
      margin-bottom: 16px;
    }
  }
  .output-code {
      .title {
        margin-top: 12px;
        margin-bottom: 22px;
      }
    }
}
</style>
