import Vue from 'vue'
import App from './App.vue'
import router from './router'
import officeScenes from './escape-office.js'
import punchScenes from './punch-time.js'

let data = {
  officeData: {
    scenes: officeScenes,
    currentScene: "start",
    hasFileKey: false,
    hasDoorKey: false,
  },
  punchData: {
    scenes: punchScenes,
    currentScene: "new-game",
    time: 60,
    score: 0,
    currBagHealth: 20,
    endGame: false,
  }
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
