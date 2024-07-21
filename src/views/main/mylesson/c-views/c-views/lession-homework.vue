<template>
  <div class="lession-homework">
    <div class="top">
      <div class="left">作业</div>
      <div class="right" v-if="userInfo.user.role !== 'student'">
        <el-button type="primary" round @click="ShowMessageBox"
          >AI添加习题</el-button
        >
      </div>
    </div>
    <select-homework v-if="userInfo.user.role === 'student'"></select-homework>
    <homework-teather
      v-if="userInfo.user.role === 'teacher'"
    ></homework-teather>
    <home-message-box
      v-if="isShowMessageBox"
      @homework-message-box="ShowMessageBox"
    ></home-message-box>
    <div class="submit">
      <el-button type="primary" size="large"  v-if="userInfo.user.role === 'student' && !isStudentSubmit" @click="sumbit">提交</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue'
import SelectHomework from './c-cpns/homework-cpns/select-homework.vue'
import HomeworkTeather from './c-cpns/homework-cpns/homework-teather.vue'
import HomeMessageBox from './c-cpns/homework-cpns/homework-message-box.vue'
import { localCache } from '@/utils/useStorage'
import Request from '@/service'
import {useRouter} from 'vue-router'
import useMylessonStore from '@/store/main/mylesson'
import { storeToRefs } from 'pinia'
const userInfo = localCache.getStorage('userInfo')
const value = ref('')

const router = useRouter()
const isShowMessageBox = ref(false)
const isStudentSubmit = ref(false)

const ShowMessageBox = () => {
  isShowMessageBox.value = !isShowMessageBox.value
}

const mylessonStore = useMylessonStore()


function sumbit() {
  console.log(mylessonStore.exercises)
  let exercises = toRaw(mylessonStore.exercises)
  exercises = [...exercises[0], ...exercises[1]]
  console.log(exercises)
  Request.post({
    url: `/sections/${sessionStorage.getItem('c')}/${sessionStorage.getItem('se')}/records/${localCache.getStorage('userInfo').user.id}`,
    data: exercises
  }).then(res => {
    console.log(res)
    router.push(`/main/mylession/${sessionStorage.getItem('c')}/${sessionStorage.getItem('ch')}/${sessionStorage.getItem('se')}/summary`)
  })
}

</script>

<style scoped lang="less">
.lession-homework {
  position: relative;
  color: #000;
  overflow: auto;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #606266;
    .left {
      font-size: 22px;
      font-weight: 600;
    }
  }

  .submit {
    text-align: right;
    margin-bottom: 20px;
  }
}
</style>
