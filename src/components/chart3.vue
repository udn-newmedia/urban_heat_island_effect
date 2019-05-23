<template>
  <div class="chart3">

  </div>
</template>

<script>
import ScrollMagic from 'scrollmagic'
import { setTimeout } from 'timers';
import myMixin from '../mixin/myMixin.js'

export default {
  name: 'chart3',
  data () {
    return {

    }
  },
  props: {
    msg: String
  },
  mixins: [myMixin],
  mounted () {

    let vm = this

    // window.addEventListener('scroll', this.handleScroll)

    // var controller = new ScrollMagic.Controller();
    // var scene1 = new ScrollMagic.Scene({triggerElement: "#chart-background", duration: '600%', triggerHook: 'onLeave'})
    //                 .setPin("#chart-background", {pushFollowers: false})
    //                 .addTo(controller);

    
  },
  methods: {
    handleScroll () {

    }
  },
  computed: {
    lineOne () {

    },
    lineTwo () {

    },
    groupTwo () {

    },
    groupFive () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart3 {
  z-index: 100;
  background-color: white;
}

</style>