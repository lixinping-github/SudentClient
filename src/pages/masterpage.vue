<template>
    <div class="maininfo">
   
    <el-container>
        
        
        <el-aside width="200px"  style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>学生信息管理系统</template>
                    <el-menu-item-group>
                        <template slot="title">查看个人信息</template>
                        <el-menu-item @click="GetStudentinformation" index="1-1">查看所有学生信息</el-menu-item>
                        <el-menu-item @click="Addstu" index="1-2" >添加学生信息</el-menu-item>
                        <el-menu-item index="1-3" @click="Leave">登出</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>成绩系统</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">查看学生成绩</el-menu-item>
                        <el-menu-item index="1-2">输入学生成绩</el-menu-item>
                        <el-menu-item @click="Readme" index="1-3">项目自述</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <div class="mainsystem">
            
            <div ref="banner" class="span-before-alert">学生信息管理系统——李新平制作</div>
            <router-view></router-view>
        </div>
    </el-container>
</div>
</template>

<script>
import axios from 'axios'


        

export default {
    data() {
        return {
            definename:"李新平"
        }
    },
    methods: {
        Readme(){//两个无关紧要的方法
            this.$refs.banner.style.display="none";
            this.$router.push({
             name:'readme'   
            })
        },
        Addstu(){//此方法用于添加学生，添加学生和修改学生信息是一样的，但是由于我的逻辑有严重问题，导致数据难以拿到
            //无法进行。。。。或者说很难进行修改学生信息；除非子路由配置，但逻辑还是有问题。。。。。。
            this.$refs.banner.style.display="none";
            this.$router.push({
             name:'addstudentinfo'   
            })
        },

       

        GetStudentinformation() {//写一个方法，此方法用于获取学生信息，并且发送token
            
            axios.interceptors.request.use(function(config){
            config.headers["Authorization"]=`Bearer ${sessionStorage.getItem("useridentity")}`;
            return config;
           });//这里有一个严重的逻辑错误；我们发送请求包括token应该在路由守卫里面发送，而不是在这里面
           //此错误是一个严重的逻辑错误，导致后续数据难以拿到
            axios.get(`http://localhost:7000/getstuinfo`)
                .then((result) => {
                    this.$refs.banner.style.display="none";
                    this.$router.push({
                        name:"tableinfo",
                        query:{
                            tables:result,
                            
                        }
                    })
                    
                }).catch((error)=>{console.log(error)})
               
        },
        Leave()//登出的按钮，逻辑就是将sessionstorage 中的值清空，表示将token拿走，登录状态消失；
        {
            if(confirm("请问你是否要登出？"))
            {
                sessionStorage.removeItem("useridentity");
                this.$router.push({
                        name:"login"})
            } 
        }
    }
}
</script>



<style scoped>


.maininfo{
    width:70%;
}
.mainsystem {
    overflow: auto;
    width: 100%;
    
    position: relative;
}

.span-before-alert {
    
    font-size: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translatey(-50%);


}
</style>