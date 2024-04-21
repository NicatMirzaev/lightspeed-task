<template>
  <div class="grid-container">
    <Product
      v-for="product in products"
      :key="product.id"
      :imageUrl="product.originalImage.url"
      :title="product.name"
      :price="product.price"
    />
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "products-item",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch("http://localhost:3000/api/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.products = data.items;
        })
        .catch((error) => {
          console.error("Error fetching products", error);
          this.products = [];
        });
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
