<script setup>
import Login from '@/components/login.vue'
import Register from '@/components/register.vue'
import { ref } from 'vue'

const userState = ref(false)

</script>

<template>
  <Register v-if="userState" :profileOpen/>
  <Login/>
</template>

<style scoped></style>
