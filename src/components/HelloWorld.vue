<template>
  <div class="hello">
    <div class="scrollContent">
      <section id="titlechart">
        <div id="description">
          <h1>Simple Pinning</h1>
          <h2>Two examples of basic pinning.</h2>
          <ol>
            <li>A pin of a scene that has a duration will be pinned for the respective ammount of scrolled pixels and then released again.</li>
            <li>If no duration is defined, the pinned element will never be released unless scrolling back past the trigger position.</li>
          </ol>
          <p>
            Note that the first pin pushes down the following elements. A gap with the size of the scene's duration appears.<br>
            This can be disabled using the option <code>pushFollowers: false</code>. For scenes with a duration of 0 "<code>pushFollowers</code>" is always disabled.
          </p>
          <p>
            For more information check out the documentation on <a href="../../docs/ScrollMagic.Scene.html#setPin">Scene.setPin()</a>.
          </p>
          <a href="#" class="viewsource">view source</a>
        </div>
      </section>
      <section class="demo">
        <div class="spacer s2"></div>
        <div id="trigger1" class="spacer s0"></div>
        <div id="pin1" class="box2 blue">
          <p>Stay where you are (at least for a while).</p>
          <a href="#" class="viewsource">view source</a>
        </div>
        <div class="spacer s2"></div>
      </section>
      <section class="demo">
        <div class="spacer s2"></div>
        <div id="trigger2" class="spacer s0"></div>
        <div id="pin2" class="box2 blue">
          <p>Take me with you!</p>
          <a href="#" class="viewsource">view source</a>
        </div>
        <div class="spacer s2"></div>
      </section>			
      <div class="spacer s_viewport"></div>
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
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
                    .setPin("#pin1")
                    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#pin2"})
                    .setPin("#pin2")
                    .addTo(controller);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  z-index: 100;
  background-color: white;
}
.scrollContent {
  height: 5000px;
}
</style>
