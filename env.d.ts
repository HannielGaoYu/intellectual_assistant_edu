/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module 'vue-codemirror' {
  import CodeMirror from '@types/codemirror'
  const component: CodeMirror
  export default component
}

//记得在env.d.ts配置包的
declare module 'monaco-editor'
