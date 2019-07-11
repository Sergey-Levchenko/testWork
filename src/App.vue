<template>
  <div id="app">
    <div class="container">
      <el-main :style="{maxWidth:'1000px'}">
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("loadTable");
  }
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  display: flex;
  justify-content: center;
}
</style>
