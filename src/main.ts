import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './styles/index.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)

createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)
.mount('#app')
