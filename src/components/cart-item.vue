<script setup>
defineProps({
  productName: String,
  productPrice: Number,
  imageUrl: String,
})
</script>

<template>
  <div class="flex gap-[24px] items-center border-2 border-neutral-200  rounded-md
  w-full max-h-[100px] p-[4px]">

    <div>
      <img class="object-cover w-full max-h-[90px]" :src="imageUrl" alt="Product image" />
    </div>

    <div class="flex flex-col gap-[18px] h-[80px]">
      <div class="flex justify-between items-center w-[220px]">
        <h2> {{ productName }} </h2>

        <button class="hover:cursor-pointer hover:opacity-50 transition-opacity">
          <i class="fa fa-trash-alt"></i>
        </button>
      </div>

      <div>
        <div class="flex gap-[12px] items-center">
          <button class="hover: cursor-pointer hover:opacity-50 transition-opacity"> <i class="fa fa-minus"></i> </button>
          <p> 1 </p>
          <button class="hover: cursor-pointer hover:opacity-50 transition-opacity"> <i class="fa fa-plus"></i> </button>
        </div>

        <p> {{ productPrice }} </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
