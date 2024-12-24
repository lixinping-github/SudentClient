<template>
    <div>
        <table>
            <caption>学生信息管理</caption>
            <thead>
                <tr>
                    <th>用户名</th>
                    <th>密码</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>电话</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="studata of $route.query.tables.data.data" :key="studata.userid">
                    <td>{{ studata.userid }}</td>
                    <td>{{ studata.password }}</td>
                    <td>{{ studata.name }}</td>
                    <td>{{ studata.age }}</td>
                    <td>{{ studata.gender }}</td>
                    <td>{{ studata.phone }}</td>
                    <td>
                        <button v-on:click="deleted(studata.userid, studata.name)">删除</button>
                        <button @click="updateStu(studata)">修改</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div id="updatemode" ref="updateDiv">
            <h2>信息修改</h2>
            <form action="#">
               <label for="useridInput">用户名：</label><input type="text"  v-model="userid" id="useridInput" /><br>
                <label for="passwordInput">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label><input type="text"  v-model="password" id="passwordInput" /><br>
                <label for="nameInput">姓&nbsp;&nbsp;&nbsp;&nbsp;名：</label><input type="text" v-model="name" id="nameInput" /><br>
                <label for="ageInput">年&nbsp;&nbsp;&nbsp;&nbsp;龄：</label><input type="number"  v-model="age" id="ageInput" /><br>
                <label for="genderInput">性&nbsp;&nbsp;&nbsp;&nbsp;别：</label><input type="text" v-model="gender" id="genderInput" /><br>
                <label for="phoneInput">电&nbsp;&nbsp;&nbsp;&nbsp;话：</label><input type="text"  v-model="phones" id="phoneInput" /><br>
                <input type="button" value="返回" @click="hideUpdateDiv">
                <input type="reset" value="清空"> 
                <input type="button" value="确认修改" @click="confirmModify">
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            selectedStudent: null ,
            userid:"",
            password: "",
            name: "",
            age: "",
            gender: "",
            phones: ""
        
        };
    },
    mounted() {
        //制作一个消息订阅与发布，将数据放到订阅中 或者是放到vuex中
        //这一步操作暂时不做
    },
    methods: {
        updateStu(student) {
            this.selectedStudent = student;
            this.userid=student.userid;
            this.password = student.password;
            this.name = student.name;
            this.age = student.age;
            this.gender = student.gender;
            this.phones = student.phone;
            const updateDiv = this.$refs.updateDiv;
            this.selectedStudent = student;
            updateDiv.style.display = 'block';
            this.isUpdateMode = true;

            // 填充用户名input元素的值
            const useridInput = document.getElementById('useridInput');
            if (useridInput) {
                useridInput.value = student.userid;
            }

            // 填充密码input元素的值
            const passwordInput = document.getElementById('passwordInput');
            if (passwordInput) {
                passwordInput.value = student.password;
            }

            // 填充姓名input元素的值
            const nameInput = document.getElementById('nameInput');
            if (nameInput) {
                nameInput.value = student.name;
            }

            // 填充年龄input元素的值
            const ageInput = document.getElementById('ageInput');
            if (ageInput) {
                ageInput.value = student.age;
            }

            // 填充性别input元素的值
            const genderInput = document.getElementById('genderInput');
            if (genderInput) {
                genderInput.value = student.gender;
            }

            // 填充电话input元素的值
            const phoneInput = document.getElementById('phoneInput');
            if (phoneInput) {
                phoneInput.value = student.phone;
            }
        },
        deleted(userid, names) {
            console.log(userid, names);
            if (confirm(`是否删除用户--${names}`)) {
                axios.interceptors.request.use(function (config) {
                    config.headers["Authorization"] = `Bearer ${sessionStorage.getItem("useridentity")}`;
                    return config;
                });
                axios.delete("http://localhost:7000/deletestu", {
                    data: {
                        userid
                    }
                })
                 .then((result) => {
                        alert("删除成功");

                    })
                 .catch((error) => {
                        alert("删除失败");
                    });
            }
        },
        hideUpdateDiv() {
            const updateDiv = this.$refs.updateDiv;
            updateDiv.style.display = 'none';
        },
        confirmModify() {
            
            // 这里后续需要完善，用于获取input中的值，发送修改请求到后端等操作
            console.log(this.age);
            console.log(this.name);
            console.log(this.password);
            console.log(this.gender);
            console.log(this.phones)
            axios.interceptors.request.use(function (config) {
                config.headers["Authorization"] = `Bearer ${sessionStorage.getItem("useridentity")}`;
                return config;
            })

            if (this.password && this.name && this.age && this.gender && this.phones) {
                if(this.age>0)//这里有个逻辑错误，暂时不解决
                {
                    axios.put("http://localhost:7000/updateStudent", {//向服务器发送添加数据
                    data: {
                        userid:this.userid,
                        password: this.password,
                        name: this.name,
                        age: this.age,
                        gender: this.gender,
                        phones: this.phones
                    }})
                .then((result) => {
                    if (result.data.states === "OK") {
                        alert("修改用户成功");}})//做异常处理
                .catch((error) => {alert("修改失败")})
                }
                else{
                    alert("年龄不能为负数！！！");
                }//对数据进行矫正
            }
            else {
                alert("信息不能为空！！！");//提示信息
            }






        }
    },
}
</script>



<style scoped>
div {
    overflow-y: auto;
  }
h2{
    text-align: center;
}
caption {
    background: #5B9600;
    border-radius: 6px 6px 6px 6px;
    box-shadow: 0 0 0 1px #5F5A4B, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
    color: #FFFFFF;
    font-family: "微软雅黑", "宋体", "黑体", Arial;
    font-size: 18px;
    font-weight: bold;
    height: 25px;
    line-height: 25px;
    padding: 8px 0 5px 5px;
    text-shadow: 2px 2px 3px #222222;
}

#updatemode {
    width: 400px;
    height: 500px;
    border: red solid 1px;
    position: absolute;
    left: 25%;
    top: 25%;
    background-color: white;
    display: none;
}

button {
    font-size: 18px;
    width: 76px;
    height: 35px;
    background-color: rgb(211, 74, 74);
    border-radius: 6px;
    border: none;
}

#updatemode {
    width: 400px;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: auto;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    color: #666;
}

input[type="text"],
input[type="number"] {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

input[type="button"],
input[type="reset"] {
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

input[type="button"] {
    background-color: #007BFF;
    color: white;
}

input[type="reset"] {
    background-color: #6C757D;
    color: white;
}

input[type="button"]:hover,
input[type="reset"]:hover {
    opacity: 0.8;
}

button:nth-child(2) {
    margin-left: 10px;
    background-color: #243894;
    color: rgb(235, 231, 231);
}

/*设置按钮样式*/
button:active {
    background-color: rgb(238, 14, 14);
}

button:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
}

table td,
table th {
    border: 1px solid #cad9ea;
    color: #666;
    height: 50px;
}

table thead th {
    background-color: #CCE8EB;
}

table tr:nth-child(odd) {
    background: #fff;
}

table tr:nth-child(even) {
    background: #F5FAFA;
}
</style>