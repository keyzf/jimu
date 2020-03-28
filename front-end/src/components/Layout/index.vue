<template>
  <section class="app-main">
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  components: { }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
}
</style>
