<template>
  <pre :class="'hx-scroll ' + lineNumbers">
    <code :class="'language-'+ type" v-html="Prism.highlight(code, Prism.languages[type], type)"></code>
 </pre>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import Prism from "prismjs";

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "html",
  },
  isShowlineNumbers: {
    type: Boolean,
    default: false,
  },
});
const lineNumbers = computed(() => {
  return props.isShowlineNumbers ? "line-numbers" : "";
});
onMounted(() => {
  Prism.highlightAll(); //切换菜单重新渲染
});
</script>

