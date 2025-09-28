<script setup>
import { onMounted, provide, ref } from 'vue'
import axios from 'axios'

import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
const userToken = ref('')
const userState = ref(false)
const cartState = ref(false)
const items = ref([])

const cartOpen = () => {
  cartState.value = true
}

const cartClose = () => {
  cartState.value = false
}

provide('items', items)
provide('cartState', cartState)
provide('cartClose', cartClose)
provide('userState', userState)

console.log(userToken)

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
