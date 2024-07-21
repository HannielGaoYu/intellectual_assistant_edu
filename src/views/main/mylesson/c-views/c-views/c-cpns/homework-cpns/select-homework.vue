<template>
  <div class="select-homework">
    <div style="font-size: 20px; margin-top: 20px; font-weight: 550">
      选择题
    </div>
    <template v-for="(item, index) in exercises[0]">
      <div class="main-homework">
        <div class="content">{{ index + 1 }}.{{ item.exercise.content }}</div>
        <div class="opstions">
          <template v-for="(option, index) in item.exercise.options">
            <div class="item">
              {{ option.letter }}. {{ option.description }}
            </div>
          </template>
        </div>
        <div class="opstion-bar">
          <el-radio-group v-model="item.answer">
            <el-radio value="A" size="large"
              ><span style="font-size: 16px">A</span></el-radio
            >
            <el-radio value="B" size="large"
              ><span style="font-size: 16px">B</span></el-radio
            >
            <el-radio value="C" size="large"
              ><span style="font-size: 16px">C</span></el-radio
            >
            <el-radio value="D" size="large"
              ><span style="font-size: 16px">D</span></el-radio
            >
          </el-radio-group>
        </div>
      </div>
    </template>
    <div style="font-size: 20px; margin-top: 20px; font-weight: 550">
      编程题
    </div>
    <template v-for="(item, index) in exercises[1]">
      <div class="main-homework">
        <div class="content">{{ index + 1 }}.{{ item.exercise.content }}</div>
        <div class="answer">
          <!-- <div class="hljs-container" codetype="JAVA" v-code>
            <highlightjs
              language="JAVA"
              :autodetect="false"
              :code="item.exercise.answer"
            ></highlightjs>
          </div>

          <el-input
            v-model="item.exercise.answer"
            style="width: 740px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
          /> -->
          <el-input
            v-model="item.answer"
            style="width: 740px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="请输入答案"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Request from '@/service'
import { ref, watch } from 'vue'
import vCode from './line'
import { localCache } from '@/utils/useStorage';
import useMylessonStore from '@/store/main/mylesson';
import { storeToRefs } from 'pinia';

const exercises: any = ref([])
// const sectionId = sessionStorage.getItem('sectionId1')
// const id = localCache.getStorage('userInfo').id
Request.get({
  url: `/sections/${sessionStorage.getItem('sectionId1')}/records/${localCache.getStorage('userInfo').id}`
}).then((res) => {
  console.log(res)
  exercises.value = res
})

const mylessonStore =  useMylessonStore()
mylessonStore.exercises = exercises.value

setInterval(() => {
  mylessonStore.exercises = exercises.value
}, 3000)

// watch(exercises, (newValue: any, OldValue: any) => {
//     console.log("数据变化了", `新值是：${newValue}`, `旧值是${OldValue}`)
//     // onCleanup(() => {
//     //     console.log("清除副作用");
//     // });
// });



// mylessonStore.getStudentExercisesAction(sectionId, id)
// const { exercises } = storeToRefs(mylessonStore)

</script>

<style scoped lang="less">
.select-homework {
  .main-homework {
    box-sizing: border-box;
    margin: 0 10px;
    margin-top: 13px;
    .content {
      font-size: 18px;
      font-weight: 600;
    }
    .opstions {
      margin-left: 30px;
      font-size: 16px;
      .item {
        margin-top: 10px;
      }
    }
    .opstion-bar {
      display: flex;
      align-items: center;
      .btn {
        margin: 10px 12px;
        padding: 5px 13px;
        border: 2px solid #337ecc;
        border-radius: 10px;
      }
      .btn:hover {
        background-color: #a0cfff;
        cursor: pointer;
      }
    }
  }
}
</style>
