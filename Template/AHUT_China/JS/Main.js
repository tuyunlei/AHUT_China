import NavBar from '/IGEM/Template/AHUT_China/COM/NavBar.js'

const Home = () => import('/IGEM/Template/AHUT_China/COM/Home.js')

const sub_routes = [{
    name: 'Team', routes: [{
        name: 'Members', component: () => import('/IGEM/Template/AHUT_China/COM/Team/Members.js')
    }, {
        name: 'Attribution', component: Home
    }, {
        name: 'Collaboration', component: Home
    }, {
        name: 'Parternership', component: Home
    }]
}, {
    name: 'Project', routes: [{
        name: 'Description', component: Home
    }, {
        name: 'Design', component: Home
    }, {
        name: 'Contribution', component: Home
    }, {
        name: 'ProposedImplementation', component: Home
    }, {
        name: 'ProofOfConcept', component: Home
    }, {
        name: 'ExcellenceInAnotherArea', component: Home
    }, {
        name: 'Engineering', component: Home
    }]
}, {
    name: 'Experiments', routes: [{
        name: 'Protocol', component: Home
    }, {
        name: 'Results', component: Home
    }, {
        name: 'Safety', component: Home
    }]
}, {
    name: 'Parts', routes: [{
        name: 'Overview', component: Home
    }, {
        name: 'NewParts', component: Home
    }, {
        name: 'ImprovedParts', component: Home
    }, {
        name: 'Characterization', component: Home
    }]
}, {
    name: 'HP', routes: [{
        name: 'HPForSilver', component: Home
    }, {
        name: 'IntegratedHPForGold', component: Home
    }, {
        name: 'Education', component: Home
    }]
}]

const root_routes = [
    {name: 'Home', path: '/index.html', component: Home}
]

sub_routes.map((sub) => {
    sub.routes.map((route) => {
        route.path = `/${sub.name}/${route.name}.html`
        route.name = sub.name + route.name
        root_routes.push(route)
    })
})

const routes = [{path: '/', redirect: {name: 'Home'}}]

root_routes.map((route) => {
    route.path = '/IGEM/Team/AHUT_China' + route.path
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
    beforeCreate() {
        console.log('Main before create')
    },
    mounted() {
        console.log('Main mounted')
    },
})

// app.config.devtools = true
app.config.performance = true
app.use(router)

router.afterEach((to, from) => {
    console.log('after', to, from)
    vm.$nextTick(function() {
        this.loading = false
    })
})

const vm = app.mount('#app')
