<script setup>
import Item from './item.vue'

const addToCart = () => {
  alert('add')
}
</script>


<template>
  <h1 class="mb-[48px] text-[2rem] text-neutral-950 text-center"> Каталог товаров </h1>
  <div class="item-list">
    <Item productName="Телефон_1" imageUrl="product-images/phone_1.jpg" :productPrice="14999" :addToCart="addToCart" />
    <Item productName="Телефон_2" imageUrl="product-images/phone_2.jpg" :productPrice="38999"/>
    <Item productName="Телефон_3" imageUrl="product-images/phone_3.jpg" :productPrice="21399"/>
    <Item productName="Телефон_4" imageUrl="product-images/phone_4.jpg" :productPrice="25000"/>
    <Item productName="Телефон_5" imageUrl="product-images/phone_5.jpg" :productPrice="38999"/>
    <Item productName="Телефон_1" imageUrl="product-images/phone_1.jpg" :productPrice="14999"/>
    <Item productName="Телефон_2" imageUrl="product-images/phone_2.jpg" :productPrice="38999"/>
    <Item productName="Телефон_3" imageUrl="product-images/phone_3.jpg" :productPrice="21399"/>
    <Item productName="Телефон_4" imageUrl="product-images/phone_4.jpg" :productPrice="25000"/>
    <Item productName="Телефон_5" imageUrl="product-images/phone_5.jpg" :productPrice="38999"/>
    <Item productName="Телефон_1" imageUrl="product-images/phone_1.jpg" :productPrice="14999"/>
    <Item productName="Телефон_2" imageUrl="product-images/phone_2.jpg" :productPrice="38999"/>
    <Item productName="Телефон_3" imageUrl="product-images/phone_3.jpg" :productPrice="21399"/>
    <Item productName="Телефон_4" imageUrl="product-images/phone_4.jpg" :productPrice="25000"/>
    <Item productName="Телефон_5" imageUrl="product-images/phone_5.jpg" :productPrice="38999"/>
  </div>
</template>

<style scoped>
  .item-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 98px 24px;

    max-width: 55vw;
    margin: auto;
    margin-bottom: 128px;
  }

</style>
