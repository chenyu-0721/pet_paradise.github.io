<template>
  <form class="signIn" @submit.prevent="login">
    <h1 class="text-center">登入</h1>
    <div class="d-flex flex-column">
      <input
        class="email"
        type="email"
        id="email"
        v-model="email"
        placeholder="example@gmail.com"
        required
      />
      <input
        class="password"
        type="password"
        id="password"
        v-model="password"
        placeholder="password"
        required
      />
      <div class="d-flex justify-content-between">
        <a href="#/register" class="btn register">註冊</a>
        <button class="btn logIn">登入</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    }
  },
  methods: {
    async login() {
      const { email, password } = this

      console.log(email, password)

      try {
        const response = await axios.post(
          'https://pet-back.onrender.com/users/sign_in',
          {
            email,
            password,
          },
        )

        this.email = ''
        this.password = ''

        alert('登入成功！')
        console.log(response.data)
      } catch (error) {
        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message
        } else {
          this.errorMessage = '登入時發生錯誤，請稍後再試！'
        }
        alert('登入失敗：' + this.errorMessage)
        console.error('Error:', error)
      }
    },
  },
}
</script>

<style>
.signIn h1 {
  font-size: 24px !important;
  font-weight: bold !important;
}

.signIn {
  position: absolute;
  top: 55%;
  right: 15%;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 10px;
}

@media (max-width: 500px) {
  .signIn {
    top: 80%;
  }
}

.signIn .email,
.signIn .password {
  width: 300px;
  height: 40px;
  border: 0px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.signIn .register {
  background-color: #ef8d6a !important;
  color: white !important;
  width: 105px;
  height: 40px;
}

.signIn .logIn {
  background-color: #ac2c2c !important;
  color: white !important;
  width: 105px;
  height: 40px;
}
</style>
