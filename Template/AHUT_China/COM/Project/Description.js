import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Description</h1>
        <hr/>
        
        <h2>Inspiration</h2>
        <p>Looking up the data, we found that women breast cancer has surpassed lung cancer as the most common cancer in 2020, with an estimated 2.3 million new cases (11.7%), followed by lung cancer (11.4%), colorectal cancer (10.0%), prostate cancer (7.3%), and stomach cancer (5.6%). The incidence of breast cancer in the population tends to be increasingly youthful, and in China, breast cancer is more likely to occur in relatively young women. All current conventional cancer therapies have high toxicity and side effects and attack normal cells indiscriminately. Some bacteria have been found to have the function of targeting breast cancer cells and inhibiting their growth. Therefore, we plan to use engineered bacteria to treat breast cancer.</p>
        
        <h2>Design</h2>
        <p>Ecoli-Nissle 1917 is a non-toxic and harmless bacterium that has shown high tumor targeting ability. In addition, Ecoli-Nissle 1917 has been widely used in the treatment of acute diarrhea and certain intestinal diseases in infants and children, as well as in daily health supplements. In this context, we genetically engineered the bacteria based on synthetic biology using targeting technology to specifically recognize and kill breast cancer cells for the treatment of breast cancer. The modification process includes the introduction of a hypoxia-inducible promoter; an artificial antibody to Her2 that enhances the targeting effect; and a sTRAIL fusion protein capable of causing apoptosis in cancer cells.</p>
        <p>Tumors grow in a low-oxygen, low-PH microenvironment, and the introduction of a hypoxia-inducible promoter increases the specificity of probiotics to release fusion proteins in large quantities in that environment. Upon arrival in the tumor microenvironment, the promoter expresses and releases the His tagged fusion protein into the environment in the action of a secreted peptide, then the Her2 artificial antibody(small size, containing only 58 amino acids) will recognize the specific receptor on the surface of breast cancer cells, and subsequently the sTRAIL fusion protein in the soluble fusion protein will bind to the cytoplasmic death domains of the death receptors DR4 and DR5 on the surface of cancer cells to transduce the apoptotic signal, which will then allow cancer cells to apoptosis. In this design, the Her2 antibody enhances the targeting of the treatment and reduces the damage of the fusion protein to other cells in the body.</p>
        <p>In this process two plasmids will be constructed, the first one is to verify that the sTRAIL fusion protein with a trimerization domain can cause apoptosis in breast cancer cells. The plasmid (using the T7 promoter, followed by the manipulator lacI sequence) will be introduced into E. coli BL21 (DE3) (phage lactose manipulator model) and then induced with IPTG to obtain inducible expression of the fusion protein containing the His-tagged Her2 artificial antibody and ISZ-sTRAIL, which can be expressed and purified. The obtained fusion protein was then co-cultured with breast cancer cells for demonstrating the function of the fusion protein in causing apoptosis in breast cancer cells.</p>
        <img alt="Description_01" class="img-fluid" src="/resources/images/Description_01.jpg"/>
        <p>The second plasmid was engineered on the basis of the first one, introduced into E. coli Nissle 1917 (EcN) after the addition of a hypoxia promoter, to directly verify that the engineered species were able to express the fusion protein in a hypoxic environment and act on breast cancer cells to become apoptotic. </p>
        <img alt="Description_02" class="img-fluid" src="/resources/images/Description_02.jpg"/>
        <br/>
        
        <h2>Prospect</h2>
        <p>We hope that this engineered bacterium can bring a more effective and less toxic treatment to the current stage of cancer treatment and provide a new idea and direction for the treatment of other diseases. Because the current cancer treatment is still mainly based on chemotherapy and radiation therapy, although the treatment effect is remarkable, it also has strong side effects and irreversible damage to the body. We use engineered bacteria to treat breast cancer, not only can target high efficiency treatment, but also can target cancer cells, expressing in low oxygen environment to target the acidic low oxygen microenvironment of cancer cells, expressing the corresponding gene after contact and releasing toxic protein to act on cancer cells to make them die. In the future, the R & D of biotherapy will become more perfect, and after overcoming some of the problems, cancer treatment in humans later will become better and bright.</p>
    </writing-container>
    `
}