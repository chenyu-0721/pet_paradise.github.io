<template>
  <section class="register1">
    <h1 class="text-center">註冊</h1>
    <div class="d-flex flex-column">
      <input
        class="email"
        type="email"
        v-model="email"
        placeholder="example@gmail.com"
        required
      />
      <input
        class="password"
        type="password"
        v-model="password"
        placeholder="password"
        required
      />
      <input
        class="confirmPassword"
        type="password"
        v-model="confirmPassword"
        placeholder="confirm password"
        required
      />
      <div class="mg-auto">
        <button class="btn register" @click="register">註冊</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const errorMessage = ref('')
    const router = useRouter()

    const register = async () => {
      // console.log(email.value, password.value, confirmPassword.value)
      try {
        const response = await axios.post(
          'https://pet-back.onrender.com/users/sign_up',
          {
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
          },
        )

        email.value = ''
        password.value = ''
        confirmPassword.value = ''
        console.log(response.data)
        alert('註冊成功！請使用新帳號登入。')
        router.push('/sign')
      } catch (error) {
        if (error.response && error.response.data) {
          const regex = /<h1>(.*?)<\/h1>/
          const match = error.response.data.match(regex)
          if (match) {
            errorMessage.value = match[1]
          }
        } else {
          errorMessage.value = '註冊時發生錯誤，請稍後再試！'
        }
        alert('註冊失敗：' + errorMessage.value)
        password.value = ''
        confirmPassword.value = ''
        // console.log('Error:', error)
      }
    }

    return {
      email,
      password,
      confirmPassword,
      errorMessage,
      register,
    }
  },
}
</script>

<style scoped>
.register1 h1 {
  font-size: 24px;
  font-weight: bold;
}

.register1 {
  position: absolute;
  top: 55%;
  right: 15%;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 10px;
}

@media (max-width: 500px) {
  .register1 {
    top: 80%;
  }
}

.register1 .email,
.register1 .password,
.register1 .confirmPassword {
  width: 300px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  margin-bottom: 16px;
}

.register1 .register {
  background-color: #ef8d6a;
  color: white;
  width: 100%;
  height: 40px;
}

.register1 .logIn {
  background-color: #ac2c2c;
  color: white;
  width: 105px;
  height: 40px;
}
</style>
