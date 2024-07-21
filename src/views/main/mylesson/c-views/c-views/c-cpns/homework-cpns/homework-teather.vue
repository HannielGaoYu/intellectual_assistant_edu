<template>
  <div class="select-homework">
    <div style="font-size: 20px; margin-top: 20px; font-weight: 550">
      选择题
    </div>
    <template v-for="(item, index) in exercises[0]">
      <div class="main-homework">
        <div class="content">
          {{ index + 1 }}.{{ item.content }}
          <el-button
            type="danger"
            :icon="Delete"
            circle
            style="width: 25px; height: 25px; margin-bottom: 5px"
            @click="handlerDetetleExercise(item.id)"
          />
        </div>
        <div class="opstions">
          <template v-for="(option, index) in item.options">
            <div class="item">
              {{ option.letter }}. {{ option.description }}
            </div>
          </template>
        </div>
        <div class="opstion-bar">
          <el-radio-group v-model="item.correctAnswer">
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
    <div
      style="font-size: 20px; margin-top: 20px; font-weight: 550"
      @click="hj"
    >
      编程题
    </div>
    <template v-for="(item, index) in exercises[1]">
      <div class="main-homework">
        <div class="content">
          {{ index + 1 }}.{{ item.content }}
          <el-button
            type="danger"
            :icon="Delete"
            circle
            style="width: 25px; height: 25px; margin-bottom: 5px"
            @click="handlerDetetleExercise(item.id)"
          />
        </div>
        <div class="answer">
          <el-input
            v-model="item.answer"
            style="width: 740px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Request from '@/service'
import { localCache } from '@/utils/useStorage'
import { Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'

const exercises: any = ref([])
Request.get({
  url: `/sections/${localStorage.getItem('sectionId')}/exercises`
}).then((res) => {
  exercises.value = res
  console.log(res)
  console.log('====', localStorage.getItem('sectionId'))
})

function hj() {
  console.log(exercises.value)
}

function handlerDetetleExercise(id: number) {
  Request.delete({
    url: `/sections/exercises/${localStorage.getItem('sectionId')}/${id}`
  }).then((res) => {
    exercises.value = res
  })
}
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
