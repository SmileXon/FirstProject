<template>
  <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        let _this = this
        console.log(this.$store.state)
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              // var data = this.loginForm
              // 验证登录成功后，把 loginForm 对象传递给 store 的 user 对象
              _this.$store.commit('login', _this.loginForm)
              // 获取存储在 route 中的访问路径
              let path = this.$route.query.redirect
              // 判断访问路径是否存在，存在则跳转，否则跳转至首页
              this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>

<style>
  #poster {
    background: url("../assets/background/background3.jpeg") no-repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
    padding: 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 10vw auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
<style scoped>

</style>
