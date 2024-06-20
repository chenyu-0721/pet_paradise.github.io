<template>
  <section class="register1">
    <h1 class="text-center">註冊</h1>
    <div class="d-flex flex-column">
      <input class="email" type="email" v-model="email" placeholder="example@gmail.com" required />
      <input class="password" type="password" v-model="password" placeholder="password" required />
      <input class="confirmPassword" type="password" v-model="confirmPassword" placeholder="confirm password" required />
      <div class="mg-auto">
        <button class="btn register" @click="register">註冊</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      const { email, password, confirmPassword } = this;

      if (password !== confirmPassword) {
        this.errorMessage = '密碼不一致！';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        alert('註冊失敗：' + this.errorMessage);
        return;
      }
      
      console.log(email,
          password,
          confirmPassword);
      try {
        const response = await axios.post('https://pet-back.onrender.com/users/sign_up', {
          email,
          password,
          confirmPassword
        });

        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        console.log(response.data);
        alert('註冊成功！請使用新帳號登入。');
        this.$router.push('/sign'); 

      } catch (error) {
        if (error.response && error.response.data) {
          const regex = /<h1>(.*?)<\/h1>/;
          const match = error.response.data.match(regex);
          if (match) {
            this.errorMessage = match[1];
          }
        } else {
          this.errorMessage = '註冊時發生錯誤，請稍後再試！';
        }
        alert('註冊失敗：' + this.errorMessage);
        console.error('Error:', error);
      }
      
    }
  }
};
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
