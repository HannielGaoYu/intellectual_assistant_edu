<template>
  <div class="code-promote">
    <div class="input-code">
      <div class="top-bar">
        <div class="title">输入代码或报错日志</div>
        <div class="btn">
          <el-button type="primary" round @click="sumbitText">提交</el-button>
        </div>
      </div>
      <div class="content">
        <el-input
          v-model="text"
          :autosize="{ minRows: 4, maxRows: 4 }"
          type="textarea"
          placeholder="输入"
          class="input"
          size="large"
        />
      </div>
    </div>
    <div class="output-code">
      <div class="title">代码</div>
      <div class="content">
        <el-input
          v-model="seeSum"
          :autosize="{ minRows: 19, maxRows: 19}"
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
import Request from '@/service';
import {ref} from 'vue'

const text = ref('')
const seeSum = ref('')

function sumbitText() {
  Request.post({
    headers: {
      'Content-Type': 'text/plain'
    },
    url: `/api/ai`,
    data: `${text.value} + 请对以上代码纠错`
  }).then((res) => {
    // console.log(res)
    seeSum.value = res
  })
}
</script>

<style scoped lang="less">
.code-promote {
  color: #000;
  .input-code, .output-code {
    .top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
