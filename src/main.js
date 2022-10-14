import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import MainHeader from "@/components/MainHeader.vue";

const app = createApp(App).use(store).use(Antd).use(router);
//增加共用的component
app.component("MainHeader", MainHeader);
app.mount('#app');
