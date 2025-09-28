<script setup>
import cartItem from './cart-item.vue'

defineProps({
  cartClose: Function
})

</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 z-1 bg-black opacity-50">
  </div>

  <div class="fixed top-0 bottom-0 right-0 w-[400px] bg-white z-1 p-[24px]
  flex flex-col justify-between">
    <div class="flex items-center gap-[120px]">
      <button @click = "cartClose" class="hover:cursor-pointer hover:opacity-50 transition-opacity">
        <i class="fa fa-arrow-left"></i>
      </button>

      <h1 class="text-center text-2xl"> Коризна </h1>
    </div>

    <div class="flex flex-col items-center max-h-[680px] gap-[12px] overflow-y-scroll">
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>
      <cartItem productName="Phone" imageUrl="product-images/phone_5.jpg" :productPrice="25000"/>

    </div>

    <div class="flex flex-col">
      <p class="font-medium mb-[24px]"> Итого: 123456$ </p>
      <button class="bg-blue-400 rounded-md p-[12px] text-white hover:bg-blue-300 cursor-pointer transition-colors">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
