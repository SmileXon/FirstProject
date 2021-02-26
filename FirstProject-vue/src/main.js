import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
let axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'

// 全局注册 axios,其他组件中调用 this.$axios 即可发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
    // 判断访问路径是否需要登录
    if (to.meta.requireAuth) {
      // 判断 store 对象是否存储 user 信息
      if (store.state.user.username) {
        // 有，则放行
        next()
      } else {
        // 没有，跳转到登录页，并存储访问页面路径，以便登录后跳转
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      // 无需登录，放行
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
