<template>
  <div class="field-rules">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>属性字段编辑规则</span>
          <el-button type="primary" @click="handleNew">新建规则</el-button>
        </div>
      </template>

      <el-table :data="fieldRules" stripe>
        <el-table-column prop="fieldName" label="字段名称" />
        <el-table-column prop="fieldType" label="字段类型" width="120" />
        <el-table-column prop="validation" label="验证规则" />
        <el-table-column prop="required" label="必填" width="80">
          <template #default="{ row }">
            <el-tag :type="row.required ? 'success' : 'info'">
              {{ row.required ? '是' : '否' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="editable" label="可编辑" width="80">
          <template #default="{ row }">
            <el-tag :type="row.editable ? 'success' : 'warning'">
              {{ row.editable ? '是' : '否' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleEdit(row)">
              编辑
            </el-button>
            <el-button link type="danger" size="small" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Edit Dialog -->
    <el-dialog v-model="dialogVisible" :title="editForm.id ? '编辑规则' : '新建规则'" width="50%">
      <el-form v-model="editForm" label-width="120px">
        <el-form-item label="字段名称" required>
          <el-input v-model="editForm.fieldName" />
        </el-form-item>
        <el-form-item label="字段类型" required>
          <el-select v-model="editForm.fieldType">
            <el-option label="文本" value="text" />
            <el-option label="数字" value="number" />
            <el-option label="日期" value="date" />
            <el-option label="布尔值" value="boolean" />
            <el-option label="下拉选项" value="select" />
            <el-option label="多行文本" value="textarea" />
          </el-select>
        </el-form-item>
        <el-form-item label="验证规则" required>
          <el-input
            v-model="editForm.validation"
            type="textarea"
            rows="3"
            placeholder="e.g., minLength: 5, maxLength: 50"
          />
        </el-form-item>
        <el-form-item label="默认值">
          <el-input v-model="editForm.defaultValue" />
        </el-form-item>
        <el-form-item label="占位符">
          <el-input v-model="editForm.placeholder" />
        </el-form-item>
        <el-form-item label="必填">
          <el-checkbox v-model="editForm.required" />
        </el-form-item>
        <el-form-item label="可编辑">
          <el-checkbox v-model="editForm.editable" />
        </el-form-item>
        <el-form-item label="显示">
          <el-checkbox v-model="editForm.visible" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="editForm.remark" type="textarea" rows="2" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const fieldRules = ref([
  {
    id: '1',
    fieldName: 'username',
    fieldType: 'text',
    validation: 'minLength: 3, maxLength: 50',
    required: true,
    editable: true,
    visible: true,
    defaultValue: '',
    placeholder: '请输入用户名',
    remark: '用户登录名',
  },
  {
    id: '2',
    fieldName: 'email',
    fieldType: 'text',
    validation: 'email format',
    required: true,
    editable: true,
    visible: true,
    defaultValue: '',
    placeholder: '请输入邮箱',
    remark: '用户邮箱地址',
  },
  {
    id: '3',
    fieldName: 'age',
    fieldType: 'number',
    validation: 'min: 0, max: 150',
    required: false,
    editable: true,
    visible: true,
    defaultValue: '',
    placeholder: '请输入年龄',
    remark: '用户年龄',
  },
])

const editForm = ref({
  id: '',
  fieldName: '',
  fieldType: 'text',
  validation: '',
  required: false,
  editable: true,
  visible: true,
  defaultValue: '',
  placeholder: '',
  remark: '',
})

const handleNew = () => {
  editForm.value = {
    id: '',
    fieldName: '',
    fieldType: 'text',
    validation: '',
    required: false,
    editable: true,
    visible: true,
    defaultValue: '',
    placeholder: '',
    remark: '',
  }
  dialogVisible.value = true
}

const handleEdit = (row: any) => {
  editForm.value = { ...row }
  dialogVisible.value = true
}

const handleSave = () => {
  if (!editForm.value.fieldName) {
    ElMessage.error('请填写字段名称')
    return
  }

  if (!editForm.value.id) {
    const newRule = {
      ...editForm.value,
      id: String(fieldRules.value.length + 1),
    }
    fieldRules.value.push(newRule)
    ElMessage.success('规则创建成功')
  } else {
    const index = fieldRules.value.findIndex((rule) => rule.id === editForm.value.id)
    if (index > -1) {
      fieldRules.value[index] = { ...editForm.value }
      ElMessage.success('规则更新成功')
    }
  }
  dialogVisible.value = false
}

const handleDelete = (row: any) => {
  ElMessageBox.confirm('确定要删除此规则吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      const index = fieldRules.value.findIndex((rule) => rule.id === row.id)
      if (index > -1) {
        fieldRules.value.splice(index, 1)
      }
      ElMessage.success('规则删除成功')
    })
    .catch(() => {})
}
</script>

<style scoped>
.field-rules {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
