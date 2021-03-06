const ref = Vue.ref;
const onMounted = Vue.onMounted;

export default {
    template: `
    <div class="container-fluid writing-container">
        <link rel="stylesheet" type="text/css" href="/Template/AHUT_China/CSS/WritingContainer.css">
        <div class="row">
            <div class="d-none d-xl-block sticky-top catalog col-3 mx-5 mt-5 px-4 pt-4 pb-5 rounded-16">
                <h2 class="text-center">Catalog</h2>
                <a v-for="title in titles" :class="title.clazz" :href="title.id">{{ title.text }}</a>
            </div>

            <div ref="container" class="container col-xl-8 col-10 my-5 px-5 py-4 ms-xl-0 text-light rounded-32 lh-lg">
                <slot></slot>
            </div>
        </div>
    </div>
    `,
    setup() {
        let titles = ref([]);
        let container = ref(null);

        onMounted(() => {
            let class_map = {
                h1: 'first-level',
                h2: 'second-level',
                h3: 'third-level',
            };

            let title_doms = container.value.querySelectorAll('h1,h2,h3');
            title_doms.forEach((dom, index) => {
                let id = dom.id;
                let name = dom.tagName.toLowerCase();
                let text = dom.innerText;
                let clazz = class_map[name];

                if (!id) {
                    id = `_${name}_${index}`;
                    dom.id = id;
                }
                id = '#' + id;
                titles.value.push({id, name, text, clazz});
            });
        })

        return {
            titles,
            container
        };
    }
};
