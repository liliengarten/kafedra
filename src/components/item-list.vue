<script setup>
import Item from './item.vue'

defineProps({
  Items: Array
})

</script>

<template>
  <div class="my-[96px]">
    <h1 class="mb-[48px] text-[2rem] text-neutral-950 text-center">Каталог товаров</h1>
    <div class="item-list">
      <Item
        v-for="item in Items"
        :key="item.id"
        :productName="item.name"
        :imageUrl="item.image"
        :productPrice="item.price"
      />
    </div>
  </div>
</template>

<style scoped>
.item-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  max-width: 60vw;
  margin-inline: auto;
}
</style>
