<template>
  <div 
    class="chat-wrap" 
    :class="{ 'show-load-more': showLoadMore }"
    ref="messages"
    @scroll="handleScroll($event)">
    <Spinner v-if="isLoading"/>
    <div v-else class="chat messages" id="messages">
      <div v-if="loadMoreLimit === 'limited'" class="load-text load-limited">
        沒有更多訊息了！
      </div>
      <div v-if="showLoadMore" class="load-text load-more">
        <span class="loading"></span><span>正在載入訊息...</span>
      </div>
      <div v-for="msg in messages" :key="msg.id" class="" >
        <div 
          v-if="msg.isSelf"
          class="self msg" >
          <p>
            {{ msg.content }}
          </p>
          <span>{{ msg.createdAt | fromNow }}</span>
        </div>
        <div 
          v-else
          class="other msg">
          <router-link :to="`/users/${msg.UserId}`" class="avatar">
            <img :src="msg.avatar | emptyImage" alt="">
          </router-link>
          <div class="">
            <p>
              {{ msg.content }}
            </p>
            <span>{{ msg.createdAt | fromNow }}</span>
          </div>
        </div>
        <!-- 上線離線 -->
          <!-- <div class="user_join msg" v-if="msg.role === 'join'">
            某某某 上線了
          </div> -->
      </div>
    </div>
    <div class="d-flex justify-content-center divgn-items-center send-wrap">
      <input 
        v-model="text"
        placeholder="請輸入訊息 ..."
        type="text"
        maxlength="160"
        @keypress.enter="postPublicMsg"
      >
      <button 
        class="send-btn"
        type="button"
        @click.stop.prevent="postPublicMsg"
      >
        <img src="~@/assets/img/icon_send.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from './../utils/helpers'
import { emptyImageFilter } from "../utils/mixins"
import { fromNowFilter } from './../utils/mixins'
import Spinner from './../components/Spinner'

export default {
  mixins: [fromNowFilter,emptyImageFilter],
  components: {
    Spinner
  },
  data () {
    return {
      socket: null,
      text: '',
      memberNum: 0, 
      messages: {
        avatar: '',
        content: '',
        createdAt: ''
      },
      loadMoreLimit: 20,
      showLoadMore: false,
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const userId = this.currentUser.id
    this.joinPublicRoom(userId)
    this.getPublicHistory(20) 
  },
  updated () {
    if (this.loadMoreLimit === 20) {
      this.updateScroll(this.$refs.messages.scrollHeight)
    }
  },
  watch: {
    isPostMsg (value) {
      if (value) {
        setTimeout(() => { 
          this.text = ''
        }, 500)
      }
    },
    text (value) {
      if (value === '' && this.isPostMsg) {
        this.updateScroll(this.$refs.messages.scrollHeight)
        this.isPostMsg = false
      }
    },
    loadMoreLimit (value) {
      if (value === 'limited') {
        setTimeout(() => { 
          this.loadMoreLimit = 'nomore'
        }, 3000)
      } 
    },
    showLoadMore (value) {
      if (value) {
        setTimeout(() => { 
          this.showLoadMore = false
        }, 2500)
      }
    }
  },
  sockets: {
    new_join({name}) {
      this.postOnlineInform(name)
    },
    online_users(data) {
      this.memberNum = data.users.length
    },
    get_public_msg(data) {
      this.messages.push(data)
    },
    user_leave({name}) {
      this.postOfflineInform(name)
    }
  },
  methods: {
    joinPublicRoom(userId) { 
      this.$socket.emit('join_public_room', { userId })
    },
    getPublicHistory(limit) { 
      this.$socket.emit('get_public_history', {
        offset: 0,
        limit: limit
      }, data => {
        this.messages = [
          ...data.reverse()
        ]
        this.messages = this.messages.map( msg => {
          const { UserId, avatar, content, createdAt } = msg
          const isSelf = UserId === this.currentUser.id ? true : false
          return { UserId, avatar, content, createdAt, isSelf }
        })
        this.isLoading = false
      })
    },
    postPublicMsg() { 
      if (!this.text.length) {
        Toast.fire({
          icon: 'warning',
          title: '你還沒有填寫訊息'
        })
        return
      }

      this.$socket.emit('post_public_msg', { 
        content: this.text,
        userId: this.currentUser.id
      })
      const avatar = this.currentUser.avatar
      const content = this.text
      const createdAt = new Date()

      const data = {
        avatar,
        content,
        createdAt,
        isSelf: true
      }
      this.messages.push( data )
      
      this.text = ''
      
      Toast.fire({
        icon: 'success',
        title: '訊息發送成功'
      })
    },
    postOnlineInform(name) {
      Toast.fire({
          icon: 'info',
          title: `${name} 加入聊天室`,
        })
    },
    postOfflineInform(name) {
      Toast.fire({
          icon: 'info',
          title: `${name} 離開聊天室`
        })
    },
    leavePublicRoom(userId) {
      this.$socket.emit('leave_public_room', { userId })
    },
    updateScroll(heightPoint) {
      this.$refs.messages.scrollTop = heightPoint
    },
    handleScroll(e) {
      if (e.srcElement.scrollTop === 0 ) {
        this.loadMore()
      }
      if (this.loadMoreLimit === 'nomore') {
        this.loadMoreLimit = 'limited'
      }
    },
    loadMore() {
      if (this.messages.length >= this.loadMoreLimit) {
        this.showLoadMore = true

        const limit = this.messages.length + 5
        setTimeout(() => { 
          this.getPublicHistory(limit)
          this.loadMoreLimit = limit
        }, 2000)
        
      } else if (this.loadMoreLimit - this.messages.length <= 5){
        this.loadMoreLimit = 'limited'
      }
    },
  },
  beforeDestroy () {
    this.leavePublicRoom(this.currentUser.id)
  }
}
</script>

<style scoped>
.chat-wrap {
  height: calc( 100vh - 110px);
  overflow-y: scroll;
  box-sizing: border-box;
}
.chat::-webkit-scrollbar {
  display: none;
}
.chat > div{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 15px;
}
.other {
  align-self: flex-start;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.self {
  text-align: right;
  align-self: flex-end;
  margin-bottom: 10px;
}

.other > div {
  text-align: left;
}

.msg p {
  width: auto;
  max-width: 400px;
  padding: 15px 20px;
  margin-bottom: 0;
}
.msg span {
  font-size: 13px;
  color: #6f767a;
}
.other a {
  margin-bottom: 23px;
}
.other p {
  background: #e6edf1;
  border-radius: 20px 20px 20px 0;
}
.self p {
  color: #fff;
  background: #ff6600;
  border-radius: 20px 20px 0 20px;
}

.user_join {
  background: #ccc;
  padding: 5px 15px;
  margin: 0;
  border-radius: 50px;
}
.send-wrap {
  position: absolute;
  bottom: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 60px;
  padding: 10px;
  box-sizing: border-box;
  border-width: 1px 0;
  border-style: solid;
  border-color: #e6ecf0;
  background: #fff;
}
input {
    width: 100%;
    height: 35px;
    padding-left: 20px;
    border: 1px solid #dde3e6;
    border-radius: 30px;
    background: #d5dee3;
    outline: none;
}
.send-btn {
      width: auto;
    margin: 0 20px;
}
.send-btn img {
  width: 20px;
  filter: invert(73%) sepia(100%) saturate(48) hue-rotate(364deg);
  transition: .3s ease-in-out;
}
.send-btn:hover img {
  transform: scale(1.2);
  transition: .3s ease-in-out;
}
.chat > .load-more {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fdaa72;
}
.loading {
  height: 15px;
  width: 15px;
  border-radius: 100%;
  margin: 6px;
  border: 2px solid #fdaa72;
  border-bottom-color: transparent;
  vertical-align: middle;
  -webkit-animation: rotate 0.75s linear infinite;
  animation: rotate 0.75s linear infinite;
}
.load-more span:last-child {
  padding-top: 5px;
}
.load-limited {
  color: #ccc;
}
.show-load-more {
  overflow-y: hidden;
}
@keyframes rotate {
  0% {
      -webkit-transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
  }
}
@media (max-width: 576px) {
  .chat {
    margin-bottom: 10vh;
  }
  .msg p {
    max-width: 180px;
    font-size: 14px;
  }
}
</style>