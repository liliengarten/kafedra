<script setup>
import cartItem from './cart-item.vue'
</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 z-1 bg-black opacity-50">
  </div>

  <div class="fixed top-0 bottom-0 right-0 w-[400px] bg-white z-1 p-[48px]
  flex flex-col justify-between">
    <h1 class="text-center text-2xl"> Коризна </h1>

    <div class="flex flex-col items-center gap-[12px]">
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
    </div>

    <div class="flex flex-col">
      <p> Итого: 123456$ </p>
      <button class="bg-blue-400 rounded-md p-[12px] text-white hover:bg-blue-300 cursor-pointer transition-colors">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
