import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Results</h1>
        <hr/>
 
        <h2>1. Construction of the engineered E. coli BL21(DE3) expressing soluble sTRAIL and ISZ-sTRAIL protein</h2>
        <p>Basing on the sequence of an existing part of sTRAIL (<partinfo name="K1166004"></partinfo>), we have added an isoleucine zipper (ISZ) to the N-terminal of this part and constructed a new part <partinfo name="K3981014"></partinfo> (pET28a-his-linker-ISZ-sTRAIL, ISZ-sTRAIL for short, Fig. 1), which could generate the trimeric form of TRAIL and increased its antitumor potential.</p> 
        <img-fluid alt="Results_01" src="/resources/images/Results/Results_01.png" caption="Fig 1. Map of ISZ-sTRAIL recombinant vector"></img-fluid>
        <h3>1.1. Construction of sTRAIL and ISZ-sTRAIL vectors</h3>
        <p>Firstly, the original coding sequence of sTRAIL (<partinfo name="K1166004"></partinfo>) were synthesized by company, and cloned into the pET-28a (+) expression vectors. The correctness of the recombinant plasmids was verified by PCR (Fig. 2).</p>
        <img-fluid alt="Results_02" src="/resources/images/Results/Results_02.png" caption="Fig. 2 Agarose Gel Electrophoresis of sTRAIL recombinant plasmid. M: Marker; 1: pET-28a-his-sTRAIL; 2.pET-28a(+)"></img-fluid>
        <p>Then, we designed the primers for PCR amplification of ISZ-sTRAIL gene fragments, and obtained the ISZ-sTRAIL gene (666bp) via PCR using pET28a-his-linker-her2-linker-ISZ-sTRAIL(<partinfo name="K3981015"></partinfo>) as the template (Fig. 3).</p> 
        <img-fluid alt="Results_03" src="/resources/images/Results/Results_03.png" caption="Fig. 3 Agarose Gel Electrophoresis of ISZ-sTRAIL. M: Marker; 1: ISZ-sTRAIL PCR bands, the length was 666 bp"></img-fluid>
        <p>The desired ISZ-sTRAIL gene fragments were cloned into pET-28a (+) expression vectors, then the constructed recombinant plasmids were identified by double digestion with Nco I and Xho I restriction enzymes, and the band was determined to be about 666 bp (the arrow indicated in Fig. 4). Subsequently, the sequencing results of recombinant plasmids were consistent with the target gene (Fig. 5), which indicated that ISZ-sTRAIL plasmids were successfully constructed.</p> 
        <img-fluid alt="Results_04" src="/resources/images/Results/Results_04.jpg" caption="Fig. 4 The double digestion of ISZ-sTRAIL recombinant vectors. M: Marker; 1: the digested vectors (the arrow indicated was ISZ-sTRAIL, the length was 666 bp); 2. ISZ-sTRAIL recombinant vectors without double digestion; 3. pET-28a (+) vectors"></img-fluid>
        <img-fluid alt="Results_05" src="/resources/images/Results/Results_05.png" caption="Fig. 5 Sequencing result of ISZ-sTRAIL plasmids"></img-fluid>
        <h3>1.2. Expression and purification of sTRAIL and ISZ-sTRAIL proteins</h3>
        <p>The correct sTRAIL and ISZ-sTRAIL vectors were transformed into E. coli BL21(DE3) respectively, and positive colonies were selected on a Luria???Bertani (LB) agar plate with kanamycin to create the engineered strains BL21(DE3)/sTRAIL and BL21(DE3)/ISZ-sTRAIL. Then, the expressions of sTRAIL and ISZ-sTRAIL were induced with 0.5-0.8 mmol/L isopropyl ??-d-thiogalactopyranoside (IPTG) followed by SDS-PAGE analysis. As shown in Fig. 6 (bands 1-2) and Fig.7 (bands 1 and 3), sTRAIL and ISZ-sTRAIL proteins could be both successfully expressed under IPTG induction.</p> 
        <p>Further, the sTRAIL and recombinant ISZ-sTRAIL were purified by His affinity chromatography and determined by SDS-PAGE and Coomassie brilliant blue staining. The result showed that sTRAIL and recombinant ISZ-sTRAIL proteins were purified with high purity as indicated by a significant single protein band after SDS-PAGE in Fig. 6 (band 3) and Fig.7 (band 2).</p>
        <img-fluid alt="Results_06" src="/resources/images/Results/Results_06.png" caption="Fig. 6 SDS-PAGE analysis for sTRAIL protein expression and purification. The arrow indicated were the bands of sTRAIL. M: protein marker; 1: Negative control without IPTG induction; 2: Cell lysate with IPTG induction for 4 h at 37 ???; 3. Purified sTRAIL protein"></img-fluid>
        <img-fluid alt="Results_07" src="/resources/images/Results/Results_07.png" caption="Fig. 7 SDS-PAGE analysis for ISZ-sTRAIL protein expression and purification. The arrow indicated were the bands of ISZ-sTRAIL. M: protein marker; 1: Negative control without IPTG induction; 2: Purified ISZ-sTRAIL protein; 3. Cell lysate with IPTG induction for 4 h at 37 ???"></img-fluid>
        <h3>1.3. Anti-tumor activity of sTRAIL and ISZ-sTRAIL proteins</h3>
        <p>After efficient purification of sTRAIL and ISZ-sTRAIL proteins, we tested their anti-tumor activity on MCF7 breast cancer cells. Cell morphology pictures (Fig. 8) and MTT assay (Fig. 9) showed that both sTRAIL and ISZ-sTRAIL proteins could inhibit the proliferation of MCF7 cells, and the improved part of ISZ-TRAIL demonstrated increased potential anti-proliferation activity than the original part of sTRAIL.</p> 
        <img-fluid alt="Results_08" src="/resources/images/Results/Results_08.jpg" caption="Fig. 8 The anti-proliferation effects of sTRAIL and ISZ-sTRAIL proteins on MCF7 breast cancer cells"></img-fluid>
        <img-fluid alt="Results_09" src="/resources/images/Results/Results_09.png" caption="Fig. 9 MTT assay of sTRAIL and ISZ-sTRAIL proteins on MCF7 cell growth"></img-fluid>
        <p>In conclusion, our results demonstrated that the function of ISZ-sTRAIL new part has been improved with higher anti-tumor activity than the original part.</p>
        
        <h2>2.Construction of the engineered E. coli BL21(DE3) expressing soluble Her2-ISZ-sTRAILprotein</h2>
        <p>Based on the ISZ-sTRAIL expression vectors, a sequence of Her2-affibody, which could increase the target effect of ISZ-sTRAIL, was added to the N-terminus of ISZ-sTRAIL plasmid to construct a new part of pET-28a(+)-His-linker-Her2-ISZ-sTRAIL (<partinfo name="K3981015"></partinfo>, Her2- ISZ-sTRAIL for short) recombinant vector.</p> 
        <h3>2.1. Construction of Her2-ISZ-sTRAIL expression plasmid</h3>
        <p>The coding sequence of Her2-ISZ-sTRAIL with a His-tag were designed by our group, then synthesized and cloned into pET-28a(+) expression vector by company. Fig.10 showed the map of the obtained pET-28a(+)-His-linker-Her2- ISZ-sTRAIL recombinant plasmid.</p>
        <img-fluid alt="Results_10" src="/resources/images/Results/Results_10.png" caption="Fig 10. Map of Her2-ISZ-sTRAIL recombinant vector"></img-fluid>
        <h3>2.2. Establishment of an engineered E. coli BL21(DE3) strain for expression of Her2-ISZ-sTRAIL protein</h3>
        <h4>2.2.1 Transformation</h4>
        <p>The Her2-ISZ-sTRAIL expression plasmids were then transformed into E. coli BL21 (DE3), and positive clones were selected on the basis of kanamycin resistance. Many positive clones were grown on the plates (Fig. 11).</p>
        <img-fluid alt="Results_11" src="/resources/images/Results/Results_11.jpg" caption="Fig. 11 Positive colonies harboring Her2-ISZ-sTRAIL expression plasmids grown on the plate with kanamycin"></img-fluid>
        <h4>2.2.2 Induced expression of Her2-ISZ-sTRAIL protein in E. coli BL21 (DE3)</h4>
        <p>Then, with an IPTG concentration of 0.8 mM, the expression of Her2-ISZ-sTRAIL in the recombinant E. coli BL21 (DE3) was induced. The cells were lysed by sonication on ice, the obtained crude extract was centrifuged to separate the supernatant from debris, and the two parts were respectively subjected to SDS-PAGE. The arrow indicated in Fig. 12 was the band of Her2-ISZ-sTRAIL protein, which was consistent with the molecular weight of Her2-ISZ-sTRAIL -- about 32 kDa. It can be seen from lane 1 and 2 that IPTG apparently induced the expression of Her2-ISZ-sTRAIL protein. The results in lane 2 and 3 indicated that Her2-ISZ-sTRAIL was mainly expressed in the supernatant of cell lysate, demonstrating that Her2-ISZ-sTRAIL could be expressed as soluble protein in our engineered E. coli BL21 (DE3).</p>
        <img-fluid alt="Results_12" src="/resources/images/Results/Results_12.jpg" caption="Fig. 12 SDS-PAGE analysis of induced Her2-ISZ-sTRAIL expression in E. coli BL21(DE3)"></img-fluid> 
        <h3>2.3. Purification of Her2-ISZ-sTRAIL protein</h3>
        <p>After confirming that Her2-ISZ-sTRAIL could be expressed in E. coli BL21 (DE3), the Her2-ISZ-sTRAIL protein was further purified with a nickel column. A clear band with the correct molecular weight was shown in Fig. 13. Western blot analysis using antibody for Histidine further demonstrated that this band was Her2-ISZ-sTRAIL protein (Fig.14), suggesting that Her2-ISZ-sTRAIL was efficiently purified.</p>
        <img-fluid alt="Results_13" src="/resources/images/Results/Results_13.png" caption="Fig 13. Her2-ISZ-sTRAIL protein was purified by Ni column and different fractions were analyzed by SDS-PAGE. Lane M: Protein marker; Lane 1: cell lysates without IPTG induction; Lane 2: cell lysates with IPTG induction; Lane 3: purified Her2-ISZ-sTRAIL protein."></img-fluid>
        <img-fluid alt="Results_14" src="/resources/images/Results/Results_14.jpg" caption="Fig. 14 Western blot analysis of purified Her2-ISZ-sTRAIL protein."></img-fluid>
        <h3>2.4. Biological activity of Her2-ISZ-sTRAIL protein</h3>
        <p>Finally, MTT assay was applied to test the potential toxicity of Her2-ISZ-sTRAIL protein on Her2-positive BT-474 breast cancer cells, and the result showed that the purified Her2-ISZ-sTRAIL protein could efficiently inhibit the growth of BT-474 cells (Fig. 15).</p> 
        <img-fluid alt="Results_15" src="/resources/images/Results/Results_15.png" caption="Fig. 15 In vitro toxicity effect of Her2-ISZ-sTRAIL protein on BBT-474 cells via MTT assay"></img-fluid>
        <p>In conclusion, an engineered E. coli BL21(DE3) could efficiently express soluble Her2-ISZ-sTRAIL protein with potential anti-tumor activity was successfully constructed.</p>
        
        <h2>3. Construction of an engineered EcN 1917 probiotic strain with Vgb-pelB-Her2-ISZ-sTRAIL</h2>
        <p>Based on the result that Her2-ISZ-sTRAIL protein could efficiently inhibit the growth of breast cancer cells, in order to enhance the anti-tumor effect of Her2-ISZ-sTRAIL protein, E.coli Nissle 1917 (EcN 1917), an intestinal probiotic with higher tumor-targeting ability to proliferate in hypoxic regions of tumors, was utilized as a targeted transport vector to deliver Her2-ISZ-sTRAIL protein to tumor hypoxic regions. Therefore, a new part (<partinfo name="K3981013"></partinfo>) of pET28a(+)-Vgb-pelB-linker-His-linker-Her2-linker-ISZ-Strail (Vgb-pelB-Her2-ISZ-sTRAIL for short) was constructed, in which Her2-linker-ISZ-Strail was placed under the hypoxia promoter Vgb and signal peptide pelB was added to increase the secretory expression of Her2-linker-ISZ-sTRAIL protein (Fig. 16).</p> 
        <img-fluid alt="Results_16" src="/resources/images/Results/Results_16.jpg" caption="Fig.16 Construction map of Vgb-pelB-linker-His-linker-Her2-linker-ISZ-sTRAIL fusion vector"></img-fluid>
        <h3>3.1. Construction of Vgb-pelB-Her2-ISZ-sTRAIL expression plasmid</h3>
        <p>The sequence of Vgb-pelB-Her2-ISZ-sTRAIL was synthesized and inserted into ApaI and XhoI sites of pET28a(+) expression vectors by company to obtain the hypoxia expression vector - pET28a(+)-Vgb-pelB-Her2-ISZ-sTRAIL recombinant plasmid (Fig. 17 and Fig. 18).</p>
        <img-fluid alt="Results_17" src="/resources/images/Results/Results_17.png" caption="Fig. 17 Map of Vgb-pelB-Her2-ISZ-sTRAIL recombinant vector"></img-fluid>
        <img-fluid alt="Results_18" src="/resources/images/Results/Results_18.png" caption="Fig. 18 Agarose gel electrophoresis of Vgb-pelB-Her2-ISZ-sTRAIL recombinant plasmid. M: DNA Marker; 1: pET-28a- Vgb-pelB-Her2-ISZ-sTRAIL; 2.pET-28a(+)"></img-fluid>
        <h3>3.2.Construction of an engineered EcN 1917 probiotic strain with Vgb-pelB-Her2-ISZ-sTRAIL</h3> 
        <p>The Vgb-pelB-Her2-ISZ-sTRAIL plasmid was electrotransformed into EcN 1917, and the positive colonies were screened by patching onto kanamycin LB agar plates. An antitumor engineered strain EcN 1917 (Her2-ISZ-sTRAIL) was successfully obtained (Fig. 19-1). Also the control engineered EcN 1917 (28a) was constructed (Fig. 19-2).</p>
        <img-fluid alt="Results_19" src="/resources/images/Results/Results_19.jpg" caption="Fig. 19 Results of electroporation of Vgb-pelB-Her2-ISZ-sTRAIL plasmid (1) and pET-28a (+) plasmid (2) into EcN 1917"></img-fluid>
        <h3>3.3. Her2-ISZ-sTRAIL protein was successfully expressed in tumor-targeting bacteria EcN 1917</h3>
        <p>EcN(Her2-ISZ-sTRAIL) and EcN(28a) were cultured in LB medium for 24 h. Then, the proteins in LB medium were concentrated, and subjected to Western blot analysis which was used to confirm the secretory expression of Her2-ISZ-sTRAIL by using Anti-6 ?? His antibody. It was shown in Fig. 20 that Her2-ISZ-sTRAIL could be efficiently expressed under the control of the hypoxia promoter Vgb and successfully secreted in the medium to exert its anti-tumor activity.</p>
        <img-fluid alt="Results_20" src="/resources/images/Results/Results_20.jpg" caption="Fig. 20 Western blot analysis of Her2-ISZ-sTRAIL protein expression in EcN (Her2-ISZ-sTRAIL)"></img-fluid>
        <p>In conclusion, an antitumor engineered strain EcN 1917 (Her2-ISZ-sTRAIL) was successfully established. Her2-ISZ-sTRAIL protein could be expressed in EcN 1917 and secreted for exerting its anti-tumor activity.</p>
        
        <h1>Reference</h1>
        <p>[1] Yan C, Li S, Li Z, et al. Human umbilical cord mesenchymal stem cells as vehicles of CD20-specific TRAIL fusion protein delivery: a double-target therapy against non-Hodgkin's lymphoma. Mol Pharm. 2013 Jan 7; 10(1):142-51.</p>
        <p>[2] Shah K, Tung CH, Yang K, et al. Inducible release of TRAIL fusion proteins from a proapoptotic form for tumor therapy. Cancer Res. 2004 May 1; 64(9):3236-42.</p>
        <p>[3] Zielinski R, Lyakhov I, Hassan M, et al. HER2-affitoxin: a potent therapeutic agent for the treatment of HER2-overexpressing tumors. Clin Cancer Res. 2011 Aug 1; 17(15):5071-81.</p>
        <p>[4] Zielinski R, Lyakhov I, Jacobs A, et al. Affitoxin--a novel recombinant, HER2-specific, anticancer agent for targeted therapy of HER2-positive tumors. J Immunother. 2009 Oct; 32(8):817-25.</p>
        <p>[5] He L, Yang H, Tang J, et al. Intestinal probiotics E. coli Nissle 1917 as a targeted vehicle for delivery of p53 and Tum-5 to solid tumors for cancer therapy. J Biol Eng. 2019 Jun 28;13:58. He L, Yang H, Liu F, Chen Y, Tang S, Ji W, Tang J, Liu Z, Sun Y, Hu S, Zhang Y, Liu X, Huang W,</p>
        <p>[6] Ding X, Xia L et al. Escherichia coli Nissle 1917 engineered to express Tum-5 can restrain murine melanoma growth. Oncotarget. 2017 Aug 24; 8(49):85772-85782.</p>
    </writing-container>
    `
}