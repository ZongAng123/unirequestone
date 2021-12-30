import App from './App'
import Vue from 'vue'
import  Http from './common/http.js'


Vue.config.productionTip = false
Vue.prototype.Http = Http

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
