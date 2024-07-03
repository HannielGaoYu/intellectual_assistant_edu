<template>
  <div class="my-lesson">
    <h2>my-lesson</h2>
    <input type="text" name="" id="" v-model="text" />
    <input type="submit" value="sub" @click="send(text)" />
    <input type="submit" name="" id="" value="close" @click="close()" />
    <div class="show">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const message = ref('')
let signUrl = 'ws://localhost:8080/ws/chat'
let sock = createConntent()

function createConntent() {
  return new WebSocket(signUrl)
}

sock.onmessage = function (e) {
  console.log(e)
  const data = JSON.parse(e.data)
  message.value = data.answer
}

sock.onopen = function () {
  console.log('opening----')
  console.log(sock)
}

sock.onclose = function () {
  console.log('fefefeffefe')
}

// function send(text: string) {
//   if (sock.readyState !== 3) {
//     sock.close()
//   }
//   sock = createConntent()
//   console.log(sock)
//   if (sock.readyState === 0) {
//     setTimeout(() =>  {
//       if (sock.readyState === 1) {
//         console.log('op')
//         sock.send(
//           JSON.stringify({
//             userId: '1',
//             question: `${text}`
//           })
//         )
//       }
//       sock.onmessage = function (e) {
//         console.log(e)
//         const data = JSON.parse(e.data)
//         message.value = data.answer
//       }
//     }, 1000)
//     console.log('first2')
//   }
// }
function send(text: string) {
  sock.send(
    JSON.stringify({
      userId: '1',
      question: `${text}`
    })
  )
}

function close() {
  console.log('cdcccdcv')
  sock.close()
}
</script>

<style scoped lang="less">
.my-lesson {
  color: #000;
  .show {
    width: 200px;
  }
}
</style>
