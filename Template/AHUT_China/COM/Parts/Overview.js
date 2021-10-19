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
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Length(bp)</th>
            </tr>    
            </thead>
            <tbody>
            <tr>
                <td>BBa_K3981000</td>
                <td>Coding</td>
                <td>isoleucine zipper</td>
                <td>96</td>
            </tr>
            <tr>
                <td>BBa_K3981001</td>
                <td>Coding</td>
                <td>Her2-affibody</td>
                <td>174</td>
            </tr>
            <tr>
                <td>BBa_K3981002</td>
                <td>Coding</td>
                <td>pelB</td>
                <td>66</td>
            </tr>
            <tr>
                <td>BBa_K3981003</td>
                <td>Coding</td>
                <td>6xHis-tag</td>
                <td>18</td>
            </tr>
            <tr>
                <td>BBa_K3981004</td>
                <td>Coding</td>
                <td>sTRAIL</td>
                <td>507</td>
            </tr>
            <tr>
                <td>BBa_K3981005</td>
                <td>Promoter</td>
                <td>Vgb</td>
                <td>135</td>
            </tr>
            <tr>
                <td>BBa_K3981006</td>
                <td>Coding</td>
                <td>GS linker</td>
                <td>21</td>
            </tr>
            </tbody>
        </table>

        <h2>Composite Parts</h2>
        <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Type</td>
                <td>Description</td>
                <td>Length</td>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BBa_K3981013</td>
                    <td>Coding</td>
                    <td>pET28a-vgb-pelb-linker-his-linker-her2-linker-ISZ-sTRAIL</td>
                    <td>1059</td>
                </tr>
                <tr>
                    <td>BBa_K3981014</td>
                    <td>Coding</td>
                    <td>pET28a-his-linker-ISZ-sTRAIL</td>
                    <td>642</td>
                </tr>
                <tr>
                    <td>BBa_K3981015</td>
                    <td>Coding</td>
                    <td>pET28a-his-linker-her2-linker-ISZ-sTRAIL</td>
                    <td>837</td>
                </tr>
            </tbody>
        </table>

    </writing-container>
    `
}