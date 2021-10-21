import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Improve an Existing Part</h1>
        <hr/>
        <p>Basing on the sequence of an existing part of sTRAIL (<partinfo name="K1166004"></partinfo>), we have added an isoleucine zipper (ISZ) to the N-terminal of this part and constructed a new part <partinfo name="K3981014"></partinfo> (pET28a-his-linker-ISZ-sTRAIL, ISZ-sTRAIL for short, Fig. 1), which could generate the trimeric form of TRAIL and increased its antitumor potential.</p>
        <img-fluid alt="ImprovedParts_01" src="/resources/images/ImprovedParts_01.png" caption="Fig.1 Map of ISZ-sTRAIL expression vector"></img-fluid>
        <hr/>  
 
        <h2>1.Construction of sTRAIL and ISZ-sTRAIL vectors</h2>
        <p>Firstly, the original coding sequence of sTRAIL (<partinfo name="K1166004"></partinfo>) were synthesized by company, and cloned into the pET-28a (+) expression vectors. The correctness of the recombinant plasmids was verified by PCR (Fig. 2).</p>
        <img-fluid alt="ImprovedParts_02" src="/resources/images/ImprovedParts_02.png" caption="Fig. 2 Agarose Gel Electrophoresis of sTRAIL recombinant plasmid. M: Marker; 1: pET-28a-his-sTRAIL; 2.pET-28a(+)"></img-fluid>
        <p>Then, we designed the primers for PCR amplification of ISZ-sTRAIL gene fragments, and obtained the ISZ-sTRAIL gene (666 bp) via PCR using pET28a-his-linker-her2-linker-ISZ-sTRAIL (<partinfo name="K3981015"></partinfo>) as the template (Fig. 3).</p> 
        <img-fluid alt="ImprovedParts_03" src="/resources/images/ImprovedParts_03.png" caption="Fig. 3 Agarose Gel Electrophoresis of ISZ-sTRAIL. M: Marker; 1: ISZ-sTRAIL PCR bands, the length was 666 bp"></img-fluid>
        <p>The desired ISZ-sTRAIL gene fragments were cloned into pET-28a (+) expression vectors, then the constructed recombinant plasmids were identified by double digestion with Nco I and Xho I restriction enzymes, and the band was determined to be about 666 bp (the arrow indicated in Fig. 4). Subsequently, the sequencing results of recombinant plasmids were consistent with the target gene (Fig. 5), which indicated that ISZ-sTRAIL plasmids were successfully constructed.</p> 
        <img-fluid alt="ImprovedParts_04" src="/resources/images/ImprovedParts_04.jpg" caption="Fig. 4 The double digestion of ISZ-sTRAIL recombinant vectors. M: Marker; 1: the digested vectors (the arrow indicated was ISZ-sTRAIL, the length was 666 bp); 2. ISZ-sTRAIL recombinant vectors without double digestion; 3. pET-28a (+) vectors"></img-fluid>
        <img-fluid alt="ImprovedParts_05" src="/resources/images/ImprovedParts_05.png" caption="Fig. 5 Sequencing result of ISZ-sTRAIL plasmids"></img-fluid>

        <h2>2.Expression and purification of sTRAIL and ISZ-sTRAIL proteins</h2>
        <p>The correct sTRAIL and ISZ-sTRAIL vectors were transformed into E. coli BL21(DE3) respectively, and positive colonies were selected on a Luria–Bertani (LB) agar plate with kanamycin to create the engineered strains BL21(DE3)/sTRAIL and BL21(DE3)/ISZ-sTRAIL. Then, the expressions of sTRAIL and ISZ-sTRAIL were induced with 0.5-0.8 mmol/L isopropyl β-d-thiogalactopyranoside (IPTG) followed by SDS-PAGE analysis. As shown in Fig. 6 (bands 1-2) and Fig.7 (bands 1 and 3), sTRAIL and ISZ-sTRAIL proteins could be both successfully expressed under IPTG induction.</p> 
        <p>Further, the sTRAIL and recombinant ISZ-sTRAIL were purified by His affinity chromatography and determined by SDS-PAGE and Coomassie brilliant blue staining. The result showed that sTRAIL and recombinant ISZ-sTRAIL proteins were purified with high purity as indicated by a significant single protein band after SDS-PAGE in Fig. 6 (band 3) and Fig.7 (band 2).</p>
        <img-fluid alt="ImprovedParts_06" src="/resources/images/ImprovedParts_06.png" caption="Fig. 6 SDS-PAGE analysis for sTRAIL protein expression and purification. The arrow indicated were the bands of sTRAIL. M: protein marker; 1: Negative control without IPTG induction; 2: Cell lysate with IPTG induction for 4 h at 37 ℃; 3. Purified sTRAIL protein"></img-fluid>
        <img-fluid alt="ImprovedParts_07" src="/resources/images/ImprovedParts_07.png" caption="Fig. 7 SDS-PAGE analysis for ISZ-sTRAIL protein expression and purification. The arrow indicated were the bands of ISZ-sTRAIL. M: protein marker; 1: Negative control without IPTG induction; 2: Purified ISZ-sTRAIL protein; 3. Cell lysate with IPTG induction for 4 h at 37 ℃"></img-fluid>
        
        <h2>3.Anti-tumor activity of sTRAIL and ISZ-sTRAIL proteins</h2>
        <p>After efficient purification of sTRAIL and ISZ-sTRAIL proteins, we tested their anti-tumor activity on MCF7 breast cancer cells. Cell morphology pictures (Fig. 8) and MTT assay (Fig. 9) showed that both sTRAIL and ISZ-sTRAIL proteins could inhibit the proliferation of MCF7 cells, and the improved part of ISZ-TRAIL demonstrated increased potential anti-proliferation activity than the original part of sTRAIL.</p> 
        <img-fluid alt="ImprovedParts_08" src="/resources/images/ImprovedParts_08.jpg" caption="Fig. 8 The anti-proliferation effects of sTRAIL and ISZ-sTRAIL proteins on MCF7 breast cancer cells"></img-fluid>
        <img-fluid alt="ImprovedParts_09" src="/resources/images/ImprovedParts_09.png" caption="Fig. 9 MTT assay of sTRAIL and ISZ-sTRAIL proteins on MCF7 cell growth"></img-fluid>
        <p>In conclusion, our results demonstrated that the function of ISZ-sTRAIL new part has been improved with higher anti-tumor activity than the original part.</p>

        <h1>Reference</h1>
        <p>[1] Yan C, Li S, Li Z, et al. Human umbilical cord mesenchymal stem cells as vehicles of CD20-specific TRAIL fusion protein delivery: a double-target therapy against non-Hodgkin's lymphoma. Mol Pharm. 2013 Jan 7; 10(1):142-51.</p>
        <p>[2] Shah K, Tung CH, Yang K, et al. Inducible release of TRAIL fusion proteins from a proapoptotic form for tumor therapy. Cancer Res. 2004 May 1; 64(9):3236-42.</p>
    </writing-container>
    `,
}