import NavBar from '/Template/AHUT_China/COM/NavBar.js'

const Home = () => import('/Template/AHUT_China/COM/Home.js')

const sub_routes = [
    {name: 'Attributions', com_path: '/Team/Attributions'},
    {name: 'Description', com_path: '/Project/Description'},
    {name: 'Human_Practices', com_path: '/HP/HumanPractices'},
    {name: 'Education', com_path: '/HP/Education'},
]

const root_routes = [
    {name: 'Home', path: '/index', component: Home},
]

sub_routes.map((sub) => {
    let route = {
        name: sub.name,
        path: '/' + sub.name,
        component: () => import('/Template/AHUT_China/COM' + sub.com_path + '.js')
    }
    root_routes.push(route)
})

const routes = [
    {path: '/', redirect: {name: 'Home', params: {AHUT_China: ':AHUT_China'}}}
]

root_routes.map((route) => {
    route.path = '/Team/AHUT_China' + route.path + '.html'
    routes.push(route)
})

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = Vue.createApp({
    components: {
        'nav-bar': NavBar
    },
    /* 选项 */
    data() {
        return {
            loading: true,
        }
    },
})

// app.config.devtools = true
app.config.performance = true

app.use(router)

router.afterEach(() => vm.$nextTick(() => vm.loading = false))

const vm = app.mount('#app')
