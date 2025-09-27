<script setup>
import ItemCard from './Item-card.vue'
</script>

<template>
  <h1 class="mb-[24px] text-[2rem] text-neutral-950"> Каталог товаров </h1>

  <div class="item-list">
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard>
  </div>
</template>

<style scoped>
  .item-list {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 24px;
  }

</style>
