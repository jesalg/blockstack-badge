import Vue from 'vue'
import App from './App.vue'

window.blockstack = require('blockstack')

Vue.config.productionTip = false

let profiles = Array.from(document.getElementsByClassName('bs-profile'));
profiles.forEach(profile => {
  const vm = new Vue({
    render: h => h(App, {
      props: {
        profile_id: profile.dataset.profile
      }
    })
  })
  vm.$mount(profile)
});
