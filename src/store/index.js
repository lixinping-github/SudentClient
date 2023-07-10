import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const actions={
    entry(context,value){//value 中保存着用户名和密码 userid ,password
      const{userid,password} = value;
        axios.post("http://localhost:7000/login",
        {userid, password})
        .then((result)=>{
            context.commit("loentry",result);  //执行成功，我们就调用下一步内容，如果执行失败，则另当别论
        })
        .catch((error)=>{
            alert("用户名或者密码错误");
        })

    }

};
const mutations={    //配置规则，后端将会给我们传递用户名，用户的状态
    loentry(state,value){  //保存用户名
       sessionStorage.setItem("useridentity",value.data.useridentity);
       state.useridentity=value.data.useridentity; //保存用户状态；
        state.username=value.data.username;//保存普通名字
    },
    
};
const state={
    username:"",//用户名
    useridentity:"",//用户状态  是一个token ，我们的程序必须每次访问后台的时候要发送token
    tabledata:{}  //这个地方数据存放有问题，暂时不动他
};




export default new Vuex.Store({
	actions,
	mutations,
	state,
})