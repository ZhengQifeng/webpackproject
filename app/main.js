import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'  //引入csswe
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/js/bootstrap.js'
import ElementUi from 'element-ui'
import App from './App.vue'

Vue.use(ElementUi)

Vue.config.productionTip = false; 
/* 实例化一个vue */
new Vue({
 el: '#app',
 components:{
 	'my-app':App
 }
})