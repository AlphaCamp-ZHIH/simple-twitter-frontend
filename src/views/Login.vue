<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <img class="mb-4" src="../assets/logo.svg" alt="">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          登入Aphitter
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label class="input-label" for="email">帳號</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="請輸入註冊的信箱"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label class="input-label" for="password">密碼</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="請輸入密碼"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-block mb-3"
        :disabled="isProcessing"
        type="submit"
      >
        {{ isProcessing ? '登入中...' : '登入' }}
      </button>

      <div class="text-right mb-3">
        <p>
          <router-link class="login-text" to="/regist">註冊Aphitter</router-link>
          ·
          <router-link class="login-text" to="/admin/login">後台登入</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'
import Vue from 'vue'
import VueSocketIo from 'vue-socket.io'

export default {
  data () {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  created() {
    // this.socketClose()
  },
  sockets: {
    connect: function() {
      console.log("連線成功")
    },
    disconnect(){
      console.log("斷開連線");
    },
    reconnect(){
      console.log("重新連線");
    },
  },
  methods: {
    // socketClose () {
    //   if (!this.$socket.on('disconnect')) return
    // },
    async handleSubmit () {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入帳號和密碼'
          })
          return
        }

        this.isProcessing = true

        const response = await authorizationAPI.logIn({
          email: this.email,
          password: this.password
        })

        const { data } = response
        
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        localStorage.setItem('token', data.token)
        const token = localStorage.getItem('token')

        this.$store.commit('setCurrentUser', data.User)
        
        this.$router.push('/tweets')

        Vue.use(new VueSocketIo({
          // debug: true,
          connection: 'https://zhihproject.xyz/',
          options: {
            query: {
              auth: token
            }
          },
          vuex: {}
        }))

      } catch (error) {
        this.isProcessing = false
        if(error.response.data.message === "This user doesn't exist.") {
          this.email = ''
          this.password = ''
          Toast.fire({
            icon: 'warning',
            title: '沒有這個帳戶'
          })
        } else if (error.response.data.message === "Password incorrect."){
          this.password = ''
          Toast.fire({
            icon: 'warning',
            title: '密碼有誤'
          })
        } else {
          Toast.fire({
            icon: 'warning',
            title: '請確認您輸入了正確的帳號密碼'
          })
        }
        console.error(error.message)
      }
    }
  }
}
</script>
<style scoped>
img {
  margin-top: 30px;
}
h1 {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 23px;
  line-height: 33px;
}
.form-label-group {
  position: relative;
  max-width: 540px;
  max-height: 212px;
  margin: 0 auto;
  border-radius: 4px;

}

.form-control {
  background: #F5F8FA;
  height: 60px;
  border: 0;
  margin-top: 20px;
  padding-top: 30px;
  border: 1px solid #a0bed2;
}

.input-label {
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}
.btn {
  border-radius: 50px;
  background: #ff6600;
  color: #fff;
  border: none;
  max-width: 540px;
  margin: 30px auto;
}
.text-right {
  display: flex;
  justify-content: flex-end;
  max-width: 540px;
  max-height: 26px;
  margin: 41px auto;
}
.login-text:hover {
  text-decoration: none;
  color: #ff6600;
}
@media (max-width: 576px) {
  .container {
    padding: 30px;
  }
}
</style>