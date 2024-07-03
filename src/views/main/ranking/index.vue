<template>
  <div class="ranking">
    <el-table
      :data="tableData"
      border
      align="center"
      style="width: 100%"
      class="table"
    >
      <el-table-column prop="rank" align="center" label="排名" width="150" />
      <el-table-column prop="name" align="center" label="姓名" width="150" />
      <el-table-column prop="done" align="center" label="做题数量" />
      <el-table-column prop="hours" align="center" label="学习时长" />
      <el-table-column prop="completion_rate" align="center" label="完成率" />
      <el-table-column prop="correct" align="center" label="正确数量" />
      <el-table-column prop="correctness" align="center" label="正确率" />
      <el-table-column prop="wrong" align="center" label="错误数量" />
      <el-table-column prop="intergral" align="center" label="积分" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    rank: 1,
    name: 'Tom',
    done: 50,
    hours: 1,
    completion_rate: '100%',
    correct: 40,
    correctness: '80%',
    wrong: 10,
    intergral: 200
  },
  {
    rank: 1,
    name: 'Tom',
    done: 50,
    hours: 1,
    completion_rate: '100%',
    correct: 40,
    correctness: '80%',
    wrong: 10,
    intergral: 200
  },
  {
    rank: 1,
    name: 'Tom',
    done: 50,
    hours: 1,
    completion_rate: '100%',
    correct: 40,
    correctness: '80%',
    wrong: 10,
    intergral: 200
  },
  {
    rank: 1,
    name: 'Tom',
    done: 50,
    hours: 1,
    completion_rate: '100%',
    correct: 40,
    correctness: '80%',
    wrong: 10,
    intergral: 200
  },
  {
    rank: 1,
    name: 'Tom',
    done: 50,
    hours: 1,
    completion_rate: '100%',
    correct: 40,
    correctness: '80%',
    wrong: 10,
    intergral: 200
  },
  {
    rank: 1,
    name: 'Tom',
    done: 50,
    hours: 1,
    completion_rate: '100%',
    correct: 40,
    correctness: '80%',
    wrong: 10,
    intergral: 200
  },
  {
    rank: 1,
    name: 'Tom',
    done: 50,
    hours: 1,
    completion_rate: '100%',
    correct: 40,
    correctness: '80%',
    wrong: 10,
    intergral: 200
  },
]
</script>
<style scoped lang="less">
.ranking {
  color: #000;
  margin: 16px;
  .table {
    text-align: center;
  }
}
</style>
