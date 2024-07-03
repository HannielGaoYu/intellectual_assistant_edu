<template>
  <div class="learn-process">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="lession" align="center" label="课程" width="180" />
      <el-table-column prop="totalQ" align="center" label="总题数" width="180" />
      <el-table-column prop="waitQ" align="center" label="待完成题数" />
      <el-table-column prop="finshQ" align="center" label="完成率" />
      <el-table-column prop="score" align="center" label="分数" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    lession: "java",
    totalQ: 100,
    waitQ: 40,
    finshQ: '60%',
    score: 50,
  },
  {
    lession: "java",
    totalQ: 100,
    waitQ: 40,
    finshQ: '60%',
    score: 50,
  },
  {
    lession: "java",
    totalQ: 100,
    waitQ: 40,
    finshQ: '60%',
    score: 50,
  },
  {
    lession: "java",
    totalQ: 100,
    waitQ: 40,
    finshQ: '60%',
    score: 50,
  },
  {
    lession: "java",
    totalQ: 100,
    waitQ: 40,
    finshQ: '60%',
    score: 50,
  },
]
</script>

<style scoped lang="less">
.learn-process {
  margin: 10px;
  box-sizing: border-box;
  color: #000;
}
</style>
