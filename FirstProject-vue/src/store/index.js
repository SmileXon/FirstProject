import Vue from 'vue'
import Vuex from 'vuex'

// Vuex 状态管理方案
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 记录用户信息的对象
    user: {
      username: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    // 登录成功之后，把 loginForm 对象存储在 user 对象里
    login(state, user) {
      state.user = user
      // 记录用户的信息，sessionStorage 的特点是关闭浏览器窗口或标签页之后清除会话信息
      window.sessionStorage.setItem('user', JSON.stringify(user))
    }
  }
})
