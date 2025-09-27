<template>
  <header class="bg-white h-[69px] shadow-md">
    <div class="flex justify-between items-center mx-auto max-w-[70vw] h-full">
      <div>
        <img class="object-cover w-full max-h-[58px]" src="/logo.svg" alt="logo" />
      </div>

      <nav class="flex gap-[24px]">
        <a href="/" class="flex gap-[14px] items-center">
          <img src="/shopping-bag.svg" alt="" class="w-[32px]" />
          <p>Каталог</p>
        </a>

        <a href="/" class="flex gap-[14px] items-center">
          <img src="/public/cart.svg" alt="" class="w-[32px]" />
          <p>Корзина</p>
        </a>

        <a href="/" class="flex gap-[14px] items-center">
          <img src="/user.svg" alt="" class="w-[36px]" />
          <p>Профиль</p>
        </a>
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
