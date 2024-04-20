<template>
  <Navbar :goToCheckout="goToCheckout" />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import Navbar from "./components/Navbar";
import Ecommerce from "@ecwid/sdk";

const ecommerce = new Ecommerce({
  storeId: 101560752,
  storeLocationPath: "/store",
});

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    goToCheckout() {
      ecommerce.cart.goToCheckout("/store/");
    },
  },
};
</script>
