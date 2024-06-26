import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
    Checkbox,
    Input,
    Select,
    Avatar,
    Table,
    Card,
    Menu,
    List,
    Drawer,
    Button,
    message
} from 'ant-design-vue';
// import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import axios from 'axios'
window.axios = axios;

import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Checkbox);
app.use(Input);
app.use(Select);
app.use(Avatar);
app.use(Table);
app.use(Card);
app.use(Menu);
app.use(List);
app.use(Button);
app.use(Drawer);
app.mount('#app');

app.config.globalProperties.$message = message;
