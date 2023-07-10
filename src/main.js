import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";//引入我们的router
import store from "./store/index.js";

Vue.config.productionTip = false
import {Form,FormItem,Input,Row,Button,Container,Aside,Menu,Submenu,
MenuItemGroup,MenuItem,Header,Dropdown,DropdownItem,DropdownMenu,Table,TableColumn
} from "element-ui";

Vue.component("el-form",Form);
Vue.component("el-formitem",FormItem);
Vue.component("el-input",Input);
Vue.component("el-row",Row);
Vue.component("el-button",Button);

Vue.component("el-container",Container);
Vue.component("el-aside",Aside);
Vue.component("el-menu",Menu);
Vue.component("el-submenu",Submenu);
Vue.component("el-menu-item-group",MenuItemGroup);
Vue.component("el-menu-item",MenuItem);
Vue.component("el-header",Header);
Vue.component("el-dropdown",Dropdown);
Vue.component("el-dropdown-item",DropdownItem);
Vue.component("el-dropdown-menu",DropdownMenu);
Vue.component("el-table",Table);
Vue.component("el-table-column",TableColumn);




//先引入登录的玩意


new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app')
