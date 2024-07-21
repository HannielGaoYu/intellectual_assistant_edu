<template>
  <div class="large-model">
    <div class="show-dialogue test-1" ref="containerRef">
      <template v-for="(item, index) in dialogue">
        <div
          v-if="item?.answer !== undefined"
          class="item answer"
          style="text-align: left"
        >
          {{ item.answer }}
        </div>
        <div v-else style="text-align: right" class="item inquire">
          {{ item }}
        </div>
      </template>
    </div>
    <div class="input-content">
      <el-input
        v-model="text"
        :autosize="{ minRows: 1, maxRows: 4 }"
        type="textarea"
        placeholder="请输入描述"
        class="input"
        size="large"
        @keyup.enter="send(text)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const text = ref('')
const message = ref('')
const dialogue: any = ref([])
dialogue.value.push({ answer: '欢迎使用星火大模型' })

let signUrl = 'ws://localhost:8080/ws/chat'
let sock: any

const containerRef = ref();
 
 
watch(dialogue.length,()=>{
    nextTick(()=>{
        scrollBottom();
    });
})
 
const scrollBottom = ()=>{
    containerRef.value.scrollTop = containerRef.value.scrollHeight;
}

function createConntent() {
  return new WebSocket(signUrl)
}

function send(text1: string) {
  dialogue.value.push(text.value)
  let len = dialogue.value.length
  text.value = ''
  if (sock?.readyState !== 3 && sock?.readyState !== undefined) {
    sock.close()
  }
  sock = createConntent()

  if (sock.readyState === 0) {
    setTimeout(() => {
      if (sock.readyState === 1) {
        sock.send(
          JSON.stringify({
            userId: '1',
            question: `${text1}`
          })
        )
      }
      sock.onmessage = function (e: any) {
        const data = JSON.parse(e.data)
        message.value = data.answer
        dialogue.value[len] = data
      }
    }, 1000)
  }
}
</script>

<style scoped lang="less">
.large-model {
  position: relative;
  box-sizing: border-box;
  height: 100px;
  margin: 10px;
  color: #000;
  .show-dialogue {
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    height: 600px;
    display: flex;
    flex-direction: column;
    .item {
      max-width: 800px;
      width: fit-content;
      padding: 10px 20px;
      border-radius: 20px;
      background-color: #fff;
      margin-bottom: 18px;
      margin-right: 16px;
    }
    .item.inquire {
      
      background-color: #0f0;
      align-self: flex-end;
    }
  }
  .test-1::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .test-1::-webkit-scrollbar-thumb {
    /*滚动条里面小方块--纯色*/
    /*border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(23,161,230,1);*/
    /*滚动条里面小方块--变化色*/
    border-radius: 8px;
    background-color: rgb(23, 243, 255);
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }

  .test-1::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ededed;
  }

  .input-content {
    position: fixed;
    bottom: 10px;
    width: 100%;
  }
}
</style>
