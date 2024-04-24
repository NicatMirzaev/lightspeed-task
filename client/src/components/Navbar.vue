<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">lightspeed</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li>
        <span
          @click="goToStore"
          :class="{ 'active-link': $route.path === '/store' }"
          >Store</span
        >
      </li>
      <li>
        <span
          @click="goToAccount"
          :class="{ 'active-link': $route.path === '/store/account' }"
          >Account</span
        >
      </li>
      <div
        data-layout="SMALL_ICON_COUNTER"
        class="ec-cart-widget"
        @click="goToCheckout"
      ></div>
    </ul>
  </nav>
</template>

<script>
import Ecommerce from "@ecwid/sdk";

const ecommerce = new Ecommerce({
  storeId: 101560752,
  storeLocationPath: "/store",
});

console.log(ecommerce);

export default {
  name: "navbar-item",
  methods: {
    goToCheckout() {
      ecommerce.cart.goToCheckout("/store/");
    },
    goToAccount() {
      if (window.Ecwid) {
        window.Ecwid.openPage("account/settings");
      }
      this.$router.push("/store/account");
    },
    goToStore() {
      if (window.Ecwid) {
        window.Ecwid.openPage("category", { id: 0 });
      }
      this.$router.push("/store");
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.logo {
  font-size: 1.5rem;
}
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
.nav-links li {
  margin-right: 0.3rem;
}
.nav-links li:last-child {
  margin-right: 0;
}
.nav-links > li > span {
  display: inline-block;
  padding: 0 1.1em 0;
  color: #0a1c2e;
  font-size: 0.875em;
  line-height: 1.36em;
  text-decoration: none;
  transition:
    color 0.1s linear,
    border-color 0.1s linear;
}
.nav-links > li > span:hover {
  color: #1b409d;
}
.active-link {
  color: #1b409d !important;
}
</style>
