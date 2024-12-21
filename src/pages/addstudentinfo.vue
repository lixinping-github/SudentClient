<template>
    <div class="maindiv">
        <div class="maindiv-div">
            
        <div>密&nbsp;&nbsp;&nbsp;码：<el-input class="inp1" placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
        <div>姓&nbsp;&nbsp;&nbsp;名：<el-input class="inp1" v-model="name" placeholder="请输入姓名"></el-input></div>
        <div>年&nbsp;&nbsp;&nbsp;龄：<el-input class="inp1"  maxlength="2" v-model="age" placeholder="请输入年龄"></el-input></div>
        <div>性&nbsp;&nbsp;&nbsp;别：<el-input class="inp1"  v-model="gender" placeholder="请输入性别"></el-input></div>
        <div>电&nbsp;&nbsp;&nbsp;话：<el-input class="inp1" type="number" placeholder="请输入电话" v-model="phones" maxlength="11"
                show-word-limit>
            </el-input></div>
        <el-button class="sendadd" @click="addstudentinformation" type="primary">添加数据</el-button>
    
    </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            
            password: "",
            name: "",
            age: "",
            gender: "",
            phones: ""
        }
    },
    methods: {
       
        addstudentinformation() {//向服务器发送token
            axios.interceptors.request.use(function (config) {
                config.headers["Authorization"] = `Bearer ${sessionStorage.getItem("useridentity")}`;
                return config;
            })

            if (this.password && this.name && this.age && this.gender && this.phones) {
                if(this.age>0)//这里有个逻辑错误，暂时不解决
                {
                    axios.put("http://localhost:7000/addstudentinformation", {//向服务器发送添加数据
                    data: {
                        password: this.password,
                        name: this.name,
                        age: this.age,
                        gender: this.gender,
                        phones: this.phones
                    }})
                .then((result) => {
                    if (result.data.states === "OK") {
                        alert("成功添加用户");}})//做异常处理
                .catch((error) => {alert("添加失败")})
                }
                else{
                    alert("年龄不能为负数！！！");
                }//对数据进行矫正
            }
            else {
                alert("信息不能为空！！！");//提示信息
            }
        }
    }
}
</script>

<style scoped>
.inp1 {
    width: 300px;
    border-radius: 6px;
    border:1px solid rgba(0, 0, 0,0.5);
    margin-top:10px
}
.maindiv{
    width: 400px;
    height: 350px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    background-color:white;
    box-shadow: 5px 5px 10px rgba(0, 0, 0,0.4);
    }
    .maindiv-div{
        width:95%;
        margin:auto;
    }
    .sendadd{
        position:absolute;
        bottom:10%;
        right:7%;

        
    }
</style>