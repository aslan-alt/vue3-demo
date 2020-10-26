import {createRouter, createWebHashHistory} from "vue-router";
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import Switch from './components/SwitchDemo.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[{path:'switch',component:Switch}]}
    ]
})
router.afterEach(()=>{
    console.log('路由切换了')
})
export {
    router
}