import NavBar from '/Template/AHUT_China/COM/NavBar.js'

const Home = () => import('/Template/AHUT_China/COM/Home.js')

const sub_routes = [
    {name: 'Model', com_path: '/Model'},
    {name: 'Attributions', com_path: '/Team/Attributions'},
    {name: 'Collaborations', com_path: '/Team/Collaborations'},
    {name: 'Partnership', com_path: '/Team/Partnership'},
    {name: 'Description', com_path: '/Project/Description'},
    {name: 'Implementation', com_path: '/Project/ProposedImplementation'},
    {name: 'Human_Practices', com_path: '/HP/HumanPractices'},
    {name: 'Education', com_path: '/HP/Education'},
    {name: 'Parts', com_path: '/Parts/Overview'},
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
    .component('img-fluid', {
        template: `
        <div>
            <img :alt="alt" :src="src" class="img-fluid" :class="{'pb-4': !caption}">
            <p v-if="caption" class="img-caption">{{caption}}</p>
        </div>
        `,
        props: ['alt', 'src', 'caption'],
    })
    .component('img-caption', {
        template: `<p class="img-caption"><slot></slot></p>`
    })
    .component('table-caption', {
        template: `<p class="table-caption"><slot></slot></p>`
    })
    .use(router)

// app.config.devtools = true
app.config.performance = true

router.afterEach(() => vm.$nextTick(() => vm.loading = false))

window.vm = app.mount('#app')
