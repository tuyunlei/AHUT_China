const ref = Vue.ref;
const onMounted = Vue.onMounted;

export default {
    template: `
    <link rel="stylesheet" type="text/css" href="/Template/AHUT_China/CSS/WritingContainer.css">

    <div class="container-fluid writing-container">
        <div class="row">
            <div class="d-none d-xl-block sticky-top catalog col-3 mx-5 mt-5 px-5 pt-4 pb-5 rounded-16">
                <h2 class="text-center">Catalog</h2>
                <a v-for="h2 in all_h2" :href="h2.id">{{h2.name}}</a>
            </div>
    
            <div ref="container" class="container col-xl-8 col-10 my-5 px-5 py-4 ms-xl-0 text-light rounded-32 lh-lg">
                <slot></slot>
            </div>
        </div>
    </div>
    `,
    setup(props, context) {
        let all_h2 = ref([]);
        let container = ref(null);

        onMounted(() => {
            console.log(container.value)
            let all_h2_dom = container.value.querySelectorAll('h2');
            all_h2_dom.forEach((dom, index) => {
                let name = dom.innerText;
                let id = dom.id;
                if (!id) {
                    id = '_h2_' +  index;
                    dom.id = id;
                }
                id = '#' + id;
                all_h2.value.push({name, id});
            });
        })

        return {
            all_h2,
            container
        };
    }
};
