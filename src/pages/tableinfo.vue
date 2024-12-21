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
                <tr v-for=" studata of $route.query.tables.data.data " :key="studata.userid">
                    <td>{{ studata.userid }}</td>
                    <td>{{ studata.password }}</td>
                    <td>{{ studata.name }}</td>
                    <td>{{ studata.age }}</td>
                    <td>{{ studata.gender }}</td>
                    <td>{{ studata.phone }}</td>
                    <td><button v-on:click="deleted(studata.userid, studata.name)">删除</button>
                        <button @click="updateStu">修改</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    mounted() {
        //制作一个消息订阅与发布，将数据放到订阅中 或者是放到vuex中
        //这一步操作暂时不做
    },
    methods: {
        updateStu(){
            this.$refs.banner.style.display="none";
            this.$router.push({
             name:'update'   
            })
        },
        deleted(userid, names) {
            console.log(userid, names)
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
                .catch((error) => { alert("删除失败") })
            }
        }
    },
}
</script>

<style scoped>
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

button {
    font-size: 18px;
    width: 76px;
    height: 35px;
    background-color: rgb(211, 74, 74);
    border-radius: 6px;
    border: none;

}
button:nth-child(2){
    margin-left: 10px;
    background-color: #243894;
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