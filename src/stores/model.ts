import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Model {
  id: string
  name: string
  description: string
  version: string
  status: string
  createdAt: string
  updatedAt: string
  fields?: any[]
  layout?: any
}

export interface ModelVersion {
  id: string
  modelId: string
  version: string
  changelog: string
  createdAt: string
  createdBy: string
  status: string
}

export const useModelStore = defineStore('model', () => {
  const models = ref<Model[]>([])
  const currentModel = ref<Model | null>(null)
  const versions = ref<ModelVersion[]>([])
  const loading = ref(false)

  function setModels(data: Model[]) {
    models.value = data
  }

  function setCurrentModel(model: Model) {
    currentModel.value = model
  }

  function setVersions(data: ModelVersion[]) {
    versions.value = data
  }

  function setLoading(state: boolean) {
    loading.value = state
  }

  function addModel(model: Model) {
    models.value.push(model)
  }

  function updateModel(model: Model) {
    const index = models.value.findIndex((m) => m.id === model.id)
    if (index !== -1) {
      models.value[index] = model
    }
  }

  function deleteModel(id: string) {
    models.value = models.value.filter((m) => m.id !== id)
  }

  return {
    models,
    currentModel,
    versions,
    loading,
    setModels,
    setCurrentModel,
    setVersions,
    setLoading,
    addModel,
    updateModel,
    deleteModel,
  }
})
