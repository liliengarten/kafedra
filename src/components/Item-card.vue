<template>
  <div class="item-card">
    <img class="item-picture" src="/product.png" alt="Item picture" />

    <div class="item-card-description">
      <p class="item-name">Jacket</p>
      <p class="text-[0.75rem] text-neutral-500">5673$</p>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  max-width: 90%;
  max-height: 90%;
  filter: drop-shadow(0px 0px 6px hsl(0, 0%, 50%));
  transition: transform 1s, filter 1s;
}

.item-card:hover {
  transform: translate(0px, -5px);
  filter: drop-shadow(0px 0px 12px hsl(0, 0%, 50%));

  cursor: pointer;

  .item-name {
    color: hsl(210, 70%, 70%);
  }
}

.item-picture {
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: hsl(0, 0%, 90%);
}

.item-name {
  font-size: 1.3rem;
  color: hsl(0, 0%, 5%);

  transition: color 0.3s;
}

.item-card-description {
  display: grid;
  text-align: center;

  background-color: hsl(0, 0%, 95%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  padding-top: 2%;
  padding-bottom: 4%;
}

</style>
