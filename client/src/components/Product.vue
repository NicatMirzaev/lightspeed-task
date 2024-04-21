<template>
  <div class="product-container">
    <div class="a-card">
      <div class="product-thumbnail product-thumbnail--large">
        <div
          class="gwt-Label product-placeholder colored-background-6"
          style="display: none"
        ></div>
        <img class="product-thumbnail__image" :src="imageUrl" />
      </div>
      <div class="product-body">
        <h5 class="text-center">{{ title }}</h5>
        <div class="text-default text-center muted">{{ price }}</div>
        <button class="btn btn-primary">Buy now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-item",
  props: {
    imageUrl: String,
    title: String,
    price: String,
  },
};
</script>
<style>
.product-thumbnail.product-thumbnail--large {
  width: 191px;
  height: 200px;
}
.product-container {
  width: 200px;
  cursor: pointer;
}
.product-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.text-center {
  text-align: center;
}
</style>
