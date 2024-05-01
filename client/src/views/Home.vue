<template>
  <div class="landing">
    <h1>Welcome to Lightspeed Test Task!</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s
    </p>
    <button class="btn btn-primary" @click="goStore">Browse store</button>
  </div>
</template>

<script>
export default {
  name: "home-view",
  methods: {
    goStore() {
      this.$router.push("/store");
    },
  },
};
</script>

<style>
.landing {
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.landing p {
  color: #9f9f9f;
}
</style>
