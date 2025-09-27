<script setup>
defineProps({
  productName: String,
  productPrice: Number,
  imageUrl: String,
})
</script>

<template>
  <div class="flex gap-[24px] items-center justify-between border-2 border-amber-600 rounded-md
     max-w-[300px] w-full max-h-[120px] p-[8px]">

    <div>
      <img class="object-cover w-full max-h-[110px]" :src="imageUrl" alt="Product image" />
    </div>

    <div class="flex flex-col justify-between h-full p-[12px]">
      <div class="flex justify-between items-center">
        <h2 class="self-start"> {{ productName }} </h2>
        <p> x </p>
      </div>

      <div class="flex gap-[24px] items-center">
        <button class="py-[4px] px-[12px] bg-amber-500 rounded-md"> + / - </button>

        <p>{{ productPrice }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
