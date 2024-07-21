import { ref } from 'vue'

const text = ref('')

let signUrl = 'ws://localhost:8080/ws/chat'
let sock = createConntent()

function createConntent() {
  return new WebSocket(signUrl)
}

export function send(text1: string, seeSum: any) {
  // sock.close()
  // seeSum.value = ''
  sock = createConntent()

  setTimeout(() => {

  },600)

  // sock.send(
  //   JSON.stringify({
  //     userId: '1',
  //     question: `${text1}`
  //   })
  // )

  sock.onopen = function() {
    console.log("opening")
    sock.send(
      JSON.stringify({
        userId: '1',
        question: `${text1}`
      })
    )
  }
  sock.onmessage = function (e: any) {
    console.log(e.data)
    const data = JSON.parse(e.data)
    seeSum.value = data.answer
  }
  // return text.value
}

export default send
