<template>
  <div class="readme-container">
    <h1>项目自述</h1>
    <article>
      <section>
        <h2>项目概述</h2>
        <p>
          该项目是一个基于Vue.js与Node.js的学生信息管理系统，采用前后端分离架构。前端使用Vue.js框架，后端使用Node.js构建API服务，实现学生信息的增删改查（CRUD）操作。系统支持用户登录、学生信息管理、成绩查看和编辑等功能。
        </p>
      </section>
      <section>
        <h2>项目基本信息</h2>
        <ul>
          <li>
            <strong>开发周期：</strong> 8天
          </li>
          <li>
            <strong>联系作者：</strong> 李金豪，李新平，林豪等
          </li>
          <li>
            <strong>联系方式：</strong> <a href="tencent://message/?uin=775399418&Site=在线咨询&Menu=yes" target="_blank" style="color: #409EFF; text-decoration: none;">QQ 775399418</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>技术栈</h2>
        <ul>
          <li>
            <strong>前端：</strong> Vue.js, Vue Router, Vuex, Element UI, HTML, CSS, JavaScript
          </li>
          <li>
            <strong>后端：</strong> Node.js, Express, JSON, JWT (JSON Web Token)
          </li>
          <li>
            <strong>数据存储：</strong> 本地JSON文件 (<code>user.json</code>)
          </li>
        </ul>
      </section>
      <section>
        <h2>功能详情</h2>
        <ul>
          <li>
            <h3>用户登录</h3>
            <p>
              使用用户名和密码登录，后端生成并返回一个JWT token，后续请求需携带此token进行认证。
            </p>
          </li>
          <li>
            <h3>学生信息管理</h3>
            <p>
              支持查看、添加、修改、删除学生信息。
            </p>
          </li>
          <li>
            <h3>成绩管理</h3>
            <p>
              管理学生成绩的输入与展示。
            </p>
          </li>
          <li>
            <h3>前端页面</h3>
            <p>
              使用Vue.js和Element UI完成页面布局与功能实现，Vue Router用于页面跳转，Vuex管理全局状态。
            </p>
          </li>
          <li>
            <h3>后端API</h3>
            <p>
              提供学生信息的增删改查接口，支持跨域请求。
            </p>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "readme",
};
</script>

<style scoped>
.readme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
}

h1 {
  color: white;
  text-align: center;
  font-family: "宋体";
  font-size: 37px;
  margin-bottom: 20px;
}

article {
  width: 80%;
  color: white;
  font-family: "宋体";
}

section {
  margin-bottom: 30px;
}

h2 {
  color: #409EFF;
  border-bottom: 2px solid #409EFF;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

h3 {
  color: #66b1ff;
  margin-top: 10px;
  margin-bottom: 5px;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

a:hover {
  text-decoration: underline;
}
</style>