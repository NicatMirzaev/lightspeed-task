<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">lightspeed</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/store">Store</router-link></li>
      <div
        data-layout="SMALL_ICON_COUNTER"
        class="ec-cart-widget"
        @click="goToCheckout"
      ></div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar-item",
  props: {
    goToCheckout: {
      type: Function,
      required: true,
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
  margin-bottom: 30px;
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
.nav-links a {
  text-decoration: none;
  color: #333;
}
</style>
