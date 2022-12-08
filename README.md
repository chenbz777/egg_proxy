# egg_proxy

## 前言

`egg_proxy`是一个代理项目，为了解决前端跨域问题而出现



## 快速开始

#### 安装依赖

```bash
# 推荐cnpm
npm install
```

#### 运行

```bash
npm run dev

# open http://localhost:7001
```

<br />

## 接口说明

#### 接口

```bash
/
```

#### 类型

`post`

#### 入参

| 参数    | 是否必填 | 描述                         |
| ------- | -------- | ---------------------------- |
| url     | ✅        | 请求地址                     |
| method  | ✅        | 请求类型 GET POST PUT DELETE |
| data    | ❌        | 参数                         |
| headers | ❌        | 请求头                       |

<br />

## 镜像地址

[egg_proxy](https://hub.docker.com/repository/docker/chenbz777/egg_proxy)