<template>
  <div id="app">
    <div class="header">
      <h1 class="project-name">Vue-FullscreenLoading</h1>
      <h2 class="project-desc">A lightweight fullscreen loading effect for vue</h2>
    </div>
    <button @click="click">ShowLoadingUIAuto</button>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  },

  methods: {
    click() {
      let loadingui = this.$loadingui({
        type: 'default',
        callback: () =>{
          // eslint-disable-next-line no-console
          console.log("finish")
        },
      })
      let percent = 0
      let obj = setInterval(()=>{
        percent += 2
        loadingui.loadPercent = percent
        if (percent >= 100) {
          loadingui.close()
          clearInterval(obj)
        }
      }, 50)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

  .header {
    color: #fff;
    text-align: center;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);

    padding: 5rem 6rem;
  }

  .project-name {
    font-size: 3.25rem;
    margin-top: 0;
    margin-bottom: 0.1rem;
  }

  .project-desc {
    margin-bottom: 2rem;
    font-weight: normal;
    opacity: 0.7;
  }
</style>
