import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Contribution</h1>
        <hr/>
        <p>We validated an existing part of the hypoxia-inducible promoter vgb (BBa_K561001) and added the results to the corresponding BioBricks. All of this may help other teams. We hope it will make a contribution to the IGEM community.</p>
        <hr/>

        <p>Based on the sequence of BBa_K561001, we demonstrated the function of vgb promoter to express the target protein in E. coli low oxygen conditions, and the results were showed as follows: </p> 
        <p>The plasmid containing vgb promoter were constructed and transformed into E. coli BL21(DE3), then the transformed E. coli were screened using Kanamycin that was added to the LB medium. Fig. 1 showed that many colonies were grown on the plate, proving that the plasmid was transformed successfully into E.coli.</p>
        <img-fluid alt="Characterization_01" src="/resources/images/Characterization_01.jpg" caption="Fig 1. Transformation result of the plasmid containing vgb"></img-fluid> 
        <p>A single positive clone was cultured in LB medium overnight, and then 30μl of bacterial solution were added to 3 mL of LB medium and cultured for about 8 hours in low oxygen conditions. The whole bacteria protein and supernant protein were collected followed by Western blot identification. The results were shown in Fig. 2. It revealed that under the function of the vgb promoter, our target gene could be successfully expressed in E. coli.</p>
        <img-fluid alt="Characterization_02" src="/resources/images/Characterization_02.jpg" caption="Fig 2. Western blot analysis for the vectors harboring vgb promoter expressed in E. coli"></img-fluid> 
        <p>In conclusion, the target protein could be induced in E. coli under the control of the vgb promoter under low oxygen conditions.</p>
    </writing-container>
    `
}