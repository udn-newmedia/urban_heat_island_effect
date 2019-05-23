<template>
  <div id="app">
    <div class="cover">
      <div class="cover-section cover-section1">
        <div class="container">
          <div ref="content1" class="content content1">
            <div class="cover-contain">
              <p>過去8年間，台北市每年平均有近兩個月的溫度<span class="mark">超過35度</span>。</p>
              <p class="source">資料來源／中央氣象局</p>
            </div>
          </div> 
        </div>
      </div>
      <div class="cover-section cover-section2">
        <div class="container">
          <div ref="content2" class="content content2">
            <div class="cover-contain">
                <p>高溫讓人「厭世」。</p>
              </div>
          </div>
        </div> 
      </div>
      <div class="cover-section cover-section3">
        <div class="container">
          <div ref="content3" class="content content3">
              <div class="cover-contain">
                <p>台北夏季體感溫度若達31.5度，溫度每上升1度，死亡率便提高<span class="mark">5.1%</span>。</p>
                <br>
                <p>體感溫度若達30.7度，溫度每上升1度，心血管疾病死亡率便增加<span class="mark">3.5%</span>。</p>
                <br>
                <p>體感溫度若達31.4度，溫度每上升1度，呼吸系統疾病死亡率便增加<span class="mark">12.5%</span>。</p>
                <br>
                <p class="source">資料來源／台灣大學公共衛生學院教授郭育良</p>
              </div>
          </div>
        </div>
      </div>
      <div class="cover-section cover-section4">
        <div class="container">
          <div ref="content4" class="content content4">
            <div class="cover-contain">
                <p>當寶島變熱島</p>
                <h1 class="highline">高溫會殺人</h1>
              </div>
          </div>
        </div>
      </div>
      <div :class="{'isCurrentCover': isCurrentCover[0] }" class="cover-background cover-background1">
        <img :src="srcRWD(require('../public/images/' + coverBackgroundMobs[0]), require('../public/images/' + coverBackgrounds[0]))" alt="">
      </div>
      <div :class="{'isCurrentCover': isCurrentCover[1] }" class="cover-background cover-background2">
        <img :src="srcRWD(require('../public/images/' + coverBackgroundMobs[1]), require('../public/images/' + coverBackgrounds[1]))" alt="">
      </div>
      <div :class="{'isCurrentCover': isCurrentCover[2] }" class="cover-background cover-background3">
        <img :src="srcRWD(require('../public/images/' + coverBackgroundMobs[2]), require('../public/images/' + coverBackgrounds[2]))" alt="">
      </div>
      <div :class="{'isCurrentCover': isCurrentCover[3] }" class="cover-background cover-background4">
        <img :src="srcRWD(require('../public/images/' + coverBackgroundMobs[3]), require('../public/images/' + coverBackgrounds[3]))" alt="">
      </div>
    </div>
    <div class="introduction">
      <div class="content">
        <div class="container"> 
          <p>熱、好熱、非常熱！還不到5月，台北市已飆出攝氏35.9度高溫，高掛的太陽把路上民眾曬昏了頭，腳下的柏油路也冒著熱氣，許多民眾邊擦汗邊問：「怎麼會這麼熱？」</p>
          <br>
          <p>「熱島效應」是造成都會區溫度不斷飆升的原因之一，汽車排廢、易吸熱的柏油路、不通風的密集街區等因素，以及無法散熱的盆地地形，導致台北市政府都市發展局的數據顯示，台北都市中心溫度與郊區最低溫之溫差可達6度。</p>
          <br>
          <p>隨著熱被困在都市中無法散去，也使空氣汙染愈來愈嚴重、民眾面臨更高的健康風險，學者呼籲，各縣市政府應透過都市規劃減緩熱島效應，讓民眾擁有更舒適的生活環境。</p>
          <div class="share">
            <i class="facebook i-facebook-1"></i><i class="line i-line"></i>
          </div>
        </div>
      </div>
    </div>
    <div id="introduction-videowrapper" ref="introduction-videowrapper" class="introduction-video">
      <div id="video-wrapper">
        <video id="video-covor-background" ref="introduction-video" class="video-player" width="100vw" preload="metadata" :src="srcRWD(introductionVideoMob, introductionVideo)" autobuffer autoplay loop muted playsinline>
          <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="srcRWD(introductionVideoMob, introductionVideo)" webkit-playsinline="true"></source>
          <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="srcRWD(introductionVideoMob, introductionVideo)"></source>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(introductionVideoMob, introductionVideo)"></source>
        </video>
      </div>
      <div id="video-covor-content" class="video-covor-content">
        <div class="main-title">發燒的都市</div>
      </div>
      <div class="content">
        <div class="container"> 
          <p>在高樓櫛次鱗比的都市叢林裡，許多人為因素均造成熱島效應不斷發威，導致都市的「高燒不退」。</p>
          <br>
          <p>天氣風險管理公司總經理彭啟明指出，台北市會這麼熱，除了熱島效應外，盆地效應、太平洋高壓籠罩、溫室效應等因素也有影響。他預測，未來20年內，台北市中午會經常有高達40度的高溫。</p>
          <br>
          <br>
          <h3>大台北地區於2018年8月1日的溫度分布圖</h3>
        </div>
      </div>
      <video  width="100vw" preload="metadata" :src="srcRWD(mapVideoMob, mapVideo)" autobuffer autoplay loop muted playsinline>
        <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="srcRWD(mapVideoMob, mapVideo)" webkit-playsinline="true"></source>
        <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="srcRWD(mapVideoMob, mapVideo)"></source>
        <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(mapVideoMob, mapVideo)"></source>
      </video>
      <p>資料來源／中央氣象局</p>
      <div class="content">
        <div class="container"> 
          <h3>熱島效應特色一：集中在都會區</h3>
          <br>
          <p>伴隨居住人口及開發密度上升，空調系統和汽機車的人工排熱使得都市愈趨高溫化，這些熱量又被鐵皮屋、柏油路等人工地表和材料吸收。此外，台灣不如歐美國家城鎮距離遠，衛星城市緊密連接的下場是「島島相連」加乘作用，形成多島效應，熱上加熱。</p>
          <br>
          <p>自1950年代以來，台北市的10年均溫已從22.3度提高至23.5度，增幅達1度多。中央氣象局測政組組長李育棋表示，可以從台北、淡水氣象站的氣溫差距，看出都市開發對氣象站所測溫度的影響。</p>
          <br>
          <p>自1950年代以來，台北市的10年均溫已從22.3度提高至23.5度，增幅達1度多。中央氣象局測政組組長李育棋表示，可以從台北、淡水氣象站的氣溫差距，看出都市開發對氣象站所測溫度的影響。</p>
          <br>
          <br>
          <img src="../public/images/heat_island_img1.jpg" alt="">
        </div>
      </div>
      <div class="content">
        <div class="container"> 
          <h3>台北和淡水歷年均溫走勢圖</h3>
        </div>
        <chart2></chart2>
        <div class="content">
          <div class="container"> 
            <h3>熱島效應特色二：夜間增溫比白天明顯</h3>
            <br>
            <p>成大建築系特聘教授林子平表示，熱島效應在夜間的增溫幅度比在白天明顯。台灣街區的建築密集，散熱速度不夠快，白天蓄積熱量無法於夜間散熱，到了隔天早上，又開始吸收太陽的輻射熱。</p>
            <br>
            <p>氣象局的溫度數據指出，在2011年至2018年間，台北夜間最低溫高於25度的平均天數為109天，遠高於1991年至2000年的81天。</p>
            <br>
            <p>中研院環境變遷研究中心研究員林傳堯的研究也顯示，近40年來，台北7、8月的溫度不斷升高，其中以夜間的溫度增幅較明顯。</p>
            <br>
          </div>
        </div>
        <chart3></chart3>
      </div>
    </div>
    <div class="follow-up">
      <div id="follow-up-subtile-background" class="follow-up-subtile-background">
        <img :src="srcRWD(require('../public/images/' + subtitleImgMob2) , require('../public/images/' + subtitleImg2))" alt="">
      </div>
      <div class="follow-up-subtile">
        <div class="follow-up-subtile-content">
          變成熱島後...
        </div>
      </div>
      <div class="content">
        <div class="container"> 
          <div class="follow-up-content">
            <p>熱島效應不僅使城市環境越來越熱，也會對民眾的身心理健康、生產力等各層面造成影響，甚至導致空氣汙染加劇。</p>
            <br>
            </div>
        </div>
      </div>
      <div class="number-group">
        <div class="content">
          <div class="container">
            <numberBox
              :percent="3.76"
              describe="每增溫1°C，農業生產力減損3.76%。 "
              sourceInfo="資料來源：中央研究院"
            >
            </numberBox>
            <numberBox
              :percent="5.49"
              describe="熱島效應強度增加1℃，可能會使得老年人口之自殺死亡率相對上升5.49%。 "
              sourceInfo="資料來源：國家衛生研究院、中央研究院等研究機構合作的研究"
            >
            </numberBox>
            <numberBox
              :percent="11"
              describe="只要溫度超過33.5度，年齡高於65歲的民眾的總死亡率及因熱相關症狀而看急診的比率便會上升11%。"
              sourceInfo="資料來源：中研院環變中心龍世俊研究員"
            >
            </numberBox>
            <numberBox
              :percent="6"
              describe="外氣溫度每上升一度，全國夏季尖峰耗電量增加6%。"
              sourceInfo="資料來源：台灣電力公司"
            >
            </numberBox>
          </div>
        </div>
      </div>
      <div class="follow-up-content">
        <div class="content">
          <div class="container">      
            <h3>人體健康面臨衝擊</h3>
            <br>
            <p>天氣愈來愈熱，對健康帶來嚴重衝擊；除了中暑、熱衰竭等相關疾病，研究顯示，氣溫上升會提高死亡風險，對於心血管疾病患者，也會帶來健康危害。</p>
            <br>
            <p>國家衛生研究院進行的「氣候變遷與健康調適策略」研究計畫中，比對1994年到2007年的年均溫變化與死亡人數，發現台灣最低死亡風險溫度為攝氏25-27度（補相關數據）。</p>
            <br>
            <p>協同研究員陳乃慈說，65歲以上族群或慢性病患者等，身體排熱能力不佳，當氣溫逐漸上升，身體會出現急性反應，尤其在城市中的弱族群，更要特別關注。</p>
            <br>
            <p>（待訪：台大醫院新竹分院環境及職業醫學部主治醫師陳啟信說）</p>
            <br>
            <p>（待訪：台灣大學醫學院環境及職業醫學科教授郭育良說 ）</p>
            <br>
            <p>亞洲大學附設醫院心臟內科醫師張育晟說，美國心臟醫學會去年發表文章，戶外溫度的劇烈變化，尤其在溫度較高的時候，會增加心肌梗塞的風險；溫差每增加溫度，心肌梗塞的風險會增加2%，尤其平均溫度上升與溫差增加，會造成心肌梗塞的風險提高。</p>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import srcRWD from './mixin/srcRWD.js'
import myMixin from './mixin/myMixin.js'
import chart2 from './components/chart2.vue'
import chart3 from './components/chart3.vue'
import numberBox from './components/numberBox.vue'
import barChart from './components/barChart.vue'
import ScrollMagic from 'scrollmagic'

export default {
  name: 'app',
  data () {
    return {
      isNotCover: false,
      currentCover: 0,
      currentCoverMob: 0,
      isCurrentCover: [true, false, false, false],
      isCurrentCoverMob: [true, false, false, false],
      coverBackgrounds: ['heat_island_bg1.jpg', 'heat_island_bg2.jpg', 'heat_island_bg3.jpg', 'heat_island_bg4.jpg'],
      coverBackgroundMobs: ['heat_island_bg1_mob.jpg', 'heat_island_bg2_mob.jpg', 'heat_island_bg3_mob.jpg', 'heat_island_bg4_mob.jpg'],
      introductionVideo: require('../public/video/heat_island_v1.mp4'),
      introductionVideoMob: require('../public/video/heat_island_v1_mob.mp4'),
      mapVideo: require('../public/video/heat_island_chart1.mp4'),
      mapVideoMob: require('../public/video/heat_island_chart1_mob.mp4'),
      img1: 'heat_island_img1',
      subtitleImg2: 'heat_island_img5.jpg',
      subtitleImgMob2: 'heat_island_img5_mob.jpg',
      videoSource3: null,
      videoSource4: null,
      currentBackground: 0,
      backgrounds: [true, false, false , false],
      isMainTitle: false,
      isNotCover: false
    }
  },
  components: {
    chart2,
    chart3,
    numberBox,
    barChart
  },
  mixins: [srcRWD, myMixin],
  mounted () {
    
    let vm = this
    window.addEventListener('scroll', this.handleScroll)

    var controller = new ScrollMagic.Controller();

    var slides = document.querySelector("#video-wrapper");
    var cover3 = document.querySelector("#follow-up-subtile-background");
                
    new ScrollMagic.Scene({
        triggerElement: slides,
        triggerHook: 'onLeave',
        duration: "100%"
      })
      .setPin(slides, {pushFollowers: false})
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: cover3,
        triggerHook: 'onLeave',
        duration: "100%"
      })
      .setPin(cover3, {pushFollowers: false})
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
        
  },
  methods: {
    handleScroll () {
      
      let vm = this
      
      if (this.isElementInViewport(vm.$refs['content1'])) {
        this.currentCoverMob = 0
        this.currentCover = 0       
      } else if (this.isElementInViewport(vm.$refs['content2'])) {
        this.currentCoverMob = 1
        this.currentCover = 1
      } else if (this.isElementInViewport(vm.$refs['content3'])) {
        this.currentCoverMob = 2
        this.currentCover = 2
      } else if (this.isElementInViewport(vm.$refs['content4'])) {
        this.currentCoverMob = 3
        this.currentCover = 3
      }

      vm.isCurrentCover.fill(false)
      vm.isCurrentCoverMob.fill(false)
      vm.$set(vm.isCurrentCover, vm.currentCover, true)
      vm.$set(vm.isCurrentCoverMob, vm.currentCoverMob, true )

    }
  }
}
</script>

<style lang="scss">
@import './assets/baseSCSS/reset.scss';
@import './assets/baseSCSS/UdnFontSize.scss';
// @import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './assets/baseSCSS/theme.scss';

html, body {
  margin: 0;

}
#app {
  .container {
    padding: 20px;
  }
  .content {
    padding: 154px 0 0px;
    img {
      width: 100%;;
    }
  }
  .mark {
          color: red;
        }
  .cover {
    position: relative;
    .cover-section {
      height: 100vh;
      width: 100;
      display: flex;
      align-items: center;
      .cover-contain {
        position: relative;
        z-index: 100;
        padding: 17px;
        background-color: white;
        
        .source {
          color: #7d7d7d;
          font-size: 15px;
        }
        .highline {
          padding-top: 6px;
        }
      }
    }
    .cover-background {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100%;
      img {
          width: 100%;
      }
    }

    .cover-background1 {
      z-index: 40
    }
    .cover-background2 {
      z-index: 30
    }
    .cover-background3 {
      z-index: 20
    }
    .cover-background4 {
      z-index: 10
    }
    .isCurrentCover {
      opacity: 1;
      z-index: 50;
      animation: fade 1s ease-in-out forwards;    
    }
    @keyframes fade {
      from { opacity: 0.5; }
      to { opacity: 1; }
    }
    //當在 cover position 以內的時候不出現 
    .isNotCover {
      position: absolute;
      bottom: 0;
    }
  }

  .introduction {
    position: relative;
     z-index: 100;
    background-color: #f2f2f2;
    .share {
      padding-top: 66.8px;
      text-align: center;
      font-size: 37px;
    }
  }
  .introduction-video {
    position: relative;
    z-index: 90;
    background-color: #f2f2f2;
    video {
      width: 100%;
      height: 100vh;
      object-fit: fill;
      z-index: 90;
    }
    .video-covor-content {
      position: relative;
      height: 100vh;
      display: flex;
      z-index: 100;
      justify-content: center;
      align-items: center;
      .main-title {
        background-color: #ffffff;
        font-size: 25px;
      }
    }
  }
  .follow-up {
    position: relative;
    z-index: 50;
    background-color: #fff;
    #follow-up-subtile-background {
      height: 100vh;
      img {
        width: 100%;
      }
    }
    .follow-up-subtile {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100vh;
      .follow-up-subtile-content {
        font-size: 25px;
        background-color: #ffffff;
        padding: 5px 13px;
      }
    }
    .follow-up-content {

      
    }
    .number-group {
        background-color: #f2f2f2;
      }
  }
  
  










  // .cover-background-current {
  //   z-index: 10;
  //   animation: fade 1s ease-in-out forwards;
  // }
  @keyframes fade {
    from { opacity: 0.5; }
    to { opacity: 1; }
  }
  // .introduction {
  //   margin: 154px 0 140px;
  // }
  // .main-title-wrapper {
  //   height: 200vh;
  //   position: relative;
  //   background: url("../public/images/heat_island_img3.jpg") no-repeat;
  //   background-attachment: fixed;
  //   z-index: 5;
  //   .main-title-background {
  //      height: 100vh;
  //   }
  //   .main-title-content {
  //       height: 100vh;
  //       position: relative;
  //       bottom: 0;
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //   }
    
  // }
  // .report-content {
  //   img {
  //     width: 100%;
  //   }
  // }
  // .contain-wrapper {
  //   padding: 300px 0;
  //   z-index: 100;
  //   width: 100%;
  //   position: absolute;
  // }
}
</style>
