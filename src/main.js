import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIo from 'vue-socket.io'

const token = localStorage.getItem('token')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (token) {
  Vue.use(
    new VueSocketIo({
      // debug: true,
      connection:
        'http://ec2-52-198-213-230.ap-northeast-1.compute.amazonaws.com:3000',
      // connection: 'http://3e331a904c8b.ngrok.io',
      options: {
        query: {
          auth: token
        }
      },
      vuex: {}
    })
  )
}
