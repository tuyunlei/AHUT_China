import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Overview</h1>
        <hr/>
        <p>This year, among the 10 parts designed, 7 of them are basic parts and the rest are composite parts. Most of them have been tested to insure their reliability. These sections have been uploaded to the registry and are compatible with Biobrick RFC10 or Type IIS. We sincerely hope that these components will help other IGEM team projects and contribute to the field of synthetic biology. The section we added is shown in the following table.</p>
        <hr/>

        <h2>Basic Parts</h2>
        <table class="mx-auto">
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Length(bp)</th>
            </tr>    
            </thead>
            <tbody>
            <tr v-for="part in basic_parts">
                <td>
                    <partinfo :name="part.name"></partinfo>
                </td>
                <td>{{ part.type }}</td>
                <td>{{ part.description }}</td>
                <td>{{ part.length }}</td>
            </tr>
            </tbody>
        </table>

        <h2>Composite Parts</h2>
        <table class="mx-auto">
            <thead>
            <tr>
                <td>Name</td>
                <td>Type</td>
                <td>Description</td>
                <td>Length</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="part in composite_parts">
                <td>
                    <partinfo :name="part.name"></partinfo>
                </td>
                <td>{{ part.type }}</td>
                <td>{{ part.description }}</td>
                <td>{{ part.length }}</td>
            </tr>
            </tbody>
        </table>

    </writing-container>
    `,
    setup() {
        const basic_parts = [{
            name: 'K3981000',
            type: 'Coding',
            description: 'isoleucine zipper',
            length: 96,
        }, {
            name: 'K3981001',
            type: 'Coding',
            description: 'Her2-affibody',
            length: 174,
        }, {
            name: 'K3981002',
            type: 'Coding',
            description: 'pelB',
            length: 66,
        }, {
            name: 'K3981003',
            type: 'Coding',
            description: '6xHis - tag',
            length: 18,
        }, {
            name: 'K3981004',
            type: 'Coding',
            description: 'sTRAIL',
            length: 507,
        }, {
            name: 'K3981005',
            type: 'Promoter',
            description: 'Vgb',
            length: 135,
        }, {
            name: 'K3981006',
            type: 'Coding',
            description: 'GS linker',
            length: 21,
        }];

        const composite_parts = [{
            name: 'K3981013',
            type: 'Composite',
            description: 'pET28a-vgb - pelb - linker - his - linker - her2 - linker - ISZ - sTRAIL',
            length: 1059
        }, {
            name: 'K3981014',
            type: 'Composite',
            description: 'pET28a-his - linker - ISZ - sTRAIL',
            length: 642
        }, {
            name: 'K3981015',
            type: 'Composite',
            description: 'pET28a-his - linker - her2 - linker - ISZ - sTRAIL',
            length: 837
        }];

        return {
            basic_parts,
            composite_parts
        }
    }
}