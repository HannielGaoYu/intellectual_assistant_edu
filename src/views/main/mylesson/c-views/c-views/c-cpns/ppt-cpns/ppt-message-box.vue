<template>
  <div class="ppt-message-box">
    <div class="exit" @click="handlerMessageBoxExitClick">
      <el-icon class="exit-icon"
        ><Close style="width: 20px; height: 20px"
      /></el-icon>
    </div>
    <div class="ppt-nav-title">
      <h2 style="text-align: left; margin: 20px;">创建ppt</h2>
    </div>
    <div class="timeline">
      <div class="el-timeline">
        <el-timeline style="max-width: 300px" center="true">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <div class="fun-bar" style="text-align: right; margin-right: 30px;">
      <div class="bars">
        <el-button class="cannel" @click="handlerMessageBoxCannelClick()">取消</el-button>
        <el-button type="primary" class="confirm" @click="handlerMessageBoxNextClick()">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoreFilled, List, ChatLineSquare, DocumentChecked } from '@element-plus/icons-vue'

const activities = [
  {
    content: '请输入需求',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled
  },
  {
    content: '生成大纲',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#FF6347',
    icon: ChatLineSquare
  },
  {
    content: '生成ppt',
    timestamp: '2018-04-03 20:46',
    color: '#f00',
    size: 'large',
    icon: DocumentChecked
  },
]

const emit = defineEmits(['ppt-message-exit', 'ppt-message-next'])

const handlerMessageBoxExitClick = () => {
  emit('ppt-message-exit')
}

const handlerMessageBoxCannelClick = () => {
  emit('ppt-message-exit')
}

const handlerMessageBoxNextClick = () => {
  emit('ppt-message-next')
}

</script>

<style scoped lang="less">
.ppt-message-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 520px;
  height: 320px;
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
  .timeline {
    .el-timeline {
      margin-top: 10px;
      margin-left: 100px;
    }
  }
}
</style>
