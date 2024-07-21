<template>
  <div class="ppt-message-box">
    <div class="exit" @click="handleroutline1ExitClick">
      <el-icon class="exit-icon"
        ><Close style="width: 20px; height: 20px"
      /></el-icon>
    </div>
    <div class="ppt-nav-title">
      <h2 style="text-align: left; margin: 20px">ppt大纲</h2>
    </div>
    <div class="custom-tree-container">
      <el-tree
        ref="treeRef"
        style="max-width: 300px"
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        highlight-current
        :expand-on-click-node="false"
        :props="defaultProps"
        class="custom-tree"
      >
        <template #default="{ node, data }">
          <span class="custom-tree-node">
            <span>{{ node.label }}</span>
            <span>
              <a style="margin-left: 38px" @click="handlerEdit(data, node)"
                ><el-button
                  style="width: 12px; height: 12px"
                  type="info"
                  plain
                  :icon="Edit"
                  circle
              /></a>
              <a style="margin-left: 8px" @click="append(data)"
                ><el-button
                  style="width: 12px; height: 12px"
                  type="sucess"
                  plain
                  :icon="CirclePlusFilled"
                  circle
              /></a>
              <a style="margin-left: 8px" @click="remove(node, data)"
                ><el-button
                  style="width: 12px; height: 12px"
                  type="danger"
                  plain
                  :icon="Delete"
                  circle
              /></a>
            </span>
          </span>
        </template>
      </el-tree>
      <div class="edit-box" v-if="showEditBox">
        <input type="text" v-model="text" />
        <div class="fun-bar">
          <div class="bars">
            <el-button class="cannel" @click="handlerCannelEditClick()"
              >取消</el-button
            >
            <el-button
              type="primary"
              class="confirm"
              @click="handlerFinishEditClick()"
              >完成</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="fun-bar" style="text-align: right; margin-right: 30px">
      <div class="bars">
        <el-button class="cannel" @click="handleroutline1CannelClick()"
          >取消</el-button
        >
        <el-button
          type="primary"
          class="confirm"
          @click="handleroutline1NextClick()"
          >下一步</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  MoreFilled,
  List,
  ChatLineSquare,
  DocumentChecked
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { outline } from '@/assets/data/ppt-outline'
import {
  AddLocation,
  Check,
  CirclePlusFilled,
  Delete,
  Edit
} from '@element-plus/icons-vue'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

const text = ref('')
const showEditBox = ref(false)
const emit = defineEmits(['ppt-outline-exit', 'ppt-outline-next'])

const treeRef = ref<InstanceType<typeof ElTree>>()

let id = 1000

const editId = ref(0)
const editNode = ref()

const handlerEdit = (data1: Tree, node: Node) => {
  showEditBox.value = true
  text.value = data1.label
  editId.value = data1.id
  editNode.value = node
}

const handlerCannelEditClick = () => {
  showEditBox.value = false
}

const handlerFinishEditClick = () => {
  if (data.value[0].id === editId.value) {
    data.value[0].label = text.value
  }
  for (let k = 0; k < data.value[0].children.length; k++) {
    if (data.value[0].children[k].id === editId.value) {
      data.value[0].children[k].label = text.value
      showEditBox.value = false
      return
    }
    for (let j = 0; j < data.value[0].children[k].children.length; j++) {
      if (data.value[0].children[k].children[j].id === editId.value) {
        data.value[0].children[k].children[j].label = text.value
        showEditBox.value = false
        return
      }
      for (
        let w = 0;
        w < data.value[0].children[k].children[j].children.length;
        w++
      ) {
        if (
          data.value[0].children[k].children[j].children[w].id === editId.value
        ) {
          data.value[0].children[k].children[j].children[w].label = text.value
          showEditBox.value = false
          return
        }
      }
    }
  }
  showEditBox.value = false
}

const append = (data1: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data1.children) {
    data1.children = []
  }
  data1.children.push(newChild)
  data.value = [...data.value]
}

const remove = (node: Node, data1: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data1.id)
  children.splice(index, 1)
  data.value = [...data.value]
}

const getCheckedNodes = () => {
  console.log(treeRef.value!.getCheckedNodes(false, false))
}
const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false))
}
const setCheckedNodes = () => {
  treeRef.value!.setCheckedNodes(
    [
      {
        id: 5,
        label: 'Level two 2-1'
      },
      {
        id: 9,
        label: 'Level three 1-1-1'
      }
    ] as Node[],
    false
  )
}
const setCheckedKeys = () => {
  treeRef.value!.setCheckedKeys([148561523], false)
}
const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false)
}

const pushNewNodes = () => {
  data.value.push({
    id: 9,
    label: 'Level three 1-1-1'
  })
}

const defaultProps = {
  children: 'children',
  label: 'label'
}

const data: any = ref([])

data.value.push({
  id: 0,
  label: '',
  children: []
})
data.value[0].id = outline.id
data.value[0].label = outline.title
for (let i = 0; i < outline.chapters.length; i++) {
  data.value[0].children.push({
    id: 0,
    label: '',
    children: []
  })
  data.value[0].children[i].id = outline.chapters[i].id
  data.value[0].children[i].label = outline.chapters[i].chapterTitle
  for (let j = 0; j < outline.chapters[i].chapterContents.length; j++) {
    data.value[0].children[i].children.push({
      id: 0,
      label: '',
      children: []
    })
    data.value[0].children[i].children[j].id =
      outline.chapters[i].chapterContents[j].id
    data.value[0].children[i].children[j].label =
      outline.chapters[i].chapterContents[j].chapterTitle
  }
}
console.log(data)

const handleroutline1CannelClick = () => {
  console.log("ppt-outline-exit")
  emit('ppt-outline-exit')
}

const handleroutline1ExitClick = () => {
  console.log("ppt-outline-exit")
  emit('ppt-outline-exit')
}

const handleroutline1NextClick = () => {
  for (let k = 0; k < outline.chapters.length; k++) {
    for (let i = 0; i < treeRef.value!.getCheckedKeys(false).length; i++) {
        if (treeRef.value!.getCheckedKeys(false)[i] === outline.chapters[k].id) {
          outline.chapters[k].chapterTitle =
            treeRef.value!.getCheckedNodes(false)[i].label
        }
    }  
    for (let j = 0; j < outline.chapters[k].chapterContents.length; j++) {
      let flag = false
      for (let i = 0; i < treeRef.value!.getCheckedKeys(true).length; i++) {
        if (
          treeRef.value!.getCheckedKeys(true)[i] ===
          outline.chapters[k].chapterContents[j].id
        ) {
          flag = true
          outline.chapters[k].chapterContents[j].chapterTitle =
            treeRef.value!.getCheckedNodes(true)[i].label
        }
      }
      if (!flag) {
        outline.chapters[k].chapterContents.splice(j, 1)
      }
    }
  }
  emit('ppt-outline-next', outline)
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
  height: 660px;
  margin: auto;
  margin-top: -108px;
  padding: 0;
  border-radius: 20px;
  // background: rgba(255, 219, 213, 1);
  background: #eee;
  z-index: 99;
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
  .custom-tree-container {
    width: 520px;
    height: 550px;
    overflow: auto;
    margin: 0 auto;
    .custom-tree {
      margin: 0 auto;
    }
    .edit-box {
      position: fixed;
      left: 730px;
      top: 300px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 120px;

      background-color: #f0f;
      text-align: center;
      // line-height: 120px;
    }
  }
}
</style>
