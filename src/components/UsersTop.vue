<template>
  <section class="users-top">
    <div class="wrap">
      <h2 class="title">跟隨誰</h2>
      <ul class="users" :class="{ 'nomore': !showMore }">
        <Spinner v-if="isLoading"/>
        <li v-else v-for="user in users" :key="user.id" class="user">
          <router-link
            class="avatar"
            :to="{ name: 'user', params: { id: user.id } }"
          >
            <img :src="user.avatar | emptyImage" alt="" />
          </router-link>
          <router-link
            class="info"
            :to="{ name: 'user', params: { id: user.id } }"
          >
            <span class="name">{{ user.name }}</span>
            <span class="account">@{{ user.account }}</span>
          </router-link>
          <button
            v-if="user.isFollowing"
            @click.stop.prevent="deleteFollowing(user.id)"
            class="btn toggle-follow is-following"
            :disabled="isProcessing"
          >
            正在跟隨
          </button>
          <button
            v-else
            @click.stop.prevent="addFollowing(user.id)"
            class="btn toggle-follow"
            :disabled="isProcessing"
          >
            跟隨
          </button>
        </li>
      </ul>
      <button 
        class="show-more-user"
        @click="showMoreUser"
        :disabled="!showMore"
        :class="{ 'nomore': !showMore }"
      >
        顯示更多
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { emptyImageFilter } from "../utils/mixins"
import Spinner from './../components/Spinner'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  components: {
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true,
      isProcessing: false,
      showMore: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { offset = 0, limit = 5 } = this.$route.query
    this.fetchTopUsers({ queryOffset: offset, queryLimit: limit })
  },
  methods: {
    async fetchTopUsers({ queryOffset, queryLimit }) {
      try {
        const response = await usersAPI.getTopUsers({
          offset: queryOffset,
          limit: queryLimit
        })
        this.users = [...response.data]

        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.isLoading = false

      } catch (error) {
        
        this.isLoading = false

        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新個人資料，請稍後再試'
        })
      }
    },
    async addFollowing (userId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFollowing({ id: userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              isFollowing: true,
            }
          }
        })

        this.$emit('after-add-follow')
        
        this.postTimeline(userId, 4, this.currentUser.id)

        Toast.fire({
          icon: 'success',
          title: '跟隨成功'
        })
        this.isProcessing = false

      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法新增跟隨，請稍後再試',
        })
        this.isProcessing = false
      }
    },
    async deleteFollowing (userId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFollowing({ userId })
        
        if(data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              isFollowing: false,
            }
          }
        })
        this.$emit('after-delete-follow')
        Toast.fire({
          icon: 'success',
          title: '取消跟隨'
        })
        this.isProcessing = false

      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取消跟隨，請稍後再試'
        })
        this.isProcessing = false
      }
    },
    showMoreUser () {
      this.fetchTopUsers(0, 10)
      this.showMore = false
    },
    postTimeline(ReceiverId, type, PostId) {
      this.$socket.emit('post_timeline', { ReceiverId, type, PostId })
    }
  }
}
</script>

<style scoped>
.users-top {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 20px;
  text-align: left;
}
.wrap {
  width: 100%;
  border-radius: 14px;
  background-color: #f5f8fa;
  overflow: hidden;
}
.title {
  padding: 20px;
  font-size: 20px;
  text-align: left;
  border-bottom: 1px solid #e6ecf0;
  margin-bottom: 0;
}
.users {
  max-height: 520px;
  overflow-y: scroll;
}
.users.nomore {
  box-shadow: 0px -18px 36px -43px #333 inset;
}
.user {
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid #e6ecf0;
}
.is-following {
  color: #fff;
  background-color: #ff6600;
}
.show-more-user {
  display: block;
  width: 100%;
  text-align: left;
  padding: 20px;
  color: #ff6600;
}
.show-more-user:hover {
  background: #ecf0f3;
}
.info:hover {
  text-decoration: none;
}
.name:hover {
  color: #ff6600;
}
.nomore {
  color: #ccc;
  cursor: auto;
  background: #f5f8fa;
}
.nomore:hover {
  background: #f5f8fa;
}
@media (max-width: 992px) {
  .users-top {
    display: none;
  }
}
</style>