import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// CSS
import './assets/css/app.css'
import './assets/css/theme.css'
import './assets/css/font-awesome.min.css'
import './assets/layerslider/css/layerslider.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/responsive.css'

// JS
// import './assets/bower_components/jquery/dist/jquery.js'
// import './assets/bower_components/what-input/what-input.js'
// import './assets/bower_components/foundation-sites/dist/foundation.js'
// import './assets/js/jquery.showmore.src.js'
// import './assets/js/app.js'
// import './assets/layerslider/js/greensock.js'
// // // //
// import './assets/layerslider/js/layerslider.transitions.js'
// import './assets/layerslider/js/layerslider.kreaturamedia.jquery.js'
// // import './assets/js/owl.carousel.min.js'
// // import './assets/js/inewsticker.js'
// // import './assets/js/jquery.kyco.easyshare.js'

Vue.config.productionTip = false
Vue.prototype.api_url = 'http://api.hdonlinephim.com/'
// Vue.prototype.api_url = 'http://127.0.0.1:8000/'
Vue.prototype.url = 'http://localhost:8080/'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
