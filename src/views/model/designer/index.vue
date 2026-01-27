<template>
  <div class="model-designer">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>模型可视化设计器</span>
          <el-space>
            <el-button type="primary" @click="saveDesign">保存设计</el-button>
            <el-button @click="resetDesign">重置</el-button>
          </el-space>
        </div>
      </template>

      <el-row :gutter="20">
        <el-col :md="6">
          <div class="components-panel">
            <h4>组件库</h4>
            <div class="component-item" draggable @dragstart="dragStart">
              <span>文本输入</span>
            </div>
            <div class="component-item" draggable @dragstart="dragStart">
              <span>数字输入</span>
            </div>
            <div class="component-item" draggable @dragstart="dragStart">
              <span>日期选择</span>
            </div>
            <div class="component-item" draggable @dragstart="dragStart">
              <span>下拉选择</span>
            </div>
            <div class="component-item" draggable @dragstart="dragStart">
              <span>复选框</span>
            </div>
            <div class="component-item" draggable @dragstart="dragStart">
              <span>单选框</span>
            </div>
          </div>
        </el-col>

        <el-col :md="12">
          <div
            class="canvas-area"
            @drop="handleDrop"
            @dragover.prevent
            @dragenter.prevent
          >
            <div class="canvas-placeholder" v-if="designItems.length === 0">
              将组件拖入此区域进行设计
            </div>
            <div v-else class="design-items">
              <div
                v-for="(item, index) in designItems"
                :key="index"
                class="design-item"
                @click="selectItem(index)"
                :class="{ active: selectedIndex === index }"
              >
                <span>{{ item }}</span>
                <el-button
                  link
                  type="danger"
                  size="small"
                  @click.stop="removeItem(index)"
                >
                  删除
                </el-button>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :md="6">
          <div class="properties-panel">
            <h4>属性配置</h4>
            <div v-if="selectedIndex !== -1" class="property-form">
              <el-form>
                <el-form-item label="字段名">
                  <el-input v-model="currentItemName" />
                </el-form-item>
                <el-form-item label="字段类型">
                  <el-select v-model="currentItemType">
                    <el-option label="文本" value="text" />
                    <el-option label="数字" value="number" />
                    <el-option label="日期" value="date" />
                  </el-select>
                </el-form-item>
                <el-form-item label="必填项">
                  <el-checkbox v-model="currentItemRequired" />
                </el-form-item>
              </el-form>
            </div>
            <div v-else class="empty-tip">
              请选择一个组件查看属性
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const designItems = ref<string[]>([])
const selectedIndex = ref(-1)
const currentItemName = ref('')
const currentItemType = ref('text')
const currentItemRequired = ref(false)

const dragStart = (event: DragEvent) => {
  const target = event.target as HTMLElement
  event.dataTransfer!.effectAllowed = 'copy'
  event.dataTransfer!.setData('text', target.innerText)
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const data = event.dataTransfer!.getData('text')
  designItems.value.push(data)
  ElMessage.success('组件已添加')
}

const removeItem = (index: number) => {
  designItems.value.splice(index, 1)
  selectedIndex.value = -1
}

const selectItem = (index: number) => {
  selectedIndex.value = index
  currentItemName.value = designItems.value[index]
}

const saveDesign = () => {
  ElMessage.success('设计已保存')
  console.log('Design saved:', designItems.value)
}

const resetDesign = () => {
  designItems.value = []
  selectedIndex.value = -1
  ElMessage.info('已重置')
}
</script>

<style scoped>
.model-designer {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.components-panel {
  background: #f5f7fa;
  padding: 15px;
  border-radius: 4px;
  height: 100%;
}

.components-panel h4,
.properties-panel h4 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
}

.component-item {
  padding: 10px;
  margin-bottom: 8px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: move;
  transition: all 0.3s;
}

.component-item:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-color: #409eff;
}

.canvas-area {
  background: white;
  border: 2px dashed #ddd;
  border-radius: 4px;
  padding: 20px;
  min-height: 400px;
  transition: all 0.3s;
}

.canvas-area:hover {
  border-color: #409eff;
  background-color: #fafbfc;
}

.canvas-placeholder {
  text-align: center;
  color: #999;
  font-size: 14px;
  padding-top: 150px;
}

.design-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.design-item {
  padding: 12px;
  background: #f0f9ff;
  border: 1px solid #b3d8ff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.design-item.active {
  background: #e6f7ff;
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
}

.design-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.properties-panel {
  background: #f5f7fa;
  padding: 15px;
  border-radius: 4px;
  height: 100%;
}

.property-form {
  background: white;
  padding: 15px;
  border-radius: 4px;
}

.empty-tip {
  text-align: center;
  color: #999;
  padding: 30px 10px;
  font-size: 14px;
}
</style>
