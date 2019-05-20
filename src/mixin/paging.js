import router from '../router'
import Utils from 'udn-newmedia-utils'

var mixin = {
    methods: {
      changePage (lastPage, nextPage, position){
            
            if ( position === 'next' ) {
              window.ga("newmedia.send", {
                  "hitType": "event",
                  "eventCategory": "Swipe",
                  "eventAction": "click",
                  "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [點擊下一頁]"
              })
                this.jumpPage(nextPage)
            }
            if ( position === 'last' ) {
              window.ga("newmedia.send", {
                "hitType": "event",
                "eventCategory": "Swipe",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [點擊上一頁]"
            })
                this.jumpPage(lastPage)
            }
        },
      jumpPage (whichPage) {    
        router.push(whichPage)
      }
    }
  }
  
  export default mixin
  