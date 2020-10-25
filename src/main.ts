import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import pageOne from './components/pageOne.vue'
import HelloWorld from './components/HelloWorld.vue'

console.log(HelloWorld)
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: pageOne},
        {path: '/home', component: HelloWorld}
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')
