<template>
  <div class="settings">
    <Feature />
    <Export />
  </div>
</template>

<script>
import Feature from "../components/Feature";
import Export from "../components/Export";

export default {
  name: "settings-view",
  components: {
    Feature,
    Export,
  },
};
</script>
