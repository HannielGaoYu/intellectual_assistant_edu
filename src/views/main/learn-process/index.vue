<template>
  <div class="learn-process">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="course.name" align="center" label="课程" width="180" />
      <el-table-column prop="exerciseNumber" align="center" label="总题数" width="180" />
      <el-table-column prop="completionNumber" align="center" label="完成题数" />
      <el-table-column prop="completionPercentage" align="center" label="完成率" />
      <el-table-column prop="correctionNumber" align="center" label="正确题数" />
      <el-table-column prop="correctionPercentage" align="center" label="正确率" />
      <el-table-column prop="integral" align="center" label="分数" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import Request from '@/service';
import { localCache } from '@/utils/useStorage';
import {ref} from 'vue'
const tableData = ref([])

Request.get({
  url: `studentPerformance/AllCourseToStu/${localCache.getStorage('userInfo').id}`
}).then(res => {
  tableData.value = res
})

</script>

<style scoped lang="less">
.learn-process {
  margin: 10px;
  box-sizing: border-box;
  color: #000;
}
</style>
