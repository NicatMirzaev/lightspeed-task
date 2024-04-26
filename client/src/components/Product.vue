<template>
  <div class="product-container" @click="redirectToProduct">
    <div class="a-card product-card">
      <img class="product-image" :src="imageUrl" />
      <div class="product-body">
        <h5 class="text-center">
          {{ title }}
        </h5>
        <div class="text-default text-center muted">${{ price }}</div>
      </div>
      <button class="btn btn-primary buy-now-button" @click.stop="addToCart">
        Buy now
      </button>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toast-notification";

export default {
  name: "product-item",
  props: {
    id: Number,
    imageUrl: String,
    title: String,
    price: Number,
  },
  methods: {
    redirectToProduct() {
      window.Ecwid?.openPage("product", { id: this.id });
    },
    addToCart() {
      window.Ecwid?.Cart.addProduct(
        this.id,
        function (success, product, cart, error) {
          const $toast = useToast();
          if (success) {
            $toast.success("Product added to cart", { position: "top-right" });
          } else {
            $toast.error(error, { position: "top-right" });
          }
        },
      );
    },
  },
};
</script>
<style>
.product-image {
  object-fit: cover;
  width: 100%;
  height: auto;
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
