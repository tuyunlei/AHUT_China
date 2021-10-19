const CustomRouterLink = {
    template: `
    <router-link :to="{name: to, hash: hash, params: {AHUT_China: ':AHUT_China'}}">
        <slot></slot>
    </router-link>`,
    props: {
        to: {
            type: String,
            default: 'Home',
        },
        hash: {
            type: String,
            default: '',
        },
    }
}

const NavItem = {
    components: {
        'custom-link': CustomRouterLink
    },
    template: `
    <li class="nav-item">
        <custom-link class="py-xl-4 px-xxl-4 px-xl-3 p-2 nav-link text-light fs-6" :to="to" :hash="hash">
            <img v-if="icon" :alt="icon" :src="icon_src" style="display: block; margin: 0 auto;" width="28" height="28">
            <span v-if="title">{{ title }}</span>
        </custom-link>
    </li>
    `,
    props: ['title', 'to', 'hash', 'icon'],
}

const NavItemDropdown = {
    template: `
    <li class="nav-item dropdown">
        <span class="py-xl-4 px-xxl-4 px-xl-3 p-2 nav-link dropdown-toggle text-light fs-6" data-bs-toggle="dropdown">
            <img v-if="icon" :alt="icon" :src="icon_src" style="display: block; margin: 0 auto;" width="28" height="28">
            <span>{{ title }}</span>
        </span>
        <ul class="dropdown-menu">
            <slot></slot>
        </ul>
    </li>
    `,
    props: ['title', 'icon'],
    computed: {
        icon_src() {
            return `/resources/images/icons/${this.icon}.png`
        }
    }
}

const DropdownItem = {
    components: {
        'custom-link': CustomRouterLink
    },
    template: `
        <li>
            <custom-link class="px-4 py-xl-3 py-1 dropdown-item text-light fs-6" :to="to" :hash="hash">
                {{ title }}
            </custom-link>
        </li>
    `,
    props: ['title', 'to', 'hash'],
}

export default {
    components: {
        'nav-item': NavItem,
        'nav-item-dropdown': NavItemDropdown,
        'dropdown-item': DropdownItem
    },
    template: `
    <link rel="stylesheet" type="text/css" href="/Template/AHUT_China/CSS/NavBar.css">
    <nav class="navbar navbar-light navbar-expand-xl rounded-pill-xl rounded-top-xl py-0">
        <div class="container-fluid ps-xxl-5 ps-4 pe-xxl-4 pe-xl-0 pe-5">
            <a class="navbar-brand ms-2 ms-xxl-4 py-xl-0 py-2" href="#">
                <img src="/resources/images/logo2.jpg" alt="logo" width="85" height="56">
                <span class="ms-2 text-light fs-5">AHUT_China</span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="navbarResponsive" style="">
                <ul class="navbar-nav ms-auto my-xl-0 mb-3">
                    <nav-item style="text-align: center;" title="HOME" icon="home2"></nav-item>
                    <nav-item-dropdown title="TEAM" icon="team">
                        <dropdown-item title="Team Members"></dropdown-item>
                        <dropdown-item title="Attributions" to="Attributions"></dropdown-item>
                        <dropdown-item title="Collaborations" to="Collaborations"></dropdown-item>
                        <dropdown-item title="Partnership" to="Partnership"></dropdown-item>
                    </nav-item-dropdown>
                    <nav-item-dropdown title="PROJECT" icon="project">
                        <dropdown-item title="Description" to="Description"></dropdown-item>
                        <dropdown-item title="Design"></dropdown-item>
                        <dropdown-item title="Contribution"></dropdown-item>
                        <dropdown-item title="Proposed Implementation" to="Implementation"></dropdown-item>
                        <dropdown-item title="Proof of Concept"></dropdown-item>
                        <dropdown-item title="Excellence in Another Area"></dropdown-item>
                        <dropdown-item title="Engineering"></dropdown-item>
                    </nav-item-dropdown>
                    <nav-item-dropdown title="EXPERIMENTS" icon="experiments">
                        <dropdown-item title="Protocol"></dropdown-item>
                        <dropdown-item title="Results"></dropdown-item>
                        <dropdown-item title="Safety"></dropdown-item>
                    </nav-item-dropdown>
                    <nav-item-dropdown title="PARTS" icon="parts">
                        <dropdown-item title="Overview" to="Parts"></dropdown-item>
                        <dropdown-item title="New Parts"></dropdown-item>
                        <dropdown-item title="Improved Parts"></dropdown-item>
                        <dropdown-item title="Characterization"></dropdown-item>
                    </nav-item-dropdown>
                    <nav-item-dropdown title="HP" icon="hp">
                        <dropdown-item title="HP for Silver" to="Human_Practices"></dropdown-item>
                        <dropdown-item title="Integrated HP for Gold" to="Human_Practices" hash="#gold"></dropdown-item>
                        <dropdown-item title="Education" to="Education"></dropdown-item>
                    </nav-item-dropdown>
                    <nav-item title="MODEL" to="Model" icon="model"></nav-item>
<!--                    <nav-item title="JUDGING FORM"></nav-item>-->
                </ul>
            </div>
        </div>
    </nav>
    `,
}