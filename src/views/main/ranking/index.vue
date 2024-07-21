<template>
  <div class="ranking">
    <div class="select-lesson">
      <h2>排行榜</h2>
      <div class="right">
        <el-select
          v-model="value"
          :placeholder="options[0]?.name"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            @click="handlerClick"
          />
        </el-select>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      align="center"
      style="width: 100%"
      class="table"
    >
      <el-table-column prop="order" align="center" label="排名" width="150" />
      <el-table-column
        prop="student.name"
        align="center"
        label="姓名"
        width="150"
      />
      <el-table-column
        prop="exerciseNumber"
        align="center"
        label="总题数"
      />
      <el-table-column
        prop="completionNumber"
        align="center"
        label="做题数量"
      /><el-table-column
        prop="completionPercentage"
        align="center"
        label="完成率"
      /><el-table-column
        prop="correctionNumber"
        align="center"
        label="正确题数"
      /><el-table-column
        prop="completionNumber"
        align="center"
        label="做题数量"
      />
      <el-table-column prop="exerciseNumber" align="center" label="总题数量" />
      <el-table-column
        prop="correctionPercentage"
        align="center"
        label="正确率"
      />
      <!-- <el-table-column prop="`${correctionNumber/completionNumber}`" align="center" label="正确率" /> -->
      <el-table-column prop="integral" align="center" label="积分" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import Request from '@/service'
import { localCache } from '@/utils/useStorage'
import { ref } from 'vue'

const tableData = ref([])
const options: any = ref([])

if (localCache.getStorage('userInfo').user.role === 'student') {
  Request.get({
    url: `/courses/simple/student/${localCache.getStorage('userInfo').id}`
  }).then((res) => {
    options.value = res
  })
} else {
  Request.get({
    url: `/courses/simple/teacher/${localCache.getStorage('userInfo').id}`
  }).then((res) => {
    options.value = res
  })
}


Request.get({
  url: `/studentPerformance/AllStuToCourse/${sessionStorage.getItem('c')}`
}).then((res) => {
  tableData.value = res
})

const value = ref('')

const handlerClick = () => {
  Request.get({
    url: `/studentPerformance/AllStuToCourse/${value.value}`
  }).then((res) => {
    tableData.value = res
  })
}
</script>
<style scoped lang="less">
.ranking {
  color: #000;
  margin: 16px;
  .select-lesson {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .table {
    text-align: center;
  }
}
</style>
