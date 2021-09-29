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
        route.path = `/${sub.name}/${route.name}`
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
    /* 选项 */
    data() {
        return {
            ifMask: true,
        }
    },
    mounted() {
        this.ifMask = false
    },
})

// app.config.devtools = true
app.config.performance = true

app.use(router)

app.component('nav-item', {
    template: `
    <li class="nav-item">
        <router-link class="py-xl-4 px-xxl-4 px-xl-3 p-2 nav-link text-light fs-6" :to="{name: to}">{{ title }}</router-link>
    </li>
    `,
    props: {
        title: String,
        to: {
            type: String,
            default: 'Home',
        }
    }
})

app.component('nav-item-dropdown', {
    template: `
    <li class="nav-item dropdown">
        <a class="py-xl-4 px-xxl-4 px-xl-3 p-2 nav-link dropdown-toggle text-light fs-6" data-bs-toggle="dropdown">{{ title }}</a>
        <ul class="dropdown-menu">
            <slot></slot>
        </ul>
    </li>
    `,
    props: ['title'],
})

app.component('dropdown-item', {
    template: `<li><router-link class="px-4 py-xl-3 py-1 dropdown-item text-light fs-6" :to="{name: to}">{{ title }}</router-link></li>`,
    props: {
        title: String,
        to: {
            type: String,
            default: 'Home'
        }
    },
})

const vm = app.mount('#app')
