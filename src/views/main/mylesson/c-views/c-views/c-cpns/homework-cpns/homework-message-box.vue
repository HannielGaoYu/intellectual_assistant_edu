<template>
  <div class="homework-message-box">
    <div class="exit" @click="handlerHomeorkBoxExit">
      <el-icon class="exit-icon"
        ><Close style="width: 20px; height: 20px"
      /></el-icon>
    </div>
    <div class="box-main">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        style="max-width: 300px"
        status-icon
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="你的需求" prop="need">
          <el-input v-model="ruleForm.need" />
        </el-form-item>
        <el-form-item label="选择题数" prop="select">
          <el-input v-model="ruleForm.select" />
        </el-form-item>
        <el-form-item label="编程题数" prop="code">
          <el-input v-model="ruleForm.code" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Request from '@/service'
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
const emit = defineEmits(['homework-message-box'])
const ruleFormRef = ref<FormInstance>()

const handlerHomeorkBoxExit = () => {
  emit('homework-message-box')
}

const ruleForm = reactive({
  need: '',
  select: 0,
  code: 0
})

const submitForm = (formEl: FormInstance | undefined) => {
  Request.post({
    headers: {
      'Content-Type': 'text/plain'
    },
    url: `/api/ai`,
    data: `我想要让你生成关于“${ruleForm.need}”的选择题以及编程题，请按照以下格式给我生成，${ruleForm.select}题选择题和${ruleForm.code}题编程题,返回的数据可以直接供前端使用,格式如下： [ { "type": "选择题", "content": "这是一个选择题77", "correctAnswer": "B", "difficultyLevel": 1, "options": [ { "letter": "A", "description": "选项A" }, { "letter": "B", "description": "选项B" }, { "letter": "C", "description": "选项C" }, { "letter": "D", "description": "选项D" } ] }, { "type": "选择题", "content": "这是一个选择题777", "correctAnswer": "A", "difficultyLevel": 1, "options": [ { "letter": "A", "description": "选项A" }, { "letter": "B", "description": "选项B" }, { "letter": "C", "description": "选项C" }, { "letter": "D", "description": "选项D" } ] }, { "type": "编程题", "content": "这是一个编程题77", "correctAnswer": "参考答案", "difficultyLevel": 2, "answer": "参考答案或解题思路" } ]`
  }).then((res) => {
    // console.log(res)
    Request.post({
      url: `/sections/exercises/${sessionStorage.getItem('sectionId1')}`,
      data: res
    }).then(res => {
      emit('homework-message-box')
      location.reload()
    })
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="less">
.homework-message-box {
  position: fixed;
  left: 333px;
  top: 100px;
  right: 0;
  bottom: 0;
  width: 420px;
  height: 280px;
  border-radius: 20px;
  margin: auto;
  color: #000;
  background-color: rgb(238, 243, 255);
  .exit {
    position: relative;
    margin-bottom: 50px;
    .exit-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  .box-main {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
