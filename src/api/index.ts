import api from './http'

export const authApi = {
  login: (data: { username: string; password: string; captcha?: string }) =>
    api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  heartbeat: () => api.get('/online/renew'),
  thirdLogin: (data: { username: string; secretSalt: string }) =>
    api.post('/elf/auth/third', data),
}

export const fileApi = {
  upload: (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    return api.post('/system/file/upload', formData)
  },
  uploadBatch: (files: File[]) => {
    const formData = new FormData()
    files.forEach((file) => formData.append('files', file))
    return api.post('/system/file/upload-batch', formData)
  },
  downloadZip: (ids: string[]) =>
    api.get('/system/file/download/zip', { params: { ids: ids.join(',') } }),
}

export const dictApi = {
  getTree: (params: any) => api.post('/system/dict/tree', params),
  getRelated: (types: string[]) => api.post('/system/dict/related', types),
  checkDuplicate: (type: string, id?: string) =>
    api.get('/system/dict/check-type-duplicate', { params: { type, id } }),
  getTypeLabel: (type: string) =>
    api.get('/system/dict/type-label', { params: { type } }),
  getMultiTypeLabel: (types: string[]) =>
    api.post('/system/dict/multi-type-label', types),
}

export const modelApi = {
  // Model CRUD
  list: (params: any) => api.post('/model/list', params),
  getDetail: (id: string) => api.get(`/model/${id}`),
  create: (data: any) => api.post('/model/create', data),
  update: (id: string, data: any) => api.put(`/model/${id}`, data),
  delete: (id: string) => api.delete(`/model/${id}`),

  // Version management
  getVersions: (modelId: string) =>
    api.get(`/model/${modelId}/versions`),
  getVersion: (modelId: string, versionId: string) =>
    api.get(`/model/${modelId}/versions/${versionId}`),
  createVersion: (modelId: string, data: any) =>
    api.post(`/model/${modelId}/versions`, data),
  publishVersion: (modelId: string, versionId: string) =>
    api.post(`/model/${modelId}/versions/${versionId}/publish`),

  // Field rules
  getFieldRules: (modelId: string) =>
    api.get(`/model/${modelId}/field-rules`),
  updateFieldRules: (modelId: string, data: any) =>
    api.put(`/model/${modelId}/field-rules`, data),

  // Visual designer
  saveDesign: (modelId: string, design: any) =>
    api.post(`/model/${modelId}/design`, design),
  getDesign: (modelId: string) => api.get(`/model/${modelId}/design`),

  // Inline editing
  updateField: (modelId: string, fieldId: string, data: any) =>
    api.put(`/model/${modelId}/fields/${fieldId}`, data),

  // List management
  listFields: (modelId: string, params: any) =>
    api.post(`/model/${modelId}/fields/list`, params),
}

export const developApi = {
  listObjects: (params: any) =>
    api.post('/develop/objects/list', params),
  getObject: (id: string) => api.get(`/develop/objects/${id}`),
  createObject: (data: any) => api.post('/develop/objects', data),
  updateObject: (id: string, data: any) =>
    api.put(`/develop/objects/${id}`, data),
  deleteObject: (id: string) => api.delete(`/develop/objects/${id}`),
}
