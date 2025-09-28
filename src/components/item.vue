<script setup>
defineProps({
  productName: String,
  imageUrl: String,
  productPrice: Number,
  isAdded: Boolean,
  addToCart: Function,
})
</script>

<template>
  <div class="flex flex-col">
    <div class="bg-white h-full rounded-t-md">
      <img class="object-cover w-full min-h-[160px]" :src="imageUrl" alt="Product image" />
    </div>

    <div class="flex flex-col justify-between min-h-[150px] bg-neutral-100 rounded-b-md p-[12px]">
      <div>
        <p class="text-center text-[1.2rem]">{{ productName }}</p>
        <p class="text-center text-[1rem] text-neutral-500 mb-[8px]">{{ productPrice }}</p>
      </div>

      <button
        @click="addToCart"
        class="bg-blue-400 text-white rounded-md p-[8px] hover:cursor-pointer hover:bg-blue-300 transition-colors">
        <p>Добавить в корзину</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
