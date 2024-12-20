<template>
    <div class="maininput">
        <div><span>用户名:</span><input class="inputstyle" placeholder="请输入用户名" v-model="username" /></div>
        <div><span>密&nbsp;&nbsp;&nbsp;码:</span><input placeholder="请输入密码" v-enter=" denglu"  class="inputstyle" v-model="password" /></div>
        <el-button ref="entryweb" class="entryweb"  v-on:click=" denglu($event)" type="primary">点击登录</el-button> 
    </div>
</template>

<script>
let elbutton=document.querySelector("el-button");

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         // 在这里执行回车键被按下时的操作
//         console.log('Enter 键被按下了');
//     }
// });
 
export default {
    name: "login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    directives: {
    enter: {
      bind(el, binding) {
        el.addEventListener('keyup', (event) => {
          if (event.keyCode === 1) {
            binding.value();
          }
        });
      },
    },
  },

                        

    methods: {
        submit:function(){
    console.log(123)
                        },
        denglu($event) {   //这个是登录的时候，我们要做的事情
            
            this.$store.dispatch("entry", { userid: this.username.trim(), password: this.password.trim() })//调用仓库的方法action
            this.$router.replace("/entrying")//进行动画效果设置
            setTimeout(() => {
                if (this.$store.state.username) {       //当我们的用户名储存到了仓库中，说明我们此时拥有登录状态
                    this.$router.replace("/masterpage")//延迟加载到首页路由
                }
            }, 3000);
        }
    }

}

</script>


<style scoped>

.maininput {
    position: relative;
    width: 328px;
    height: 400px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto auto;
   
}
span{
    color: rgb(218, 223, 228);
    font-size: 18px;
    font-weight: bold;
    font-family: PingFangSC-Regular, Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1", verdana, sans-serif, Simsun, STXihei;
    margin-right: 2em;
}
.inputstyle{
    
    font-size: 18px;
    font-weight: bold;
    outline: none;
    width: 230px;
    height:35px;
    border-radius: 6px;
    border:1px solid rgba(0, 0, 0,0.5);
    margin-top:10px
}
inputstyle:active{
    border:rgba(0, 240, 0, 0.5) 1px solid;
}
inputstyle:hover{
    border:rgba(0, 240, 0, 0.5) 1px solid;
}

.maininput div:nth-child(2){
    margin-top: 20px;
}
.entryweb{
    position: absolute;
    right: 5px;
    margin-top:10px
}

</style>


