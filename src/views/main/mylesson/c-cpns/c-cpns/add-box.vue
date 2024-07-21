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
        <el-form-item label="你需要创建的课程名" prop="need">
          <el-input v-model="ruleForm.need" />
        </el-form-item>
        <el-form-item label="课程章数" prop="select">
          <el-input v-model="ruleForm.select" />
        </el-form-item>
        <el-form-item label="课程节数" prop="code">
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
import { localCache } from '@/utils/useStorage';
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
const emit = defineEmits(['add-box'])
const ruleFormRef = ref<FormInstance>()

const handlerHomeorkBoxExit = () => {
  emit('add-box')
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
    data: `生成名称为${ruleForm.need}的课程，包含章和节，包含${ruleForm.select}章，每章包含${ruleForm.code}节，根据以下格式生成前端可直接使用的数据：{ "name": "计算机科学导论AI", "description": "介绍计算机科学的基本概念和原理", "chapters": [ { "name": "第一章 Java语言概述AI", "orderNumber": 1, "sections": [ { "name": "Java语言入门教程", "orderNumber": 1 }, { "name": "c++", "orderNumber": 2 } ] }, { "name": "第二章 c语言概述AI", "orderNumber": 2 } ] }`
  }).then((res) => {
    console.log(res)
    Request.post({
      url: `/courses/createCourses/${localCache.getStorage('userInfo').id}`,
      data: res
    }).then(resa => {
      emit('add-box')
      console.log(resa)
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
  z-index: 122;
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
