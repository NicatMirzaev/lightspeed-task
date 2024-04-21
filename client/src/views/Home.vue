<template>
  <Product
    imageUrl="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
    title="SAMPLE. Pink Hoodie + Shorts Set"
    price="$44.95"
  />
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  name: "home-view",
  components: {
    Product,
  },
};
</script>
