<template>
  <div class="home">
    <div class="button" id="find">
      <NButton size="large" @click="this.$router.push('/find')">Find a talking</NButton>
    </div>
    <div class="button" id="new">
      <NButton size="large" @click="this.$router.push('/new')">Create a talking</NButton>
    </div>
    <div class="button" id="about">
      <NButton size="large" @click="this.$router.push('/about')">About this site</NButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home {
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: row;
}

.button {
  height: 50%;
  width: 100%;
  align-self: center;
}
</style>