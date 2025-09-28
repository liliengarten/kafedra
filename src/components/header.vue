<script setup>
defineProps({
  cartOpen: Function
})

</script>

<template>
  <header class="bg-white h-[69px] shadow-md">
    <div class="flex justify-between items-center mx-auto max-w-[70vw] h-full">
      <router-link to="/">
        <img class="object-cover w-full max-h-[58px]" src="/logo.svg" alt="logo" />
      </router-link>

      <nav class="flex gap-[24px]">
        <button @click="cartOpen"  class="flex gap-[14px] items-center hover:cursor-pointer hover:opacity-50 transition-opacity">
          <img src="/public/cart.svg" alt="" class="w-[32px]" />
          <p>Корзина</p>
        </button>

        <button class="flex gap-[14px] items-center hover:cursor-pointer hover:opacity-50 transition-opacity">
          <img src="/user.svg" alt="" class="w-[36px]" />
          <RouterLink to="/profile"> Профиль </RouterLink>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
}

a {
  transition: color 0.3s;
}

a:hover {
  color: hsl(210, 70%, 70%);
}
</style>
<script setup lang="ts">
</script>
