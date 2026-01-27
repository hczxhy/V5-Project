---
title: 默认模块
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# 默认模块

Base URLs:

# Authentication

* API Key (apikey-header-Satoken)
    - Parameter Name: **Satoken**, in: header. 

- HTTP Authentication, scheme: bearer

# 登录认证

## POST 登录

POST /auth/login

> Body 请求参数

```json
{
  "username": "admin",
  "password": "123",
  "captcha": "-1",
  "traceId": "123"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 第三方登录

POST /elf/auth/third

> Body 请求参数

```json
{
  "username": "test_sso",
  "secretSalt": "CZLKTFTU"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 心跳

GET /online/renew

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 系统管理/文件管理

## POST 文件上传

POST /system/file/upload

> Body 请求参数

```yaml
file: file://C:\Users\lenovo\Downloads\1.jpg

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 文件上传-批量

POST /system/file/upload-batch

> Body 请求参数

```yaml
files:
  - file://C:\Users\lenovo\Downloads\1.jpg
  - file://C:\Users\lenovo\Downloads\download.xlsx

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» files|body|string(binary)| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 文件下载-批量ZIP

GET /system/file/download/zip

> Body 请求参数

```yaml
{}

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ids|query|string| 否 |none|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 系统管理/数据字典

## POST 查询返回树形结构数据

POST /system/dict/tree

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "parentId": "",
      "type": "",
      "itemName": "",
      "itemValue": "",
      "description": "",
      "extension": {
        "": {}
      },
      "sortNum": 0,
      "status": "",
      "children": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "parentId": "",
          "type": "",
          "itemName": "",
          "itemValue": "",
          "description": "",
          "extension": {
            "": {}
          },
          "sortNum": 0,
          "status": "",
          "children": []
        }
      ]
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultDict](#schemapageresultdict)|

## POST 根据类型返回map列表数据

POST /system/dict/related

> Body 请求参数

```json
[
  "ACCOUNT_STATUS"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```json
{
  "": [
    {
      "label": "",
      "value": {},
      "ext": {},
      "parentId": {},
      "children": [
        {
          "label": "",
          "value": {},
          "ext": {},
          "parentId": {},
          "children": [
            {
              "label": "",
              "value": {},
              "ext": {},
              "parentId": {},
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MapListLabelValue](#schemamaplistlabelvalue)|

## GET 检查类型是否重复

GET /system/dict/check-type-duplicate

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|
|type|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "type": "",
  "code": "",
  "message": "",
  "path": "",
  "data": null,
  "extra": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[APIResultVoid](#schemaapiresultvoid)|

## POST 批量根据字典类型返回数据映射关系

POST /system/dict/multi-type-label

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```json
{
  "": {
    "": {
      "label": "",
      "value": {},
      "ext": {},
      "parentId": {},
      "children": [
        {
          "label": "",
          "value": {},
          "ext": {},
          "parentId": {},
          "children": [
            {
              "label": "",
              "value": {},
              "ext": {},
              "parentId": {},
              "children": []
            }
          ]
        }
      ]
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MapMapLabelValue](#schemamapmaplabelvalue)|

## GET 根据字典类型返回数据映射关系

GET /system/dict/type-label

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|type|query|string| 是 |字典类型|

> 返回示例

> 200 Response

```json
{
  "": {
    "label": "",
    "value": {},
    "ext": {},
    "parentId": {},
    "children": [
      {
        "label": "",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": "",
            "value": {},
            "ext": {},
            "parentId": {},
            "children": []
          }
        ]
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MapLabelValue](#schemamaplabelvalue)|

## POST 批量根据字典类型返回Map映射关系

POST /system/dict/multi-type-map

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```json
{
  "": {
    "": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MapMapString](#schemamapmapstring)|

## GET 根据字典类型返回map映射关系

GET /system/dict/type-map

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|type|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MapString](#schemamapstring)|

## GET 根据ID返回对象

GET /system/dict/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "type": "",
  "itemName": "",
  "itemValue": "",
  "description": "",
  "extension": {
    "": {}
  },
  "sortNum": 0,
  "status": "",
  "children": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "parentId": "",
      "type": "",
      "itemName": "",
      "itemValue": "",
      "description": "",
      "extension": {
        "": {}
      },
      "sortNum": 0,
      "status": "",
      "children": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "parentId": "",
          "type": "",
          "itemName": "",
          "itemValue": "",
          "description": "",
          "extension": {
            "": {}
          },
          "sortNum": 0,
          "status": "",
          "children": []
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Dict](#schemadict)|

## PUT 根据ID更新数据对象

PUT /system/dict/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "parentId": "string",
  "type": "string",
  "itemName": "string",
  "itemValue": "string",
  "description": "string",
  "extension": {
    "key": {}
  },
  "sortNum": 0,
  "status": "string",
  "children": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "parentId": "string",
      "type": "string",
      "itemName": "string",
      "itemValue": "string",
      "description": "string",
      "extension": {
        "key": {}
      },
      "sortNum": 0,
      "status": "string",
      "children": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "parentId": "string",
          "type": "string",
          "itemName": "string",
          "itemValue": "string",
          "description": "string",
          "extension": {
            "key": null
          },
          "sortNum": 0,
          "status": "string",
          "children": [
            {}
          ]
        }
      ]
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[Dict](#schemadict)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "type": "",
  "itemName": "",
  "itemValue": "",
  "description": "",
  "extension": {
    "": {}
  },
  "sortNum": 0,
  "status": "",
  "children": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "parentId": "",
      "type": "",
      "itemName": "",
      "itemValue": "",
      "description": "",
      "extension": {
        "": {}
      },
      "sortNum": 0,
      "status": "",
      "children": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "parentId": "",
          "type": "",
          "itemName": "",
          "itemValue": "",
          "description": "",
          "extension": {
            "": {}
          },
          "sortNum": 0,
          "status": "",
          "children": []
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Dict](#schemadict)|

## DELETE 根据ID删除数据对象

DELETE /system/dict/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /system/dict

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "parentId": "string",
  "type": "string",
  "itemName": "string",
  "itemValue": "string",
  "description": "string",
  "extension": {
    "key": {}
  },
  "sortNum": 0,
  "status": "string",
  "children": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "parentId": "string",
      "type": "string",
      "itemName": "string",
      "itemValue": "string",
      "description": "string",
      "extension": {
        "key": {}
      },
      "sortNum": 0,
      "status": "string",
      "children": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "parentId": "string",
          "type": "string",
          "itemName": "string",
          "itemValue": "string",
          "description": "string",
          "extension": {
            "key": null
          },
          "sortNum": 0,
          "status": "string",
          "children": [
            {}
          ]
        }
      ]
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[Dict](#schemadict)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "type": "",
  "itemName": "",
  "itemValue": "",
  "description": "",
  "extension": {
    "": {}
  },
  "sortNum": 0,
  "status": "",
  "children": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "parentId": "",
      "type": "",
      "itemName": "",
      "itemValue": "",
      "description": "",
      "extension": {
        "": {}
      },
      "sortNum": 0,
      "status": "",
      "children": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "parentId": "",
          "type": "",
          "itemName": "",
          "itemValue": "",
          "description": "",
          "extension": {
            "": {}
          },
          "sortNum": 0,
          "status": "",
          "children": []
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Dict](#schemadict)|

## DELETE 根据ID批量删除数据对象

DELETE /system/dict

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# IAM用户管理/账号管理

## GET 根据ID查询账号

GET /elf/iam/account/1724031212982341634

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# IAM用户管理/资源管理

## POST 导出

POST /iam/resource/common/export

> Body 请求参数

```json
{
  "conditions": [
    {
      "name": "type",
      "type": "like",
      "value": "AUTH"
    }
  ],
  "sort": "create_time",
  "direction": "desc",
  "pageNum": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# IAM用户管理/角色管理

## POST 通用查询

POST /system/dict/common/export

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# IAM用户管理/用户管理

## POST 查询数据对象

POST /iam/user/query

> Body 请求参数

```json
{
  "conditions": [
    {
      "name": "userNum",
      "value": "1111"
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "orgId": "",
      "userNum": "",
      "realname": "",
      "gender": "",
      "birthday": "",
      "mobilePhone": "",
      "email": "",
      "avatarUrl": "",
      "status": "",
      "account": "",
      "accountStatus": "",
      "accountStatusLabel": "",
      "genderLabel": {
        "label": "",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": "",
            "value": {},
            "ext": {},
            "parentId": {},
            "children": [
              {}
            ]
          }
        ]
      },
      "statusLabel": {
        "label": "",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": "",
            "value": {},
            "ext": {},
            "parentId": {},
            "children": [
              {}
            ]
          }
        ]
      },
      "roleList": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "code": "",
          "name": "",
          "description": ""
        }
      ],
      "userPositionList": [
        {
          "id": "",
          "userId": "",
          "orgId": "",
          "positionId": "",
          "primaryPosition": false,
          "tenantId": ""
        }
      ],
      "positionList": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "code": "",
          "name": "",
          "gradeName": "",
          "gradeValue": "",
          "dataPermissionType": "",
          "status": "",
          "dataPermissionTypeLabel": ""
        }
      ]
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultUserVO](#schemapageresultuservo)|

## GET 获取指定管理者的下属人员

GET /iam/user/user-ids/manager

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|managerId|query|string| 是 |管理者ID|

> 返回示例

> 200 Response

```json
[
  ""
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 根据ID返回数据对象

GET /iam/user/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "orgId": "",
  "userNum": "",
  "realname": "",
  "gender": "",
  "birthday": "",
  "mobilePhone": "",
  "email": "",
  "avatarUrl": "",
  "status": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[User](#schemauser)|

## PUT 根据ID更新数据对象

PUT /iam/user/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "orgId": "string",
  "userNum": "string",
  "realname": "string",
  "gender": "string",
  "birthday": "string",
  "mobilePhone": "string",
  "email": "string",
  "avatarUrl": "string",
  "status": "string",
  "account": "string",
  "password": "string",
  "accountStatus": "string",
  "roleIdList": [
    "string"
  ],
  "userPositionList": [
    {
      "id": "string",
      "userId": "string",
      "orgId": "string",
      "positionId": "string",
      "primaryPosition": true,
      "tenantId": "string"
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[UserDTO](#schemauserdto)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "orgId": "",
  "userNum": "",
  "realname": "",
  "gender": "",
  "birthday": "",
  "mobilePhone": "",
  "email": "",
  "avatarUrl": "",
  "status": "",
  "account": "",
  "password": "",
  "accountStatus": "",
  "roleIdList": [
    ""
  ],
  "userPositionList": [
    {
      "id": "",
      "userId": "",
      "orgId": "",
      "positionId": "",
      "primaryPosition": false,
      "tenantId": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[UserDTO](#schemauserdto)|

## DELETE 根据ID删除数据对象

DELETE /iam/user/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 返回ID与真实姓名映射关系

POST /iam/user/realname-map

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```json
{
  "": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MapString](#schemamapstring)|

## GET 返回用户及相关数据，包括账号、角色、岗位

GET /iam/user/related/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "orgId": "",
  "userNum": "",
  "realname": "",
  "gender": "",
  "birthday": "",
  "mobilePhone": "",
  "email": "",
  "avatarUrl": "",
  "status": "",
  "account": "",
  "accountStatus": "",
  "accountStatusLabel": "",
  "genderLabel": {
    "label": "",
    "value": {},
    "ext": {},
    "parentId": {},
    "children": [
      {
        "label": "",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {}
        ]
      }
    ]
  },
  "statusLabel": {
    "label": "",
    "value": {},
    "ext": {},
    "parentId": {},
    "children": [
      {
        "label": "",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {}
        ]
      }
    ]
  },
  "roleList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "code": "",
      "name": "",
      "description": ""
    }
  ],
  "userPositionList": [
    {
      "id": "",
      "userId": "",
      "orgId": "",
      "positionId": "",
      "primaryPosition": false,
      "tenantId": ""
    }
  ],
  "positionList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "code": "",
      "name": "",
      "gradeName": "",
      "gradeValue": "",
      "dataPermissionType": "",
      "status": "",
      "dataPermissionTypeLabel": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[UserVO](#schemauservo)|

## DELETE 根据ID批量删除数据对象

DELETE /iam/user

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 更新个人信息

POST /iam/user/update-current-user-info

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "orgId": "string",
  "userNum": "string",
  "realname": "string",
  "gender": "string",
  "birthday": "string",
  "mobilePhone": "string",
  "email": "string",
  "avatarUrl": "string",
  "status": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[User](#schemauser)| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 更改密码

POST /iam/user/change-pwd

> Body 请求参数

```json
{
  "oldPassword": "string",
  "newPassword": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ChangePwdDTO](#schemachangepwddto)| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 返回excel表头列表

GET /iam/user/excel/table-head

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 权限

## GET 接口权限列表

GET /permission/api/list

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 通用接口

## POST 获取关联数据接口

POST /elf/common/related/load-data

> Body 请求参数

```json
{
  "type": "User",
  "label": "realname",
  "conditions": [
    {
      "name": "id",
      "value": "1"
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 获取关联数据接口-批量

POST /common/related/batch-load-data

> Body 请求参数

```json
{
  "orgTree": {
    "type": "Org",
    "label": "name",
    "parent": "parent_id",
    "lazyChild": false
  }
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 获取excel表头信息

GET /iam/user/excel-table-head

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 获取关联数据接口

POST /common/related/load-data

> Body 请求参数

```json
{
  "type": "Org",
  "label": "name",
  "parent": "parent_id",
  "parentPath": "parentPaths",
  "lazyChild": true
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 在线用户管理

## GET 自动续期

GET /elf/online/renew

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|name|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 在线用户列表

GET /iam/online/user-list

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 功能测试

## GET excel导出 

GET /test/excel/export

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|count|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET excel批次导出

GET /test/excel/export/page

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|batchCount|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET excel流式导出

GET /test/excel/export/stream

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|count|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET excel流式导出-fetchSize

GET /test/excel/export/stream2

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|count|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 大数据查询

GET /test/list

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 模型/公共接口

## GET 查询指定字段名称是否重复

GET /bm/common/check-duplicate

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|field|query|string| 是 |字段名|
|value|query|string| 是 |字段值|
|type|query|string| 是 |实体类型|
|guid|query|string| 否 |实体唯一标识|
|moduleGuid|query|string| 否 |模块唯一表示|

> 返回示例

```json
{
  "type": "",
  "code": "",
  "message": "",
  "path": "",
  "data": null,
  "extra": {}
}
```

```json
{
  "type": "",
  "code": "",
  "message": "",
  "path": "",
  "data": null,
  "extra": {}
}
```

```json
{
  "type": "",
  "code": "",
  "message": "",
  "path": "",
  "data": null,
  "extra": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[APIResultVoid](#schemaapiresultvoid)|

## GET 业务对象数据比对

GET /bm/common/compare

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sourceId|query|string| 是 |源ID|
|targetId|query|string| 否 |目标ID（允许为空，为空默认比对上一版本）|
|type|query|string| 是 |none|

> 返回示例

```json
{
  "{}": {}
}
```

```json
{
  "{}": {}
}
```

```json
{
  "{}": {}
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MapObject](#schemamapobject)|

# 模型/模块表

## POST 查询分页数据

POST /bm/module/query

> Body 请求参数

```json
{
  "params": {
    "status": "A"
  },
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "moduleCode": "",
      "moduleName": "",
      "entityPrefix": "",
      "extension": "",
      "pendingCount": 0,
      "publishedCount": 0,
      "dependencyCount": 0,
      "hotfixVersionCount": 0,
      "createByLabel": "",
      "publishByLabel": "",
      "latestDependency": false,
      "dependencyScope": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultModuleVO](#schemapageresultmodulevo)|

## GET 根据ID返回对象

GET /bm/module/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Module](#schemamodule)|

## PUT 根据ID更新数据对象

PUT /bm/module/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "moduleCode": "string",
  "moduleName": "string",
  "entityPrefix": "string",
  "extension": "string",
  "createTimeBeign": 0,
  "createTimeEnd": 0,
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "dependencyModuleIdList": [
    "string"
  ],
  "pendingObjectIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[ModuleDTO](#schemamoduledto)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Module](#schemamodule)|

## DELETE 根据ID删除数据对象

DELETE /bm/module/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /bm/module

> Body 请求参数

```json
{
  "tenantId": "57",
  "moduleCode": "BKMIM9cVF(c&A2a2r0vMPKwUwaJiZ1X0cMDe9PRstarSo3s[JdEnz2vNAk!Dtm54N&o!h$ksyVM&neKgmv3tfwrd(E%cA[wk^5i%Up#bhDwOU8tvrLT]Z0*3UilN",
  "moduleName": "AvUHB0hL0Gj!ugT8X1DMRmsquO6e@nQeB7#7G@3glALcXcHw4CpfjRNcr(OJFrXRd%T$vsLh!xxEiJj3)UiXZAw[LS96zNAkEuBN9",
  "moduleDesc": "5xi9fqTf@V!p3Nu*T8qWBlt)IatSuUS8b9O6iCJBHHCdX(yygOytAs5MBm2eIOhF2Yc6bPN^$NANxWHc!Z^uGsbfn58(5INV7rB!5@xpMRMbKj951xlh(qq!oZ!U9j^s#kIoctes)*Dc@JH&oaa0VCscD2*&g0pWQhtZo[xf8jzJ13xpodc&P3K8rSxrn8&Q1x$mPUb[@JdW8*[1AQQm!(NFbuNmi(*[)HQfQnb&&&sc$rkW5IiwCu(4yB3JuxBpYkRLMYWaAsXN48xmW3qy01uNs6f$mzRqlEDSnRF#ZF[h%w*J9!pM1pMPekCByQOdk8zEOxZkWjR!uyPFT]s[25!RxB$!(Yni5drHn!rtBuoAWu$tgc9n]fpHOdpSDg0DsLSAeYB$P6M]#b8zkG9WU#I^!dEoA@YIQ]fdL7Z&TyXrQ6MCz0rVEn)47BAdpQjliYpbw0ojBJZMT@cYgtUu@08P%^c1qW)*Mu@ux[Yclq7t&l^8bAQ13x&knItce][3FPnl*E2u6DZeKJ78@vkN[[A*l0N(4jGn^tGq2OL@ooh&[v4r%WoKjewf0itG1tWiO4V2YOYtxFXdcJWOpACZ9[0HxRMU)SKgY9q5BH$ePIWAh^bEPDBslE)SDmAxZu)BEn0x^lfeO[m#pGogW#UQ^l%q4Y(QwXYcPv^ijz0^lgwuNS!poLSW5&6)Mq1!eMX[Z1ffpAqZbv3No*I1j8SK@^fkE63oBqbst$c43*Qmdgbo7L7[xBzF[krj$O&ov(#c$v^29By!OmQd3gvCPh%D1#4Z(2o6W@OKrlEc3Wy]ThOo2c1kZh997L2iVXDRzLStlyt^&7z5dlcJ6N#kSUI#N4]vIOj]Wl0cAijN21wA(EVuExN&iwq]4VNe8i$a6*rqYKRGey&Qw0uRkbw)8aAScy67^",
  "entityPrefix": "%Mw863oh",
  "status": "1Xr]]O9^sBum&BC",
  "version": 54,
  "test1": "test"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ModuleDTO](#schemamoduledto)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Module](#schemamodule)|

## POST 创建新版本

POST /bm/module/new-version

只传guid与semanticVersion

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "moduleCode": "string",
  "moduleName": "string",
  "entityPrefix": "string",
  "extension": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[Module](#schemamodule)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Module](#schemamodule)|

## POST 发布

POST /bm/module/publish

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "moduleCode": "string",
  "moduleName": "string",
  "entityPrefix": "string",
  "extension": "string",
  "createTimeBeign": 0,
  "createTimeEnd": 0,
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "dependencyModuleIdList": [
    "string"
  ],
  "pendingObjectIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ModuleDTO](#schemamoduledto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "sourceId": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "sourceId": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "sourceId": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "sourceId": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "moduleCode": "",
  "moduleName": "",
  "entityPrefix": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Module](#schemamodule)|

## GET 根据模块ID返回依赖列表

GET /bm/module/dependencies

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|moduleIds|query|string| 是 |none|
|checkLatestVersion|query|boolean| 否 |检查是否有最新版本|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "dependencyCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[ModuleVO](#schemamodulevo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» moduleCode|string|true|none||模块编码|
|» moduleName|string|true|none||模块名称|
|» entityPrefix|string|false|none||实体前缀|
|» extension|string|false|none||扩展属性|
|» pendingCount|integer|false|none||none|
|» publishedCount|integer|false|none||none|
|» dependencyCount|integer|false|none||依赖数量|
|» hotfixVersionCount|integer|false|none||修复版本数量|
|» createByLabel|string|false|none||none|
|» publishByLabel|string|false|none||none|
|» latestDependency|boolean|false|none||依赖是否为最新版本|
|» dependencyScope|string|false|none||依赖范围|

## POST 包视图列表

POST /bm/module/package-view-list

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "objectType": "",
      "objectCode": "",
      "objectName": "",
      "objectGuid": "",
      "moduleGuid": "",
      "packageGuid": "",
      "objectId": "",
      "objectVersion": 0,
      "objectStatus": "",
      "activeBy": "",
      "activeTime": "",
      "parentId": "",
      "packageId": "",
      "objectTypeLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultRepositoryVO](#schemapageresultrepositoryvo)|

## GET 包视图树列表

GET /bm/module/package-view-tree

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|moduleId|query|string| 否 |模块ID|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "objectType": "",
    "objectCode": "",
    "objectName": "",
    "objectGuid": "",
    "moduleGuid": "",
    "packageGuid": "",
    "objectId": "",
    "objectVersion": 0,
    "objectStatus": "",
    "activeBy": "",
    "activeTime": "",
    "parentId": "",
    "packageId": "",
    "objectTypeLabel": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[RepositoryVO](#schemarepositoryvo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» objectType|string|false|none||对象类型|
|» objectCode|string|false|none||对象编码|
|» objectName|string|false|none||对象名称|
|» objectGuid|string|false|none||参考对象唯一标识|
|» moduleGuid|string|true|none||模块唯一标识|
|» packageGuid|string|false|none||包唯一标识|
|» objectId|string|false|none||对象ID|
|» objectVersion|integer|false|none||对象版本|
|» objectStatus|string|false|none||状态;A:激活, N:未激活, L:锁定|
|» activeBy|string|false|none||激活人ID|
|» activeTime|string|false|none||激活时间|
|» parentId|string|false|none||上级ID（包GUID）|
|» packageId|string|false|none||包ID|
|» objectTypeLabel|string|false|none||对象名称字典|

## POST 根据ID列表返回详细信息

POST /bm/module/list

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|checkLatestVersion|query|boolean| 否 |检查是否未最新版本|
|body|body|array[string]| 否 |none|

> 返回示例

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "dependencyCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "dependencyCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[ModuleVO](#schemamodulevo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» moduleCode|string|true|none||模块编码|
|» moduleName|string|true|none||模块名称|
|» entityPrefix|string|false|none||实体前缀|
|» extension|string|false|none||扩展属性|
|» pendingCount|integer|false|none||none|
|» publishedCount|integer|false|none||none|
|» dependencyCount|integer|false|none||依赖数量|
|» hotfixVersionCount|integer|false|none||修复版本数量|
|» createByLabel|string|false|none||none|
|» publishByLabel|string|false|none||none|
|» latestDependency|boolean|false|none||依赖是否为最新版本|
|» dependencyScope|string|false|none||依赖范围|

## POST 返回历史版本列表

POST /bm/module/history/{guid}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "dependencyCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "dependencyCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[ModuleVO](#schemamodulevo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» moduleCode|string|true|none||模块编码|
|» moduleName|string|true|none||模块名称|
|» entityPrefix|string|false|none||实体前缀|
|» extension|string|false|none||扩展属性|
|» pendingCount|integer|false|none||none|
|» publishedCount|integer|false|none||none|
|» dependencyCount|integer|false|none||依赖数量|
|» hotfixVersionCount|integer|false|none||修复版本数量|
|» createByLabel|string|false|none||none|
|» publishByLabel|string|false|none||none|
|» latestDependency|boolean|false|none||依赖是否为最新版本|
|» dependencyScope|string|false|none||依赖范围|

## POST 模块资源库列表

POST /bm/module/repositories/{id}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
[
  {
    "id": "",
    "parentId": "",
    "packageGuid": "",
    "objectType": "",
    "objectId": "",
    "objectVersion": 0,
    "objectGuid": "",
    "objectCode": "",
    "objectName": "",
    "changeType": "",
    "activeBy": "",
    "activeTime": ""
  }
]
```

```json
[
  {
    "id": "",
    "parentId": "",
    "packageGuid": "",
    "objectType": "",
    "objectId": "",
    "objectVersion": 0,
    "objectGuid": "",
    "objectCode": "",
    "objectName": "",
    "changeType": "",
    "activeBy": "",
    "activeTime": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[ModuleRepositoryVO](#schemamodulerepositoryvo)]|false|none||none|
|» id|string|false|none||none|
|» parentId|string|false|none||上级ID|
|» packageGuid|string|false|none||包唯一标识|
|» objectType|string|false|none||对象类型|
|» objectId|string|false|none||对象ID|
|» objectVersion|integer|false|none||对象版本|
|» objectGuid|string|false|none||对象唯一标识|
|» objectCode|string|false|none||对象编码|
|» objectName|string|false|none||对象名称|
|» changeType|string|false|none||变更类型;CREATE:新增,UPDATE:更新,DELETE:删除|
|» activeBy|string|false|none||激活人ID|
|» activeTime|string|false|none||激活时间|

# 模型/域

## POST 查询分页数据

POST /bm/domain/query

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "domainCode": "",
      "domainName": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "convRoutine": "",
      "checkRule": "",
      "extension": "",
      "module": {
        "id": "",
        "createBy": "",
        "createTime": "",
        "updateBy": "",
        "updateTime": "",
        "tenantId": "",
        "sourceId": "",
        "guid": "",
        "semanticVersion": "",
        "publishDesc": "",
        "publishBy": "",
        "publishTime": "",
        "status": "",
        "description": "",
        "versionName": "",
        "versionType": "",
        "moduleCode": "",
        "moduleName": "",
        "entityPrefix": "",
        "extension": ""
      }
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultDomainListVO](#schemapageresultdomainlistvo)|

## GET 根据ID返回对象

GET /bm/domain/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": "",
  "status": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Domain](#schemadomain)|

## PUT 根据ID更新数据对象

PUT /bm/domain/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "domainCode": "string",
  "domainName": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "string",
  "checkRule": "string",
  "extension": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[Domain](#schemadomain)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": "",
  "status": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Domain](#schemadomain)|

## DELETE 根据ID删除数据对象

DELETE /bm/domain/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /bm/domain

> Body 请求参数

```json
{
  "moduleGuid": "019b4f30425a7625a2625aa70b9baed8",
  "packageGuid": "019b53375b5d791ea6731715a628d008",
  "packageId": "019b53375b5d791ea6745c27ba70f497",
  "domainCode": "test",
  "domainName": "测试包名称",
  "dataType": "VARCHAR",
  "dataLength": 255
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[Domain](#schemadomain)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "domainCode": "",
  "domainName": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "",
  "checkRule": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Domain](#schemadomain)|

## POST 激活(根据ID)

POST /bm/domain/activate/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 激活影响范围评估

POST /bm/domain/activate-effect/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
[]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 返回历史版本列表

POST /bm/domain/history/{guid}

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "guid": "",
    "version": 0,
    "moduleGuid": "",
    "packageGuid": "",
    "status": "",
    "packageId": "",
    "activeBy": "",
    "activeTime": "",
    "domainCode": "",
    "domainName": "",
    "dataType": "",
    "dataLength": 0,
    "dataScale": 0,
    "convRoutine": "",
    "checkRule": "",
    "extension": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[Domain](#schemadomain)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» guid|string|false|none||域唯一标识|
|» version|integer|false|none||域版本|
|» moduleGuid|string|true|none||模块唯一标识|
|» packageGuid|string|true|none||包唯一标识|
|» status|string|false|none||状态;A:激活，N:未激活|
|» packageId|string|true|none||包唯一标识|
|» activeBy|string|false|none||激活人|
|» activeTime|string|false|none||激活时间|
|» domainCode|string|true|none||域编码|
|» domainName|string|true|none||域名称|
|» dataType|string|true|none||数据类型|
|» dataLength|integer|false|none||数据长度|
|» dataScale|integer|false|none||小数位数|
|» convRoutine|string|false|none||转换例程|
|» checkRule|string|false|none||校验规则|
|» extension|string|false|none||扩展属性|

# 模型/实体模型表

## GET 比对结果查询

GET /bm/entity/compare-result

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|key|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "dropTableList": [
    {
      "name": "",
      "comment": "",
      "fields": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": ""
        }
      ],
      "indexes": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ]
        }
      ],
      "dropIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "createIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "changeIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "dropFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "createFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "changeFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "targetTableModel": {
        "name": "",
        "comment": "",
        "fields": [
          {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        ],
        "indexes": [
          {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        ]
      },
      "ddlSqls": [
        ""
      ]
    }
  ],
  "createTableList": [
    {
      "name": "",
      "comment": "",
      "fields": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": ""
        }
      ],
      "indexes": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ]
        }
      ],
      "dropIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "createIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "changeIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "dropFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "createFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "changeFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "targetTableModel": {
        "name": "",
        "comment": "",
        "fields": [
          {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        ],
        "indexes": [
          {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        ]
      },
      "ddlSqls": [
        ""
      ]
    }
  ],
  "changeTableList": [
    {
      "name": "",
      "comment": "",
      "fields": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": ""
        }
      ],
      "indexes": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ]
        }
      ],
      "dropIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "createIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "changeIndexList": [
        {
          "name": "",
          "type": "",
          "method": "",
          "parts": [
            {
              "field": "",
              "sort": ""
            }
          ],
          "ddlSqls": [
            ""
          ],
          "targetIndexModel": {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        }
      ],
      "dropFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "createFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "changeFieldList": [
        {
          "id": "",
          "pk": false,
          "name": "",
          "type": "",
          "length": 0,
          "decimals": 0,
          "dbType": "",
          "comment": "",
          "defaultValue": "",
          "nullable": false,
          "tableName": "",
          "ddlSqls": [
            ""
          ],
          "targetFieldModel": {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        }
      ],
      "targetTableModel": {
        "name": "",
        "comment": "",
        "fields": [
          {
            "id": "",
            "pk": false,
            "name": "",
            "type": "",
            "length": 0,
            "decimals": 0,
            "dbType": "",
            "comment": "",
            "defaultValue": "",
            "nullable": false,
            "tableName": ""
          }
        ],
        "indexes": [
          {
            "name": "",
            "type": "",
            "method": "",
            "parts": [
              {
                "field": "",
                "sort": ""
              }
            ]
          }
        ]
      },
      "ddlSqls": [
        ""
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[DataBaseCompareModel](#schemadatabasecomparemodel)|

## POST 查询分页数据

POST /bm/entity/query

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageId": "",
      "status": "",
      "entityCode": "",
      "entityName": "",
      "entityType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageId": "",
      "status": "",
      "entityCode": "",
      "entityName": "",
      "entityType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "entityCode": "",
      "entityName": "",
      "entityType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "entityCode": "",
      "entityName": "",
      "entityType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "entityCode": "",
      "entityName": "",
      "entityType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "entityCode": "",
      "entityName": "",
      "entityType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultEntity](#schemapageresultentity)|

## GET 根据ID返回对象

GET /bm/entity/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": "",
  "entityPrefix": "",
  "entityAttributeList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "entityId": "",
      "entityGuid": "",
      "attributeCode": "",
      "attributeName": "",
      "referenceCategory": "",
      "referenceType": "",
      "referenceObjectId": "",
      "referenceObjectGuid": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "primaryKey": false,
      "notNull": false,
      "defaultValue": "",
      "dataElement": {
        "id": "",
        "createBy": "",
        "createTime": "",
        "updateBy": "",
        "updateTime": "",
        "tenantId": "",
        "guid": "",
        "version": 0,
        "moduleGuid": "",
        "packageGuid": "",
        "status": "",
        "packageId": "",
        "activeBy": "",
        "activeTime": "",
        "elementCode": "",
        "elementName": "",
        "domainId": "",
        "domainGuid": "",
        "dataType": "",
        "dataLength": 0,
        "dataScale": 0,
        "domain": {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "guid": "",
          "version": 0,
          "moduleGuid": "",
          "packageGuid": "",
          "status": "",
          "packageId": "",
          "activeBy": "",
          "activeTime": "",
          "domainCode": "",
          "domainName": "",
          "dataType": "",
          "dataLength": 0,
          "dataScale": 0,
          "convRoutine": "",
          "checkRule": "",
          "extension": ""
        }
      }
    }
  ],
  "entityIndexList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "entityId": "",
      "entityGuid": "",
      "indexCode": "",
      "indexName": "",
      "indexType": "",
      "indexMethod": "",
      "attributes": [
        {
          "name": "",
          "sort": ""
        }
      ]
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": "",
  "entityPrefix": "",
  "entityAttributeList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "entityId": "",
      "entityGuid": "",
      "attributeCode": "",
      "attributeName": "",
      "referenceCategory": "",
      "referenceType": "",
      "referenceObjectId": "",
      "referenceObjectGuid": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "primaryKey": false,
      "notNull": false,
      "defaultValue": "",
      "dataElement": {
        "id": "",
        "createBy": "",
        "createTime": "",
        "updateBy": "",
        "updateTime": "",
        "tenantId": "",
        "guid": "",
        "version": 0,
        "moduleGuid": "",
        "packageGuid": "",
        "status": "",
        "packageId": "",
        "activeBy": "",
        "activeTime": "",
        "elementCode": "",
        "elementName": "",
        "domainId": "",
        "domainGuid": "",
        "dataType": "",
        "dataLength": 0,
        "dataScale": 0,
        "domain": {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "guid": "",
          "version": 0,
          "moduleGuid": "",
          "packageGuid": "",
          "status": "",
          "packageId": "",
          "activeBy": "",
          "activeTime": "",
          "domainCode": "",
          "domainName": "",
          "dataType": "",
          "dataLength": 0,
          "dataScale": 0,
          "convRoutine": "",
          "checkRule": "",
          "extension": ""
        }
      }
    }
  ],
  "entityIndexList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "entityId": "",
      "entityGuid": "",
      "indexCode": "",
      "indexName": "",
      "indexType": "",
      "indexMethod": "",
      "attributes": [
        {
          "name": "",
          "sort": ""
        }
      ]
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": "",
  "entityPrefix": "",
  "entityAttributeList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "entityId": "",
      "entityGuid": "",
      "attributeCode": "",
      "attributeName": "",
      "referenceCategory": "",
      "referenceType": "",
      "referenceObjectId": "",
      "referenceObjectGuid": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "primaryKey": false,
      "notNull": false,
      "defaultValue": "",
      "dataElement": {
        "id": "",
        "createBy": "",
        "createTime": "",
        "updateBy": "",
        "updateTime": "",
        "tenantId": "",
        "guid": "",
        "version": 0,
        "moduleGuid": "",
        "packageGuid": "",
        "status": "",
        "packageId": "",
        "activeBy": "",
        "activeTime": "",
        "elementCode": "",
        "elementName": "",
        "domainId": "",
        "domainGuid": "",
        "dataType": "",
        "dataLength": 0,
        "dataScale": 0,
        "domain": {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "guid": "",
          "version": 0,
          "moduleGuid": "",
          "packageGuid": "",
          "status": "",
          "packageId": "",
          "activeBy": "",
          "activeTime": "",
          "domainCode": "",
          "domainName": "",
          "dataType": "",
          "dataLength": 0,
          "dataScale": 0,
          "convRoutine": "",
          "checkRule": "",
          "extension": ""
        }
      }
    }
  ],
  "entityIndexList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "entityId": "",
      "entityGuid": "",
      "indexCode": "",
      "indexName": "",
      "indexType": "",
      "indexMethod": "",
      "attributes": [
        {
          "name": "",
          "sort": ""
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[EntityVO](#schemaentityvo)|

## PUT 根据ID更新数据对象

PUT /bm/entity/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "entityCode": "string",
  "entityName": "string",
  "entityType": "string",
  "extension": "string",
  "deletedBeign": 0,
  "deletedEnd": 0,
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "entityAttributeList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "attributeCode": "string",
      "attributeName": "string",
      "referenceCategory": "string",
      "referenceType": "string",
      "referenceObjectId": "string",
      "referenceObjectGuid": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "primaryKey": true,
      "notNull": true,
      "defaultValue": "string"
    }
  ],
  "entityIndexList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "indexCode": "string",
      "indexName": "string",
      "indexType": "string",
      "indexMethod": "string",
      "attributes": [
        {
          "name": "string",
          "sort": "string"
        }
      ]
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[EntityDTO](#schemaentitydto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Entity](#schemaentity)|

## DELETE 根据ID删除数据对象

DELETE /bm/entity/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 数据库模型比对

GET /bm/entity/compare-model

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|key|query|string| 是 |none|
|ids|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "timeout": 0,
  "handler": {},
  "earlySendAttempts": [
    {
      "data": {},
      "mediaType": {
        "type": "",
        "subtype": "",
        "parameters": {
          "": ""
        },
        "toStringValue": ""
      }
    }
  ],
  "complete": false,
  "failure": {
    "detailMessage": "",
    "cause": {
      "detailMessage": "",
      "cause": {},
      "stackTrace": [
        {
          "classLoaderName": "",
          "moduleName": "",
          "moduleVersion": "",
          "declaringClass": "",
          "methodName": "",
          "fileName": "",
          "lineNumber": 0,
          "format": 0
        }
      ],
      "suppressedExceptions": [
        {}
      ]
    },
    "stackTrace": [
      {
        "classLoaderName": "",
        "moduleName": "",
        "moduleVersion": "",
        "declaringClass": "",
        "methodName": "",
        "fileName": "",
        "lineNumber": 0,
        "format": 0
      }
    ],
    "suppressedExceptions": [
      {
        "detailMessage": "",
        "cause": {},
        "stackTrace": [
          {
            "classLoaderName": "",
            "moduleName": "",
            "moduleVersion": "",
            "declaringClass": "",
            "methodName": "",
            "fileName": "",
            "lineNumber": 0,
            "format": 0
          }
        ],
        "suppressedExceptions": [
          {}
        ]
      }
    ]
  },
  "timeoutCallback": {
    "delegate": {}
  },
  "errorCallback": {},
  "completionCallback": {
    "delegate": {}
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[SseEmitter](#schemasseemitter)|

## POST 创建数据对象

POST /bm/entity

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "entityCode": "string",
  "entityName": "string",
  "entityType": "string",
  "extension": "string",
  "deletedBeign": 0,
  "deletedEnd": 0,
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "entityAttributeList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "attributeCode": "string",
      "attributeName": "string",
      "referenceCategory": "string",
      "referenceType": "string",
      "referenceObjectId": "string",
      "referenceObjectGuid": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "primaryKey": true,
      "notNull": true,
      "defaultValue": "string"
    }
  ],
  "entityIndexList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "indexCode": "string",
      "indexName": "string",
      "indexType": "string",
      "indexMethod": "string",
      "attributes": [
        {
          "name": "string",
          "sort": "string"
        }
      ]
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[EntityDTO](#schemaentitydto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "entityCode": "",
  "entityName": "",
  "entityType": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Entity](#schemaentity)|

## DELETE 根据ID集合批量删除数据对象

DELETE /bm/entity

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 检查实体索引编码是否重复

GET /bm/entity/check-index-duplicate

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|moduleGuid|query|string| 是 |模型GUID|
|indexCode|query|string| 是 |索引编码|
|entityGuid|query|string| 否 |实体GUID|

> 返回示例

```json
false
```

```json
false
```

```json
false
```

```json
false
```

```json
false
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|boolean|

## POST 激活

POST /bm/entity/activate/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 构建建表SQL语句

GET /bm/entity/build-sql

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 是 |实体ID|
|dialect|query|string| 否 |数据库方言|

> 返回示例

```json
[
  ""
]
```

```json
[
  ""
]
```

```json
[
  ""
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 数据库模型执行DDL语句

POST /bm/entity/execute

> Body 请求参数

```json
{
  "dropTableNameList": [
    "string"
  ],
  "createTableNameList": [
    "string"
  ],
  "dataBaseChangeList": [
    {
      "tableName": "string",
      "dropIndexNameList": [
        "string"
      ],
      "createIndexNameList": [
        "string"
      ],
      "changeIndexNameList": [
        "string"
      ],
      "dropFieldNameList": [
        "string"
      ],
      "createFieldNameList": [
        "string"
      ],
      "changeFieldNameList": [
        "string"
      ]
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|key|query|string| 是 |none|
|body|body|[DataBaseExecuteDTO](#schemadatabaseexecutedto)| 否 |none|

> 返回示例

```json
{
  "timeout": 0,
  "handler": {},
  "earlySendAttempts": [
    {
      "data": {},
      "mediaType": {
        "type": "",
        "subtype": "",
        "parameters": {
          "": ""
        },
        "toStringValue": ""
      }
    }
  ],
  "complete": false,
  "failure": {
    "detailMessage": "",
    "cause": {
      "detailMessage": "",
      "cause": {},
      "stackTrace": [
        {
          "classLoaderName": "",
          "moduleName": "",
          "moduleVersion": "",
          "declaringClass": "",
          "methodName": "",
          "fileName": "",
          "lineNumber": 0,
          "format": 0
        }
      ],
      "suppressedExceptions": [
        {}
      ]
    },
    "stackTrace": [
      {
        "classLoaderName": "",
        "moduleName": "",
        "moduleVersion": "",
        "declaringClass": "",
        "methodName": "",
        "fileName": "",
        "lineNumber": 0,
        "format": 0
      }
    ],
    "suppressedExceptions": [
      {
        "detailMessage": "",
        "cause": {},
        "stackTrace": [
          {
            "classLoaderName": "",
            "moduleName": "",
            "moduleVersion": "",
            "declaringClass": "",
            "methodName": "",
            "fileName": "",
            "lineNumber": 0,
            "format": 0
          }
        ],
        "suppressedExceptions": [
          {}
        ]
      }
    ]
  },
  "timeoutCallback": {
    "delegate": {}
  },
  "errorCallback": {},
  "completionCallback": {
    "delegate": {}
  }
}
```

```json
{
  "timeout": 0,
  "handler": {},
  "earlySendAttempts": [
    {
      "data": {},
      "mediaType": {
        "type": "",
        "subtype": "",
        "parameters": {
          "": ""
        },
        "toStringValue": ""
      }
    }
  ],
  "complete": false,
  "failure": {
    "detailMessage": "",
    "cause": {
      "detailMessage": "",
      "cause": {},
      "stackTrace": [
        {
          "classLoaderName": "",
          "moduleName": "",
          "moduleVersion": "",
          "declaringClass": "",
          "methodName": "",
          "fileName": "",
          "lineNumber": 0,
          "format": 0
        }
      ],
      "suppressedExceptions": [
        {}
      ]
    },
    "stackTrace": [
      {
        "classLoaderName": "",
        "moduleName": "",
        "moduleVersion": "",
        "declaringClass": "",
        "methodName": "",
        "fileName": "",
        "lineNumber": 0,
        "format": 0
      }
    ],
    "suppressedExceptions": [
      {
        "detailMessage": "",
        "cause": {},
        "stackTrace": [
          {
            "classLoaderName": "",
            "moduleName": "",
            "moduleVersion": "",
            "declaringClass": "",
            "methodName": "",
            "fileName": "",
            "lineNumber": 0,
            "format": 0
          }
        ],
        "suppressedExceptions": [
          {}
        ]
      }
    ]
  },
  "timeoutCallback": {
    "delegate": {}
  },
  "errorCallback": {},
  "completionCallback": {
    "delegate": {}
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[SseEmitter](#schemasseemitter)|

## POST 激活影响范围评估

POST /bm/entity/activate-effect/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "": []
}
```

```json
[]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 返回属性类型列表

GET /bm/entity/attr-data-type

> 返回示例

```json
[
  {
    "id": "",
    "defKey": "",
    "defName": "",
    "icon": "",
    "color": {},
    "requireLen": 0,
    "requireScale": 0,
    "lenMax": "",
    "often": "",
    "orderValue": 0,
    "dbDataType": {
      "": ""
    }
  }
]
```

```json
[
  {
    "id": "",
    "defKey": "",
    "defName": "",
    "icon": "",
    "color": {},
    "requireLen": 0,
    "requireScale": 0,
    "lenMax": "",
    "often": "",
    "orderValue": 0,
    "dbDataType": {
      "": ""
    }
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[DataTypeModel](#schemadatatypemodel)]|false|none||none|
|» id|string|false|none||主键|
|» defKey|string|false|none||编码|
|» defName|string|false|none||名称|
|» icon|string|false|none||图标|
|» color|object|false|none||颜色|
|» requireLen|integer|false|none||必要长度|
|» requireScale|integer|false|none||必要精度|
|» lenMax|string|false|none||最大长度|
|» often|string|false|none||使用频率|
|» orderValue|integer|false|none||排序|
|» dbDataType|[MapString](#schemamapstring)|false|none||数据库类型映射关系|
|»» key|string|false|none||none|

## POST 返回历史版本列表

POST /bm/entity/history/{guid}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "guid": "",
    "version": 0,
    "moduleGuid": "",
    "packageGuid": "",
    "status": "",
    "packageId": "",
    "activeBy": "",
    "activeTime": "",
    "entityCode": "",
    "entityName": "",
    "entityType": "",
    "extension": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[Entity](#schemaentity)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» guid|string|false|none||域唯一标识|
|» version|integer|false|none||域版本|
|» moduleGuid|string|true|none||模块唯一标识|
|» packageGuid|string|true|none||包唯一标识|
|» status|string|false|none||状态;A:激活，N:未激活|
|» packageId|string|true|none||包唯一标识|
|» activeBy|string|false|none||激活人|
|» activeTime|string|false|none||激活时间|
|» entityCode|string|true|none||实体编码|
|» entityName|string|true|none||实体名称|
|» entityType|string|true|none||实体类型;TABLE:表, VIEW:视图|
|» extension|string|false|none||扩展属性|

# 模型/数据元素

## POST 查询分页数据

POST /bm/data-element/query

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "elementCode": "",
      "elementName": "",
      "domainId": "",
      "domainGuid": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "module": {
        "id": "",
        "createBy": "",
        "createTime": "",
        "updateBy": "",
        "updateTime": "",
        "tenantId": "",
        "sourceId": "",
        "guid": "",
        "semanticVersion": "",
        "publishDesc": "",
        "publishBy": "",
        "publishTime": "",
        "status": "",
        "description": "",
        "versionName": "",
        "versionType": "",
        "moduleCode": "",
        "moduleName": "",
        "entityPrefix": "",
        "extension": ""
      }
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultDataElementListVO](#schemapageresultdataelementlistvo)|

## GET 根据ID返回对象

GET /bm/data-element/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[DataElement](#schemadataelement)|

## PUT 根据ID更新数据对象

PUT /bm/data-element/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "elementCode": "string",
  "elementName": "string",
  "domainId": "string",
  "domainGuid": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[DataElement](#schemadataelement)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[DataElement](#schemadataelement)|

## DELETE 根据ID删除数据对象

DELETE /bm/data-element/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /bm/data-element

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "elementCode": "string",
  "elementName": "string",
  "domainId": "string",
  "domainGuid": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[DataElement](#schemadataelement)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageId": "",
  "status": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "elementCode": "",
  "elementName": "",
  "domainId": "",
  "domainGuid": "",
  "dataType": "",
  "dataLength": 0,
  "dataScale": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[DataElement](#schemadataelement)|

## POST 激活

POST /bm/data-element/activate/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 激活影响范围评估

POST /bm/data-element/activate-effect/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
[]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 返回历史版本列表

POST /bm/data-element/history/{guid}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "guid": "",
    "version": 0,
    "moduleGuid": "",
    "packageGuid": "",
    "status": "",
    "packageId": "",
    "activeBy": "",
    "activeTime": "",
    "elementCode": "",
    "elementName": "",
    "domainId": "",
    "domainGuid": "",
    "dataType": "",
    "dataLength": 0,
    "dataScale": 0
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[DataElement](#schemadataelement)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» guid|string|false|none||域唯一标识|
|» version|integer|false|none||域版本|
|» moduleGuid|string|true|none||模块唯一标识|
|» packageGuid|string|true|none||包唯一标识|
|» status|string|false|none||状态;A:激活，N:未激活|
|» packageId|string|true|none||包唯一标识|
|» activeBy|string|false|none||激活人|
|» activeTime|string|false|none||激活时间|
|» elementCode|string|true|none||数据元素编码|
|» elementName|string|true|none||数据元素名称|
|» domainId|string|false|none||域ID|
|» domainGuid|string|false|none||域唯一标识|
|» dataType|string|true|none||数据类型|
|» dataLength|integer|false|none||数据长度|
|» dataScale|integer|false|none||小数位数|

# 模型/应用

## POST 查询分页数据

POST /bm/application/query

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "latestDependency": false
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "latestDependency": false
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "latestDependency": false
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "moduleCount": 0,
      "hotfixVersionCount": 0,
      "latestDependency": false
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "moduleCount": 0,
      "hotfixVersionCount": 0,
      "latestDependency": false
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "moduleCount": 0,
      "hotfixVersionCount": 0,
      "latestDependency": false
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "moduleCount": 0,
      "hotfixVersionCount": 0,
      "latestDependency": false
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultApplicationVO](#schemapageresultapplicationvo)|

## GET 根据ID返回对象

GET /bm/application/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": "",
  "moduleIdList": [
    ""
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ApplicationDetailVO](#schemaapplicationdetailvo)|

## PUT 根据ID更新数据对象

PUT /bm/application/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string",
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "moduleIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[ApplicationDTO](#schemaapplicationdto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Application](#schemaapplication)|

## DELETE 根据ID删除数据对象

DELETE /bm/application/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /bm/application

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string",
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "moduleIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ApplicationDTO](#schemaapplicationdto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Application](#schemaapplication)|

## POST 创建新版本

POST /bm/application/new-version

只传guid与semanticVersion

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[Application](#schemaapplication)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Application](#schemaapplication)|

## POST 发布

POST /bm/application/publish

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[Application](#schemaapplication)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "applicationCode": "",
  "applicationName": "",
  "applicationIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Application](#schemaapplication)|

## GET 根据应用ID返回关联的模块列表

GET /bm/application/relation-module/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |应用ID|
|checkLatestVersion|query|boolean| 否 |检查是否未最新版本|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "moduleCode": "",
    "moduleName": "",
    "entityPrefix": "",
    "extension": "",
    "pendingCount": 0,
    "publishedCount": 0,
    "hotfixVersionCount": 0,
    "createByLabel": "",
    "publishByLabel": "",
    "latestDependency": false,
    "dependencyScope": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[ModuleVO](#schemamodulevo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» moduleCode|string|true|none||模块编码|
|» moduleName|string|true|none||模块名称|
|» entityPrefix|string|false|none||实体前缀|
|» extension|string|false|none||扩展属性|
|» pendingCount|integer|false|none||none|
|» publishedCount|integer|false|none||none|
|» dependencyCount|integer|false|none||依赖数量|
|» hotfixVersionCount|integer|false|none||修复版本数量|
|» createByLabel|string|false|none||none|
|» publishByLabel|string|false|none||none|
|» latestDependency|boolean|false|none||依赖是否为最新版本|
|» dependencyScope|string|false|none||依赖范围|

## POST 根据ID列表返回详细信息

POST /bm/application/list

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|checkLatestVersion|query|boolean| 否 |检查是否未最新版本|
|body|body|array[string]| 否 |none|

> 返回示例

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "applicationCode": "",
    "applicationName": "",
    "applicationIcon": "",
    "extension": "",
    "createByLabel": "",
    "publishByLabel": "",
    "moduleCount": 0,
    "hotfixVersionCount": 0,
    "latestDependency": false
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "applicationCode": "",
    "applicationName": "",
    "applicationIcon": "",
    "extension": "",
    "createByLabel": "",
    "publishByLabel": "",
    "moduleCount": 0,
    "hotfixVersionCount": 0,
    "latestDependency": false
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[ApplicationVO](#schemaapplicationvo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» applicationCode|string|true|none||应用编码|
|» applicationName|string|true|none||应用名称|
|» applicationIcon|string|false|none||应用图标|
|» extension|string|false|none||扩展属性|
|» createByLabel|string|false|none||none|
|» publishByLabel|string|false|none||none|
|» moduleCount|integer|false|none||依赖模块数量|
|» hotfixVersionCount|integer|false|none||修复版本数量|
|» latestDependency|boolean|false|none||依赖是否为最新版本|

## POST 返回历史版本列表

POST /bm/application/history/{guid}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "applicationCode": "",
    "applicationName": "",
    "applicationIcon": "",
    "extension": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» applicationCode|string|true|none||应用编码|
|» applicationName|string|true|none||应用名称|
|» applicationIcon|string|false|none||应用图标|
|» extension|string|false|none||扩展属性|

# 模型/系统

## POST 查询分页数据

POST /bm/system/query

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "applicationCount": 0,
      "hotfixVersionCount": 0
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "applicationCount": 0,
      "hotfixVersionCount": 0
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "applicationCount": 0,
      "hotfixVersionCount": 0
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "applicationCount": 0,
      "hotfixVersionCount": 0
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "systemCode": "",
      "systemName": "",
      "systemIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "applicationCount": 0,
      "hotfixVersionCount": 0
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultSystemVO](#schemapageresultsystemvo)|

## GET 根据ID返回对象

GET /bm/system/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "createByLabel": "",
  "publishByLabel": "",
  "applicationList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": ""
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "createByLabel": "",
  "publishByLabel": "",
  "applicationList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": ""
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "createByLabel": "",
  "publishByLabel": "",
  "applicationList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": ""
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "createByLabel": "",
  "publishByLabel": "",
  "applicationList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "latestDependency": false
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "createByLabel": "",
  "publishByLabel": "",
  "applicationCount": 0,
  "hotfixVersionCount": 0,
  "applicationList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "sourceId": "",
      "guid": "",
      "semanticVersion": "",
      "publishDesc": "",
      "publishBy": "",
      "publishTime": "",
      "status": "",
      "description": "",
      "versionName": "",
      "versionType": "",
      "applicationCode": "",
      "applicationName": "",
      "applicationIcon": "",
      "extension": "",
      "createByLabel": "",
      "publishByLabel": "",
      "moduleCount": 0,
      "hotfixVersionCount": 0,
      "latestDependency": false
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "applicationIdList": [
    ""
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "applicationIdList": [
    ""
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": "",
  "applicationIdList": [
    ""
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[SystemDetailVO](#schemasystemdetailvo)|

## PUT 根据ID更新数据对象

PUT /bm/system/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string",
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "applicationIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[SystemDTO](#schemasystemdto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[System](#schemasystem)|

## DELETE 根据ID删除数据对象

DELETE /bm/system/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /bm/system

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string",
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "applicationIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[SystemDTO](#schemasystemdto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[System](#schemasystem)|

## POST 创建新版本

POST /bm/system/new-version

只传guid与semanticVersion

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[System](#schemasystem)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[System](#schemasystem)|

## POST 发布

POST /bm/system/publish

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[System](#schemasystem)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "sourceId": "",
  "guid": "",
  "semanticVersion": "",
  "publishDesc": "",
  "publishBy": "",
  "publishTime": "",
  "status": "",
  "description": "",
  "versionName": "",
  "versionType": "",
  "systemCode": "",
  "systemName": "",
  "systemIcon": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[System](#schemasystem)|

## POST 返回历史版本列表

POST /bm/system/history/{guid}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "systemCode": "",
    "systemName": "",
    "systemIcon": "",
    "extension": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "systemCode": "",
    "systemName": "",
    "systemIcon": "",
    "extension": "",
    "createByLabel": "",
    "publishByLabel": "",
    "applicationCount": 0,
    "hotfixVersionCount": 0
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[SystemVO](#schemasystemvo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» systemCode|string|true|none||系统编码|
|» systemName|string|true|none||系统名称|
|» systemIcon|string|false|none||系统图标|
|» extension|string|false|none||扩展属性|
|» createByLabel|string|false|none||none|
|» publishByLabel|string|false|none||none|
|» applicationCount|integer|false|none||依赖应用数量|
|» hotfixVersionCount|integer|false|none||修复版本数量|

## GET 根据系统ID返回关联的应用列表

GET /bm/system/relation-application/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |系统ID|
|checkLatestVersion|query|boolean| 否 |检查是否未最新版本|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "sourceId": "",
    "guid": "",
    "semanticVersion": "",
    "publishDesc": "",
    "publishBy": "",
    "publishTime": "",
    "status": "",
    "description": "",
    "versionName": "",
    "versionType": "",
    "applicationCode": "",
    "applicationName": "",
    "applicationIcon": "",
    "extension": "",
    "createByLabel": "",
    "publishByLabel": "",
    "moduleCount": 0,
    "hotfixVersionCount": 0,
    "latestDependency": false
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[ApplicationVO](#schemaapplicationvo)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» sourceId|string|false|none||来源模块ID|
|» guid|string|false|none||应用唯一标识|
|» semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|» publishDesc|string|false|none||版本说明|
|» publishBy|string|false|none||发布人ID|
|» publishTime|string|false|none||发布时间|
|» status|string|false|none||状态;A:已发布，N:未发布|
|» description|string|false|none||应用描述|
|» versionName|string|false|none||版本名称|
|» versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|» applicationCode|string|true|none||应用编码|
|» applicationName|string|true|none||应用名称|
|» applicationIcon|string|false|none||应用图标|
|» extension|string|false|none||扩展属性|
|» createByLabel|string|false|none||none|
|» publishByLabel|string|false|none||none|
|» moduleCount|integer|false|none||依赖模块数量|
|» hotfixVersionCount|integer|false|none||修复版本数量|
|» latestDependency|boolean|false|none||依赖是否为最新版本|

# 模型/已发布对象

## POST 查询分页数据

POST /bm/published-object/query

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleId": "",
      "moduleVersion": "",
      "moduleGuid": "",
      "packageId": "",
      "packageGuid": "",
      "objectType": "",
      "objectId": "",
      "objectVersion": 0,
      "objectGuid": "",
      "objectCode": "",
      "objectName": "",
      "activeBy": "",
      "activeTime": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultPublishedObject](#schemapageresultpublishedobject)|

## GET 根据ID返回对象

GET /bm/published-object/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "moduleId": "",
  "moduleVersion": "",
  "moduleGuid": "",
  "packageId": "",
  "packageGuid": "",
  "objectType": "",
  "objectId": "",
  "objectVersion": 0,
  "objectGuid": "",
  "objectCode": "",
  "objectName": "",
  "activeBy": "",
  "activeTime": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PublishedObject](#schemapublishedobject)|

# 模型/未发布对象

## POST 查询分页数据

POST /bm/pending-object/query

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "packageId": "",
      "packageGuid": "",
      "objectType": "",
      "objectId": "",
      "objectVersion": 0,
      "objectGuid": "",
      "objectCode": "",
      "objectName": "",
      "objectStatus": "",
      "activeBy": "",
      "activeTime": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultPendingObject](#schemapageresultpendingobject)|

## GET 根据ID返回对象

GET /bm/pending-object/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "moduleGuid": "",
  "packageId": "",
  "packageGuid": "",
  "objectType": "",
  "objectId": "",
  "objectVersion": 0,
  "objectGuid": "",
  "objectCode": "",
  "objectName": "",
  "objectStatus": "",
  "activeBy": "",
  "activeTime": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PendingObject](#schemapendingobject)|

# 模型/包

## POST 查询分页数据

POST /bm/package/query

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "parentId": "",
      "parentGuid": "",
      "guid": "",
      "moduleId": "",
      "moduleGuid": "",
      "packageCode": "",
      "packageName": "",
      "description": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "parentId": "",
      "parentGuid": "",
      "guid": "",
      "moduleId": "",
      "moduleGuid": "",
      "packageCode": "",
      "packageName": "",
      "description": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultPackage](#schemapageresultpackage)|

## GET 根据ID返回对象

GET /bm/package/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "parentGuid": "",
  "guid": "",
  "moduleId": "",
  "moduleGuid": "",
  "packageCode": "",
  "packageName": "",
  "description": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "parentGuid": "",
  "guid": "",
  "moduleId": "",
  "moduleGuid": "",
  "packageCode": "",
  "packageName": "",
  "description": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Package](#schemapackage)|

## PUT 根据ID更新数据对象

PUT /bm/package/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "parentId": "string",
  "parentGuid": "string",
  "guid": "string",
  "moduleId": "string",
  "moduleGuid": "string",
  "packageCode": "string",
  "packageName": "string",
  "description": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[Package](#schemapackage)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "parentGuid": "",
  "guid": "",
  "moduleId": "",
  "moduleGuid": "",
  "packageCode": "",
  "packageName": "",
  "description": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "parentGuid": "",
  "guid": "",
  "moduleId": "",
  "moduleGuid": "",
  "packageCode": "",
  "packageName": "",
  "description": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Package](#schemapackage)|

## DELETE 根据ID删除数据对象

DELETE /bm/package/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /bm/package

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "parentId": "string",
  "parentGuid": "string",
  "guid": "string",
  "moduleId": "string",
  "moduleGuid": "string",
  "packageCode": "string",
  "packageName": "string",
  "description": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[Package](#schemapackage)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "parentGuid": "",
  "guid": "",
  "moduleId": "",
  "moduleGuid": "",
  "packageCode": "",
  "packageName": "",
  "description": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "parentId": "",
  "parentGuid": "",
  "guid": "",
  "moduleId": "",
  "moduleGuid": "",
  "packageCode": "",
  "packageName": "",
  "description": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Package](#schemapackage)|

# 模型/结构表

## POST 查询分页数据

POST /bm/struct/query

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "structCode": "",
      "structName": "",
      "structType": "",
      "extension": "",
      "module": {
        "id": "",
        "createBy": "",
        "createTime": "",
        "updateBy": "",
        "updateTime": "",
        "tenantId": "",
        "sourceId": "",
        "guid": "",
        "semanticVersion": "",
        "publishDesc": "",
        "publishBy": "",
        "publishTime": "",
        "status": "",
        "description": "",
        "versionName": "",
        "versionType": "",
        "moduleCode": "",
        "moduleName": "",
        "entityPrefix": "",
        "extension": ""
      }
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultStructListVO](#schemapageresultstructlistvo)|

## GET 根据ID返回对象

GET /bm/struct/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "structCode": "",
  "structName": "",
  "structType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "structCode": "",
  "structName": "",
  "structType": "",
  "extension": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Struct](#schemastruct)|

## PUT 根据ID更新数据对象

PUT /bm/struct/{id}

> Body 请求参数

```json
{
  "guid": "019bb52009707806989faf2f99576235",
  "moduleGuid": "019b563f73b27c60ae46b0102d3f0668",
  "packageGuid": "019b563f73b97c2194a664748c7e765c",
  "packageId": "019b6ec41daf716b806a2cc55c71b2e0",
  "structCode": "test1",
  "structName": "测试结构体",
  "structAttributeList": [
    {
      "id": "019bb520098f7313b0e5abd1af705d5e",
      "attributeCode": "name",
      "attributeName": "名称",
      "dataType": "VARCHAR",
      "dataLength": 255,
      "sortNum": 1
    },
    {
      "id": "019bb5200999727981a0d6c484b54eab",
      "attributeCode": "age",
      "attributeName": "年龄",
      "dataType": "INTEGER",
      "sortNum": 2
    },
    {
      "id": "019bb52009a17a31996e339d41feb820",
      "attributeCode": "birthday",
      "attributeName": "生日",
      "dataType": "DATE",
      "sortNum": 3
    },
    {
      "id": "019bb52009a77f419cdc33016c2ce605",
      "attributeCode": "email",
      "attributeName": "邮件",
      "dataType": "VARCHAR",
      "dataLength": 10,
      "sortNum": 4
    },
    {
      "id": "019bb52009af79be8d580d0cee53ade4",
      "attributeCode": "struts",
      "attributeName": "状态",
      "dataType": "VARCHAR",
      "dataLength": 10,
      "sortNum": 5
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[StructDTO](#schemastructdto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "structCode": "",
  "structName": "",
  "structType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "structCode": "",
  "structName": "",
  "structType": "",
  "extension": "",
  "createTimeBeign": "",
  "createTimeEnd": "",
  "updateTimeBeign": "",
  "updateTimeEnd": "",
  "structAttributeList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "structId": "",
      "structGuid": "",
      "structVersion": 0,
      "attributeCode": "",
      "attributeName": "",
      "referenceCategory": "",
      "referenceType": "",
      "referenceObjectId": "",
      "referenceObjectGuid": "",
      "referencePrefix": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "defaultValue": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[StructDTO](#schemastructdto)|

## DELETE 根据ID删除数据对象

DELETE /bm/struct/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 根据ID返回结构体及带完整依赖关系的属性列表

GET /bm/struct/full-with-relations/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "structCode": "",
  "structName": "",
  "structType": "",
  "extension": "",
  "structAttributeList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "structId": "",
      "structGuid": "",
      "structVersion": 0,
      "attributeCode": "",
      "attributeName": "",
      "referenceCategory": "",
      "referenceType": "",
      "referenceObjectId": "",
      "referenceObjectGuid": "",
      "referencePrefix": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "defaultValue": "",
      "path": "",
      "level": 0,
      "fullAttributeCode": "",
      "compositeStructAttributeList": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "moduleGuid": "",
          "structId": "",
          "structGuid": "",
          "structVersion": 0,
          "attributeCode": "",
          "attributeName": "",
          "referenceCategory": "",
          "referenceType": "",
          "referenceObjectId": "",
          "referenceObjectGuid": "",
          "referencePrefix": "",
          "dataType": "",
          "dataLength": 0,
          "dataScale": 0,
          "sortNum": 0,
          "defaultValue": "",
          "path": "",
          "level": 0,
          "fullAttributeCode": "",
          "compositeStructAttributeList": []
        }
      ]
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "structCode": "",
  "structName": "",
  "structType": "",
  "extension": "",
  "structAttributeList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "structId": "",
      "structGuid": "",
      "structVersion": 0,
      "attributeCode": "",
      "attributeName": "",
      "referenceCategory": "",
      "referenceType": "",
      "referenceObjectId": "",
      "referenceObjectGuid": "",
      "referencePrefix": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "defaultValue": "",
      "path": "",
      "level": 0,
      "fullAttributeCode": "",
      "compositeStructAttributeList": [
        {
          "id": "",
          "createBy": "",
          "createTime": "",
          "updateBy": "",
          "updateTime": "",
          "tenantId": "",
          "moduleGuid": "",
          "structId": "",
          "structGuid": "",
          "structVersion": 0,
          "attributeCode": "",
          "attributeName": "",
          "referenceCategory": "",
          "referenceType": "",
          "referenceObjectId": "",
          "referenceObjectGuid": "",
          "referencePrefix": "",
          "dataType": "",
          "dataLength": 0,
          "dataScale": 0,
          "sortNum": 0,
          "defaultValue": "",
          "path": "",
          "level": 0,
          "fullAttributeCode": "",
          "compositeStructAttributeList": []
        }
      ]
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[StructVO](#schemastructvo)|

## POST 创建数据对象

POST /bm/struct

> Body 请求参数

```json
{
  "moduleGuid": "019b563f73b27c60ae46b0102d3f0668",
  "packageGuid": "019b563f73b97c2194a664748c7e765c",
  "packageId": "019b6ec41daf716b806a2cc55c71b2e0",
  "structCode": "test1",
  "structName": "测试结构体",
  "structAttributeList": [
    {
      "attributeCode": "name",
      "attributeName": "名称",
      "referenceCategory": "f",
      "dataType": "VARCHAR",
      "dataLength": 255,
      "sortNum": 1
    },
    {
      "attributeCode": "age",
      "attributeName": "年龄",
      "dataType": "INTEGER",
      "sortNum": 2
    },
    {
      "attributeCode": "birthday",
      "attributeName": "生日",
      "dataType": "DATE",
      "sortNum": 3
    },
    {
      "attributeCode": "email",
      "attributeName": "邮件",
      "dataType": "VARCHAR",
      "dataLength": 10,
      "sortNum": 4
    },
    {
      "attributeCode": "struts",
      "attributeName": "状态",
      "dataType": "VARCHAR",
      "dataLength": 10,
      "sortNum": 5
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[StructDTO](#schemastructdto)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "structCode": "",
  "structName": "",
  "structType": "",
  "extension": "",
  "createTimeBeign": "",
  "createTimeEnd": "",
  "updateTimeBeign": "",
  "updateTimeEnd": "",
  "structAttributeList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "moduleGuid": "",
      "structId": "",
      "structGuid": "",
      "structVersion": 0,
      "attributeCode": "",
      "attributeName": "",
      "referenceCategory": "",
      "referenceType": "",
      "referenceObjectId": "",
      "referenceObjectGuid": "",
      "referencePrefix": "",
      "dataType": "",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "defaultValue": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[StructDTO](#schemastructdto)|

## POST 激活

POST /bm/struct/activate/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 激活影响范围评估

POST /bm/struct/activate-effect/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
[]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 返回历史版本列表

POST /bm/struct/history/{guid}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

> 200 Response

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "guid": "",
    "version": 0,
    "moduleGuid": "",
    "packageGuid": "",
    "status": "",
    "packageId": "",
    "activeBy": "",
    "activeTime": "",
    "structCode": "",
    "structName": "",
    "structType": "",
    "extension": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[Struct](#schemastruct)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» guid|string|false|none||域唯一标识|
|» version|integer|false|none||域版本|
|» moduleGuid|string|true|none||模块唯一标识|
|» packageGuid|string|true|none||包唯一标识|
|» status|string|false|none||状态;A:激活，N:未激活|
|» packageId|string|true|none||包ID|
|» activeBy|string|false|none||激活人|
|» activeTime|string|false|none||激活时间|
|» structCode|string|true|none||结构体编码|
|» structName|string|true|none||结构体名称|
|» structType|string|false|none||结构体类型|
|» extension|string|false|none||扩展属性|

# 模型/消息组

## POST 查询分页数据

POST /bl/message-group/query

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "groupCode": "",
      "groupName": "",
      "groupType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

```json
{
  "list": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "version": 0,
      "moduleGuid": "",
      "packageGuid": "",
      "status": "",
      "packageId": "",
      "activeBy": "",
      "activeTime": "",
      "groupCode": "",
      "groupName": "",
      "groupType": "",
      "extension": ""
    }
  ],
  "pagination": {
    "pageIndex": 0,
    "pageSize": 0,
    "totalCount": 0,
    "totalPage": 0,
    "sortBy": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[PageResultMessageGroup](#schemapageresultmessagegroup)|

## GET 根据ID返回对象

GET /bl/message-group/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "groupCode": "",
  "groupName": "",
  "groupType": "",
  "extension": "",
  "messageInfoList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "moduleGuid": "",
      "groupId": "",
      "groupGuid": "",
      "messageCode": "",
      "messageType": "",
      "messageTemplate": "",
      "status": "",
      "sortNum": 0
    }
  ]
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "groupCode": "",
  "groupName": "",
  "groupType": "",
  "extension": "",
  "messageInfoList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "moduleGuid": "",
      "groupId": "",
      "groupGuid": "",
      "messageCode": "",
      "messageType": "",
      "messageTemplate": "",
      "status": "",
      "sortNum": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MessageGroupVO](#schemamessagegroupvo)|

## PUT 根据ID更新数据对象

PUT /bl/message-group/{id}

> Body 请求参数

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "groupCode": "string",
  "groupName": "string",
  "groupType": "string",
  "extension": "string",
  "versionBeign": 0,
  "versionEnd": 0,
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "activeTimeBeign": "string",
  "activeTimeEnd": "string",
  "messageInfoList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "moduleGuid": "string",
      "groupId": "string",
      "groupGuid": "string",
      "messageCode": "string",
      "messageType": "string",
      "messageTemplate": "string",
      "status": "string",
      "sortNum": 0
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[MessageGroupDTO](#schemamessagegroupdto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "groupCode": "",
  "groupName": "",
  "groupType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "groupCode": "",
  "groupName": "",
  "groupType": "",
  "extension": "",
  "versionBeign": 0,
  "versionEnd": 0,
  "createTimeBeign": "",
  "createTimeEnd": "",
  "updateTimeBeign": "",
  "updateTimeEnd": "",
  "activeTimeBeign": "",
  "activeTimeEnd": "",
  "messageInfoList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "moduleGuid": "",
      "groupId": "",
      "groupGuid": "",
      "messageCode": "",
      "messageType": "",
      "messageTemplate": "",
      "status": "",
      "sortNum": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MessageGroupDTO](#schemamessagegroupdto)|

## DELETE 根据ID删除数据对象

DELETE /bl/message-group/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 创建数据对象

POST /bl/message-group

> Body 请求参数

```json
{
  "moduleGuid": "019b563f73b27c60ae46b0102d3f0668",
  "packageGuid": "019b563f73b97c2194a664748c7e765c",
  "packageId": "019b6ec41daf716b806a2cc55c71b2e0",
  "groupCode": "test",
  "groupName": "测试函数组",
  "groupType": "FUNCTION_GROUP",
  "messageInfoList": [
    {
      "messageCode": "test1",
      "messageType": "S",
      "messageTemplate": "成功测试模板",
      "sortNum": 1
    },
    {
      "messageCode": "test2",
      "messageType": "E",
      "messageTemplate": "异常测试模板",
      "sortNum": 1
    },
    {
      "messageCode": "test3",
      "messageType": "W",
      "messageTemplate": "警告测试模板",
      "sortNum": 1
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[MessageGroupDTO](#schemamessagegroupdto)| 否 |none|

> 返回示例

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "groupCode": "",
  "groupName": "",
  "groupType": "",
  "extension": ""
}
```

```json
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "tenantId": "",
  "guid": "",
  "version": 0,
  "moduleGuid": "",
  "packageGuid": "",
  "status": "",
  "packageId": "",
  "activeBy": "",
  "activeTime": "",
  "groupCode": "",
  "groupName": "",
  "groupType": "",
  "extension": "",
  "versionBeign": 0,
  "versionEnd": 0,
  "createTimeBeign": "",
  "createTimeEnd": "",
  "updateTimeBeign": "",
  "updateTimeEnd": "",
  "activeTimeBeign": "",
  "activeTimeEnd": "",
  "messageInfoList": [
    {
      "id": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "tenantId": "",
      "guid": "",
      "moduleGuid": "",
      "groupId": "",
      "groupGuid": "",
      "messageCode": "",
      "messageType": "",
      "messageTemplate": "",
      "status": "",
      "sortNum": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[MessageGroupDTO](#schemamessagegroupdto)|

## POST 激活

POST /bl/message-group/activate/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 返回历史版本列表

POST /bl/message-group/history/{guid}

> Body 请求参数

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|guid|path|string| 是 |none|
|body|body|[QueryEntity](#schemaqueryentity)| 否 |none|

> 返回示例

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "guid": "",
    "version": 0,
    "moduleGuid": "",
    "packageGuid": "",
    "status": "",
    "packageId": "",
    "activeBy": "",
    "activeTime": "",
    "groupCode": "",
    "groupName": "",
    "groupType": "",
    "extension": ""
  }
]
```

```json
[
  {
    "id": "",
    "createBy": "",
    "createTime": "",
    "updateBy": "",
    "updateTime": "",
    "tenantId": "",
    "guid": "",
    "version": 0,
    "moduleGuid": "",
    "packageGuid": "",
    "status": "",
    "packageId": "",
    "activeBy": "",
    "activeTime": "",
    "groupCode": "",
    "groupName": "",
    "groupType": "",
    "extension": ""
  }
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|*anonymous*|[[MessageGroup](#schemamessagegroup)]|false|none||none|
|» id|string|false|none||none|
|» createBy|string|false|none||none|
|» createTime|string|false|none||none|
|» updateBy|string|false|none||none|
|» updateTime|string|false|none||none|
|» tenantId|string|false|none||租户ID|
|» guid|string|false|none||域唯一标识|
|» version|integer|false|none||域版本|
|» moduleGuid|string|true|none||模块唯一标识|
|» packageGuid|string|true|none||包唯一标识|
|» status|string|false|none||状态;A:激活，N:未激活|
|» packageId|string|true|none||包ID|
|» activeBy|string|false|none||激活人|
|» activeTime|string|false|none||激活时间|
|» groupCode|string|false|none||消息组编码|
|» groupName|string|false|none||消息组名称|
|» groupType|string|false|none||消息组类型;BUILTIN（内置，不可删除）、CUSTOM（自定义）|
|» extension|string|false|none||扩展属性|

# AI测试

## POST ChatClient 同步流式调用

POST /ai/sync-stream/chat

> Body 请求参数

```json
{
  "message": "创建订单表"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[AiParams](#schemaaiparams)| 否 |none|

> 返回示例

```json
[
  ""
]
```

```json
[
  ""
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST deepseek

POST /chat/completions

> Body 请求参数

```json
{
  "model": "deepseek-chat",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello!"
    }
  ],
  "stream": false
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{
  "id": "string",
  "object": "string",
  "created": 0,
  "model": "string",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "string",
        "content": "string"
      },
      "logprobs": null,
      "finish_reason": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_cache_hit_tokens": 0,
    "prompt_cache_miss_tokens": 0
  },
  "system_fingerprint": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» id|string|true|none||none|
|» object|string|true|none||none|
|» created|integer|true|none||none|
|» model|string|true|none||none|
|» choices|[object]|true|none||none|
|»» index|integer|false|none||none|
|»» message|object|false|none||none|
|»»» role|string|true|none||none|
|»»» content|string|true|none||none|
|»» logprobs|null|false|none||none|
|»» finish_reason|string|false|none||none|
|» usage|object|true|none||none|
|»» prompt_tokens|integer|true|none||none|
|»» completion_tokens|integer|true|none||none|
|»» total_tokens|integer|true|none||none|
|»» prompt_tokens_details|object|true|none||none|
|»»» cached_tokens|integer|true|none||none|
|»» prompt_cache_hit_tokens|integer|true|none||none|
|»» prompt_cache_miss_tokens|integer|true|none||none|
|» system_fingerprint|string|true|none||none|

## POST ChatClient 流式调用

POST /ai/stream/chat

> Body 请求参数

```json
{
  "message": "创建一张合同表",
  "chatId": "40"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[AiParams](#schemaaiparams)| 否 |none|

> 返回示例

```json
[
  ""
]
```

```json
[
  ""
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST ChatClient 简单调用

POST /ai/simple/chat

> Body 请求参数

```json
{
  "message": "string",
  "systemPrompt": "string",
  "chatId": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[AiParams](#schemaaiparams)| 否 |none|

> 返回示例

> 200 Response

```json
[
  ""
]
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST schemaChat

POST /ai/schema/chat

> Body 请求参数

```json
{
  "message": "创建一张合同表"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
"string"
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|string|

# 数据模型

<h2 id="tocS_Module">Module</h2>

<a id="schemamodule"></a>
<a id="schema_Module"></a>
<a id="tocSmodule"></a>
<a id="tocsmodule"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "moduleCode": "string",
  "moduleName": "string",
  "entityPrefix": "string",
  "extension": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:激活，N:未激活|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|moduleCode|string|true|none||模块编码|
|moduleName|string|true|none||模块名称|
|entityPrefix|string|false|none||实体前缀|
|extension|string|false|none||扩展属性|

<h2 id="tocS_Domain">Domain</h2>

<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "domainCode": "string",
  "domainName": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "string",
  "checkRule": "string",
  "extension": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包唯一标识|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|domainCode|string|true|none||域编码|
|domainName|string|true|none||域名称|
|dataType|string|true|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|convRoutine|string|false|none||转换例程|
|checkRule|string|false|none||校验规则|
|extension|string|false|none||扩展属性|

<h2 id="tocS_Entity">Entity</h2>

<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "entityCode": "string",
  "entityName": "string",
  "entityType": "string",
  "extension": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包唯一标识|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|entityCode|string|true|none||实体编码|
|entityName|string|true|none||实体名称|
|entityType|string|true|none||实体类型;TABLE:表, VIEW:视图|
|extension|string|false|none||扩展属性|

<h2 id="tocS_DataElement">DataElement</h2>

<a id="schemadataelement"></a>
<a id="schema_DataElement"></a>
<a id="tocSdataelement"></a>
<a id="tocsdataelement"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "elementCode": "string",
  "elementName": "string",
  "domainId": "string",
  "domainGuid": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包唯一标识|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|elementCode|string|true|none||数据元素编码|
|elementName|string|true|none||数据元素名称|
|domainId|string|false|none||域ID|
|domainGuid|string|false|none||域唯一标识|
|dataType|string|true|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|

<h2 id="tocS_Application">Application</h2>

<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|applicationCode|string|true|none||应用编码|
|applicationName|string|true|none||应用名称|
|applicationIcon|string|false|none||应用图标|
|extension|string|false|none||扩展属性|

<h2 id="tocS_System">System</h2>

<a id="schemasystem"></a>
<a id="schema_System"></a>
<a id="tocSsystem"></a>
<a id="tocssystem"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|systemCode|string|true|none||系统编码|
|systemName|string|true|none||系统名称|
|systemIcon|string|false|none||系统图标|
|extension|string|false|none||扩展属性|

<h2 id="tocS_ApplicationVO">ApplicationVO</h2>

<a id="schemaapplicationvo"></a>
<a id="schema_ApplicationVO"></a>
<a id="tocSapplicationvo"></a>
<a id="tocsapplicationvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string",
  "createByLabel": "string",
  "publishByLabel": "string",
  "moduleCount": 0,
  "hotfixVersionCount": 0,
  "latestDependency": true
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|applicationCode|string|true|none||应用编码|
|applicationName|string|true|none||应用名称|
|applicationIcon|string|false|none||应用图标|
|extension|string|false|none||扩展属性|
|createByLabel|string|false|none||none|
|publishByLabel|string|false|none||none|
|moduleCount|integer|false|none||依赖模块数量|
|hotfixVersionCount|integer|false|none||修复版本数量|
|latestDependency|boolean|false|none||依赖是否为最新版本|

<h2 id="tocS_SystemVO">SystemVO</h2>

<a id="schemasystemvo"></a>
<a id="schema_SystemVO"></a>
<a id="tocSsystemvo"></a>
<a id="tocssystemvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string",
  "createByLabel": "string",
  "publishByLabel": "string",
  "applicationCount": 0,
  "hotfixVersionCount": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|systemCode|string|true|none||系统编码|
|systemName|string|true|none||系统名称|
|systemIcon|string|false|none||系统图标|
|extension|string|false|none||扩展属性|
|createByLabel|string|false|none||none|
|publishByLabel|string|false|none||none|
|applicationCount|integer|false|none||依赖应用数量|
|hotfixVersionCount|integer|false|none||修复版本数量|

<h2 id="tocS_ModuleVO">ModuleVO</h2>

<a id="schemamodulevo"></a>
<a id="schema_ModuleVO"></a>
<a id="tocSmodulevo"></a>
<a id="tocsmodulevo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "moduleCode": "string",
  "moduleName": "string",
  "entityPrefix": "string",
  "extension": "string",
  "pendingCount": 0,
  "publishedCount": 0,
  "dependencyCount": 0,
  "hotfixVersionCount": 0,
  "createByLabel": "string",
  "publishByLabel": "string",
  "latestDependency": true,
  "dependencyScope": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|moduleCode|string|true|none||模块编码|
|moduleName|string|true|none||模块名称|
|entityPrefix|string|false|none||实体前缀|
|extension|string|false|none||扩展属性|
|pendingCount|integer|false|none||none|
|publishedCount|integer|false|none||none|
|dependencyCount|integer|false|none||依赖数量|
|hotfixVersionCount|integer|false|none||修复版本数量|
|createByLabel|string|false|none||none|
|publishByLabel|string|false|none||none|
|latestDependency|boolean|false|none||依赖是否为最新版本|
|dependencyScope|string|false|none||依赖范围|

<h2 id="tocS_PendingObject">PendingObject</h2>

<a id="schemapendingobject"></a>
<a id="schema_PendingObject"></a>
<a id="tocSpendingobject"></a>
<a id="tocspendingobject"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "moduleGuid": "string",
  "packageId": "string",
  "packageGuid": "string",
  "objectType": "string",
  "objectId": "string",
  "objectVersion": 0,
  "objectGuid": "string",
  "objectCode": "string",
  "objectName": "string",
  "objectStatus": "string",
  "activeBy": "string",
  "activeTime": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|moduleGuid|string|true|none||模块唯一标识|
|packageId|string|true|none||包ID|
|packageGuid|string|true|none||包唯一标识|
|objectType|string|true|none||对象类型|
|objectId|string|true|none||对象ID|
|objectVersion|integer|true|none||对象版本|
|objectGuid|string|true|none||对象唯一标识|
|objectCode|string|true|none||对象编码|
|objectName|string|true|none||对象名称|
|objectStatus|string|false|none||状态;A:激活, N:未激活, L:锁定|
|activeBy|string|false|none||激活人ID|
|activeTime|string|false|none||激活时间|

<h2 id="tocS_PublishedObject">PublishedObject</h2>

<a id="schemapublishedobject"></a>
<a id="schema_PublishedObject"></a>
<a id="tocSpublishedobject"></a>
<a id="tocspublishedobject"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "moduleId": "string",
  "moduleVersion": "string",
  "moduleGuid": "string",
  "packageId": "string",
  "packageGuid": "string",
  "objectType": "string",
  "objectId": "string",
  "objectVersion": 0,
  "objectGuid": "string",
  "objectCode": "string",
  "objectName": "string",
  "activeBy": "string",
  "activeTime": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|moduleId|string|true|none||模块ID|
|moduleVersion|string|true|none||模块版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageId|string|true|none||包ID|
|packageGuid|string|true|none||包唯一标识|
|objectType|string|true|none||对象类型|
|objectId|string|true|none||对象ID|
|objectVersion|integer|true|none||对象版本|
|objectGuid|string|true|none||对象唯一标识|
|objectCode|string|true|none||对象编码|
|objectName|string|true|none||对象名称|
|activeBy|string|false|none||激活人ID|
|activeTime|string|false|none||激活时间|

<h2 id="tocS_APIResultVoid">APIResultVoid</h2>

<a id="schemaapiresultvoid"></a>
<a id="schema_APIResultVoid"></a>
<a id="tocSapiresultvoid"></a>
<a id="tocsapiresultvoid"></a>

```json
{
  "type": "S",
  "code": "StateEnum.SUCCESS.getCode()",
  "message": "string",
  "path": "string",
  "data": null,
  "extra": {}
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|type|string|false|none||消息类型（S/W/E/A）|
|code|string|false|none||消息码|
|message|string|false|none||响应信息|
|path|string|false|none||请求路径|
|data|null|false|none||响应数据|
|extra|object|false|none||额外返回数据|

<h2 id="tocS_Package">Package</h2>

<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "parentId": "string",
  "parentGuid": "string",
  "guid": "string",
  "moduleId": "string",
  "moduleGuid": "string",
  "packageCode": "string",
  "packageName": "string",
  "description": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|parentId|string|true|none||父ID|
|parentGuid|string|true|none||父唯一标识|
|guid|string|false|none||包唯一标识|
|moduleId|string|true|none||模块ID|
|moduleGuid|string|true|none||模块唯一标识|
|packageCode|string|true|none||包编码|
|packageName|string|true|none||包名称|
|description|string|false|none||描述|

<h2 id="tocS_MessageGroup">MessageGroup</h2>

<a id="schemamessagegroup"></a>
<a id="schema_MessageGroup"></a>
<a id="tocSmessagegroup"></a>
<a id="tocsmessagegroup"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "groupCode": "string",
  "groupName": "string",
  "groupType": "string",
  "extension": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|groupCode|string|false|none||消息组编码|
|groupName|string|false|none||消息组名称|
|groupType|string|false|none||消息组类型;BUILTIN（内置，不可删除）、CUSTOM（自定义）|
|extension|string|false|none||扩展属性|

<h2 id="tocS_AiParams">AiParams</h2>

<a id="schemaaiparams"></a>
<a id="schema_AiParams"></a>
<a id="tocSaiparams"></a>
<a id="tocsaiparams"></a>

```json
{
  "message": "string",
  "systemPrompt": "string",
  "chatId": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|message|string|false|none||消息，用户的查询信息|
|systemPrompt|string|false|none||系统提示,定义 agent 的角色和行为|
|chatId|string|false|none||会话记忆id|

<h2 id="tocS_Pagination">Pagination</h2>

<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "pageIndex": 1,
  "pageSize": 10,
  "totalCount": 0,
  "totalPage": 1,
  "sortBy": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|pageIndex|integer|false|none||*<br />当前页|
|pageSize|integer|false|none||*<br />默认每页数量10|
|totalCount|integer(int64)|false|none||*<br />count总数|
|totalPage|integer|false|none||*<br />count总页数|
|sortBy|string|false|none||排序，如： roleName desc,roleCode asc|

<h2 id="tocS_{}">{}</h2>

<a id="schema{}"></a>
<a id="schema_{}"></a>
<a id="tocS{}"></a>
<a id="tocs{}"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_Role">Role</h2>

<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "code": "string",
  "name": "string",
  "description": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|code|string|true|none||编码|
|name|string|true|none||名称|
|description|string|false|none||描述|

<h2 id="tocS_DomainListVO">DomainListVO</h2>

<a id="schemadomainlistvo"></a>
<a id="schema_DomainListVO"></a>
<a id="tocSdomainlistvo"></a>
<a id="tocsdomainlistvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "domainCode": "string",
  "domainName": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "convRoutine": "string",
  "checkRule": "string",
  "extension": "string",
  "module": {
    "id": "string",
    "createBy": "string",
    "createTime": "string",
    "updateBy": "string",
    "updateTime": "string",
    "tenantId": "string",
    "sourceId": "string",
    "guid": "string",
    "semanticVersion": "string",
    "publishDesc": "string",
    "publishBy": "string",
    "publishTime": "string",
    "status": "string",
    "description": "string",
    "versionName": "string",
    "versionType": "string",
    "moduleCode": "string",
    "moduleName": "string",
    "entityPrefix": "string",
    "extension": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|domainCode|string|true|none||域编码|
|domainName|string|true|none||域名称|
|dataType|string|true|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|convRoutine|string|false|none||转换例程|
|checkRule|string|false|none||校验规则|
|extension|string|false|none||扩展属性|
|module|[Module](#schemamodule)|false|none||none|

<h2 id="tocS_DataElementListVO">DataElementListVO</h2>

<a id="schemadataelementlistvo"></a>
<a id="schema_DataElementListVO"></a>
<a id="tocSdataelementlistvo"></a>
<a id="tocsdataelementlistvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "elementCode": "string",
  "elementName": "string",
  "domainId": "string",
  "domainGuid": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "module": {
    "id": "string",
    "createBy": "string",
    "createTime": "string",
    "updateBy": "string",
    "updateTime": "string",
    "tenantId": "string",
    "sourceId": "string",
    "guid": "string",
    "semanticVersion": "string",
    "publishDesc": "string",
    "publishBy": "string",
    "publishTime": "string",
    "status": "string",
    "description": "string",
    "versionName": "string",
    "versionType": "string",
    "moduleCode": "string",
    "moduleName": "string",
    "entityPrefix": "string",
    "extension": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|elementCode|string|true|none||数据元素编码|
|elementName|string|true|none||数据元素名称|
|domainId|string|false|none||域ID|
|domainGuid|string|false|none||域唯一标识|
|dataType|string|true|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|module|[Module](#schemamodule)|false|none||域对象|

<h2 id="tocS_StructListVO">StructListVO</h2>

<a id="schemastructlistvo"></a>
<a id="schema_StructListVO"></a>
<a id="tocSstructlistvo"></a>
<a id="tocsstructlistvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "structCode": "string",
  "structName": "string",
  "structType": "string",
  "extension": "string",
  "module": {
    "id": "string",
    "createBy": "string",
    "createTime": "string",
    "updateBy": "string",
    "updateTime": "string",
    "tenantId": "string",
    "sourceId": "string",
    "guid": "string",
    "semanticVersion": "string",
    "publishDesc": "string",
    "publishBy": "string",
    "publishTime": "string",
    "status": "string",
    "description": "string",
    "versionName": "string",
    "versionType": "string",
    "moduleCode": "string",
    "moduleName": "string",
    "entityPrefix": "string",
    "extension": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|structCode|string|true|none||结构体编码|
|structName|string|true|none||结构体名称|
|structType|string|false|none||结构体类型|
|extension|string|false|none||扩展属性|
|module|[Module](#schemamodule)|false|none||none|

<h2 id="tocS_PageResultModule">PageResultModule</h2>

<a id="schemapageresultmodule"></a>
<a id="schema_PageResultModule"></a>
<a id="tocSpageresultmodule"></a>
<a id="tocspageresultmodule"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "sourceId": "string",
      "guid": "string",
      "semanticVersion": "string",
      "publishDesc": "string",
      "publishBy": "string",
      "publishTime": "string",
      "status": "string",
      "description": "string",
      "versionName": "string",
      "versionType": "string",
      "moduleCode": "string",
      "moduleName": "string",
      "entityPrefix": "string",
      "extension": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[Module](#schemamodule)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultDomain">PageResultDomain</h2>

<a id="schemapageresultdomain"></a>
<a id="schema_PageResultDomain"></a>
<a id="tocSpageresultdomain"></a>
<a id="tocspageresultdomain"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "domainCode": "string",
      "domainName": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "convRoutine": "string",
      "checkRule": "string",
      "extension": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[Domain](#schemadomain)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultEntity">PageResultEntity</h2>

<a id="schemapageresultentity"></a>
<a id="schema_PageResultEntity"></a>
<a id="tocSpageresultentity"></a>
<a id="tocspageresultentity"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "entityCode": "string",
      "entityName": "string",
      "entityType": "string",
      "extension": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[Entity](#schemaentity)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultDataElement">PageResultDataElement</h2>

<a id="schemapageresultdataelement"></a>
<a id="schema_PageResultDataElement"></a>
<a id="tocSpageresultdataelement"></a>
<a id="tocspageresultdataelement"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "elementCode": "string",
      "elementName": "string",
      "domainId": "string",
      "domainGuid": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[DataElement](#schemadataelement)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultApplication">PageResultApplication</h2>

<a id="schemapageresultapplication"></a>
<a id="schema_PageResultApplication"></a>
<a id="tocSpageresultapplication"></a>
<a id="tocspageresultapplication"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "sourceId": "string",
      "guid": "string",
      "semanticVersion": "string",
      "publishDesc": "string",
      "publishBy": "string",
      "publishTime": "string",
      "status": "string",
      "description": "string",
      "versionName": "string",
      "versionType": "string",
      "applicationCode": "string",
      "applicationName": "string",
      "applicationIcon": "string",
      "extension": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[Application](#schemaapplication)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultSystem">PageResultSystem</h2>

<a id="schemapageresultsystem"></a>
<a id="schema_PageResultSystem"></a>
<a id="tocSpageresultsystem"></a>
<a id="tocspageresultsystem"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "sourceId": "string",
      "guid": "string",
      "semanticVersion": "string",
      "publishDesc": "string",
      "publishBy": "string",
      "publishTime": "string",
      "status": "string",
      "description": "string",
      "versionName": "string",
      "versionType": "string",
      "systemCode": "string",
      "systemName": "string",
      "systemIcon": "string",
      "extension": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[System](#schemasystem)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultApplicationVO">PageResultApplicationVO</h2>

<a id="schemapageresultapplicationvo"></a>
<a id="schema_PageResultApplicationVO"></a>
<a id="tocSpageresultapplicationvo"></a>
<a id="tocspageresultapplicationvo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "sourceId": "string",
      "guid": "string",
      "semanticVersion": "string",
      "publishDesc": "string",
      "publishBy": "string",
      "publishTime": "string",
      "status": "string",
      "description": "string",
      "versionName": "string",
      "versionType": "string",
      "applicationCode": "string",
      "applicationName": "string",
      "applicationIcon": "string",
      "extension": "string",
      "createByLabel": "string",
      "publishByLabel": "string",
      "moduleCount": 0,
      "hotfixVersionCount": 0,
      "latestDependency": true
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[ApplicationVO](#schemaapplicationvo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultSystemVO">PageResultSystemVO</h2>

<a id="schemapageresultsystemvo"></a>
<a id="schema_PageResultSystemVO"></a>
<a id="tocSpageresultsystemvo"></a>
<a id="tocspageresultsystemvo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "sourceId": "string",
      "guid": "string",
      "semanticVersion": "string",
      "publishDesc": "string",
      "publishBy": "string",
      "publishTime": "string",
      "status": "string",
      "description": "string",
      "versionName": "string",
      "versionType": "string",
      "systemCode": "string",
      "systemName": "string",
      "systemIcon": "string",
      "extension": "string",
      "createByLabel": "string",
      "publishByLabel": "string",
      "applicationCount": 0,
      "hotfixVersionCount": 0
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[SystemVO](#schemasystemvo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultModuleVO">PageResultModuleVO</h2>

<a id="schemapageresultmodulevo"></a>
<a id="schema_PageResultModuleVO"></a>
<a id="tocSpageresultmodulevo"></a>
<a id="tocspageresultmodulevo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "sourceId": "string",
      "guid": "string",
      "semanticVersion": "string",
      "publishDesc": "string",
      "publishBy": "string",
      "publishTime": "string",
      "status": "string",
      "description": "string",
      "versionName": "string",
      "versionType": "string",
      "moduleCode": "string",
      "moduleName": "string",
      "entityPrefix": "string",
      "extension": "string",
      "pendingCount": 0,
      "publishedCount": 0,
      "dependencyCount": 0,
      "hotfixVersionCount": 0,
      "createByLabel": "string",
      "publishByLabel": "string",
      "latestDependency": true,
      "dependencyScope": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[ModuleVO](#schemamodulevo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultPendingObject">PageResultPendingObject</h2>

<a id="schemapageresultpendingobject"></a>
<a id="schema_PageResultPendingObject"></a>
<a id="tocSpageresultpendingobject"></a>
<a id="tocspageresultpendingobject"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "packageId": "string",
      "packageGuid": "string",
      "objectType": "string",
      "objectId": "string",
      "objectVersion": 0,
      "objectGuid": "string",
      "objectCode": "string",
      "objectName": "string",
      "objectStatus": "string",
      "activeBy": "string",
      "activeTime": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[PendingObject](#schemapendingobject)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultPublishedObject">PageResultPublishedObject</h2>

<a id="schemapageresultpublishedobject"></a>
<a id="schema_PageResultPublishedObject"></a>
<a id="tocSpageresultpublishedobject"></a>
<a id="tocspageresultpublishedobject"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleId": "string",
      "moduleVersion": "string",
      "moduleGuid": "string",
      "packageId": "string",
      "packageGuid": "string",
      "objectType": "string",
      "objectId": "string",
      "objectVersion": 0,
      "objectGuid": "string",
      "objectCode": "string",
      "objectName": "string",
      "activeBy": "string",
      "activeTime": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[PublishedObject](#schemapublishedobject)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultPackage">PageResultPackage</h2>

<a id="schemapageresultpackage"></a>
<a id="schema_PageResultPackage"></a>
<a id="tocSpageresultpackage"></a>
<a id="tocspageresultpackage"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "parentId": "string",
      "parentGuid": "string",
      "guid": "string",
      "moduleId": "string",
      "moduleGuid": "string",
      "packageCode": "string",
      "packageName": "string",
      "description": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[Package](#schemapackage)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_key">key</h2>

<a id="schemakey"></a>
<a id="schema_key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_UserPosition">UserPosition</h2>

<a id="schemauserposition"></a>
<a id="schema_UserPosition"></a>
<a id="tocSuserposition"></a>
<a id="tocsuserposition"></a>

```json
{
  "id": "string",
  "userId": "string",
  "orgId": "string",
  "positionId": "string",
  "primaryPosition": true,
  "tenantId": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|userId|string|false|none||用户ID|
|orgId|string|false|none||组织ID|
|positionId|string|false|none||岗位ID|
|primaryPosition|boolean|false|none||是否主岗|
|tenantId|string|false|none||租户ID|

<h2 id="tocS_PageResultMessageGroup">PageResultMessageGroup</h2>

<a id="schemapageresultmessagegroup"></a>
<a id="schema_PageResultMessageGroup"></a>
<a id="tocSpageresultmessagegroup"></a>
<a id="tocspageresultmessagegroup"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "groupCode": "string",
      "groupName": "string",
      "groupType": "string",
      "extension": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[MessageGroup](#schemamessagegroup)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_key1">key1</h2>

<a id="schemakey1"></a>
<a id="schema_key1"></a>
<a id="tocSkey1"></a>
<a id="tocskey1"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_"></h2>

<a id="schema"></a>
<a id="schema_"></a>
<a id="tocS"></a>
<a id="tocs"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_Dict">Dict</h2>

<a id="schemadict"></a>
<a id="schema_Dict"></a>
<a id="tocSdict"></a>
<a id="tocsdict"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "parentId": "string",
  "type": "string",
  "itemName": "string",
  "itemValue": "string",
  "description": "string",
  "extension": {
    "key": {}
  },
  "sortNum": 0,
  "status": "string",
  "children": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "parentId": "string",
      "type": "string",
      "itemName": "string",
      "itemValue": "string",
      "description": "string",
      "extension": {
        "key": {}
      },
      "sortNum": 0,
      "status": "string",
      "children": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "parentId": "string",
          "type": "string",
          "itemName": "string",
          "itemValue": "string",
          "description": "string",
          "extension": {
            "key": null
          },
          "sortNum": 0,
          "status": "string",
          "children": [
            {}
          ]
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|parentId|string|false|none||父级ID|
|type|string|true|none||类型|
|itemName|string|true|none||字典名称|
|itemValue|string|false|none||字典值|
|description|string|false|none||描述|
|extension|[MapObject](#schemamapobject)|false|none||扩展JSON|
|sortNum|integer|false|none||排序|
|status|string|false|none||状态|
|children|[[Dict](#schemadict)]|false|none||none|

<h2 id="tocS_Position">Position</h2>

<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "code": "string",
  "name": "string",
  "gradeName": "string",
  "gradeValue": "string",
  "dataPermissionType": "string",
  "status": "string",
  "dataPermissionTypeLabel": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|code|string|true|none||编码|
|name|string|true|none||名称|
|gradeName|string|false|none||职级名称|
|gradeValue|string|false|none||职级|
|dataPermissionType|string|false|none||数据权限类型|
|status|string|false|none||状态|
|dataPermissionTypeLabel|string|false|none||数据权限类型名称|

<h2 id="tocS_PageResultDomainListVO">PageResultDomainListVO</h2>

<a id="schemapageresultdomainlistvo"></a>
<a id="schema_PageResultDomainListVO"></a>
<a id="tocSpageresultdomainlistvo"></a>
<a id="tocspageresultdomainlistvo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "domainCode": "string",
      "domainName": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "convRoutine": "string",
      "checkRule": "string",
      "extension": "string",
      "module": {
        "id": "string",
        "createBy": "string",
        "createTime": "string",
        "updateBy": "string",
        "updateTime": "string",
        "tenantId": "string",
        "sourceId": "string",
        "guid": "string",
        "semanticVersion": "string",
        "publishDesc": "string",
        "publishBy": "string",
        "publishTime": "string",
        "status": "string",
        "description": "string",
        "versionName": "string",
        "versionType": "string",
        "moduleCode": "string",
        "moduleName": "string",
        "entityPrefix": "string",
        "extension": "string"
      }
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[DomainListVO](#schemadomainlistvo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultDataElementListVO">PageResultDataElementListVO</h2>

<a id="schemapageresultdataelementlistvo"></a>
<a id="schema_PageResultDataElementListVO"></a>
<a id="tocSpageresultdataelementlistvo"></a>
<a id="tocspageresultdataelementlistvo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "elementCode": "string",
      "elementName": "string",
      "domainId": "string",
      "domainGuid": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "module": {
        "id": "string",
        "createBy": "string",
        "createTime": "string",
        "updateBy": "string",
        "updateTime": "string",
        "tenantId": "string",
        "sourceId": "string",
        "guid": "string",
        "semanticVersion": "string",
        "publishDesc": "string",
        "publishBy": "string",
        "publishTime": "string",
        "status": "string",
        "description": "string",
        "versionName": "string",
        "versionType": "string",
        "moduleCode": "string",
        "moduleName": "string",
        "entityPrefix": "string",
        "extension": "string"
      }
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[DataElementListVO](#schemadataelementlistvo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_PageResultStructListVO">PageResultStructListVO</h2>

<a id="schemapageresultstructlistvo"></a>
<a id="schema_PageResultStructListVO"></a>
<a id="tocSpageresultstructlistvo"></a>
<a id="tocspageresultstructlistvo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "structCode": "string",
      "structName": "string",
      "structType": "string",
      "extension": "string",
      "module": {
        "id": "string",
        "createBy": "string",
        "createTime": "string",
        "updateBy": "string",
        "updateTime": "string",
        "tenantId": "string",
        "sourceId": "string",
        "guid": "string",
        "semanticVersion": "string",
        "publishDesc": "string",
        "publishBy": "string",
        "publishTime": "string",
        "status": "string",
        "description": "string",
        "versionName": "string",
        "versionType": "string",
        "moduleCode": "string",
        "moduleName": "string",
        "entityPrefix": "string",
        "extension": "string"
      }
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[StructListVO](#schemastructlistvo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_MapObject">MapObject</h2>

<a id="schemamapobject"></a>
<a id="schema_MapObject"></a>
<a id="tocSmapobject"></a>
<a id="tocsmapobject"></a>

```json
{
  "key": {}
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|key|[key1](#schemakey1)|false|none||none|

<h2 id="tocS_UserVO">UserVO</h2>

<a id="schemauservo"></a>
<a id="schema_UserVO"></a>
<a id="tocSuservo"></a>
<a id="tocsuservo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "orgId": "string",
  "userNum": "string",
  "realname": "string",
  "gender": "string",
  "birthday": "string",
  "mobilePhone": "string",
  "email": "string",
  "avatarUrl": "string",
  "status": "string",
  "account": "string",
  "accountStatus": "string",
  "accountStatusLabel": "string",
  "genderLabel": {
    "label": "string",
    "value": {},
    "ext": {},
    "parentId": {},
    "children": [
      {
        "label": "string",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": null,
            "value": null,
            "ext": null,
            "parentId": null,
            "children": null
          }
        ]
      }
    ]
  },
  "statusLabel": {
    "label": "string",
    "value": {},
    "ext": {},
    "parentId": {},
    "children": [
      {
        "label": "string",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": null,
            "value": null,
            "ext": null,
            "parentId": null,
            "children": null
          }
        ]
      }
    ]
  },
  "roleList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "code": "string",
      "name": "string",
      "description": "string"
    }
  ],
  "userPositionList": [
    {
      "id": "string",
      "userId": "string",
      "orgId": "string",
      "positionId": "string",
      "primaryPosition": true,
      "tenantId": "string"
    }
  ],
  "positionList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "code": "string",
      "name": "string",
      "gradeName": "string",
      "gradeValue": "string",
      "dataPermissionType": "string",
      "status": "string",
      "dataPermissionTypeLabel": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|orgId|string|true|none||组织id|
|userNum|string|true|none||用户编号|
|realname|string|true|none||真实姓名|
|gender|string|true|none||性别|
|birthday|string|false|none||生日|
|mobilePhone|string|false|none||手机号|
|email|string|false|none||邮箱|
|avatarUrl|string|false|none||头像地址|
|status|string|false|none||状态|
|account|string|false|none||none|
|accountStatus|string|false|none||none|
|accountStatusLabel|string|false|none||none|
|genderLabel|[LabelValue](#schemalabelvalue)|false|none||none|
|statusLabel|[LabelValue](#schemalabelvalue)|false|none||none|
|roleList|[[Role](#schemarole)]|false|none||none|
|userPositionList|[[UserPosition](#schemauserposition)]|false|none||none|
|positionList|[[Position](#schemaposition)]|false|none||none|

<h2 id="tocS_Condition">Condition</h2>

<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "name": "string",
  "type": "string",
  "value": {}
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||none|
|type|string|false|none||none|
|value|object|false|none||none|

<h2 id="tocS_PageResultDict">PageResultDict</h2>

<a id="schemapageresultdict"></a>
<a id="schema_PageResultDict"></a>
<a id="tocSpageresultdict"></a>
<a id="tocspageresultdict"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "parentId": "string",
      "type": "string",
      "itemName": "string",
      "itemValue": "string",
      "description": "string",
      "extension": {
        "key": {}
      },
      "sortNum": 0,
      "status": "string",
      "children": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "parentId": "string",
          "type": "string",
          "itemName": "string",
          "itemValue": "string",
          "description": "string",
          "extension": {
            "key": null
          },
          "sortNum": 0,
          "status": "string",
          "children": [
            {}
          ]
        }
      ]
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[Dict](#schemadict)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_QueryEntity">QueryEntity</h2>

<a id="schemaqueryentity"></a>
<a id="schema_QueryEntity"></a>
<a id="tocSqueryentity"></a>
<a id="tocsqueryentity"></a>

```json
{
  "params": "new HashMap<>()",
  "fields": [
    "string"
  ],
  "conditions": "new ArrayList<>()",
  "sortBy": "string",
  "pageIndex": 1,
  "pageSize": 10
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|params|[MapObject](#schemamapobject)|false|none||自定义参数|
|fields|[string]|false|none||显示指定列|
|conditions|[[Condition](#schemacondition)]|false|none||查询条件|
|sortBy|string|false|none||排序，示例一：name asc,id desc ,示例二： id,name|
|pageIndex|integer|false|none||当前页码|
|pageSize|integer|false|none||每页数据量|

<h2 id="tocS_key2">key2</h2>

<a id="schemakey2"></a>
<a id="schema_key2"></a>
<a id="tocSkey2"></a>
<a id="tocskey2"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_PageResultUserVO">PageResultUserVO</h2>

<a id="schemapageresultuservo"></a>
<a id="schema_PageResultUserVO"></a>
<a id="tocSpageresultuservo"></a>
<a id="tocspageresultuservo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "orgId": "string",
      "userNum": "string",
      "realname": "string",
      "gender": "string",
      "birthday": "string",
      "mobilePhone": "string",
      "email": "string",
      "avatarUrl": "string",
      "status": "string",
      "account": "string",
      "accountStatus": "string",
      "accountStatusLabel": "string",
      "genderLabel": {
        "label": "string",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": null,
            "value": null,
            "ext": null,
            "parentId": null,
            "children": null
          }
        ]
      },
      "statusLabel": {
        "label": "string",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": null,
            "value": null,
            "ext": null,
            "parentId": null,
            "children": null
          }
        ]
      },
      "roleList": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "code": "string",
          "name": "string",
          "description": "string"
        }
      ],
      "userPositionList": [
        {
          "id": "string",
          "userId": "string",
          "orgId": "string",
          "positionId": "string",
          "primaryPosition": true,
          "tenantId": "string"
        }
      ],
      "positionList": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "code": "string",
          "name": "string",
          "gradeName": "string",
          "gradeValue": "string",
          "dataPermissionType": "string",
          "status": "string",
          "dataPermissionTypeLabel": "string"
        }
      ]
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[UserVO](#schemauservo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_ExecuteSqlResultVO">ExecuteSqlResultVO</h2>

<a id="schemaexecutesqlresultvo"></a>
<a id="schema_ExecuteSqlResultVO"></a>
<a id="tocSexecutesqlresultvo"></a>
<a id="tocsexecutesqlresultvo"></a>

```json
{
  "sql": "string",
  "success": true,
  "errorMsg": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|sql|string|false|none||ddl语句|
|success|boolean|false|none||执行结果|
|errorMsg|string|false|none||错误信息|

<h2 id="tocS_Handler">Handler</h2>

<a id="schemahandler"></a>
<a id="schema_Handler"></a>
<a id="tocShandler"></a>
<a id="tocshandler"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_ModuleDependency">ModuleDependency</h2>

<a id="schemamoduledependency"></a>
<a id="schema_ModuleDependency"></a>
<a id="tocSmoduledependency"></a>
<a id="tocsmoduledependency"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "fromModuleId": "string",
  "fromModuleGuid": "string",
  "toModuleId": "string",
  "toModuleGuid": "string",
  "dependencyType": "string",
  "dependencyScope": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|fromModuleId|string|true|none||依赖方模块ID|
|fromModuleGuid|string|true|none||依赖方模块唯一标识|
|toModuleId|string|true|none||被依赖方模块ID|
|toModuleGuid|string|true|none||被依赖方模块唯一标识|
|dependencyType|string|false|none||依赖类型|
|dependencyScope|string|true|none||依赖范围;DIRECT:直接依赖, TRANSITIVE:间接依赖|

<h2 id="tocS_RepositoryVO">RepositoryVO</h2>

<a id="schemarepositoryvo"></a>
<a id="schema_RepositoryVO"></a>
<a id="tocSrepositoryvo"></a>
<a id="tocsrepositoryvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "objectType": "string",
  "objectCode": "string",
  "objectName": "string",
  "objectGuid": "string",
  "moduleGuid": "string",
  "packageGuid": "string",
  "objectId": "string",
  "objectVersion": 0,
  "objectStatus": "string",
  "activeBy": "string",
  "activeTime": "string",
  "parentId": "string",
  "packageId": "string",
  "objectTypeLabel": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|objectType|string|false|none||对象类型|
|objectCode|string|false|none||对象编码|
|objectName|string|false|none||对象名称|
|objectGuid|string|false|none||参考对象唯一标识|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|false|none||包唯一标识|
|objectId|string|false|none||对象ID|
|objectVersion|integer|false|none||对象版本|
|objectStatus|string|false|none||状态;A:激活, N:未激活, L:锁定|
|activeBy|string|false|none||激活人ID|
|activeTime|string|false|none||激活时间|
|parentId|string|false|none||上级ID（包GUID）|
|packageId|string|false|none||包ID|
|objectTypeLabel|string|false|none||对象名称字典|

<h2 id="tocS_MessageInfo">MessageInfo</h2>

<a id="schemamessageinfo"></a>
<a id="schema_MessageInfo"></a>
<a id="tocSmessageinfo"></a>
<a id="tocsmessageinfo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "moduleGuid": "string",
  "groupId": "string",
  "groupGuid": "string",
  "messageCode": "string",
  "messageType": "string",
  "messageTemplate": "string",
  "status": "string",
  "sortNum": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|true|none||消息代码唯一标识|
|moduleGuid|string|true|none||模块唯一标识|
|groupId|string|true|none||所属消息组ID;外键指向 be_mdl_message_group.id|
|groupGuid|string|true|none||所属消息组唯一标识;指向 be_mdl_message_group.guid|
|messageCode|string|true|none||消息代码;如 ORD-001，全平台唯一（自动生成：group_code + "-" + seq_num）|
|messageType|string|true|none||消息类型;S(Success)/E(Error)/W(Warning)/A(Abbruch)等|
|messageTemplate|string|true|none||默认消息模板;如“订单{1}创建成功”，支持参数化占位符|
|status|string|true|none||状态;A:激活，N:未激活|
|sortNum|integer|false|none||排序|

<h2 id="tocS_MapString">MapString</h2>

<a id="schemamapstring"></a>
<a id="schema_MapString"></a>
<a id="tocSmapstring"></a>
<a id="tocsmapstring"></a>

```json
{
  "key": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|key|string|false|none||none|

<h2 id="tocS_SystemDTO">SystemDTO</h2>

<a id="schemasystemdto"></a>
<a id="schema_SystemDTO"></a>
<a id="tocSsystemdto"></a>
<a id="tocssystemdto"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string",
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "applicationIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|systemCode|string|true|none||系统编码|
|systemName|string|true|none||系统名称|
|systemIcon|string|false|none||系统图标|
|extension|string|false|none||扩展属性|
|createTimeBeign|string|false|none||创建时间开始|
|createTimeEnd|string|false|none||创建时间结束|
|updateTimeBeign|string|false|none||更新时间开始|
|updateTimeEnd|string|false|none||更新时间结束|
|applicationIdList|[string]|false|none||none|

<h2 id="tocS_SystemDetailVO">SystemDetailVO</h2>

<a id="schemasystemdetailvo"></a>
<a id="schema_SystemDetailVO"></a>
<a id="tocSsystemdetailvo"></a>
<a id="tocssystemdetailvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "systemCode": "string",
  "systemName": "string",
  "systemIcon": "string",
  "extension": "string",
  "applicationIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|systemCode|string|true|none||系统编码|
|systemName|string|true|none||系统名称|
|systemIcon|string|false|none||系统图标|
|extension|string|false|none||扩展属性|
|applicationIdList|[string]|false|none||none|

<h2 id="tocS_ModuleDetailVO">ModuleDetailVO</h2>

<a id="schemamoduledetailvo"></a>
<a id="schema_ModuleDetailVO"></a>
<a id="tocSmoduledetailvo"></a>
<a id="tocsmoduledetailvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "sourceId": "string",
  "moduleCode": "string",
  "moduleName": "string",
  "entityPrefix": "string",
  "extension": "string",
  "pendingCount": "string",
  "createByLabel": "string",
  "publishByLabel": "string",
  "dependencies": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "fromModuleId": "string",
      "fromModuleGuid": "string",
      "toModuleId": "string",
      "toModuleGuid": "string",
      "dependencyType": "string",
      "dependencyScope": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|true|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|sourceId|string|false|none||来源模块ID|
|moduleCode|string|true|none||模块编码|
|moduleName|string|true|none||模块名称|
|entityPrefix|string|true|none||实体前缀|
|extension|string|false|none||扩展属性|
|pendingCount|string|false|none||none|
|createByLabel|string|false|none||none|
|publishByLabel|string|false|none||none|
|dependencies|[[ModuleDependency](#schemamoduledependency)]|false|none||none|

<h2 id="tocS_DataElementVO">DataElementVO</h2>

<a id="schemadataelementvo"></a>
<a id="schema_DataElementVO"></a>
<a id="tocSdataelementvo"></a>
<a id="tocsdataelementvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "elementCode": "string",
  "elementName": "string",
  "domainId": "string",
  "domainGuid": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "domain": {
    "id": "string",
    "createBy": "string",
    "createTime": "string",
    "updateBy": "string",
    "updateTime": "string",
    "tenantId": "string",
    "guid": "string",
    "version": 0,
    "moduleGuid": "string",
    "packageGuid": "string",
    "status": "string",
    "packageId": "string",
    "activeBy": "string",
    "activeTime": "string",
    "domainCode": "string",
    "domainName": "string",
    "dataType": "string",
    "dataLength": 0,
    "dataScale": 0,
    "convRoutine": "string",
    "checkRule": "string",
    "extension": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|elementCode|string|true|none||数据元素编码|
|elementName|string|true|none||数据元素名称|
|domainId|string|false|none||域ID|
|domainGuid|string|false|none||域唯一标识|
|dataType|string|true|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|domain|[Domain](#schemadomain)|false|none||域对象|

<h2 id="tocS_PageResultRepositoryVO">PageResultRepositoryVO</h2>

<a id="schemapageresultrepositoryvo"></a>
<a id="schema_PageResultRepositoryVO"></a>
<a id="tocSpageresultrepositoryvo"></a>
<a id="tocspageresultrepositoryvo"></a>

```json
{
  "list": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "objectType": "string",
      "objectCode": "string",
      "objectName": "string",
      "objectGuid": "string",
      "moduleGuid": "string",
      "packageGuid": "string",
      "objectId": "string",
      "objectVersion": 0,
      "objectStatus": "string",
      "activeBy": "string",
      "activeTime": "string",
      "parentId": "string",
      "packageId": "string",
      "objectTypeLabel": "string"
    }
  ],
  "pagination": {
    "pageIndex": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPage": 1,
    "sortBy": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|list|[[RepositoryVO](#schemarepositoryvo)]|false|none||none|
|pagination|[Pagination](#schemapagination)|false|none||none|

<h2 id="tocS_Struct">Struct</h2>

<a id="schemastruct"></a>
<a id="schema_Struct"></a>
<a id="tocSstruct"></a>
<a id="tocsstruct"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "structCode": "string",
  "structName": "string",
  "structType": "string",
  "extension": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|structCode|string|true|none||结构体编码|
|structName|string|true|none||结构体名称|
|structType|string|false|none||结构体类型|
|extension|string|false|none||扩展属性|

<h2 id="tocS_MessageGroupVO">MessageGroupVO</h2>

<a id="schemamessagegroupvo"></a>
<a id="schema_MessageGroupVO"></a>
<a id="tocSmessagegroupvo"></a>
<a id="tocsmessagegroupvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "groupCode": "string",
  "groupName": "string",
  "groupType": "string",
  "extension": "string",
  "messageInfoList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "moduleGuid": "string",
      "groupId": "string",
      "groupGuid": "string",
      "messageCode": "string",
      "messageType": "string",
      "messageTemplate": "string",
      "status": "string",
      "sortNum": 0
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|groupCode|string|false|none||消息组编码|
|groupName|string|false|none||消息组名称|
|groupType|string|false|none||消息组类型;BUILTIN（内置，不可删除）、CUSTOM（自定义）|
|extension|string|false|none||扩展属性|
|messageInfoList|[[MessageInfo](#schemamessageinfo)]|false|none||none|

<h2 id="tocS_MediaType">MediaType</h2>

<a id="schemamediatype"></a>
<a id="schema_MediaType"></a>
<a id="tocSmediatype"></a>
<a id="tocsmediatype"></a>

```json
{
  "type": "string",
  "subtype": "string",
  "parameters": {
    "key": "string"
  },
  "toStringValue": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|type|string|false|none||none|
|subtype|string|false|none||none|
|parameters|[MapString](#schemamapstring)|false|none||none|
|toStringValue|string¦null|false|none||none|

<h2 id="tocS_ApplicationDTO">ApplicationDTO</h2>

<a id="schemaapplicationdto"></a>
<a id="schema_ApplicationDTO"></a>
<a id="tocSapplicationdto"></a>
<a id="tocsapplicationdto"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string",
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "moduleIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|applicationCode|string|true|none||应用编码|
|applicationName|string|true|none||应用名称|
|applicationIcon|string|false|none||应用图标|
|extension|string|false|none||扩展属性|
|createTimeBeign|string|false|none||创建时间开始|
|createTimeEnd|string|false|none||创建时间结束|
|updateTimeBeign|string|false|none||更新时间开始|
|updateTimeEnd|string|false|none||更新时间结束|
|moduleIdList|[string]|false|none||none|

<h2 id="tocS_ApplicationDetailVO">ApplicationDetailVO</h2>

<a id="schemaapplicationdetailvo"></a>
<a id="schema_ApplicationDetailVO"></a>
<a id="tocSapplicationdetailvo"></a>
<a id="tocsapplicationdetailvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "applicationCode": "string",
  "applicationName": "string",
  "applicationIcon": "string",
  "extension": "string",
  "moduleIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|applicationCode|string|true|none||应用编码|
|applicationName|string|true|none||应用名称|
|applicationIcon|string|false|none||应用图标|
|extension|string|false|none||扩展属性|
|moduleIdList|[string]|false|none||none|

<h2 id="tocS_EntityAttributeVO">EntityAttributeVO</h2>

<a id="schemaentityattributevo"></a>
<a id="schema_EntityAttributeVO"></a>
<a id="tocSentityattributevo"></a>
<a id="tocsentityattributevo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "moduleGuid": "string",
  "entityId": "string",
  "entityGuid": "string",
  "attributeCode": "string",
  "attributeName": "string",
  "referenceCategory": "string",
  "referenceType": "string",
  "referenceObjectId": "string",
  "referenceObjectGuid": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "sortNum": 0,
  "primaryKey": true,
  "notNull": true,
  "defaultValue": "string",
  "dataElement": {
    "id": "string",
    "createBy": "string",
    "createTime": "string",
    "updateBy": "string",
    "updateTime": "string",
    "tenantId": "string",
    "guid": "string",
    "version": 0,
    "moduleGuid": "string",
    "packageGuid": "string",
    "status": "string",
    "packageId": "string",
    "activeBy": "string",
    "activeTime": "string",
    "elementCode": "string",
    "elementName": "string",
    "domainId": "string",
    "domainGuid": "string",
    "dataType": "string",
    "dataLength": 0,
    "dataScale": 0,
    "domain": {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "version": 0,
      "moduleGuid": "string",
      "packageGuid": "string",
      "status": "string",
      "packageId": "string",
      "activeBy": "string",
      "activeTime": "string",
      "domainCode": "string",
      "domainName": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "convRoutine": "string",
      "checkRule": "string",
      "extension": "string"
    }
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|moduleGuid|string|false|none||模块唯一标识|
|entityId|string|false|none||实体ID|
|entityGuid|string|false|none||实体唯一标识|
|attributeCode|string|true|none||属性编码|
|attributeName|string|false|none||属性名称|
|referenceCategory|string|false|none||参考类别|
|referenceType|string|false|none||参考类型|
|referenceObjectId|string|false|none||参考对象ID|
|referenceObjectGuid|string|false|none||参考对象唯一标识|
|dataType|string|false|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|sortNum|integer|true|none||排序;属性在实体中的位置顺序|
|primaryKey|boolean|true|none||是否主键;0:否, 1:是|
|notNull|boolean|true|none||是否不为空;0:否, 1:是|
|defaultValue|string|false|none||默认值|
|dataElement|[DataElementVO](#schemadataelementvo)|false|none||元素|

<h2 id="tocS_ModuleRepositoryVO">ModuleRepositoryVO</h2>

<a id="schemamodulerepositoryvo"></a>
<a id="schema_ModuleRepositoryVO"></a>
<a id="tocSmodulerepositoryvo"></a>
<a id="tocsmodulerepositoryvo"></a>

```json
{
  "id": "string",
  "parentId": "string",
  "packageGuid": "string",
  "objectType": "string",
  "objectId": "string",
  "objectVersion": 0,
  "objectGuid": "string",
  "objectCode": "string",
  "objectName": "string",
  "changeType": "string",
  "activeBy": "string",
  "activeTime": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|parentId|string|false|none||上级ID|
|packageGuid|string|false|none||包唯一标识|
|objectType|string|false|none||对象类型|
|objectId|string|false|none||对象ID|
|objectVersion|integer|false|none||对象版本|
|objectGuid|string|false|none||对象唯一标识|
|objectCode|string|false|none||对象编码|
|objectName|string|false|none||对象名称|
|changeType|string|false|none||变更类型;CREATE:新增,UPDATE:更新,DELETE:删除|
|activeBy|string|false|none||激活人ID|
|activeTime|string|false|none||激活时间|

<h2 id="tocS_LabelValue">LabelValue</h2>

<a id="schemalabelvalue"></a>
<a id="schema_LabelValue"></a>
<a id="tocSlabelvalue"></a>
<a id="tocslabelvalue"></a>

```json
{
  "label": "string",
  "value": {},
  "ext": {},
  "parentId": {},
  "children": [
    {
      "label": "string",
      "value": {},
      "ext": {},
      "parentId": {},
      "children": [
        {
          "label": "string",
          "value": {},
          "ext": {},
          "parentId": {},
          "children": [
            {}
          ]
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|label|string|false|none||label: 显示值|
|value|object|false|none||value: 存储值|
|ext|object|false|none||扩展值|
|parentId|object|false|none||父级ID<br />(用于构建tree结构)|
|children|[[LabelValue](#schemalabelvalue)]|false|none||子节点集合|

<h2 id="tocS_StructAttributeVO">StructAttributeVO</h2>

<a id="schemastructattributevo"></a>
<a id="schema_StructAttributeVO"></a>
<a id="tocSstructattributevo"></a>
<a id="tocsstructattributevo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "moduleGuid": "string",
  "structId": "string",
  "structGuid": "string",
  "structVersion": 0,
  "attributeCode": "string",
  "attributeName": "string",
  "referenceCategory": "string",
  "referenceType": "string",
  "referenceObjectId": "string",
  "referenceObjectGuid": "string",
  "referencePrefix": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "sortNum": 0,
  "defaultValue": "string",
  "path": "string",
  "level": 0,
  "fullAttributeCode": "string",
  "compositeStructAttributeList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "structId": "string",
      "structGuid": "string",
      "structVersion": 0,
      "attributeCode": "string",
      "attributeName": "string",
      "referenceCategory": "string",
      "referenceType": "string",
      "referenceObjectId": "string",
      "referenceObjectGuid": "string",
      "referencePrefix": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "defaultValue": "string",
      "path": "string",
      "level": 0,
      "fullAttributeCode": "string",
      "compositeStructAttributeList": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "moduleGuid": "string",
          "structId": "string",
          "structGuid": "string",
          "structVersion": 0,
          "attributeCode": "string",
          "attributeName": "string",
          "referenceCategory": "string",
          "referenceType": "string",
          "referenceObjectId": "string",
          "referenceObjectGuid": "string",
          "referencePrefix": "string",
          "dataType": "string",
          "dataLength": 0,
          "dataScale": 0,
          "sortNum": 0,
          "defaultValue": "string",
          "path": "string",
          "level": 0,
          "fullAttributeCode": "string",
          "compositeStructAttributeList": [
            {}
          ]
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|moduleGuid|string|true|none||模块唯一标识|
|structId|string|true|none||结构体ID|
|structGuid|string|true|none||结构体唯一标识|
|structVersion|integer|false|none||结构体版本|
|attributeCode|string|true|none||属性编码|
|attributeName|string|false|none||属性名称|
|referenceCategory|string|false|none||参考类别,引用Reference,组合Composite|
|referenceType|string|false|none||参考类型|
|referenceObjectId|string|false|none||参考对象ID|
|referenceObjectGuid|string|false|none||参考对象唯一标识|
|referencePrefix|string|false|none||参考前缀|
|dataType|string|false|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|sortNum|integer|true|none||排序;属性在结构体中的位置顺序|
|defaultValue|string|false|none||默认值|
|path|string|false|none||ids路径|
|level|integer|false|none||层级|
|fullAttributeCode|string|false|none||带有引用前缀的完整属性编码|
|compositeStructAttributeList|[[StructAttributeVO](#schemastructattributevo)]|false|none||组合的结构体属性列表|

<h2 id="tocS_MessageGroupDTO">MessageGroupDTO</h2>

<a id="schemamessagegroupdto"></a>
<a id="schema_MessageGroupDTO"></a>
<a id="tocSmessagegroupdto"></a>
<a id="tocsmessagegroupdto"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "groupCode": "string",
  "groupName": "string",
  "groupType": "string",
  "extension": "string",
  "versionBeign": 0,
  "versionEnd": 0,
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "activeTimeBeign": "string",
  "activeTimeEnd": "string",
  "messageInfoList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "guid": "string",
      "moduleGuid": "string",
      "groupId": "string",
      "groupGuid": "string",
      "messageCode": "string",
      "messageType": "string",
      "messageTemplate": "string",
      "status": "string",
      "sortNum": 0
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|groupCode|string|false|none||消息组编码|
|groupName|string|false|none||消息组名称|
|groupType|string|false|none||消息组类型;BUILTIN（内置，不可删除）、CUSTOM（自定义）|
|extension|string|false|none||扩展属性|
|versionBeign|integer|false|none||消息组版本开始|
|versionEnd|integer|false|none||消息组版本结束|
|createTimeBeign|string|false|none||创建时间开始|
|createTimeEnd|string|false|none||创建时间结束|
|updateTimeBeign|string|false|none||更新时间开始|
|updateTimeEnd|string|false|none||更新时间结束|
|activeTimeBeign|string|false|none||激活时间开始|
|activeTimeEnd|string|false|none||激活时间结束|
|messageInfoList|[[MessageInfo](#schemamessageinfo)]|false|none||消息信息列表|

<h2 id="tocS_DataWithMediaType">DataWithMediaType</h2>

<a id="schemadatawithmediatype"></a>
<a id="schema_DataWithMediaType"></a>
<a id="tocSdatawithmediatype"></a>
<a id="tocsdatawithmediatype"></a>

```json
{
  "data": {},
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "key": "string"
    },
    "toStringValue": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|data|object|false|none||none|
|mediaType|[MediaType](#schemamediatype)|false|none||none|

<h2 id="tocS_ModuleDTO">ModuleDTO</h2>

<a id="schemamoduledto"></a>
<a id="schema_ModuleDTO"></a>
<a id="tocSmoduledto"></a>
<a id="tocsmoduledto"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "sourceId": "string",
  "guid": "string",
  "semanticVersion": "string",
  "publishDesc": "string",
  "publishBy": "string",
  "publishTime": "string",
  "status": "string",
  "description": "string",
  "versionName": "string",
  "versionType": "string",
  "moduleCode": "string",
  "moduleName": "string",
  "entityPrefix": "string",
  "extension": "string",
  "createTimeBeign": 0,
  "createTimeEnd": 0,
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "dependencyModuleIdList": [
    "string"
  ],
  "pendingObjectIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|sourceId|string|false|none||来源模块ID|
|guid|string|false|none||应用唯一标识|
|semanticVersion|string|false|none||应用语义化版本;语义化版本号|
|publishDesc|string|false|none||版本说明|
|publishBy|string|false|none||发布人ID|
|publishTime|string|false|none||发布时间|
|status|string|false|none||状态;A:已发布，N:未发布|
|description|string|false|none||应用描述|
|versionName|string|false|none||版本名称|
|versionType|string|false|none||版本类型,release:特性，hotfix:修复|
|moduleCode|string|true|none||模块编码|
|moduleName|string|true|none||模块名称|
|entityPrefix|string|false|none||实体前缀|
|extension|string|false|none||扩展属性|
|createTimeBeign|integer|false|none||创建时间开始|
|createTimeEnd|integer|false|none||创建时间结束|
|updateTimeBeign|string|false|none||更新时间开始|
|updateTimeEnd|string|false|none||更新时间结束|
|dependencyModuleIdList|[string]|false|none||依赖模块列表|
|pendingObjectIdList|[string]|false|none||待发布对象ID列表|

<h2 id="tocS_MapListLabelValue">MapListLabelValue</h2>

<a id="schemamaplistlabelvalue"></a>
<a id="schema_MapListLabelValue"></a>
<a id="tocSmaplistlabelvalue"></a>
<a id="tocsmaplistlabelvalue"></a>

```json
{
  "key": [
    {
      "label": "string",
      "value": {},
      "ext": {},
      "parentId": {},
      "children": [
        {
          "label": "string",
          "value": {},
          "ext": {},
          "parentId": {},
          "children": [
            {}
          ]
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|key|[object]|false|none||none|
|» label|string|false|none||label: 显示值|
|» value|object|false|none||value: 存储值|
|» ext|object|false|none||扩展值|
|» parentId|object|false|none||父级ID<br />(用于构建tree结构)|
|» children|[[LabelValue](#schemalabelvalue)]|false|none||子节点集合|

<h2 id="tocS_StructVO">StructVO</h2>

<a id="schemastructvo"></a>
<a id="schema_StructVO"></a>
<a id="tocSstructvo"></a>
<a id="tocsstructvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "structCode": "string",
  "structName": "string",
  "structType": "string",
  "extension": "string",
  "structAttributeList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "structId": "string",
      "structGuid": "string",
      "structVersion": 0,
      "attributeCode": "string",
      "attributeName": "string",
      "referenceCategory": "string",
      "referenceType": "string",
      "referenceObjectId": "string",
      "referenceObjectGuid": "string",
      "referencePrefix": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "defaultValue": "string",
      "path": "string",
      "level": 0,
      "fullAttributeCode": "string",
      "compositeStructAttributeList": [
        {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "moduleGuid": "string",
          "structId": "string",
          "structGuid": "string",
          "structVersion": 0,
          "attributeCode": "string",
          "attributeName": "string",
          "referenceCategory": "string",
          "referenceType": "string",
          "referenceObjectId": "string",
          "referenceObjectGuid": "string",
          "referencePrefix": "string",
          "dataType": "string",
          "dataLength": 0,
          "dataScale": 0,
          "sortNum": 0,
          "defaultValue": "string",
          "path": "string",
          "level": 0,
          "fullAttributeCode": "string",
          "compositeStructAttributeList": [
            {}
          ]
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|structCode|string|true|none||结构体编码|
|structName|string|true|none||结构体名称|
|structType|string|false|none||结构体类型|
|extension|string|false|none||扩展属性|
|structAttributeList|[[StructAttributeVO](#schemastructattributevo)]|false|none||结构体属性列表|

<h2 id="tocS_Throwable">Throwable</h2>

<a id="schemathrowable"></a>
<a id="schema_Throwable"></a>
<a id="tocSthrowable"></a>
<a id="tocsthrowable"></a>

```json
{
  "detailMessage": "string",
  "cause": "this",
  "stackTrace": "new StackTraceElement[0]",
  "suppressedExceptions": "Collections.emptyList()"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|detailMessage|string|false|none||Specific details about the Throwable.  For example, for<br />{@code FileNotFoundException}, this contains the name of<br />the file that could not be found.|
|cause|[Throwable](#schemathrowable)|false|none||The throwable that caused this throwable to get thrown, or null if this<br />throwable was not caused by another throwable, or if the causative<br />throwable is unknown.  If this field is equal to this throwable itself,<br />it indicates that the cause of this throwable has not yet been<br />initialized.|
|stackTrace|[[StackTraceElement](#schemastacktraceelement)]|false|none||The stack trace, as returned by{@link #getStackTrace()}.<br /><br />The field is initialized to a zero-length array.  A{@code<br />    * null} value of this field indicates subsequent calls to{@link<br />    * #setStackTrace(StackTraceElement[])} and{@link<br />    * #fillInStackTrace()} will be no-ops.|
|suppressedExceptions|[[Throwable](#schemathrowable)]|false|none||The list of suppressed exceptions, as returned by{@link<br />    * #getSuppressed()}.  The list is initialized to a zero-element<br />unmodifiable sentinel list.  When a serialized Throwable is<br />read in, if the{@code suppressedExceptions} field points to a<br />zero-element list, the field is reset to the sentinel value.|

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "orgId": "string",
  "userNum": "string",
  "realname": "string",
  "gender": "string",
  "birthday": "string",
  "mobilePhone": "string",
  "email": "string",
  "avatarUrl": "string",
  "status": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|orgId|string|true|none||组织id|
|userNum|string|true|none||用户编号|
|realname|string|true|none||真实姓名|
|gender|string|true|none||性别|
|birthday|string|false|none||生日|
|mobilePhone|string|false|none||手机号|
|email|string|false|none||邮箱|
|avatarUrl|string|false|none||头像地址|
|status|string|false|none||状态|

<h2 id="tocS_StructAttribute">StructAttribute</h2>

<a id="schemastructattribute"></a>
<a id="schema_StructAttribute"></a>
<a id="tocSstructattribute"></a>
<a id="tocsstructattribute"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "moduleGuid": "string",
  "structId": "string",
  "structGuid": "string",
  "structVersion": 0,
  "attributeCode": "string",
  "attributeName": "string",
  "referenceCategory": "string",
  "referenceType": "string",
  "referenceObjectId": "string",
  "referenceObjectGuid": "string",
  "referencePrefix": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "sortNum": 0,
  "defaultValue": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|moduleGuid|string|true|none||模块唯一标识|
|structId|string|true|none||结构体ID|
|structGuid|string|true|none||结构体唯一标识|
|structVersion|integer|false|none||结构体版本|
|attributeCode|string|true|none||属性编码|
|attributeName|string|false|none||属性名称|
|referenceCategory|string|false|none||参考类别,引用Reference,组合Composite|
|referenceType|string|false|none||参考类型|
|referenceObjectId|string|false|none||参考对象ID|
|referenceObjectGuid|string|false|none||参考对象唯一标识|
|referencePrefix|string|false|none||参考前缀|
|dataType|string|false|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|sortNum|integer|true|none||排序;属性在结构体中的位置顺序|
|defaultValue|string|false|none||默认值|

<h2 id="tocS_StackTraceElement">StackTraceElement</h2>

<a id="schemastacktraceelement"></a>
<a id="schema_StackTraceElement"></a>
<a id="tocSstacktraceelement"></a>
<a id="tocsstacktraceelement"></a>

```json
{
  "classLoaderName": "string",
  "moduleName": "string",
  "moduleVersion": "string",
  "declaringClass": "string",
  "methodName": "string",
  "fileName": "string",
  "lineNumber": 0,
  "format": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|classLoaderName|string|false|none||The name of the class loader.|
|moduleName|string|false|none||The module name.|
|moduleVersion|string|false|none||The module version.|
|declaringClass|string|false|none||The declaring class.|
|methodName|string|false|none||The method name.|
|fileName|string|false|none||The source file name.|
|lineNumber|integer|false|none||The source line number.|
|format|integer|false|none||Control to show full or partial module, package, and class names.|

<h2 id="tocS_EntityVO">EntityVO</h2>

<a id="schemaentityvo"></a>
<a id="schema_EntityVO"></a>
<a id="tocSentityvo"></a>
<a id="tocsentityvo"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "entityCode": "string",
  "entityName": "string",
  "entityType": "string",
  "extension": "string",
  "entityPrefix": "string",
  "entityAttributeList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "attributeCode": "string",
      "attributeName": "string",
      "referenceCategory": "string",
      "referenceType": "string",
      "referenceObjectId": "string",
      "referenceObjectGuid": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "primaryKey": true,
      "notNull": true,
      "defaultValue": "string",
      "dataElement": {
        "id": "string",
        "createBy": "string",
        "createTime": "string",
        "updateBy": "string",
        "updateTime": "string",
        "tenantId": "string",
        "guid": "string",
        "version": 0,
        "moduleGuid": "string",
        "packageGuid": "string",
        "status": "string",
        "packageId": "string",
        "activeBy": "string",
        "activeTime": "string",
        "elementCode": "string",
        "elementName": "string",
        "domainId": "string",
        "domainGuid": "string",
        "dataType": "string",
        "dataLength": 0,
        "dataScale": 0,
        "domain": {
          "id": "string",
          "createBy": "string",
          "createTime": "string",
          "updateBy": "string",
          "updateTime": "string",
          "tenantId": "string",
          "guid": "string",
          "version": 0,
          "moduleGuid": "string",
          "packageGuid": "string",
          "status": "string",
          "packageId": "string",
          "activeBy": "string",
          "activeTime": "string",
          "domainCode": "string",
          "domainName": "string",
          "dataType": "string",
          "dataLength": 0,
          "dataScale": 0,
          "convRoutine": "string",
          "checkRule": "string",
          "extension": "string"
        }
      }
    }
  ],
  "entityIndexList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "indexCode": "string",
      "indexName": "string",
      "indexType": "string",
      "indexMethod": "string",
      "attributes": [
        {
          "name": "string",
          "sort": "string"
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|entityCode|string|true|none||实体编码|
|entityName|string|true|none||实体名称|
|entityType|string|true|none||实体类型;TABLE:表, VIEW:视图|
|extension|string|false|none||扩展属性|
|entityPrefix|string|false|none||none|
|entityAttributeList|[[EntityAttributeVO](#schemaentityattributevo)]|false|none||none|
|entityIndexList|[[EntityIndex](#schemaentityindex)]|false|none||none|

<h2 id="tocS_key3">key3</h2>

<a id="schemakey3"></a>
<a id="schema_key3"></a>
<a id="tocSkey3"></a>
<a id="tocskey3"></a>

```json
{
  "label": "string",
  "value": {},
  "ext": {},
  "parentId": {},
  "children": [
    {
      "label": "string",
      "value": {},
      "ext": {},
      "parentId": {},
      "children": [
        {
          "label": "string",
          "value": {},
          "ext": {},
          "parentId": {},
          "children": [
            {}
          ]
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|label|string|false|none||label: 显示值|
|value|object|false|none||value: 存储值|
|ext|object|false|none||扩展值|
|parentId|object|false|none||父级ID<br />(用于构建tree结构)|
|children|[[LabelValue](#schemalabelvalue)]|false|none||子节点集合|

<h2 id="tocS_StructDTO">StructDTO</h2>

<a id="schemastructdto"></a>
<a id="schema_StructDTO"></a>
<a id="tocSstructdto"></a>
<a id="tocsstructdto"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "structCode": "string",
  "structName": "string",
  "structType": "string",
  "extension": "string",
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "structAttributeList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "structId": "string",
      "structGuid": "string",
      "structVersion": 0,
      "attributeCode": "string",
      "attributeName": "string",
      "referenceCategory": "string",
      "referenceType": "string",
      "referenceObjectId": "string",
      "referenceObjectGuid": "string",
      "referencePrefix": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "defaultValue": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包ID|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|structCode|string|true|none||结构体编码|
|structName|string|true|none||结构体名称|
|structType|string|false|none||结构体类型|
|extension|string|false|none||扩展属性|
|createTimeBeign|string|false|none||创建时间开始|
|createTimeEnd|string|false|none||创建时间结束|
|updateTimeBeign|string|false|none||更新时间开始|
|updateTimeEnd|string|false|none||更新时间结束|
|structAttributeList|[[StructAttribute](#schemastructattribute)]|true|none||none|

<h2 id="tocS_Runnable">Runnable</h2>

<a id="schemarunnable"></a>
<a id="schema_Runnable"></a>
<a id="tocSrunnable"></a>
<a id="tocsrunnable"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_MapMapLabelValue">MapMapLabelValue</h2>

<a id="schemamapmaplabelvalue"></a>
<a id="schema_MapMapLabelValue"></a>
<a id="tocSmapmaplabelvalue"></a>
<a id="tocsmapmaplabelvalue"></a>

```json
{
  "key": {
    "key": {
      "label": "string",
      "value": {},
      "ext": {},
      "parentId": {},
      "children": [
        {
          "label": "string",
          "value": {},
          "ext": {},
          "parentId": {},
          "children": [
            null
          ]
        }
      ]
    }
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|key|object|false|none||none|
|» key|[key3](#schemakey3)|false|none||none|

<h2 id="tocS_UserDTO">UserDTO</h2>

<a id="schemauserdto"></a>
<a id="schema_UserDTO"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "orgId": "string",
  "userNum": "string",
  "realname": "string",
  "gender": "string",
  "birthday": "string",
  "mobilePhone": "string",
  "email": "string",
  "avatarUrl": "string",
  "status": "string",
  "account": "string",
  "password": "string",
  "accountStatus": "string",
  "roleIdList": [
    "string"
  ],
  "userPositionList": [
    {
      "id": "string",
      "userId": "string",
      "orgId": "string",
      "positionId": "string",
      "primaryPosition": true,
      "tenantId": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|orgId|string|true|none||组织id|
|userNum|string|true|none||用户编号|
|realname|string|true|none||真实姓名|
|gender|string|true|none||性别|
|birthday|string|false|none||生日|
|mobilePhone|string|false|none||手机号|
|email|string|false|none||邮箱|
|avatarUrl|string|false|none||头像地址|
|status|string|false|none||状态|
|account|string|false|none||账号|
|password|string|false|none||密码|
|accountStatus|string|false|none||账号状态|
|roleIdList|[string]|false|none||角色ID列表|
|userPositionList|[[UserPosition](#schemauserposition)]|false|none||岗位列表|

<h2 id="tocS_DefaultCallback">DefaultCallback</h2>

<a id="schemadefaultcallback"></a>
<a id="schema_DefaultCallback"></a>
<a id="tocSdefaultcallback"></a>
<a id="tocsdefaultcallback"></a>

```json
{
  "delegate": {}
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|delegate|[Runnable](#schemarunnable)|false|none||none|

<h2 id="tocS_MapLabelValue">MapLabelValue</h2>

<a id="schemamaplabelvalue"></a>
<a id="schema_MapLabelValue"></a>
<a id="tocSmaplabelvalue"></a>
<a id="tocsmaplabelvalue"></a>

```json
{
  "key": {
    "label": "string",
    "value": {},
    "ext": {},
    "parentId": {},
    "children": [
      {
        "label": "string",
        "value": {},
        "ext": {},
        "parentId": {},
        "children": [
          {
            "label": null,
            "value": null,
            "ext": null,
            "parentId": null,
            "children": null
          }
        ]
      }
    ]
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|key|object|false|none||none|
|» label|string|false|none||label: 显示值|
|» value|object|false|none||value: 存储值|
|» ext|object|false|none||扩展值|
|» parentId|object|false|none||父级ID<br />(用于构建tree结构)|
|» children|[[LabelValue](#schemalabelvalue)]|false|none||子节点集合|

<h2 id="tocS_ChangePwdDTO">ChangePwdDTO</h2>

<a id="schemachangepwddto"></a>
<a id="schema_ChangePwdDTO"></a>
<a id="tocSchangepwddto"></a>
<a id="tocschangepwddto"></a>

```json
{
  "oldPassword": "string",
  "newPassword": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|oldPassword|string|true|none||旧密码|
|newPassword|string|true|none||新密码|

<h2 id="tocS_ErrorCallback">ErrorCallback</h2>

<a id="schemaerrorcallback"></a>
<a id="schema_ErrorCallback"></a>
<a id="tocSerrorcallback"></a>
<a id="tocserrorcallback"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_MapMapString">MapMapString</h2>

<a id="schemamapmapstring"></a>
<a id="schema_MapMapString"></a>
<a id="tocSmapmapstring"></a>
<a id="tocsmapmapstring"></a>

```json
{
  "key": {
    "key": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|key|object|false|none||none|
|» key|string|false|none||none|

<h2 id="tocS_SseEmitter">SseEmitter</h2>

<a id="schemasseemitter"></a>
<a id="schema_SseEmitter"></a>
<a id="tocSsseemitter"></a>
<a id="tocssseemitter"></a>

```json
{
  "timeout": 0,
  "handler": {},
  "earlySendAttempts": "new LinkedHashSet<>(8)",
  "complete": true,
  "failure": {
    "detailMessage": "string",
    "cause": "this",
    "stackTrace": "new StackTraceElement[0]",
    "suppressedExceptions": "Collections.emptyList()"
  },
  "timeoutCallback": "new DefaultCallback()",
  "errorCallback": "new ErrorCallback()",
  "completionCallback": "new DefaultCallback()"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|timeout|integer(int64)¦null|false|none||none|
|handler|[Handler](#schemahandler)|false|none||none|
|earlySendAttempts|[[DataWithMediaType](#schemadatawithmediatype)]|false|none||Store send data before handler is initialized.|
|complete|boolean|false|none||Store successful completion before the handler is initialized.|
|failure|[Throwable](#schemathrowable)|false|none||Store an error before the handler is initialized.|
|timeoutCallback|[DefaultCallback](#schemadefaultcallback)|false|none||none|
|errorCallback|[ErrorCallback](#schemaerrorcallback)|false|none||none|
|completionCallback|[DefaultCallback](#schemadefaultcallback)|false|none||none|

<h2 id="tocS_EntityAttribute">EntityAttribute</h2>

<a id="schemaentityattribute"></a>
<a id="schema_EntityAttribute"></a>
<a id="tocSentityattribute"></a>
<a id="tocsentityattribute"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "moduleGuid": "string",
  "entityId": "string",
  "entityGuid": "string",
  "attributeCode": "string",
  "attributeName": "string",
  "referenceCategory": "string",
  "referenceType": "string",
  "referenceObjectId": "string",
  "referenceObjectGuid": "string",
  "dataType": "string",
  "dataLength": 0,
  "dataScale": 0,
  "sortNum": 0,
  "primaryKey": true,
  "notNull": true,
  "defaultValue": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|moduleGuid|string|false|none||模块唯一标识|
|entityId|string|false|none||实体ID|
|entityGuid|string|false|none||实体唯一标识|
|attributeCode|string|true|none||属性编码|
|attributeName|string|false|none||属性名称|
|referenceCategory|string|false|none||参考类别|
|referenceType|string|false|none||参考类型|
|referenceObjectId|string|false|none||参考对象ID|
|referenceObjectGuid|string|false|none||参考对象唯一标识|
|dataType|string|false|none||数据类型|
|dataLength|integer|false|none||数据长度|
|dataScale|integer|false|none||小数位数|
|sortNum|integer|true|none||排序;属性在实体中的位置顺序|
|primaryKey|boolean|true|none||是否主键;0:否, 1:是|
|notNull|boolean|true|none||是否不为空;0:否, 1:是|
|defaultValue|string|false|none||默认值|

<h2 id="tocS_FieldModel">FieldModel</h2>

<a id="schemafieldmodel"></a>
<a id="schema_FieldModel"></a>
<a id="tocSfieldmodel"></a>
<a id="tocsfieldmodel"></a>

```json
{
  "id": "string",
  "pk": true,
  "name": "string",
  "type": "string",
  "length": 0,
  "decimals": 0,
  "dbType": "string",
  "comment": "string",
  "defaultValue": "string",
  "nullable": true,
  "tableName": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||唯一标识|
|pk|boolean|false|none||是否主键|
|name|string|false|none||列名称|
|type|string|false|none||列类型|
|length|integer|false|none||列长度|
|decimals|integer|false|none||列小数位数|
|dbType|string|false|none||对应具体数据库列类型|
|comment|string|false|none||备注|
|defaultValue|string|false|none||默认值|
|nullable|boolean|false|none||是否允许为空|
|tableName|string|false|none||表名|

<h2 id="tocS_key4">key4</h2>

<a id="schemakey4"></a>
<a id="schema_key4"></a>
<a id="tocSkey4"></a>
<a id="tocskey4"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_EntityIndexPartDTO">EntityIndexPartDTO</h2>

<a id="schemaentityindexpartdto"></a>
<a id="schema_EntityIndexPartDTO"></a>
<a id="tocSentityindexpartdto"></a>
<a id="tocsentityindexpartdto"></a>

```json
{
  "name": "string",
  "sort": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||none|
|sort|string|false|none||none|

<h2 id="tocS_IndexPartModel">IndexPartModel</h2>

<a id="schemaindexpartmodel"></a>
<a id="schema_IndexPartModel"></a>
<a id="tocSindexpartmodel"></a>
<a id="tocsindexpartmodel"></a>

```json
{
  "field": "string",
  "sort": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|field|string|false|none||字段名|
|sort|string|false|none||排序顺序|

<h2 id="tocS_key5">key5</h2>

<a id="schemakey5"></a>
<a id="schema_key5"></a>
<a id="tocSkey5"></a>
<a id="tocskey5"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_EntityIndex">EntityIndex</h2>

<a id="schemaentityindex"></a>
<a id="schema_EntityIndex"></a>
<a id="tocSentityindex"></a>
<a id="tocsentityindex"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "moduleGuid": "string",
  "entityId": "string",
  "entityGuid": "string",
  "indexCode": "string",
  "indexName": "string",
  "indexType": "string",
  "indexMethod": "string",
  "attributes": [
    {
      "name": "string",
      "sort": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|moduleGuid|string|false|none||模块唯一标识|
|entityId|string|false|none||实体ID|
|entityGuid|string|false|none||实体唯一标识|
|indexCode|string|true|none||索引编码|
|indexName|string|true|none||索引名称|
|indexType|string|true|none||索引类型;PRIMARY:主键,UNIQUE:唯一索引,NORMAL:普通索引,FULLTEXT:全文索引|
|indexMethod|string|false|none||索引方法|
|attributes|[[EntityIndexPartDTO](#schemaentityindexpartdto)]|false|none||none|

<h2 id="tocS_IndexModel">IndexModel</h2>

<a id="schemaindexmodel"></a>
<a id="schema_IndexModel"></a>
<a id="tocSindexmodel"></a>
<a id="tocsindexmodel"></a>

```json
{
  "name": "string",
  "type": "string",
  "method": "string",
  "parts": [
    {
      "field": "string",
      "sort": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||none|
|type|string|false|none||none|
|method|string|false|none||none|
|parts|[[IndexPartModel](#schemaindexpartmodel)]|false|none||none|

<h2 id="tocS_key6">key6</h2>

<a id="schemakey6"></a>
<a id="schema_key6"></a>
<a id="tocSkey6"></a>
<a id="tocskey6"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_EntityDTO">EntityDTO</h2>

<a id="schemaentitydto"></a>
<a id="schema_EntityDTO"></a>
<a id="tocSentitydto"></a>
<a id="tocsentitydto"></a>

```json
{
  "id": "string",
  "createBy": "string",
  "createTime": "string",
  "updateBy": "string",
  "updateTime": "string",
  "tenantId": "string",
  "guid": "string",
  "version": 0,
  "moduleGuid": "string",
  "packageGuid": "string",
  "status": "string",
  "packageId": "string",
  "activeBy": "string",
  "activeTime": "string",
  "entityCode": "string",
  "entityName": "string",
  "entityType": "string",
  "extension": "string",
  "deletedBeign": 0,
  "deletedEnd": 0,
  "createTimeBeign": "string",
  "createTimeEnd": "string",
  "updateTimeBeign": "string",
  "updateTimeEnd": "string",
  "entityAttributeList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "attributeCode": "string",
      "attributeName": "string",
      "referenceCategory": "string",
      "referenceType": "string",
      "referenceObjectId": "string",
      "referenceObjectGuid": "string",
      "dataType": "string",
      "dataLength": 0,
      "dataScale": 0,
      "sortNum": 0,
      "primaryKey": true,
      "notNull": true,
      "defaultValue": "string"
    }
  ],
  "entityIndexList": [
    {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "updateBy": "string",
      "updateTime": "string",
      "tenantId": "string",
      "moduleGuid": "string",
      "entityId": "string",
      "entityGuid": "string",
      "indexCode": "string",
      "indexName": "string",
      "indexType": "string",
      "indexMethod": "string",
      "attributes": [
        {
          "name": "string",
          "sort": "string"
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|createBy|string|false|none||none|
|createTime|string|false|none||none|
|updateBy|string|false|none||none|
|updateTime|string|false|none||none|
|tenantId|string|false|none||租户ID|
|guid|string|false|none||域唯一标识|
|version|integer|false|none||域版本|
|moduleGuid|string|true|none||模块唯一标识|
|packageGuid|string|true|none||包唯一标识|
|status|string|false|none||状态;A:激活，N:未激活|
|packageId|string|true|none||包唯一标识|
|activeBy|string|false|none||激活人|
|activeTime|string|false|none||激活时间|
|entityCode|string|true|none||实体编码|
|entityName|string|true|none||实体名称|
|entityType|string|true|none||实体类型;TABLE:表, VIEW:视图|
|extension|string|false|none||扩展属性|
|deletedBeign|integer|false|none||删除标识;0：未删除，1：已删除开始|
|deletedEnd|integer|false|none||删除标识;0：未删除，1：已删除结束|
|createTimeBeign|string|false|none||创建时间开始|
|createTimeEnd|string|false|none||创建时间结束|
|updateTimeBeign|string|false|none||更新时间开始|
|updateTimeEnd|string|false|none||更新时间结束|
|entityAttributeList|[[EntityAttribute](#schemaentityattribute)]|true|none||none|
|entityIndexList|[[EntityIndex](#schemaentityindex)]|false|none||none|

<h2 id="tocS_IndexCompareModel">IndexCompareModel</h2>

<a id="schemaindexcomparemodel"></a>
<a id="schema_IndexCompareModel"></a>
<a id="tocSindexcomparemodel"></a>
<a id="tocsindexcomparemodel"></a>

```json
{
  "name": "string",
  "type": "string",
  "method": "string",
  "parts": [
    {
      "field": "string",
      "sort": "string"
    }
  ],
  "ddlSqls": [
    "string"
  ],
  "targetIndexModel": {
    "name": "string",
    "type": "string",
    "method": "string",
    "parts": [
      {
        "field": "string",
        "sort": "string"
      }
    ]
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||none|
|type|string|false|none||none|
|method|string|false|none||none|
|parts|[[IndexPartModel](#schemaindexpartmodel)]|false|none||none|
|ddlSqls|[string]|false|none||ddl语句|
|targetIndexModel|[IndexModel](#schemaindexmodel)|false|none||none|

<h2 id="tocS_FieldCompareModel">FieldCompareModel</h2>

<a id="schemafieldcomparemodel"></a>
<a id="schema_FieldCompareModel"></a>
<a id="tocSfieldcomparemodel"></a>
<a id="tocsfieldcomparemodel"></a>

```json
{
  "id": "string",
  "pk": true,
  "name": "string",
  "type": "string",
  "length": 0,
  "decimals": 0,
  "dbType": "string",
  "comment": "string",
  "defaultValue": "string",
  "nullable": true,
  "tableName": "string",
  "ddlSqls": [
    "string"
  ],
  "targetFieldModel": {
    "id": "string",
    "pk": true,
    "name": "string",
    "type": "string",
    "length": 0,
    "decimals": 0,
    "dbType": "string",
    "comment": "string",
    "defaultValue": "string",
    "nullable": true,
    "tableName": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||唯一标识|
|pk|boolean|false|none||是否主键|
|name|string|false|none||列名称|
|type|string|false|none||列类型|
|length|integer|false|none||列长度|
|decimals|integer|false|none||列小数位数|
|dbType|string|false|none||对应具体数据库列类型|
|comment|string|false|none||备注|
|defaultValue|string|false|none||默认值|
|nullable|boolean|false|none||是否允许为空|
|tableName|string|false|none||表名|
|ddlSqls|[string]|false|none||ddl语句|
|targetFieldModel|[FieldModel](#schemafieldmodel)|false|none||none|

<h2 id="tocS_TableModel">TableModel</h2>

<a id="schematablemodel"></a>
<a id="schema_TableModel"></a>
<a id="tocStablemodel"></a>
<a id="tocstablemodel"></a>

```json
{
  "name": "string",
  "comment": "string",
  "fields": [
    {
      "id": "string",
      "pk": true,
      "name": "string",
      "type": "string",
      "length": 0,
      "decimals": 0,
      "dbType": "string",
      "comment": "string",
      "defaultValue": "string",
      "nullable": true,
      "tableName": "string"
    }
  ],
  "indexes": [
    {
      "name": "string",
      "type": "string",
      "method": "string",
      "parts": [
        {
          "field": "string",
          "sort": "string"
        }
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||表名称|
|comment|string|false|none||表备注|
|fields|[[FieldModel](#schemafieldmodel)]|false|none||列名|
|indexes|[[IndexModel](#schemaindexmodel)]|false|none||索引|

<h2 id="tocS_TableCompareModel">TableCompareModel</h2>

<a id="schematablecomparemodel"></a>
<a id="schema_TableCompareModel"></a>
<a id="tocStablecomparemodel"></a>
<a id="tocstablecomparemodel"></a>

```json
{
  "name": "string",
  "comment": "string",
  "fields": [
    {
      "id": "string",
      "pk": true,
      "name": "string",
      "type": "string",
      "length": 0,
      "decimals": 0,
      "dbType": "string",
      "comment": "string",
      "defaultValue": "string",
      "nullable": true,
      "tableName": "string"
    }
  ],
  "indexes": [
    {
      "name": "string",
      "type": "string",
      "method": "string",
      "parts": [
        {
          "field": "string",
          "sort": "string"
        }
      ]
    }
  ],
  "dropIndexList": [
    {
      "name": "string",
      "type": "string",
      "method": "string",
      "parts": [
        {
          "field": "string",
          "sort": "string"
        }
      ],
      "ddlSqls": [
        "string"
      ],
      "targetIndexModel": {
        "name": "string",
        "type": "string",
        "method": "string",
        "parts": [
          {
            "field": null,
            "sort": null
          }
        ]
      }
    }
  ],
  "createIndexList": [
    {
      "name": "string",
      "type": "string",
      "method": "string",
      "parts": [
        {
          "field": "string",
          "sort": "string"
        }
      ],
      "ddlSqls": [
        "string"
      ],
      "targetIndexModel": {
        "name": "string",
        "type": "string",
        "method": "string",
        "parts": [
          {
            "field": null,
            "sort": null
          }
        ]
      }
    }
  ],
  "changeIndexList": [
    {
      "name": "string",
      "type": "string",
      "method": "string",
      "parts": [
        {
          "field": "string",
          "sort": "string"
        }
      ],
      "ddlSqls": [
        "string"
      ],
      "targetIndexModel": {
        "name": "string",
        "type": "string",
        "method": "string",
        "parts": [
          {
            "field": null,
            "sort": null
          }
        ]
      }
    }
  ],
  "dropFieldList": [
    {
      "id": "string",
      "pk": true,
      "name": "string",
      "type": "string",
      "length": 0,
      "decimals": 0,
      "dbType": "string",
      "comment": "string",
      "defaultValue": "string",
      "nullable": true,
      "tableName": "string",
      "ddlSqls": [
        "string"
      ],
      "targetFieldModel": {
        "id": "string",
        "pk": true,
        "name": "string",
        "type": "string",
        "length": 0,
        "decimals": 0,
        "dbType": "string",
        "comment": "string",
        "defaultValue": "string",
        "nullable": true,
        "tableName": "string"
      }
    }
  ],
  "createFieldList": [
    {
      "id": "string",
      "pk": true,
      "name": "string",
      "type": "string",
      "length": 0,
      "decimals": 0,
      "dbType": "string",
      "comment": "string",
      "defaultValue": "string",
      "nullable": true,
      "tableName": "string",
      "ddlSqls": [
        "string"
      ],
      "targetFieldModel": {
        "id": "string",
        "pk": true,
        "name": "string",
        "type": "string",
        "length": 0,
        "decimals": 0,
        "dbType": "string",
        "comment": "string",
        "defaultValue": "string",
        "nullable": true,
        "tableName": "string"
      }
    }
  ],
  "changeFieldList": [
    {
      "id": "string",
      "pk": true,
      "name": "string",
      "type": "string",
      "length": 0,
      "decimals": 0,
      "dbType": "string",
      "comment": "string",
      "defaultValue": "string",
      "nullable": true,
      "tableName": "string",
      "ddlSqls": [
        "string"
      ],
      "targetFieldModel": {
        "id": "string",
        "pk": true,
        "name": "string",
        "type": "string",
        "length": 0,
        "decimals": 0,
        "dbType": "string",
        "comment": "string",
        "defaultValue": "string",
        "nullable": true,
        "tableName": "string"
      }
    }
  ],
  "targetTableModel": {
    "name": "string",
    "comment": "string",
    "fields": [
      {
        "id": "string",
        "pk": true,
        "name": "string",
        "type": "string",
        "length": 0,
        "decimals": 0,
        "dbType": "string",
        "comment": "string",
        "defaultValue": "string",
        "nullable": true,
        "tableName": "string"
      }
    ],
    "indexes": [
      {
        "name": "string",
        "type": "string",
        "method": "string",
        "parts": [
          {
            "field": null,
            "sort": null
          }
        ]
      }
    ]
  },
  "ddlSqls": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||表名称|
|comment|string|false|none||表备注|
|fields|[[FieldModel](#schemafieldmodel)]|false|none||列名|
|indexes|[[IndexModel](#schemaindexmodel)]|false|none||索引|
|dropIndexList|[[IndexCompareModel](#schemaindexcomparemodel)]|false|none||none|
|createIndexList|[[IndexCompareModel](#schemaindexcomparemodel)]|false|none||none|
|changeIndexList|[[IndexCompareModel](#schemaindexcomparemodel)]|false|none||none|
|dropFieldList|[[FieldCompareModel](#schemafieldcomparemodel)]|false|none||none|
|createFieldList|[[FieldCompareModel](#schemafieldcomparemodel)]|false|none||none|
|changeFieldList|[[FieldCompareModel](#schemafieldcomparemodel)]|false|none||none|
|targetTableModel|[TableModel](#schematablemodel)|false|none||none|
|ddlSqls|[string]|false|none||ddl语句|

<h2 id="tocS_DataBaseCompareModel">DataBaseCompareModel</h2>

<a id="schemadatabasecomparemodel"></a>
<a id="schema_DataBaseCompareModel"></a>
<a id="tocSdatabasecomparemodel"></a>
<a id="tocsdatabasecomparemodel"></a>

```json
{
  "dropTableList": [
    {
      "name": "string",
      "comment": "string",
      "fields": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string"
        }
      ],
      "indexes": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ]
        }
      ],
      "dropIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "createIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "changeIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "dropFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "createFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "changeFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "targetTableModel": {
        "name": "string",
        "comment": "string",
        "fields": [
          {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        ],
        "indexes": [
          {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        ]
      },
      "ddlSqls": [
        "string"
      ]
    }
  ],
  "createTableList": [
    {
      "name": "string",
      "comment": "string",
      "fields": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string"
        }
      ],
      "indexes": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ]
        }
      ],
      "dropIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "createIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "changeIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "dropFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "createFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "changeFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "targetTableModel": {
        "name": "string",
        "comment": "string",
        "fields": [
          {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        ],
        "indexes": [
          {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        ]
      },
      "ddlSqls": [
        "string"
      ]
    }
  ],
  "changeTableList": [
    {
      "name": "string",
      "comment": "string",
      "fields": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string"
        }
      ],
      "indexes": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ]
        }
      ],
      "dropIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "createIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "changeIndexList": [
        {
          "name": "string",
          "type": "string",
          "method": "string",
          "parts": [
            {}
          ],
          "ddlSqls": [
            "string"
          ],
          "targetIndexModel": {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        }
      ],
      "dropFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "createFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "changeFieldList": [
        {
          "id": "string",
          "pk": true,
          "name": "string",
          "type": "string",
          "length": 0,
          "decimals": 0,
          "dbType": "string",
          "comment": "string",
          "defaultValue": "string",
          "nullable": true,
          "tableName": "string",
          "ddlSqls": [
            "string"
          ],
          "targetFieldModel": {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        }
      ],
      "targetTableModel": {
        "name": "string",
        "comment": "string",
        "fields": [
          {
            "id": null,
            "pk": null,
            "name": null,
            "type": null,
            "length": null,
            "decimals": null,
            "dbType": null,
            "comment": null,
            "defaultValue": null,
            "nullable": null,
            "tableName": null
          }
        ],
        "indexes": [
          {
            "name": null,
            "type": null,
            "method": null,
            "parts": null
          }
        ]
      },
      "ddlSqls": [
        "string"
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|dropTableList|[[TableCompareModel](#schematablecomparemodel)]|false|none||none|
|createTableList|[[TableCompareModel](#schematablecomparemodel)]|false|none||none|
|changeTableList|[[TableCompareModel](#schematablecomparemodel)]|false|none||none|

<h2 id="tocS_DataBaseChangeDTO">DataBaseChangeDTO</h2>

<a id="schemadatabasechangedto"></a>
<a id="schema_DataBaseChangeDTO"></a>
<a id="tocSdatabasechangedto"></a>
<a id="tocsdatabasechangedto"></a>

```json
{
  "tableName": "string",
  "dropIndexNameList": [
    "string"
  ],
  "createIndexNameList": [
    "string"
  ],
  "changeIndexNameList": [
    "string"
  ],
  "dropFieldNameList": [
    "string"
  ],
  "createFieldNameList": [
    "string"
  ],
  "changeFieldNameList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|tableName|string|false|none||none|
|dropIndexNameList|[string]|false|none||none|
|createIndexNameList|[string]|false|none||none|
|changeIndexNameList|[string]|false|none||none|
|dropFieldNameList|[string]|false|none||none|
|createFieldNameList|[string]|false|none||none|
|changeFieldNameList|[string]|false|none||none|

<h2 id="tocS_DataBaseExecuteDTO">DataBaseExecuteDTO</h2>

<a id="schemadatabaseexecutedto"></a>
<a id="schema_DataBaseExecuteDTO"></a>
<a id="tocSdatabaseexecutedto"></a>
<a id="tocsdatabaseexecutedto"></a>

```json
{
  "dropTableNameList": [
    "string"
  ],
  "createTableNameList": [
    "string"
  ],
  "dataBaseChangeList": [
    {
      "tableName": "string",
      "dropIndexNameList": [
        "string"
      ],
      "createIndexNameList": [
        "string"
      ],
      "changeIndexNameList": [
        "string"
      ],
      "dropFieldNameList": [
        "string"
      ],
      "createFieldNameList": [
        "string"
      ],
      "changeFieldNameList": [
        "string"
      ]
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|dropTableNameList|[string]|false|none||none|
|createTableNameList|[string]|false|none||none|
|dataBaseChangeList|[[DataBaseChangeDTO](#schemadatabasechangedto)]|false|none||none|

<h2 id="tocS_MapList?">MapList?</h2>

<a id="schemamaplist?"></a>
<a id="schema_MapList?"></a>
<a id="tocSmaplist?"></a>
<a id="tocsmaplist?"></a>

```json
{
  "key": [
    {}
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|key|[object]|false|none||none|

<h2 id="tocS_DataTypeModel">DataTypeModel</h2>

<a id="schemadatatypemodel"></a>
<a id="schema_DataTypeModel"></a>
<a id="tocSdatatypemodel"></a>
<a id="tocsdatatypemodel"></a>

```json
{
  "id": "string",
  "defKey": "string",
  "defName": "string",
  "icon": "string",
  "color": {},
  "requireLen": 0,
  "requireScale": 0,
  "lenMax": "string",
  "often": "string",
  "orderValue": 0,
  "dbDataType": {
    "key": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||主键|
|defKey|string|false|none||编码|
|defName|string|false|none||名称|
|icon|string|false|none||图标|
|color|object|false|none||颜色|
|requireLen|integer|false|none||必要长度|
|requireScale|integer|false|none||必要精度|
|lenMax|string|false|none||最大长度|
|often|string|false|none||使用频率|
|orderValue|integer|false|none||排序|
|dbDataType|[MapString](#schemamapstring)|false|none||数据库类型映射关系|

