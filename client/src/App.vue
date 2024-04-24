<template>
  <Navbar />
  <div class="container">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
.ec-footer {
  display: none;
}
.container {
  width: 100%;
  height: 100%;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
}
</style>
