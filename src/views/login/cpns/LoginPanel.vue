<template>
  <div class="login-panel">
    <div class="title">登录智慧助学</div>
    <div class="tabs">
      <el-tabs type="border-card" stretch :model-value="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><User /></el-icon>
              <div class="text">账号登陆</div>
            </div>
          </template>
          <lo ref="accountRef"/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      stretch
      @click="handleLoginBtnClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/useStorage';
import PanelAccount from './PanelAccount.vue'
import {ref, watch, type Component,} from 'vue'

function fg(po: Component) {
  return po
}

const lo = fg(PanelAccount)
const activeName = ref('account')
const isRemPwd = ref(localCache.getStorage('isRemPwd') ?? false)
watch(isRemPwd, (newValue) => {
  localCache.setStorage('isRemPwd', newValue)
})
const accountRef = ref<InstanceType<typeof PanelAccount>>()

function handleLoginBtnClick() {
  // console.log(accountRef.value)
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    console.log('用户在使用手机登陆')
  }
}

</script>

<style scoped lang="less">
  .login-panel {
    width: 330px;
    margin: 0 auto;
    
    margin-bottom: 150px;

    .title {
      font-size: 38px !important;
      font-weight: 700;
      text-align: center;
      margin-bottom: 18px;
    }

    .label {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        margin-left: 6px;
      }
    }
    .control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
    }
    .login-btn {
      width: 100%;
      margin-top: 10px;
    }
  }
</style>
