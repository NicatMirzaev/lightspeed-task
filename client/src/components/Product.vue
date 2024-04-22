<template>
  <div class="product-container">
    <div class="a-card product-card">
      <img class="product-image" :src="imageUrl" />
      <div class="product-body">
        <h5 class="text-center">
          {{ title }}
        </h5>
        <div class="text-default text-center muted">${{ price }}</div>
      </div>
      <button class="btn btn-primary buy-now-button">Buy now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-item",
  props: {
    imageUrl: String,
    title: String,
    price: Number,
  },
};
</script>
<style>
.product-image {
  object-fit: cover;
  width: 100% !important;
  height: auto !important;
  margin-bottom: 5px !important;
}
.product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: none;
}
.product-container {
  display: flex;
  flex-direction: column;
  width: 200px;
  cursor: pointer;
  box-shadow:
    0 1px 4px -1px rgba(15, 17, 22, 0.1),
    0 0 0 rgba(0, 0, 0, 0.08) inset !important;
}
.product-container * {
  min-height: auto !important;
}
.product-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
}
.text-center {
  text-align: center;
}
.buy-now-button {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
