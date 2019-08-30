<template>
  <div id="app">
    <router-view />
    <div class="right">
      <router-link
        v-for="item in this.$router.options.routes"
        :key="item.path"
        :to="item.path"
      >{{item.meta.LinkName}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    // console.log(this.$router)
  }
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: space-between;
  .right {
    width: 10%;
    display: flex;
    flex-direction: column;
    .router-link-exact-active {
      background: #f8f8f8;
      color: #3F51B5;
    }
    a {
      color: #000;
    }
  }

  .wrap {
    width: 90%;
  }
}

.wrap,
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
