<template>
  <div>
    <el-button @click="goEdit">编辑</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    goEdit() {
      this.$router.push({
        name: 'editor',
        params: { id: 1 }
      });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
