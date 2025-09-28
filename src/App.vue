<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import Header from './components/header.vue'
import ItemList from './components/item-list.vue'
import Cart from './components/cart.vue'
import Register from './components/register.vue'
import Login from './components/login.vue'
import Footer from '@/components/footer.vue'

const items = ref([])

const cartState = ref(false)

const cartOpen = () => {
  cartState.value = true
}

const cartClose = () => {
  cartState.value = false
}

onMounted(async () => {
  try {
    const { data } = await axios.get('http://lifestealer86.ru/api-shop/products')

    items.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <Header :cartOpen="cartOpen" />
<!--  <Register />-->
  <Login />
<!--  <ItemList :Items="items.data" />-->
  <Cart v-if="cartState" :cartClose="cartClose" />
  <Footer />
</template>

<style scoped></style>
