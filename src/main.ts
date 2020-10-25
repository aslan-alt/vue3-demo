import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {path: '/home', component: Doc}
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')
