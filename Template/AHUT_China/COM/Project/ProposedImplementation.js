import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Proposed Implementation</h1>
        <hr/>
        
        <h2>Introduction</h2>
        <P>We found that in 2020 female breast cancer has exceeded lung cancer as the most common cancer, with an estimated 2.3 million new cases (11.7%), followed by lung cancer (11.4%), colorectal cancer (10.0%), prostate cancer (7.3%) and gastric cancer (5.6%). Not only that, the incidence of breast cancer in the population tends to be younger. However HER2 expression contributes to poor prognosis in 30% cases of breast cancers. Although there are effective ways to target HER2, such as trastuzumab in breast cancer, it is often associated with toxicity and drug resistance. All current traditional cancer therapies have large toxic side effects, and it indiscriminately attacks normal cells. It is reported in the current literature that some bacteria in the tumor microenvironment have function to target breast cancer cells and inhibit their growth.[1] With this in mind, we have endeavored to provide a novel therapeutic approach for breast cancer- using bacteria to target breast cancer cells while introducing the vgb hypoxia inducible promoter to the tumor microenvironment where the bacteria would produce the artificial antibody against HER2 and fusion proteins of sTRAIL , which would cause the cancer cells to become apoptotic. In this page, we will list what we think and how to actually implement our project under the guidance of comprehensive human practical activities and other materials.</P>
        <h2>Implementation & Envisioning</h2>
        <p>Primary stage</p>
        <p>First of all, we consider that the bacterial fluid can be made into an injection in a reasonable ratio, administered intravenously, reaching the diseased site via the blood circulation. ECN1917 has the function of targeting tumors, which will be enriched in the blood circulation to the tumor site. In the tumor microenvironment, hypoxia induces promoters can produce the artificial antibody can target breast cancer cells HER2 and fusion proteins of sTRAIL, and thus are critical for killing cancer cells. </p>
        <p>Further stage</p>
        <p>According to the primary stage, by adjusting the appropriate dosage, we can even inject directly into the diseased site without the blood circulation, (ECN1917, despite some tumor targeting, may leak into normal tissue via the circulation) it is more efficient and faster to kill breast cancer cells at the diseased site by direct action.</p>
        <h2>Instruct end-user</h2>
        <p>Our product aims to help breast cancer patients suffering from HER2 positive symptoms and this includes:</p>
        <p>i.Patients who had HER2 positive breast cancer, were resistant to treatment due to frequently traditional treatment methods, or were in poor physical health;</p>
        <p>ii. Patients who have already been treated, as probiotics are not harmful to humans, and the our product has strong targeting ability, which can rapidly kill breeding cancer cells and prevent tumor recurrence.</p>
        <p>iii. Our product can also be used as the object for drug R & D researchers to develop new and generic drugs by studying its mechanism of action and method.</p>
        <h2>Safety</h2>
        <p>Ecn1917, an essentially nonpathogenic probiotic, is widely used clinically to treat intestinal immune diseases such as ulcerative colitis. We add vgb-a hypoxia inducible promoter to the designed plasmid to enable expression of the targeted HER2-ISZ-sTRAIL fusion protein in the tumor microenvironment to enhance targeting. However, ECN is a kind of foreign bacteria, and its leakage into normal tissues still has an incalculable impact. There are still great challenges that truly progress from the laboratory to the clinic, so we need constant adjustments to meet the need on the market.</p>
        <p>On December 30, 2020, the Chinese Pharmacopoeia 2020 was officially implemented, and our products were carried out under the guidance of the third part of Chinese Pharmacopoeia 2020, China Biological Products Regulations. Not only that, we also need enough evidence to prove that the release of our bacteria does not harm both other normal tissues and the environment.</p>
        <h2>Reference</h2>
        <p>Sung H, Ferlay J, Siegel R L, et al. Global cancer statistics 2020: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries[J]. CA: a cancer journal for clinicians, 2021, 71(3): 209-249.</p>
        <p>Zielinski R, Lyakhov I, Hassan M, et al. HER2-affitoxin: a potent therapeutic agent for the treatment of HER2-overexpressing tumors[J]. Clinical Cancer Research, 2011, 17(15): 5071-5081.</p>
        <p>Gujrati V, Kim S, Kim S-H, et al. Bioengineered bacterial outer membrane vesicles as cell-specific drug-delivery vehicles for cancer therapy[J]. ACS nano, 2014, 8(2): 1525-1537.</p>
        <p>WANG Yan Wen，YE Jing Yi，WANG Peng-Chao Application of Synthetic Biology in Targeted Cancer Therapies by E.coli Nissle 1917 [J].中国生物化学与分子生物学报,2021,37(01):20-28.</p>
        <p>He L, Yang H, Tang J, et al. Intestinal probiotics E. coli Nissle 1917 as a targeted vehicle for delivery of p53 and Tum-5 to solid tumors for cancer therapy[J]. Journal of biological engineering, 2019, 13(1): 1-13.</p>
        <p>The third part of Chinese Pharmacopoeia 2020, China Biological Products Regulations.</p>
    </writing-container>
    `
}