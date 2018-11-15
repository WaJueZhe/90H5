<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './assets/styles/mixins.styl';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
	height: 100%;

  &.{
    position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
  }
}

.icon {
  display: inline-block;
  vertical-align: middle;
}

._v-container>._v-content>.loading-layer>.no-data-text {
  font-size: px2rem(28px);
}
</style>
