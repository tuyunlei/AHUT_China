import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Engineering</h1>
        <hr/>
        <p>In our project, we have achieved engineering success in two constructed new parts (<partinfo name="K3981013"></partinfo> <partinfo name="K3981015"></partinfo>) by going through iterations of the engineering design cycle. As a result, an engineered E. coli BL21(DE3) could efficiently express soluble Her2-ISZ-sTRAIL protein with potential anti-tumor activity and an antitumor engineered strain EcN 1917 (Her2-ISZ-sTRAIL) were successfully constructed. The specific engineered processes of these two strains were as follows.</p>
        <hr/>

        <h2>1. Construction of the engineered E. coli BL21(DE3) expressing soluble Her2-ISZ-sTRAIL protein</h2>
        <h3>1.1 Construction of Her2-ISZ-sTRAIL expression plasmid</h3>
        <p>The coding sequence of Her2-ISZ-sTRAIL with a His-tag were designed by our group, then synthesized and cloned into pET-28a(+) expression vector by company. Fig.1 showed the map of the obtained pET-28a(+)-His-linker-Her2- ISZ-sTRAIL recombinant plasmid.</p>
        <img-fluid alt="Engineering_01" src="/resources/images/Engineering/Engineering_01.png" caption="Fig .1 Map of Her2-ISZ-sTRAIL recombinant vector"></img-fluid>
        <h3>1.2 Establishment of an engineered E. coli BL21(DE3) strain for expression of Her2-ISZ-sTRAIL protein</h3>
        <h4>1.2.1 Transformation</h4>
        <p>The Her2-ISZ-sTRAIL expression plasmids were then transformed into E. coli BL21 (DE3), and positive clones were selected on the basis of kanamycin resistance. Many positive clones were grown on the plates (Fig. 2).</p>
        <img-fluid alt="Engineering_02" src="/resources/images/Engineering/Engineering_02.jpg" caption="Fig. 2 Positive colonies harboring Her2-ISZ-sTRAIL expression plasmids grown on the plate with kanamycin"></img-fluid>
        <h4>1.2.2 Induced expression of Her2-ISZ-sTRAIL protein in E. coli BL21 (DE3)</h4>
        <p>Then, with an IPTG concentration of 0.8 mM, the expression of Her2-ISZ-sTRAIL in the recombinant E. coli BL21 (DE3) was induced. The cells were lysed by sonication on ice, the obtained crude extract was centrifuged to separate the supernatant from debris, and the two parts were respectively subjected to SDS-PAGE. The arrow indicated in Fig. 3 was the band of Her2-ISZ-sTRAIL protein, which was consistent with the molecular weight of Her2-ISZ-sTRAIL -- about 32 kDa. It can be seen from lane 1 and 2 that IPTG apparently induced the expression of Her2-ISZ-sTRAIL protein. The results in lane 2 and 3 indicated that Her2-ISZ-sTRAIL was mainly expressed in the supernatant of cell lysate, demonstrating that Her2-ISZ-sTRAIL could be expressed as soluble protein in our engineered E. coli.</p>
        <img-fluid alt="Engineering_03" src="/resources/images/Engineering/Engineering_03.jpg" caption="Fig. 3 SDS-PAGE analysis of induced Her2-ISZ-sTRAIL expression in E. coli BL21(DE3)"></img-fluid> 
        <h3>1.3 Purification of Her2-ISZ-sTRAIL protein</h3>
        <p>After confirming that Her2-ISZ-sTRAIL could be expressed in E. coli BL21 (DE3), the Her2-ISZ-sTRAIL protein was further purified with a nickel column. A clear band with the correct molecular weight was shown in Fig. 4. Western blot analysis using antibody for Histidine further demonstrated that this band was Her2-ISZ-sTRAIL protein (Fig. 5), suggesting that Her2-ISZ-sTRAIL was efficiently purified.</p>
        <img-fluid alt="Engineering_04" src="/resources/images/Engineering/Engineering_04.png" caption="Fig. 4 Her2-ISZ-sTRAIL protein was purified by Ni column and different fractions were analyzed by SDS-PAGE. Lane M: Protein marker; Lane 1: cell lysates without IPTG induction; Lane 2: cell lysates with IPTG induction; Lane 3: purified Her2-ISZ-sTRAIL protein."></img-fluid>
        <img-fluid alt="Engineering_05" src="/resources/images/Engineering/Engineering_05.jpg" caption="Fig. 5 Western blot analysis of purified Her2-ISZ-sTRAIL protein."></img-fluid>
        
        <h3>1.4 Biological activity of Her2-ISZ-sTRAIL protein</h3>
        <p>Finally, MTT assay was applied to test the potential toxicity of Her2-ISZ-sTRAIL protein on Her2-positive BT-474 breast cancer cells, and the result showed that the purified Her2-ISZ-sTRAIL protein could efficiently inhibit the growth of BT-474 cells (Fig. 6).</p> 
        <img-fluid alt="Engineering_06" src="/resources/images/Engineering/Engineering_06.png" caption="Fig. 6 In vitro toxicity effect of Her2-ISZ-sTRAIL protein on BBT-474 cells via MTT assay"></img-fluid>
        <p>In conclusion, an engineered E. coli BL21(DE3) could efficiently express soluble Her2-ISZ-sTRAIL protein with potential anti-tumor activity was successfully constructed.</p>
        
        <h2>2. Construction of the antitumor engineered strain EcN 1917 (Her2-ISZ-sTRAIL)</h2>
        <p>Based on the result that Her2-ISZ-sTRAIL protein could efficiently inhibit the growth of breast cancer cells, in order to enhance the anti-tumor effect of Her2-ISZ-sTRAIL protein, E.coli Nissle 1917 (EcN 1917), an intestinal probiotic with higher tumor-targeting ability to proliferate in hypoxic regions of tumors, was utilized as a targeted transport vector to deliver Her2-ISZ-sTRAIL protein to tumor hypoxic regions. Therefore, a new part (<partinfo name="K3981013"></partinfo>) of pET28a(+)-Vgb-pelB-linker-His-linker-Her2-linker-ISZ-Strail (Vgb-pelB-Her2-ISZ-sTRAIL for short) was constructed, in which Her2-linker-ISZ-Strail was placed under the hypoxia promoter Vgb and signal peptide pelB was added to increase the secretory expression of Her2-linker-ISZ-Strail protein (Fig. 7).</p> 
        <img-fluid alt="Engineering_07" src="/resources/images/Engineering/Engineering_07.jpg" caption="Fig.7 Construction map of Vgb-pelB-linker-His-linker-Her2-linker-ISZ-Strail fusion vector"></img-fluid>
        <h3>2.1 Construction of Vgb-pelB-Her2-ISZ-sTRAIL expression plasmid</h3>
        <p>The sequence of Vgb-pelB-Her2-ISZ-sTRAIL was synthesized and inserted into ApaI and XhoI sites of pET28a(+) expression vectors by company to obtain the hypoxia expression vector -- pET28a(+)-Vgb-pelB-Her2-ISZ-sTRAIL recombinant plasmid (Fig. 8 and Fig. 9).</p>
        <img-fluid alt="Engineering_08" src="/resources/images/Engineering/Engineering_08.png" caption="Fig. 8 Map of Vgb-pelB-Her2-ISZ-sTRAIL recombinant vector"></img-fluid>
        <img-fluid alt="Engineering_09" src="/resources/images/Engineering/Engineering_09.png" caption="Fig. 9 Agarose gel electrophoresis of Vgb-pelB-Her2-ISZ-sTRAIL recombinant plasmid. M: DNA Marker; 1: pET-28a- Vgb-pelB-Her2-ISZ-sTRAIL; 2.pET-28a(+)"></img-fluid>
        
        <h3>2.2 Construction of an engineered EcN 1917 probiotic strain with Vgb-pelB-Her2-ISZ-sTRAIL</h3> 
        <p>The Vgb-pelB-Her2-ISZ-sTRAIL plasmid was electrotransformed into EcN 1917, and the positive colonies were screened by patching onto kanamycin LB agar plates. An antitumor engineered strain EcN 1917 (Her2-ISZ-sTRAIL) was successfully obtained (Fig. 10-1). Also the control engineered EcN 1917 (28a) was constructed (Fig. 10-2).</p>
        <img-fluid alt="Engineering_10" src="/resources/images/Engineering/Engineering_10.jpg" caption="Fig. 10 Results of electroporation of Vgb-pelB-Her2-ISZ-sTRAIL plasmid (1) and pET-28a (+) plasmid (2) into EcN 1917"></img-fluid>
        
        <h3>2.3 Her2-ISZ-sTRAIL protein was successfully expressed in tumor-targeting bacteria EcN 1917</h3>
        <p>EcN(Her2-ISZ-sTRAIL) and EcN(28a) were cultured in LB medium for 24 h. Then, the proteins in LB medium were concentrated, and subjected to Western blot analysis which was used to confirm the secretory expression of Her2-ISZ-sTRAIL by using Anti-6 ?? His antibody. It was shown in Fig. 11 that Her2-ISZ-sTRAIL could be efficiently expressed under the control of the hypoxia promoter Vgb and successfully secreted in the medium to exert its anti-tumor activity.</p> 
        <img-fluid alt="Engineering_11" src="/resources/images/Engineering/Engineering_11.jpg" caption="Fig. 11 Western blot analysis of Her2-ISZ-sTRAIL protein expression in EcN (Her2-ISZ-sTRAIL)"></img-fluid>
    </writing-container>
    `
}