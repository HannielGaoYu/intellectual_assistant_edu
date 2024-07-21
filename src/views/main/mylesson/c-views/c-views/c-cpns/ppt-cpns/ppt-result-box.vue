<template>
  <div class="ppt-message-box">
    <div class="exit" @click="handlerResultBoxExitClick">
      <el-icon class="exit-icon"
        ><Close style="width: 20px; height: 20px"
      /></el-icon>
    </div>
    <div class="ppt-nav-title">
      <h2 style="text-align: left; margin: 20px;">Result</h2>
    </div>
    <h3 style="margin: 0 auto; margin-left: 120px;" v-if="!isEnd">正在生成中...</h3>
    <h3 style="margin: 0 auto; margin-left: 120px;" v-if="isEnd">成功</h3>
    <div class="fun-bar" style="text-align: right; margin-right: 30px;">
      <div class="bars">
        <el-button class="cannel" @click="handlerResultBoxCannelClick()">取消</el-button>
        <el-button type="primary" class="confirm" :disabled="!isEnd" @click="handlerResultNextClick()">完成</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import Request from '@/service';
import { MoreFilled, List, ChatLineSquare, DocumentChecked } from '@element-plus/icons-vue'

const router = useRouter()

const isEnd = ref(false)

const props = defineProps(['data'])
console.log(props.data)
const emit = defineEmits(['ppt-Result-exit', 'ppt-Result-next'])

Request.post({
  url: `sections/generatePPT/${sessionStorage.getItem('sectionId1')}/java集合/lightblue`,
  data: props.data
}).then(res => {
  console.log(res)
  isEnd.value = true
})

const handlerResultBoxExitClick = () => {
  emit('ppt-Result-exit')
}

const handlerResultBoxCannelClick = () => {
  emit('ppt-Result-exit')
}

const handlerResultNextClick = () => {
  emit('ppt-Result-next')
  location.reload()
}

</script>

<style scoped lang="less">
.ppt-message-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 330px;
  height: 200px;
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
