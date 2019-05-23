var myMixin = {
    methods: {
        isElementInViewport (el) {
            if (el) {
                var rect = el.getBoundingClientRect();       
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
                );
            } else {
                return false
            }
        },
        sayHello () {
            console.log("hello")
        }
    }
  }

  export default myMixin