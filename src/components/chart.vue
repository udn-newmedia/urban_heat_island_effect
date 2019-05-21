<template>
  <div class="chart">
    <div class="scrollContent">
      <section  id="pin1" class="chart-background">
        <img src="../../public/images/heat_island_chart2.svg" alt="">
      </section>
      <div class="section section1">
          <div class="section-content">
              <h1>hello1</h1>
          </div>
      </div>
      <div class="section section1">
        <h1>hello1</h1>
      </div>
      <div class="section section1">
        <h1>hello1</h1>
      </div>
      <div class="section section1">
        <h1>hello1</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollMagic from 'scrollmagic'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    // var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // var controller = new ScrollMagic.Controller();
    // var scene1 = new ScrollMagic.Scene({triggerElement: "#pin1", duration: 4*h, triggerHook: 0})
    //                 .setPin("#pin1")
    //                 .addTo(controller);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart {
  z-index: 100;
  background-color: white;
  .scrollContent {
    height: 500vh;
  }
  .chart-background {
      width: 100%;
      border: solid 1px red;
      height: 100vh;
      position: fixed;
      top: 0;
      z-index: 0;
  }
  .section {  
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .section-content {
        position: absolute;
        z-index: 10;
      }
  }
}

</style>