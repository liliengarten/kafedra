<script setup>
import Login from '@/components/login.vue'
import Register from '@/components/register.vue'
import { inject, ref } from 'vue'

const userState = inject('userState')

const login_register = ref(false)

const log_reg_switch = () => {
  login_register.value = !login_register.value
}

</script>

<template>
  <Register v-if="login_register" :Switch="log_reg_switch" />
  <Login v-if="!login_register" :Switch="log_reg_switch" />
</template>

<style scoped></style>
