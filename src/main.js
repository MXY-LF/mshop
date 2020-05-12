// eslint-disable-next-line
/* eslint-disable */
// 入口js

import Vue from 'vue'
import App from './APP'
import router from  './router'

new Vue({
    el: '#app',
    render: h=>h(App),
    router
})