<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    const response = await axios.post('http://lifestealer86.ru/api-shop/login', {
      email: email.value,
      password: password.value,
    })

    if (response.status == 200) {
      localStorage.setItem('auth_token', response.data.data.user_token)

      email.value = ''
      password.value = ''
    }
  } catch (error) {
    const errorData = error.response.data

    if (errorData.errors) {
      console.log(errorData.errors)
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <h1>Вход в аккаунт</h1>

    <form
      @submit.prevent="login"
      class="flex flex-col max-w-[30vw] w-full bg-white p-[24px] rounded-md"
      action=""
    >
      <p>Почта</p>
      <input
        class="bg-white border-1 border-neutral-500 rounded-md w-full p-[8px]"
        required
        type="email"
        v-model="email"
      />

      <div class="flex justify-between items-center mb-[8px]">
        <h1>Пароль</h1>
        <button class="text-neutral-400 hover:text-blue-400 hover:cursor-pointer">
          Забыли пароль?
        </button>
      </div>

      <input
        class="bg-white border-1 border-neutral-500 rounded-md w-full p-[8px]"
        required
        type="password"
        v-model="password"
      />

      <button
        class="bg-blue-400 text-white rounded-md p-[8px] mt-[48px] hover:cursor-pointer hover:bg-blue-300 transition-colors mb-[12px]"
        type="submit"
      >
        Войти
      </button>

      <div class="flex justify-center gap-1.5">
        <p class="text-neutral-400">Нет аккаунта?</p>
        <button class="text-neutral-400 hover:text-blue-400 hover:cursor-pointer">
          Зарегистрироваться
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 69px);
}

h1 {
  margin-bottom: 4px;
}

input:not(last-child) {
  margin-bottom: 12px;
}
</style>
