<template>
  <div class="use-model">
    <div class="left">
      <div class="title-icon">
        <img src="../../../../assets/img/image1.png" alt="">
      </div>
      <div class="show-tips">
        <div class="tip">python</div>
        <div class="tip">java</div>
        <div class="tip">spring</div>
        <div class="tip">vue</div>
        <div class="tip">react</div>
        <div class="tip">js</div>
      </div>
    </div>
    <div class="right">
      <div class="talk"></div>
      <div class="input-content">
        <el-input
          v-model="text"
          :autosize="{ minRows: 4, maxRows: 4 }"
          type="textarea"
          placeholder="请输入描述"
          class="input"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const text = ref('')
</script>

<style scoped lang="less">
  .use-model {
    display: flex;
    height: 350px;
    .left {
      flex: 1;
      .title-icon {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
      .show-tips {
        display: flex;
        flex-wrap: wrap;
        margin-left: 23px;
        .tip {
          width: 120px;
          height: 70px;
          margin: 40px;
          border-radius: 20px;
          text-align: center;
          line-height: 70px;
          background-color: rgba(0, 243, 243, 0.1);
        }
      }
    }
    .right {
      flex: 1;
      .talk {
        height: 260px;
      }
    }
  }
</style>