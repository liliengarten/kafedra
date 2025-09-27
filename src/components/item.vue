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
  <div class="item-card">
    <div class="item-picture">
      <img :src="imageUrl" alt="Product image" />
    </div>

    <div class="item-card-description">
      <p class="item-name">{{ productName }}</p>
      <p class="text-[0.75rem] text-neutral-500 mb-[8px]">{{ productPrice }}</p>

      <button @click="addToCart" class="bg-blue-400 text-white text-[1.2 rem] rounded-md p-[12px] hover:cursor-pointer hover:bg-blue-300 transition-colors">
        {{ isAdded ? '-' : '+' }}
      </button>
    </div>

  </div>
</template>

<style scoped>
.item-card {
  max-width: 200px;
  max-height: 200px;

  height: 100%;
  width: 100%;

  filter: drop-shadow(0px 0px 6px hsl(0, 0%, 50%));
  transition:
    transform 1s,
    filter 1s;
}

.item-card:hover {
  transform: translate(0px, -5px);
  filter: drop-shadow(0px 0px 12px hsl(0, 0%, 50%));

  cursor: pointer;
}

.item-picture {
  height: 160px;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: white;
}

.item-picture img {
  object-fit: cover;
  width: 100%;
  max-height: 140px;
}

.item-name {
  font-size: 1.3rem;
  color: hsl(0, 0%, 5%);

  transition: color 0.3s;
}

.item-card-description {
  text-align: center;
  height: 120px;
  background-color: hsl(0, 0%, 95%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  padding-top: 2%;
  padding-bottom: 4%;
}
</style>
