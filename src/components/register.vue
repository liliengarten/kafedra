<script setup>
import { ref } from 'vue'
import axios from 'axios'

const fio = ref('')
const email = ref('')
const password = ref('')

const register = async () => {
  try {
    const response = await axios.post('http://lifestealer86.ru/api-shop/signup', {
      fio: fio.value,
      email: email.value,
      password: password.value,
    })

    if (response.status == 200) {
      localStorage.setItem('auth_token', response.data.data.user_token)

      fio.value = ''
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
    <h1>Регистрация</h1>

    <form
      @submit.prevent="register"
      class="flex flex-col max-w-[30vw] w-full bg-white p-[24px] rounded-md"
    >
      <h1>Фамилия Имя Отчество</h1>
      <input
        class="bg-white border-1 border-neutral-500 rounded-md w-full p-[8px]"
        required
        type="text"
        v-model="fio"
      />
      <h1>Почта</h1>
      <input
        class="bg-white border-1 border-neutral-500 rounded-md w-full p-[8px]"
        required
        type="email"
        v-model="email"
      />
      <h1>Пароль</h1>
      <input
        class="bg-white border-1 border-neutral-500 rounded-md w-full p-[8px]"
        required
        type="password"
        v-model="password"
      />

      <button
        class="bg-blue-400 text-white rounded-md p-[8px] mt-[48px] mb-[12px] hover:cursor-pointer hover:bg-blue-300 transition-colors"
        type="submit"
      >
        Зарегистрироваться
      </button>

      <div class="flex justify-center gap-1.5">
        <p class="text-neutral-400">Уже есть аккаунт?</p>
        <button class="text-neutral-400 hover:text-blue-400 hover:cursor-pointer">Войти</button>
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
