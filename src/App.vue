<script setup>
  import HeaderStickyTop from './components/Header-sticky-top.vue';
  import ItemList from './components/Item-list.vue';
  import FooterBottom from '@/components/footer-bottom.vue'
</script>

<template>
  <HeaderStickyTop></HeaderStickyTop>

  <div class="max-w-[960px] mx-auto my-15">
    <ItemList></ItemList>
  </div>

  <footer-bottom></footer-bottom>
</template>

<style scoped>
</style>
