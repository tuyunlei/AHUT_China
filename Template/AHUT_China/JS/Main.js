import NavBar from '/Template/AHUT_China/COM/NavBar.js'

const Home = () => import('/Template/AHUT_China/COM/Home.js')

const sub_routes = [
    {name: 'Model', com_path: '/Model'},
    {name: 'Notebook', com_path: '/Notebook'},
    {name: 'Attributions', com_path: '/Team/Attributions'},
    {name: 'Collaborations', com_path: '/Team/Collaborations'},
    {name: 'Partnership', com_path: '/Team/Partnership'},
    {name: 'Contribution', com_path: '/Project/Contribution'},
    {name: 'Description', com_path: '/Project/Description'},
    {name: 'Excellence', com_path: '/Project/Excellence'},
    {name: 'Engineering', com_path: '/Project/Engineering'},
    {name: 'Proof_Of_Concept', com_path: '/Project/ProofOfConcept'},
    {name: 'Implementation', com_path: '/Project/ProposedImplementation'},
    {name: 'Results', com_path: '/Experiments/Results'},
    {name: 'Human_Practices', com_path: '/HP/HumanPractices'},
    {name: 'Education', com_path: '/HP/Education'},
    {name: 'Communication', com_path: '/HP/Education'},
    {name: 'Parts', com_path: '/Parts/Overview'},
    {name: 'New_Parts', com_path: '/Parts/New'},
    {name: 'Improved_Parts', com_path: '/Parts/Improved'},
]

const root_routes = [
    {name: 'Home', path: '/index', component: Home}
]

for (let sub of sub_routes) {
    let route = {
        name: sub.name,
        path: '/' + sub.name,
        component: () => import('/Template/AHUT_China/COM' + sub.com_path + '.js')
    }
    root_routes.push(route)
}

const routes = [
    {path: '/', redirect: {name: 'Home', params: {AHUT_China: ':AHUT_China'}}},
    {name: 'Judging_Form', path: '//igem.org/2021_Judging_Form?id=3981'},
    {name: 'Safety_Form', path: '/Safety/Final_Safety_Form?team_id=3981'}
]

for (let route of root_routes) {
    route.path = `/Team/AHUT_China${route.path}.html`
    routes.push(route)
}

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return {left: 0, top: 0}
        }
    },
})

const app = Vue.createApp({
    components: {
        'nav-bar': NavBar
    },
    data() {
        return {
            loading: true,
        }
    },
})
    .component('img-fluid', {
        template: `
        <img v-bind="$attrs" :alt="alt" :src="src" class="img-fluid" :class="{'pb-4': !caption}">
        <p v-if="caption" class="img-caption">{{caption}}</p>
        `,
        props: ['alt', 'src', 'caption'],
    })
    .component('img-caption', {
        template: `<p class="img-caption"><slot></slot></p>`
    })
    .component('table-caption', {
        template: `<p class="table-caption"><slot></slot></p>`
    })
    .component('partinfo', {
        template: `<a :href="href" target="_blank">BBa_{{name}}</a>`,
        props: ['name'],
        computed: {
            href() {
                return 'http://parts.igem.org/Part:BBa_' + this.name;
            }
        }
    })
    .use(router)

// app.config.devtools = true
app.config.performance = true

router.beforeEach(() => window.vm.loading = true)
router.afterEach(() => window.vm.$nextTick(() => window.vm.loading = false))

window.vm = app.mount('#app')
