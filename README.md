# 学生信息管理系统

#### 项目简介

该项目是一个基于Vue.js与Node.js的学生信息管理系统，采用前后端分离架构。前端使用Vue.js框架，后端使用Node.js构建API服务，实现学生信息的增删改查（CRUD）操作。系统支持用户登录、学生信息管理、成绩查看和编辑等功能。

#### 技术栈

- **前端**: Vue.js, Vue Router, Vuex, Element UI, HTML, CSS, JavaScript
- **后端**: Node.js, Express, JSON, JWT (JSON Web Token)
- **数据存储**: 本地JSON文件 (`user.json`)

#### 功能介绍

- **用户登录**: 使用用户名和密码登录，后端生成并返回一个JWT token，后续请求需携带此token进行认证。
- **学生信息管理**: 支持查看、添加、修改、删除学生信息。
- **成绩管理**: 管理学生成绩的输入与展示。
- **前端页面**: 使用Vue.js和Element UI完成页面布局与功能实现，Vue Router用于页面跳转，Vuex管理全局状态。
- **后端API**: 提供学生信息的增删改查接口，支持跨域请求。

#### 项目结构

```
/studentclient                    # 前端代码
    /src
        /components               # Vue组件
        /pages                    # 各个页面组件
        /store                    # Vuex 状态管理
        /router                   # Vue Router 路由配置
        /assets                   # 静态资源 (图片、样式等)
        /views                    # 页面视图
    App.vue                       # 根组件
    main.js                       # 入口文件
    ...

/server                           # 后端代码
    /data
        user.json                 # 存储学生信息的JSON文件
    server.js                     # 后端API服务器
    ...

```

#### 安装与运行

##### 1.安装依赖

- **前端**： 在 `studentclient` 文件夹中运行以下命令安装依赖：

  ```
  npm install
  ```

- **后端**： 在 `server` 文件夹中运行以下命令安装依赖：

  ```
  npm install
  ```

##### 2.启动项目

- **启动后端服务器**：

  在 `server` 文件夹中运行：

  ```
  node server.js
  ```

- **启动前端项目**：

  在 `studentclient` 文件夹中运行：

  ```
  npm run serve
  ```

  前端会启动在 `http://localhost:8080`。

##### 3.使用

1. 访问前端页面 `http://localhost:8080`，输入用户名和密码登录。
2. 登录成功后，可以管理学生信息，查看和编辑成绩。

#### 功能模块

##### 前端

- **李金豪和林豪**：负责前端页面的设计与实现，使用HTML、CSS和JavaScript完成了页面布局和静态效果。
- **喻葵和赵朋飞**：负责前端Vue模块的开发，使用Vue Router进行页面跳转，Vuex管理用户状态（如Token）和学生信息。

##### 后端

- **李新平**：负责后端开发，使用Node.js与Express构建API，处理前端请求，实现学生信息的增删改查功能，使用JWT进行用户认证，数据存储在JSON文件中。











































