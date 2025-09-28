<script setup>
import { onMounted, provide, ref } from 'vue'
import axios from 'axios'

import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
const userToken = ref('')
const userState = ref(false)
const cartState = ref(false)
const items = ref([])

provide('items', items)

const cartOpen = () => {
  cartState.value = true
}

const cartClose = () => {
  cartState.value = false
}

onMounted(async () => {
  try {
    const { data } = await axios.get('http://lifestealer86.ru/api-shop/products')
    userToken.value = localStorage.getItem('auth_token')

    items.value = data

    if (userToken.value) {
      userState.value = true
    } else {
      userState.value = false
    }
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <Header :cartOpen="cartOpen" /> />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
