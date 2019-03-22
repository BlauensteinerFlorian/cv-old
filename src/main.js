import Vue from 'vue'
import Cv from './Cv.vue'
import VueParticles from 'vue-particles'
var VueScrollTo = require('vue-scrollto');

 
Vue.use(VueScrollTo)

Vue.use(VueParticles)

Vue.config.productionTip = false

require("./assets/main.scss")


new Vue({
  render: h => h(Cv),
}).$mount('#cv')



