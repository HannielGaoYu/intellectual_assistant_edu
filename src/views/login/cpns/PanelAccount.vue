<template>
  <div class="panel-account">
    <el-form
      :model="account"
      :rules="accountRules"
      label-width="60px"
      size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { IAccount } from '../../../type/types'
import { type FormRules, type ElForm, ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/useStorage'
// import { LOGIN_TOKEN } from '@/global/contsants';

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

const account = reactive<IAccount>({
  name: localCache.getStorage(CACHE_NAME) ?? '',
  password: localCache.getStorage(CACHE_PASSWORD) ?? ''
})

const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息', trigger: 'blur' },
    {
      
      message: '必须是3~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须至少6位数字或字母组成~',
      trigger: 'blur'
    }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()

function loginAction(isRemPwd: boolean) {
  formRef?.value?.validate((valid) => {
    if (valid) {
      const name = account.name
      const password = account.password
      loginStore.loginAccountAction({number: 1 ,username: name, password }).then(() => {
        if (isRemPwd) {
          localCache.setStorage(CACHE_NAME, name)
          localCache.setStorage(CACHE_PASSWORD, password)
        } else {
          localCache.removeStorage(CACHE_NAME)
          localCache.removeStorage(CACHE_PASSWORD)
        }
      })
      setTimeout(() => {
        
      }, 500)
    } else {
    
    }
  })
}

defineExpose({ loginAction })
</script>

<style scoped lang="less">
.panel-account {
  color: #fff;
  background-color: #fff rgba(255, 255, 255, 0.1) !important;
}
</style>
