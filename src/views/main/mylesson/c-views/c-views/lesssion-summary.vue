<template>
  <div class="lession-summary">
    <div class="top-bar">
      <h2>本节学习总结</h2>
      <el-button type="primary" @click="sumbitText()">生成总结</el-button>
    </div>

    <div class="content">
      <el-input
        v-model="seeSum"
        :autosize="{ minRows: 19, maxRows: 19 }"
        type="textarea"
        placeholder="结果"
        class="input"
        size="large"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Request from '@/service'
import { localCache } from '@/utils/useStorage'
import { ref } from 'vue'
const seeSum = ref()
// Request.get({
//   url: `/sections/${sessionStorage.getItem('sectionId1')}/records/${localCache.getStorage('userInfo').user.id}`
// }).then((res) => {
//   text.value = res
//   console.log(res)
// })

let text:any = null

const sectionId1 = sessionStorage.getItem('sectionId1')
const id =localCache.getStorage('userInfo').user.id
Request.get({
  url: `/sections/${sectionId1}/records/${id}`
}).then(res => {
  text = res
  console.log(text)
})

function sumbitText() {
  Request.post({
    headers: {
      'Content-Type': 'text/plain'
    },
    url: `/api/ai`,
    data: `${JSON.stringify(text)}根据以上学生的做题情况给出总结，总结包含三部分格式如下：
1.作业完成情况：
2.对于错误题目的解析，并给出学生薄弱点及其建议
3.推荐相关资料视频，给出网址`
  }).then((res) => {
    // console.log(res)
    seeSum.value = res
  })
}
</script>

<style scoped lang="less">
.lession-summary {
  color: #000;
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
