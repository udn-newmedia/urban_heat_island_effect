<template>
  <div class="logo">
      <ul class="logo-lists">
          <li class="list link_active" @click="handleGA(links[0].name)" >
              <a :href="links[0].link">
                  <img :src="links[0].logo" alt="">
              </a>
          </li>
          <li class="list link_active" @click="handleGA(links[1].name)" >
              <a :href="links[1].link">
                  <img :src="links[1].logo" alt="">
              </a>
          </li>
          <li class="list" @click="handleGA(links[2].name)" >
              <a>
                  <img :src="links[2].logo" alt="">
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import setProps from '@/mixin/setProps.js'
export default {
  name: 'logo',
  mixins: [setProps],
  data () {
      return {
          links: [
              {
                  name: '願景工程',
                  link: 'https://vision.udn.com/',
                  logo: require('../../../public/images/logo/vision_logo.svg')
              },
              {
                  name: '聯合新聞網',
                  link: 'https://udn.com/news/index',
                  logo: require('../../../public/images/logo/footer_logo_UDN_white.svg')
              },
              {
                  name: '新媒體中心',
                  link: '.',
                  logo: require('../../../public/images/logo/footer_logo_newmedia_white.svg')
              }
          ]
      }
  },
  props: {

  },
  methods: {
      handleGA (logo) {
        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "logo_main",
            "eventAction": "Click_main",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "][.com_main][外連到「 " + logo +  " 」]"
        })
      }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.logo {
    margin: 35px 0;
    display: flex;
    justify-content: center;
    .logo-lists {
        margin: 10px 16px;
       list-style:none;
       .list {
           display: inline-block;
           width: 128px;
           height: 37px;
           color: white;
           &.link_active {
               cursor: pointer;
           }
       }
    }
}
</style>
