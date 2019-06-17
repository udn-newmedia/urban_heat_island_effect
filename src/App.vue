<template>
  <div id="app">
    <Indicator></Indicator>
    <Head-Bar head-color="#fff" icon-color="#000">
      <!-- <a href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect">高溫會殺人</a>
      <a href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan">幫都市退燒</a>
      <a href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_abroad">新加坡用綠化降溫</a> -->
      <a class="active" @click="handleGA('menu bar_main', 'M1_main')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect" target="_blank">高溫會殺人</a>
      <a @click="handleGA('menu bar_main', 'M2_main')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan" target="_blank">幫都市退燒</a>
      <a @click="handleGA('menu bar_main', 'M3_main')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_abroad" target="_blank">新加坡用綠化降溫</a>
    </Head-Bar>
    <div ref="coverArea" class="cover">
      <div class="cover-section cover-section1">
        <div class="container">
          <div ref="content1" class="content content1">
            <div class="cover-contain-full">
              <p>過去8年間，台北市每年平均有近兩個月的溫度<span class="mark">超過35度</span>。</p>
              <p class="source">資料來源／中央氣象局</p>
            </div>
          </div> 
        </div>
      </div>
      <div class="cover-section cover-section2">
        <div class="container">
          <div ref="content2" class="content content2">
            <div class="cover-contain-half">
              <p><span class="half-mark">高溫讓人「厭世」。</span></p>
            </div>
          </div>
        </div> 
      </div>
      <div class="cover-section cover-section3">
        <div class="container">
          <div ref="content3" class="content content3">
              <div class="cover-contain-full">
                <p>台北夏季體感溫度若達31.5度，溫度每上升1度，<br class="cover-contain-full-wrap">
                死亡率便提高<span class="mark">5.1%</span>。</p>
                <br>
                <p>體感溫度若達30.7度，溫度每上升1度，<br class="cover-contain-full-wrap">
                心血管疾病死亡率便增加<span class="mark">3.5%</span>。</p>
                <br>
                <p>體感溫度若達31.4度，溫度每上升1度，<br class="cover-contain-full-wrap">
                呼吸系統疾病死亡率便增加<span class="mark">12.5%</span>。</p>
                <br>
                <p class="source">資料來源／台灣大學公共衛生學院教授郭育良</p>
              </div>
          </div>
        </div>
      </div>
      <div class="cover-section cover-section4">
        <div class="container">
          <div ref="content4" class="content content4">
            <div class="cover-contain-half">
                <!-- <p><span class="half-mark">當寶島變熱島</span></p> -->
                <h1 class="highline"><span class="half-mark">高溫會殺人</span></h1>
              </div>
          </div>
        </div>
      </div>
      <div  v-if="isCover" :class="{'isCurrentCover': isCurrentCover[0] }"
           :style="{ 'background-image': 'url(' + srcRWD(require('../public/images/' + coverBackgroundMobs[0]), require('../public/images/' + coverBackgrounds[0])) + ')' }"
            class="cover-background cover-background1">
      </div>
      <div  v-if="isCover" :class="{'isCurrentCover': isCurrentCover[1] }"
           :style="{ 'background-image': 'url(' + srcRWD(require('../public/images/' + coverBackgroundMobs[1]), require('../public/images/' + coverBackgrounds[1])) + ')' }"
           class="cover-background cover-background2">
      </div>
      <div v-if="isCover" :class="{'isCurrentCover': isCurrentCover[2] }"
           :style="{ 'background-image': 'url(' + srcRWD(require('../public/images/' + coverBackgroundMobs[2]), require('../public/images/' + coverBackgrounds[2])) + ')' }"
           class="cover-background cover-background3">
      </div>
      <div  v-if="isCover" :class="{'isCurrentCover': isCurrentCover[3] }"
           :style="{ 'background-image': 'url(' + srcRWD(require('../public/images/' + coverBackgroundMobs[3]), require('../public/images/' + coverBackgrounds[3])) + ')' }"
           class="cover-background cover-background4">
      </div>
    </div>
    <div class="introduction">
      <div class="content">
        <div class="container"> 
          <p>熱、好熱、非常熱！還不到5月，台北市已飆出攝氏35.9度高溫，高掛的太陽把路上民眾曬昏了頭，腳下的柏油路也冒著熱氣，許多民眾邊擦汗邊問：「怎麼會這麼熱？」</p>
          <br>
          <p>除了受全球暖化影響，都市熱島效應（Urban Heat Island Effect）也是增溫的關鍵推手。汽車排廢、易吸熱的柏油路、不通風的密集街區等因素，以及無法散熱的盆地地形，導致成功大學建築學系特聘教授林子平研究團隊的調查發現，在台北車站與西門商圈周邊等台北市最熱的地區，夏季平均溫度與木柵、關渡等台北郊區的差距最多達4度。</p>
          <br>
          <p>隨著高溫熱氣被困在都市建物中無法散去，不僅讓民眾感到厭世、高溫自殺率屢屢攀高外，空汙的程度也跟高溫有關。對岸的香港政府更研究發現，2003年爆發嚴重的SARS疫情，疫情擴散也與都市建築物密集，導致空氣不流通有關。要如何減緩熱島效應，讓台灣島不「發燒」，已經刻不容緩。</p>
          <div class="share">
            <i  @click="FacebookShare(facebookUrl)" class="facebook i-facebook-1"></i>
            <i  @click="LineShare(lineUrl)" class="line i-line" ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="introduction-video">
      <div ref="video-wrapper" id="video-wrapper">
        <video 
          :class="{'video-covor-background-active': isCoverActive}"
          class="video-covor-background video-player"
          width="100vw"
          preload="metadata"
          :src="srcRWD('https://p3.udn.com.tw/urban_heat_island_effect/heat_island_v1_mob.mp4', 'https://p3.udn.com.tw/urban_heat_island_effect/heat_island_v1.mp4')"
          :poster="srcRWD(require('../public/video/heat_island_v1_mob_bg.jpg'), require('../public/video/heat_island_v1_bg.jpg'))"
          autobuffer
          autoplay
          loop
          muted
          playsinline>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(introductionVideoMob, introductionVideo)" />

        </video>
        <div class="video-covor-content">
          <div class="main-title">發燒的都市</div>
        </div>
      </div>
      <div class="fever-city">
        <div class="content">
          <div class="container"> 
            <p>氣象專家彭啟明指出，台北市會這麼熱，除了熱島效應外，盆地效應、太平洋高壓籠罩、溫室效應等因素也有影響。<span style="font-weight: bolder">他預測，未來20年內，台北市中午會經常有高達40度的高溫。</span></p>
            <br>
            <br>
            <h3 class="chart-title">大台北地區於2018年8月1日的溫度分布圖</h3>
            <br>
            <div class="spread-of-temperature">
              <video
                width="100vw"
                preload="metadata"
                :src="srcRWD('https://p3.udn.com.tw/urban_heat_island_effect/heat_island_chart1_mob.mp4', 'https://p3.udn.com.tw/urban_heat_island_effect/heat_island_chart1.mp4')"
                :poster="srcRWD(require('../public/video/heat_island_chart1_mob_bg.jpg'), require('../public/video/heat_island_chart1_bg.jpg'))"
                autobuffer
                autoplay
                loop
                muted
                playsinline>
                <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(mapVideoMob, mapVideo)" />
              </video>
              <img class="charText" :src="srcRWD(require('../public/images/' + chartOneTextImgMob), require('../public/images/' + chartOneTextImg))" alt="">
            </div>
            <div class="spread-of-temperature-source">資料來源／中央氣象局</div>
            <br>
            <br>
            <br>
            <br>
            <h3 class="feature-title feature-title1">熱島效應特色一：集中在都會區</h3>
            <br>
            <p>什麼是都市熱島效應？林子平教授說，都會區人口聚集、開發密度上升，導致水泥建築、柏油路面增加，這些材質都會蓄積熱能，交通工具、空調系統也會排放廢熱，加上綠地減少、通風變差，都會區像是個悶燒鍋，市中心比周邊溫度還要高，在全球氣候變遷與溫室效應的影響下，更加劇都市高溫化。</p>
            <br>
            <p>國家災害防救科技中心氣候變遷組指出，台灣都會區極端高溫的次數越來越頻繁，以去年5月為例，台北測站超過37度的高溫日數有4天、超過35度的有13天，都打破台北站5月的高溫日數紀錄；去年8月5-20日連續10天高溫超過36度，更改寫了2012年7月8-16日連續9天的120年紀錄。</p>
            <br>
            <p>中央氣象局測政組組長李育棋表示，可以從台北、淡水氣象站的氣溫差距，看出都市開發對氣象站所測溫度的影響。</p>
            <br>
            <br>
            <img class="motos" src="../public/images/heat_island_img1.jpg" alt="">
            <p class="image-describtion motos-describtion">台灣汽機車密度極高，而車輛排熱是也導致都市溫度增高的因素之一。圖／杜建重 </p>
            <br>
          </div>
          <chart2></chart2>
          <div class="feature-two">
            <div class="container">
              <br>
              <br>
              <h3 class="feature-title feature-title1">熱島效應特色二：夜間增溫比白天明顯</h3>
              <br>
              <p>都市熱島效應夜間比白天影響更大，水泥建築在白天吸收的熱能，入夜後釋放出來，照理說太陽下山後，氣溫會逐漸下降，但這些人工熱能持續悶燒，讓都市夜間增溫。</p>
              <br>
              <p>如果夜間最低氣溫高於25度，就像熱帶地區的夜間溫度，稱為「夜間熱帶」（The Trapical Night）。夜間高溫日數越多，代表熱島效應影響越顯著。</p>
              <br>
              <p>根據中央氣象局資料，台北1991-2000年每年平均夜間高溫日數為81日，2001-2010年為97.5日，但2011-2018年提高到109.9天。</p>
              <br>
              <p>中央研究院環境變遷研究中心研究員林傳堯，分析台北市7、8月每小時均溫的長期趨勢，也證實台北市夜晚越來越熱；以每日最低溫出現的清晨5點來看，1971-1980年每日平均溫度為25.6度，但2001-2010年則提高到27.3度。</p>
              <br>
              <p>長期觀測氣象資訊的中央氣象局科長陳孟詩就說，天氣越來越熱，當晚間溫度超過28度，就需要開冷氣，否則根本沒辦法好好睡，但開冷氣睡覺的天數不斷增加，電力使用增加，加上空調熱氣都讓戶外溫度再上升，就更得依靠冷氣，簡直是惡性循環。</p>
              <br>
              <br>
            </div>
          </div>
          <chart3></chart3>
        </div>
      </div>
    </div>
    <div class="follow-up">
      <div ref="follow-up" class="follow-up-subtile-wrapper">
        <div class="follow-up-subtile">
          <div class="follow-up-subtile-content">
            <div class="main-title">
              變成熱島後...
            </div> 
          </div>
        </div>
        <div :class="{'active': isFollowUpCoverActive }" class="follow-up-subtile-background">

        </div>
      </div>
      <div class="number-group">
        <div class="content">
          <div class="container">
            <br>
            <div class="number-group-intro">
              <p>熱島效應不僅使城市環境越來越熱，也會對民眾的身心理健康、生產力等各層面造成影響，甚至導致空氣汙染加劇。</p>
            </div>
            <br>
            <numberBox
              :percent="3.76"
              describe="每增溫1°C，農業生產力減損3.76%。"
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
              :percent="6"
              describe="外氣溫度每上升1°C，全國夏季尖峰耗電量增加6%。"
              sourceInfo="資料來源：台灣電力公司"
            >
            </numberBox>
            <numberBox
              :percent="11"
              describe="只要溫度超過33.5°C，65歲以上老人掛急診的比率提高11%。"
              sourceInfo="資料來源：中研院環變中心龍世俊研究員"
            >
            </numberBox>
          </div>
        </div>
      </div>
      <div class="follow-up-content">
        <div class="content">
          <div class="container">
            <div class="follow-up-main-title">高溫讓人厭世</div>
            <br>
            <p>對於心血管、呼吸道等慢性病患，不只寒流來要小心，天氣太熱也會提高致死率。多數人認為好天氣會有好心情，但研究顯示，天氣太熱時自殺率會上升，精神疾病發作率也會增加。</p>
            <br>
            <p>台大醫學院環境職業醫學科教授郭育良說，高溫除帶來中暑、熱衰竭等熱傷害，還會影響身心健康，尤其受到都市熱島效應的影響，都會區的脆弱族群如65歲以上老人、14歲以下兒少、慢性病患者或社經地位較低的民眾等，都要及早調適。</p>
            <br>
            <p>事實上，熱不只帶來中暑、熱衰竭等健康衝擊，對健康的衝擊比想像的更全面。郭育良分析1994-2003年全台灣死因資料庫，發現最低死亡率的宜居溫度為26-27度，當氣溫超過31度，每增加1度整體死亡率提高5%。郭育良說，在心血管、呼吸系統疾病的死亡率上，當夏季的每日平均體感溫度達到30.7度、31.4度，每上升1度死亡率就增加3.5%、12.5%；簡言之，當日均氣溫超過31度時，高溫對健康的衝擊就很明顯，值得各單位重視。</p>
            <br>
            <p>郭育良與中、日、南韓學者的跨國研究中，分析各國的自殺人數與氣溫變化，發現高溫會影響人的精神狀態。以台灣為例，當氣溫上升2.3度，自殺風險提高7.8%；在南韓氣溫增加4.7度，自殺率提高6.8%；而在日本氣溫增加4.2度，自殺率提高4.5%。他解釋，不管在台灣、日本或南韓，分析結果都顯示氣溫增加到一定程度，自殺率就會提高。</p>
            <br>
            <p>郭育良說，憂鬱症與高溫也有關聯，他與國家衛生研究院合作探討台灣氣相因子與憂鬱症發生的關係，發現在台灣憂鬱症的最低發生風險之死亡風險溫度為20-23度，年均溫在23度以上的地區，每增加1度，憂鬱症罹患率提高7%。他強調，高溫與自殺率、憂鬱症相關的發現，顛覆了一般認為天氣陰冷容易心情低落的觀念，但自殺或精神疾病的成因很複雜，仍有待研究。</p>
            <br>
            <br>
            <img class="hot-city" :src="srcRWD(require('../public/images/' + subtitleImgMob3) , require('../public/images/' + subtitleImg3))" alt="">
            <p class="hot-city-describtion">都市高溫使人體健康面臨衝擊，除了中暑、熱衰竭等相關疾病，氣溫上升也會提高死亡風險。圖／報系資料庫</p>
          </div>
        </div>
        <div class="content">
          <div class="container">
            <br>
            <br>      
            <h3 class="follow-up-main-title">空氣愈來愈髒</h3>
            <br>
            <p>近來備受關注的空汙議題，因為都市熱島效應可能更趨嚴重。中研院研究發現，當氣溫升高時，都會區空汙濃度隨之上升，台北市PM2.5日平均濃度增加4成，台中、高雄則增加約一倍，儘管都未超過環保署的空品標準，仍值得關注。學者也發現，都會區在入夜後，空氣品質因為都市熱島效應而惡化。</p>
            <br>
            <p>中研院研究員林傳堯，分析2014年7月與2015年7、8月期間，台北、台中與高雄三都的空氣品質與氣溫變化，研究發現，當夏季高溫發生時，在太平洋高壓影響下，風速微弱，污染物擴散不良、容易累積，以致於高溫期間都會區內部分空氣汙染物的濃度也容易增加。</p>
            <br>
            <p>這項研究把過去40年每日最高溫的前5%溫度定義為高溫日標準，台北為攝氏35.2度、台中34度、高雄33.3度；換句話說，當每日最高溫超過標準值，就屬於高溫日，低於標準值2度定義為非高溫日。</p>
            <br>
            <br>
            <br>
            <h3 class="follow-up-main-title">台北熱浪日與非熱浪日的空氣品質研究</h3>
            <br>
            <chart4></chart4>
            <div class="chart-describtion">
              <div>註：熱浪與非熱浪個案是取自2014年7月和2015年7、8月三個月。此研究所定義的熱浪為台北日最高溫大於35.2度，低於33.2度則為非熱浪。</div>
              <br>
              <div>資料來源／中研院永續科學研究計畫-整合性多元高解析度資訊之台灣熱浪脆弱度評估</div>
            </div>
            <br>
            <p>以環保署測站資料研究分析發現，當高溫日發生時，空氣中臭氧、PM10、PM2.5的濃度均明顯高於非高溫日，但一氧化碳、NO2、SO2 沒有明顯差異；透過數值模擬，也得到類似的結果。林傳堯說，高溫會造成臭氧增加，高溫期間，細懸浮微粒中二次氣膠所占比例也大幅提高，同時也可能影響空氣中的懸浮微粒濃度。</p>
            <br>
            <p>以民眾最關注的PM2.5為例，台北市在高溫日的濃度比非高溫日高出43.8%，高雄市、台中市PM2.5濃度，在高溫日都比非高溫日多出91.7%、115%，儘管都未超過環保署的標準值（35微克／立方公尺），但仍代表高溫對空汙造成影響。</p>
            <br>
            <p>林傳堯說，都市熱島效應帶來的高溫，除了熱本身會影響健康，隨溫度升高而增加的空汙濃度，儘管目前仍未超過標準值，但隨著都市氣候越來越熱，對人體的危害值得關注。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="end">
      <div id="end-background-video">
        <video ref="end-background-video"
          width="100vw"
          preload="metadata"
          :src="srcRWD('https://p3.udn.com.tw/urban_heat_island_effect/heat_island_v2_mob.mp4', 'https://p3.udn.com.tw/urban_heat_island_effect/heat_island_v2.mp4')"
          :poster="srcRWD(require('../public/video/heat_island_v2_mob_bg.jpg'), require('../public/video/heat_island_v2_bg.jpg'))"
          autobuffer
          autoplay
          loop
          muted
          playsinline
        >
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(endBackgroundVideoMob, endBackgroundVideo)" />
        </video>
      </div>
      <div class="ending">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="content">
          <div class="container"> 
            <div class="end-report">
              <p class="end-report-title">
                <span class="end-report-title-mark">當寶島變熱島</span>系列專題
              </p>
              <div class="end-report-related-first-layer">
                <div class="left">
                  <div class="box">
                    <a @click="handleGA('Related_main', 'R1_main')"  href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan" target="_blank">
                      <img src="../public/images/relate/relate_2.jpg" alt="">
                      <div class="describe">
                        <span>幫都市退燒</span>
                      </div> 
                    </a>           
                  </div>
                </div>
                <div class="right">
                  <div class="box">
                    <a @click="handleGA('Related_main', 'R2_main')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_abroad" target="_blank">
                      <img src="../public/images/relate/relate_3.jpg" alt="">
                      <div class="describe">
                        <span>新加坡用綠化降溫</span>
                      </div>
                    </a>         
                  </div>
                </div>
              </div>
              <div class="end-report-related-sec-layer">
                <div class="left">
                  <div class="middle-left">
                    <div class="box">
                      <a @click="handleGA('Related_main', 'R3_main')" href="https://udn.com/news/story/11319/3302778" target="_blank">
                        <img src="../public/images/relate/relate_4.jpg" alt="">
                        <div class="describe">
                          <span>勞工高溫休息於法有據 醫籲落實勞檢</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="middle-right">
                    <div class="box">
                      <a @click="handleGA('Related_main', 'R4_main')"  href="https://udn.com/news/story/11321/3283436" target="_blank">
                        <img src="../public/images/relate/relate_5.jpg" alt="">
                        <div class="describe">
                          <span>聯合筆記／走路有風的城市</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="middle-left">
                    <div class="box">
                      <a @click="handleGA('Related_main', 'R5_main')"  href="https://vision.udn.com/vision/story/12840/3829036" target="_blank">
                        <img src="../public/images/relate/relate_6.jpg" alt="">
                        <div class="describe">
                          <span>超「綠」辦公樓 出差要買碳排費</span>
                        </div>
                      </a>   
                    </div>
                  </div>
                  <div class="middle-right">
                    <div  class="box">
                      <a  @click="handleGA('Related_main', 'R6_main')"  href="https://udn.com/news/story/7323/3787399" target="_blank">
                        <img src="../public/images/relate/relate_7.jpg" alt="">
                        <div class="describe">
                          <span>減緩短暫強降雨致災情況 公私合作打造新北海綿城市</span>
                        </div>
                      </a>   
                    </div>
                  </div>     
                </div>
              </div>
            </div>
            <share href="http://udn.com/upf/newmedia/2019_data/urban_heat_island_effect/"></share>
            <br>
            <editor>
              <div>採訪團隊：鄭朝陽、洪敬浤、徐如宜、鄭維真、張裕珍、魏翊庭</div>
              <div>影像：王騰毅、林澔一、杜建重、黃仲裕、報系資料照</div>
              <div>製作人：謝汶均</div>
              <div>視覺設計：許瑋琳</div>
              <div>網頁製作：胡凈悟</div>
              <div>監製：林秀姿、董谷音、潘如瑩</div>
              <div>2019.06.18</div>
            </editor>
            <br>
            <logo></logo>
            <br>
            <Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </div>
        </div>
      </div>   
    </div>
    <div class="footer">
        <div class="share">
          <div class="content">
            <div class="container">
              <fb-comment  href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect/"></fb-comment>    
            </div>
          </div>
        </div>
    </div>
    <back-top></back-top>
    <foot></foot>
  </div>
</template>

<script>
import srcRWD from './mixin/srcRWD.js'
import myMixin from './mixin/myMixin.js'
import chart2 from './components/chart2.vue'
import chart3 from './components/chart3.vue'
import chart4 from './components/chart4.vue'
import numberBox from './components/numberBox.vue'
import barChart from './components/barChart.vue'
import ScrollMagic from 'scrollmagic'
import Utils from 'udn-newmedia-utils'

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
      endBackgroundVideo: require('../public/video/heat_island_v2.mp4'),
      endBackgroundVideoMob: require('../public/video/heat_island_v2_mob.mp4'),
      mapVideo: require('../public/video/heat_island_chart1.mp4'),
      mapVideoMob: require('../public/video/heat_island_chart1_mob.mp4'),
      chartOneTextImg: 'heat_island_chart1_bg.svg',
      chartOneTextImgMob: 'heat_island_chart1_bg_mob.svg',
      img1: 'heat_island_img1',
      subtitleImg2: 'heat_island_img5.jpg',
      subtitleImgMob2: 'heat_island_img5_mob.jpg',
      subtitleImg3: 'heat_island_img6.jpg',
      subtitleImgMob3: 'heat_island_img6_mob.jpg',
      videoSource3: null,
      videoSource4: null,
      currentBackground: 0,
      backgrounds: [true, false, false , false],
      isMainTitle: false,
      isFollowUpCoverActive: false,
      isCover: true,
      isCoverActive: false,
      lineUrl: 'http://udn.com/upf/newmedia/2019_data/urban_heat_island_effect/',
      facebookUrl: 'http://udn.com/upf/newmedia/2019_data/urban_heat_island_effect/',
    }
  },
  components: {
    chart2,
    chart3,
    chart4,
    numberBox,
    barChart
  },
  mixins: [srcRWD, myMixin],
  mounted () {
    
    let vm = this
    window.addEventListener('scroll', this.handleScroll)

    var controller = new ScrollMagic.Controller();

    // var slides = document.querySelector("#video-wrapper");
    // var cover3 = document.querySelector("#follow-up-subtile-background");
    var end = document.querySelector("#end-background-video");

    new ScrollMagic.Scene({
        triggerElement: end,
        triggerHook: 'onLeave',
        duration: "600%"
      })
      .setPin(end, {pushFollowers: false})
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
        
  },
  methods: {
    handleScroll () {
      
      let vm = this
      let mainTitleVideo = vm.$refs['video-wrapper']
      let coverArea = vm.$refs['coverArea']
      let followUp = vm.$refs['follow-up']
      let body = document.body;
      let timer;
      
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

      if ( coverArea != null && 0 <= coverArea.getBoundingClientRect().bottom && coverArea.getBoundingClientRect().bottom <= coverArea.getBoundingClientRect().height ) {
        vm.isCover = true
      } else {
        vm.isCover = false
      }

      if ( mainTitleVideo != null & mainTitleVideo.getBoundingClientRect().top < 0 & 0 < mainTitleVideo.getBoundingClientRect().top + mainTitleVideo.getBoundingClientRect().height ) {
        vm.isCoverActive = true
      } else {
        vm.isCoverActive = false
      }

      if ( followUp != null && 0 <= followUp.getBoundingClientRect().bottom && followUp.getBoundingClientRect().bottom <= followUp.getBoundingClientRect().height) {
        vm.isFollowUpCoverActive = true
      } else {
        vm.isFollowUpCoverActive = false
      }

      vm.isCurrentCover.fill(false)
      vm.isCurrentCoverMob.fill(false)
      vm.$set(vm.isCurrentCover, vm.currentCover, true)
      vm.$set(vm.isCurrentCoverMob, vm.currentCoverMob, true )

      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }
      
      timer = setTimeout(function(){
        body.classList.remove('disable-hover')
      },500);

    },
    handleGA (category, tagName) {
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": category,
        "eventAction": "Click_main",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [ " + tagName + " ]"
      })
    },
    LineShare (href) {
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Line Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [line share]"
      })
      if (Utils.detectMob()) {
        // 手機
        window.open("//line.me/R/msg/text/?" + document.querySelector('title').innerHTML + "%0D%0A%0D%0A" + document.querySelector('meta[property="og:description"]').content + "%0D%0A%0D%0A" + href)
      } else {
        window.open("https://lineit.line.me/share/ui?url=" + href)
      }
    },
    FacebookShare (href) {
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Facebook Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [facebook share]"
      })
      FB.ui({
        method: 'share',
        href: href,
      }, function(response){});
    },
  }
}
</script>

<style lang="scss">
@import './assets/baseSCSS/reset.scss';
@import './assets/baseSCSS/UdnFontSize.scss';
// @import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './assets/baseSCSS/theme.scss';

*, *::after, *::before {
  box-sizing: border-box;
}

.disable-hover {
  pointer-events: none;
}

html, body {
  margin: 0;
}
#app {
  position: relative;
  .container {
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 321px) and (max-width: 520px) {

    }
    @media screen and (min-width: 521px) and (max-width: 768px) {
      max-width: 550px;
    }
    @media screen and (min-width: 769px) {
      max-width: 880px;
      // padding: 0 325px;
    }
  }
  .content {
    // padding: 154px 0 0px;
    // img {
    //   width: 100%;
    // }
  }
  .mark {
    color: red;
    font-weight: bold;
  }
  .cover {
    position: relative;
    .cover-section {
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      .cover-contain-full {
        position: relative;
        z-index: 100;
        padding: 17px;
        background-color: #fff;
        @media screen and (min-width: 321px) {

        }
        @media screen and (min-width: 521px) {
          padding: 27px 35px;
        }
        @media screen and (min-width: 769px) {
          padding: 24px 40px;
          margin: 0 85px;
        }
        .cover-contain-full-wrap {
          display: none;
          @media screen and (min-width: 321px) {

        }
          @media screen and (min-width: 521px) {
            display: inline;
          }
          @media screen and (min-width: 769px) {
            display: inline;
          }
        }
        .source {
          color: #7d7d7d;
          font-size: 15px;
          padding-top: 10px;
        }
        
      }
      .cover-contain-half {
        position: relative;
        z-index: 100;
        // padding: 17px;
        @media screen and (min-width: 321px) {

        }
        @media screen and (min-width: 521px) {
        }
        @media screen and (min-width: 769px) {
          margin: 0 85px;
        }
        .half-mark {
          background-color: #fff;
          padding: 18px 28px;
        }
        .highline {
          padding-top: 6px;
          font-size: 25px;
          font-weight: bold;
          @media screen and (min-width: 321px) {
            font-size: 42px;
          }
          @media screen and (min-width: 521px) {
            font-size: 50px;
          }
          @media screen and (min-width: 769px) {

          }
          & > .half-mark {
            background-color: #fff;
            padding: 8px 16px;
          }
          &::before {
            content: "當寶島變熱島";
            position: absolute;
            top: -40px;
            left: 0;
            font-size: 20px;
            background-color: #fff;
            padding: 5px 16px;
            font-weight: normal;
            @media screen and (min-width: 321px) {
              top: -40px;
              padding: 8px 16px;
              font-size: 21px;
            }
            @media screen and (min-width: 521px) {
              top: -60px;
            }
            @media screen and (min-width: 769px) {
              top: -40px;
            }
          }
        }
      }
    }
    .cover-background {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100%;
      background-size: cover;
      will-change: transform;
      backface-visibility: hidden; 
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
  }

  .introduction {
    position: relative;
    z-index: 100;
    background-color: #f2f2f2;
    padding: 154px 0 140px 0;
    .share {
      padding-top: 66.8px;
      text-align: center;
      font-size: 37px;
      color: #535353;
      i {
        cursor: pointer;
      }
    }
  }
  .introduction-video {
    position: relative;
    background-color: #f2f2f2;
    #video-wrapper {
      height: 200vh;
      position: relative;
    }
    .video-covor-background {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      object-fit: fill;
      z-index: 80;
      background-color: white;
    }
    .video-covor-background-active {
      position: fixed;
      backface-visibility: hidden;
    }
    .video-covor-content {
      position: absolute;
      width: 100%;
      height: 100vh;
      display: flex;
      z-index: 100;
      justify-content: center;
      align-items: center;
      bottom: 0;
      left: 0;
      .main-title {
        background-color: #ffffff;
        font-size: 25px;
        padding: 7px 8px;
        @media screen and (min-width: 321px) {

        }
        @media screen and (min-width: 521px) {
          padding: 17px 33px;
        }
        @media screen and (min-width: 769px) {
          font-size: 35px;
        }
      }
    }
  }
  .fever-city {
    position: relative;
    z-index: 100;
    background-color: white;
    padding-top: 104px;
    @media screen and (min-width: 321px) {

      }
    @media screen and (min-width: 521px) {
      
    }
    @media screen and (min-width: 769px) {
      padding: 104px 0 228px;
    }
    .chart-title {
       font-size: 17px;
       font-weight: bold;
       padding-bottom: 63px;
       @media screen and (min-width: 321px) {

        }
      @media screen and (min-width: 521px) {
        
      }
      @media screen and (min-width: 769px) {
        font-size: 25px;
      }
    }
    .spread-of-temperature {
      position: relative;
      video {
        width: 100%;
      }
      .charText {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }
    }
    .spread-of-temperature-source {
      color: #7d7d7d;
      font-size: 15px;
      @media screen and (min-width: 321px) {

        }
      @media screen and (min-width: 521px) {
        
      }
      @media screen and (min-width: 769px) {
        font-size: 17px;
      }
    }
    .feature-two {
      @media screen and (min-width: 321px) {

        }
      @media screen and (min-width: 521px) {
        
      }
      @media screen and (min-width: 769px) {
        
        min-height: 100vh;
        // display: flex;
        // justify-content: center;
      }
    }
    .feature-title {
      font-size: 20px;
      font-weight: bold;
      @media screen and (min-width: 321px) {

        }
      @media screen and (min-width: 521px) {
        
      }
      @media screen and (min-width: 769px) {
        font-size: 25px;
      }
    }
    .motos {
      width: 100%;
    }
    .motos-describtion {
      font-size: 17px;
      color: #7d7d7d;
    }
  }
  
  .follow-up {
    position: relative;
    z-index: 90;
    background-color: #fff;
    
    @media screen and (min-width: 321px) {

      }
    @media screen and (min-width: 521px) {
      
    }
    @media screen and (min-width: 769px) {

    }
    .follow-up-main-title {
      font-size: 20px;
      font-weight: bold;
      @media screen and (min-width: 321px) {

        }
      @media screen and (min-width: 521px) {
        
      }
      @media screen and (min-width: 769px) {
        font-size: 25px;
      }
    }
    .follow-up-subtile-wrapper {
      height: 200vh;
      position: relative;
      .follow-up-subtile {
        position: absolute;
        width: 100%;
        height: 100vh;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .follow-up-subtile-content {
          background-color: white;
          .main-title {
            background-color: #ffffff;
            font-size: 25px;
            padding: 7px 8px;
            @media screen and (min-width: 321px) {

            }
            @media screen and (min-width: 521px) {

            }
            @media screen and (min-width: 769px) {
              font-size: 35px;
              padding: 17px 30px;
            }
          }
        }
      }
      .follow-up-subtile-background {
        width: 100%;
        height: 100vh;
        background-image: url('../public/images/heat_island_img5_mob.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        // z-index: 0;
        @media screen and (min-width: 321px) {

        }
        @media screen and (min-width: 521px) {

        }
        @media screen and (min-width: 769px) {
          background-image: url('../public/images/heat_island_img5.jpg');
        }
        &.active {
          position: fixed;
          backface-visibility: hidden;
          z-index: -10;
        }
      }
      
    }
    .follow-up-content {
      background-color: #ffffff;
      padding: 109px 0px 177px;
      @media screen and (min-width: 321px) {

      }
      @media screen and (min-width: 521px) {

      }
      @media screen and (min-width: 769px) {
        font-size: 35px;
        padding: 177px 0px;
      }
      .main-title {
        background-color: #ffffff;
        font-size: 25px;
        padding: 7px 8px;
        @media screen and (min-width: 321px) {

        }
        @media screen and (min-width: 521px) {
          
        }
        @media screen and (min-width: 769px) {
          font-size: 25px;
        }
      }
      .hot-city {
        padding-top: 40px;
        width: 100%;
      }
      .hot-city-describtion {
        font-size: 17px;
        color: #7d7d7d;
      }
      .chart-describtion {
          font-size: 12.5px;
          color: #7d7d7d;
          @media screen and (min-width: 321px) {

          }
          @media screen and (min-width: 521px) {
            
          }
          @media screen and (min-width: 769px) {
            font-size: 17px;
          }
      }
    }
  }
  .number-group {
    background-color: #f2f2f2;
    @media screen and (min-width: 321px) {
       padding: 120px 0 90px;
    }
    @media screen and (min-width: 521px) {

    }
    @media screen and (min-width: 769px) {
      padding: 133px 0 128px;
    }
    .number-group-intro {
      @media screen and (min-width: 321px) {

      }
      @media screen and (min-width: 521px) {

      }
      @media screen and (min-width: 769px) {
        padding-bottom: 50px;
      }
    }
  }
  .end {
    position: relative;
    background-color:white;
    z-index: 100;
    #end-background-video {
      video {
        width: 100%;
        height: 100vh;
        object-fit: fill;
      }
    }
    .box {
      padding: 12px 0 34px;
        &::after {
          content: '';
          display: block;
          clear: both;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {
            padding: 10px;
          }
          @media screen and (min-width: 769px) {
            padding: 10px;
          }
        }
        img {
          float: right;
          width: 100%;
          padding-bottom: 9.4px;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {      
            width: 100%;
            float: none;
          }
          @media screen and (min-width: 769px) {
            width: 100%;
            float: none;
          }
        }
        .describe {
          float: left;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {

            float: none;
          }
          @media screen and (min-width: 769px) {
            float: none;
          }
        }
        
     }
    .ending {
      // border: solid 1.5em rgba(white);
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) 32%, rgba(33, 33, 33, 0.85) 74%, rgba(0, 0, 0, 0.3));
      position: relative;
      z-index: 110;
      color: white;
      .end-report {
        // padding-bottom: 120px;
        // @media screen and (min-width: 321px) and (max-width: 520px) {
        //   padding-bottom: 406px;
        // }
        // @media screen and (min-width: 521px) and (max-width: 768px) {
        //   padding-bottom: 123px;
        // }
        // @media screen and (min-width: 769px) {
        //   padding-bottom: 203px;
        // }
        .end-report-title {
          font-size: 15px;
          padding-bottom: 10px;
          border-bottom: solid 2px #7d7d7d;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {
            
          }
          @media screen and (min-width: 769px) {
            font-size: 25px;
            margin-bottom: 33px;
          }
          .end-report-title-mark {
            background-color:#ff0000;
            padding-right: 5px;
            font-weight: bold;
          }
        }
        .end-report-related-first-layer, .end-report-related-sec-layer {
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {
            display: flex; 
          }
          @media screen and (min-width: 769px) {
            display: flex;
            font-size: 18px;
          }

          .left, .right {
            @media screen and (min-width: 321px) and (max-width: 520px) {
            
            }
            @media screen and (min-width: 521px) and (max-width: 768px) {
              width: 50%;
              
            }
            @media screen and (min-width: 769px) {
              width: 50%;
            }
            img {
              border-radius: 3px;
            }
          }
          .left {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-right: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-right: 6px;
            }
          }
          .right {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-left: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-left: 6px;
            }
          }
        }
        .end-report-related-sec-layer {
          .left, .right {
            @media screen and (min-width: 321px) and (max-width: 520px) {
            
            }
            @media screen and (min-width: 521px) and (max-width: 768px) {
              display: flex;
              
            }
            @media screen and (min-width: 769px) {
              display: flex;
              font-size: 16px;
            }
            .middle-left, .middle-right {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                width: 50%;
                
              }
              @media screen and (min-width: 769px) {
                width: 50%;
              }
            }
          }
          .left {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-right: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-right: 6px;
            }
            .middle-left {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-right: 6px;
                
              }
              @media screen and (min-width: 769px) {
                padding-right: 6px;
              }
            }
            .middle-right {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-left: 6px;
              }
              @media screen and (min-width: 769px) {
                padding-left: 6px;
              }
            }
          }
          .right {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-left: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-left: 6px;
            }
            .middle-left {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-right: 6px;
                
              }
              @media screen and (min-width: 769px) {
                padding-right: 6px;
              }
            }
            .middle-right {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-left: 6px;
              }
              @media screen and (min-width: 769px) {
                padding-left: 6px;
              }
            }
          }
        }
      }
      .share {
        background-color: white;
      }
    }
  }
  .footer {
    width: 100%;
    background-color: white;
    position: relative;
    z-index: 120;
    padding: 15px 0;
  }
}
</style>
