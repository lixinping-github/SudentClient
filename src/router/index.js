import Vue from "vue";
import VueRouter from "vue-router";
import login from "../pages/login.vue";
import masterpage  from '../pages/masterpage.vue';
import tableinfo from '../pages/tableinfo.vue';
import addstudentinfo from '../pages/addstudentinfo.vue';
import readme from '../pages/readme.vue';
import entrying from '../pages/entrying.vue';


Vue.use(VueRouter);
const router= new VueRouter({
    routes:[
        {
            name:'login',
            path:"/",
            component:login
        },
        {
            name:"masterpage",//首页路由
            path:"/masterpage",
            component:masterpage,
            children:[
                {
                    name:"tableinfo",
                    path:"tableinfo",
                    component:tableinfo
                },
                {
                    name:"addstudentinfo",
                    path:"addstudentinfo",
                    component:addstudentinfo
                },
                {
                    name:"readme",
                    path:"readme",
                    component:readme 
                }
            ]
        },
        {
            name:'entrying',
            path:"/entrying",
            component:entrying
        },
    ]

})

export default router  //这里也有一个逻辑错误，我们的token信息发送，应该在前端路由守卫里面勘察