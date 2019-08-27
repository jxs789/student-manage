<template>
  <div id="app">
    <router-link to="/visual"></router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app,body,html{
    width: 100%;
    height: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
color: #2c3e50;
}
</style>
