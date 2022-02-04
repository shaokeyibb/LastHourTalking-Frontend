<template class="all">
  <div class="top-bar" @click="this.$router.push('/')">
    <NGradientText :size=48 type="success">LastHourTalking</NGradientText>
    <br/>
    <NGradientText :size=24 type="warning">You can only talk to people from the last hour...</NGradientText>
    <NDivider/>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html, body {
  margin: 0;
  height: 100%;
}

.top-bar {
  position: sticky;
}
</style>
