<script setup>
import { inject } from 'vue'

import ItemList from '@/components/item-list.vue'
import Cart from '@/components/cart.vue'

const items = inject('items')
const cartState = inject('cartState')
const cartClose = inject('cartClose')

</script>

<template>
    <ItemList :Items="items.data"/>
    <Cart v-if="cartState" :cartClose="cartClose" />
</template>

<style scoped></style>
