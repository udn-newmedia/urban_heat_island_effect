<template>
  <div id="app">
    <div class="cover">
      <div class="cover-section cover-section1">
        <div ref="content1" class="content content1">
          <h1>Hello World1</h1>
        </div> 
      </div>
      <div class="cover-section cover-section2">
        <div ref="content2" class="content content2">
          <h1>Hello World2</h1>
        </div>
      </div>
      <div class="cover-section cover-section3">
        <div ref="content3" class="content content3">
          <h1>Hello World3</h1>
        </div>
      </div>
      <div class="cover-section cover-section4">
        <div ref="content4" class="content content4">
          <h1>Hello World4</h1>
        </div>
      </div>
      <div key="1" :class="{'cover-background-current': backgrounds[0]}" class="cover-background cover-background1">
          <video ref="video" class="video-player" width="100vw" preload="metadata" :src="videoSource1" autobuffer autoplay loop muted playsinline>
            <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="videoSource1" webkit-playsinline="true"></source>
            <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="videoSource1"></source>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="videoSource1"></source>
          </video>
      </div>
      <div key="2" :class="{'cover-background-current': backgrounds[1]}" class="cover-background cover-background2">
        <video ref="video" class="video-player" width="100vw" preload="metadata" :src="videoSource2" autobuffer autoplay loop muted playsinline>
          <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="videoSource2" webkit-playsinline="true"></source>
          <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="videoSource2"></source>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="videoSource2"></source>
        </video>
      </div>
      <div key="3" :class="{'cover-background-current': backgrounds[2]}" class="cover-background cover-background3">
          <img src="../public/images/heat_island_img1.jpg" alt="">
      </div>
      <div key="4" :class="{'cover-background-current': backgrounds[3]}" class="cover-background cover-background4">
          <img src="../public/images/heat_island_img2.jpg" alt="">
      </div>
    </div>
    <div class="contain-wrapper">
      <div class="container">
        <div class="introduction">
          <p>熱、好熱、非常熱！還不到5月，台北市已飆出攝氏35.9度高溫，高掛的太陽把路上民眾曬昏了頭，腳下的柏油路也冒著熱氣，許多民眾邊擦汗邊問：「怎麼會這麼熱？」</p>
          <br>
          <p>「熱島效應」是造成都會區溫度不斷飆升的原因之一，汽車排廢、易吸熱的柏油路、不通風的密集街區等因素，以及無法散熱的盆地地形，導致台北市政府都市發展局的數據顯示，台北都市中心溫度與郊區最低溫之溫差可達6度。</p>
          <br>
          <p>隨著熱被困在都市中無法散去，也使空氣汙染愈來愈嚴重、民眾面臨更高的健康風險，學者呼籲，各縣市政府應透過都市規劃減緩熱島效應，讓民眾擁有更舒適的生活環境。</p>
        </div>
      </div>
    </div>
    <div ref="main-title-wrapper"  :class="{'main-title-current': isMainTitle}" class="main-title-wrapper"> 
      <div ref="main-title-background" class="main-title-background">
        
      </div>
      <div  ref="main-title" class="main-title-content">
        <h1>Hello</h1>
      </div>
    </div>
    <div class="contain-wrapper">
      <div class="container">
        <div class="report-content">
          <p>在高樓櫛次鱗比的都市叢林裡，許多人為因素均造成熱島效應不斷發威，導致都市的「高燒不退」。</p>
          <br>
          <p>天氣風險管理公司總經理彭啟明指出，台北市會這麼熱，除了熱島效應外，盆地效應、太平洋高壓籠罩、溫室效應等因素也有影響。他預測，<b>未來20年內，台北市中午會經常有高達40度的高溫。</b></p>
          <br>

          <h1></h1>
          <!-- <video ref="video" class="video-player" width="100vw" preload="metadata" :src="videoSource1" autobuffer autoplay loop muted playsinline>
            <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="videoSource1" webkit-playsinline="true"></source>
            <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="videoSource1"></source>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="videoSource1"></source>
          </video> -->
          <img src="../public/images/heat_island_img4.jpg" alt="">
        </div>     
      </div>
    </div>
    <chart></chart>
    <div class="contain-wrapper">
      <div class="container">
        <div class="report-content">
          <p>在高樓櫛次鱗比的都市叢林裡，許多人為因素均造成熱島效應不斷發威，導致都市的「高燒不退」。</p>
          <br>
          <p>天氣風險管理公司總經理彭啟明指出，台北市會這麼熱，除了熱島效應外，盆地效應、太平洋高壓籠罩、溫室效應等因素也有影響。他預測，<b>未來20年內，台北市中午會經常有高達40度的高溫。</b></p>
          <br>
          <bar-chart></bar-chart>
        </div>     
      </div>
    </div>
  </div>
</template>

<script>
import giraffe from '../public/video/heat_island_v2.mp4'
import hippo from '../public/video/heat_island_v1.mp4'
import chart from './components/chart.vue'
import barChart from './components/barChart.vue'

export default {
  name: 'app',
  data () {
    return {
      videoSource1: hippo,
      videoSource2: giraffe,
      videoSource3: null,
      videoSource4: null,
      currentBackground: 0,
      backgrounds: [true, false, false , false],
      isMainTitle: false
    }
  },
  components: {
    chart,
    barChart
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    isElementInViewport (el) {
      var rect = el.getBoundingClientRect();

      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
    },
    handleScroll () {
      let vm = this
      if (this.isElementInViewport(vm.$refs['content1'])) {
        this.currentBackground = 0
        this.backgrounds.fill(false)
        this.$set(this.backgrounds, this.currentBackground, true)
      } else if (this.isElementInViewport(vm.$refs['content2'])) {
        this.currentBackground = 1
        this.backgrounds.fill(false)
        this.$set(this.backgrounds, this.currentBackground, true)
      } else if (this.isElementInViewport(vm.$refs['content3'])) {
        this.currentBackground = 2
        this.backgrounds.fill(false)
        this.$set(this.backgrounds, this.currentBackground, true)
      } else if (this.isElementInViewport(vm.$refs['content4'])) {
        this.currentBackground = 3
        this.backgrounds.fill(false)
        this.$set(this.backgrounds, this.currentBackground, true)
      } else {
        this.backgrounds.fill(false)
      }

      if (vm.$refs['main-title-background'].getBoundingClientRect().top < 0 && vm.$refs['main-title-background'].getBoundingClientRect().bottom > 0) {
        this.isMainTitle = true
      } else {
        this.isMainTitle = false
      }
    }
  },
  watch: {
    currentBackground (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss">
@import './assets/baseSCSS/reset.scss';
@import './assets/baseSCSS/UdnFontSize.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './assets/baseSCSS/theme.scss';

html, body {
  margin: 0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .cover {
    position: relative;
  }
  .cover-section {
    height: 100vh;
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cover-background {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: -20;
    .video-player {
        width: 100%;
        height: 100vh;
        z-index: -100;
        object-fit: fill;
    }
  }
  .cover-background-current {
    z-index: 10;
    animation: fade 1s ease-in-out forwards;
  }
  @keyframes fade {
    from { opacity: 0.5; }
    to { opacity: 1; }
  }
  .introduction {
    margin: 154px 0 140px;
  }
  .main-title-wrapper {
    height: 200vh;
    position: relative;
    background: url("../public/images/heat_island_img3.jpg") no-repeat;
    background-attachment: fixed;
    z-index: 5;
    .main-title-background {
       height: 100vh;
    }
    .main-title-content {
        height: 100vh;
        position: relative;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
  }
  .report-content {
    img {
      width: 100%;
    }
  }
  .contain-wrapper {
    padding: 300px 0;
    z-index: 100;
    width: 100%;
    position: absolute;
  }
}
</style>
