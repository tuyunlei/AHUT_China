import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js'

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `
    <writing-container>
        <h1>Model</h1>
        <hr/>

        <h2>1.Background</h2>
        <p>The hypoxic and low pH environment of the tumor attracts our modified probiotics. The hypoxic promoter can be expressed in the surrounding environment of the tumor, and the bacteria can release the fusion protein. Under the action of secreted peptide, the fusion protein containing His tag is released into the environment, and then the Her2 artificial antibody \(small size contains only 58 amino acids\) will recognize the specific receptor on the surface of breast cancer cells. Then, the sTRAIL fusion protein in the soluble fusion protein will bind to the cytoplasmic death domain of death receptors DR4 and DR5 on the surface of cancer cells to transduce apoptosis signals, so as to make cancer cells apoptosis.</p>
        <p>According to the above reaction process, the purpose of modeling can be divided into three parts:</p>
        <p>(1) The experimental data were fitted and analyzed to judge whether our modified E. coli had an inhibitory effect on cancer cells.</p>
        <p>(2) A probiotic-cancer cell model with diffusion effect was constructed to simulate the whole process of probiotic contact with cancer cells and combination, and finally make cancer cells apoptosis, and compared with the experimental data.</p>
        <p>(3) Combined with the above established model, the relevant results are analyzed.</p>

        <h2>2.Model Introduction</h2>
        <p>We established relevant models according to the project, and compared and analyzed our experiments.</p>
        <p>(1) Data fitting was used to assist and predict the effect of our probiotics on cancer cells.</p>
        <p>(2) Using the probiotic cancer cell model with diffusion effect, the effect of modified Escherichia coli on cancer cells was simulated and compared with the experimental data.</p>
        <p>(3) Combined with the established relevant models, the experimental behavior and the interaction between E. coli and cancer cells were analyzed and explained.</p>

        <h2>3.Model Assumptions</h2>
        <p>(1) It is assumed that the growth of probiotics and cancer cells in the model is not affected by other cells.</p>
        <p>(2) It is assumed that the irrelevant variables such as temperature, humidity and light remain unchanged.</p>
        <p>(3) It is assumed that the flow rate of body fluid in the experimental individual remains unchanged.</p>

        <h2>4.Symbol Explanation</h2>
        <table class="table text-center">
            <thead>
            <tr>
                <th class="border-top" colspan="2">Symbol explanation in model</th>   
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>$P$</td>
                <td>Density of cancer cells at time t</td>
            </tr>
            <tr>
                <td>$I$</td>
                <td>Probiotic density at time t</td>
            </tr>
            <tr>
                <td>$r$</td>
                <td>Growth rate of cancer cells</td>
            </tr>
            <tr>
                <td>$c$</td>
                <td>Rate of cancer cell elimination by probiotics</td>
            </tr>
            <tr>
                <td>$t$</td>
                <td>time</td>
            </tr>
            <tr>
                <td>$\\delta$</td><td>Spontaneous mortality of probiotics</td>
            </tr>
            <tr>
                <td>$h$</td>
                <td>Spontaneous growth rate of probiotics</td>
            </tr>
            <tr>
                <td>$k$</td>
                <td>Rate of cancer cell stimulation of E. coli proliferation</td>
            </tr>
            </tbody>
            <p>Fig. 1 Symbol Explanation</p>
        </table>
        <h2>5.Probiotics-cancer cell model with diffusion effect</h2>
        <h3>5.1 Establishment of probiotics-cancer cell model</h3>
        <p>Based on the biological mechanism of probiotics against cancer cells, we studied the dynamic behavior of the modified E. coli and cancer cells, and established a mathematical model to characterize the probiotics-cancer cell interaction, to provide evidence for inhibiting the proliferation of breast cancer cells. After analysis, we developed a probiotic-cancer mathematical model in which the modified E. coli inhibited the growth of cancer cells as follows:</p>
        <p>$$\\begin{cases}
        \t\\frac{dP}{dt}=rP-cIP\\\\
        \t\\frac{dI}{dt}=kP-\\delta I+h\\\\
        \\end{cases}$$</p>
        <p>Among them, $rP$ represents that the cancer cells grow exponentially; $cIP$ represents that the modified E. coli acts on the cancer cells; $kP$ represents that the presence of cancer cells stimulates E. coli to multiply and produce derivatives.</p>
        <p>Among them, $P$ represents the density of cancer cells at time t; $I$ represents the density of probiotics at time t; $R$ represents the growth rate of cancer cells; $c$ represents the rate of elimination of cancer cells; $\\delta$ represents the spontaneous mortality rate of probiotics; $h$ represents the rate at which probiotics spontaneously grow; and $K$ represents the rate at which E. coli is stimulated by the presence of cancer cells.</p>
        <p>When $r\\leqslant \\frac{ch}{\\delta}$ is tenable, it means that E. coli can eliminate cancer cells in the body.</p>
        
        <h3>5.2 Establishment of probiotics-cancer cell model with diffusion effect</h3>
        <p>We further improve our model by introducing diffusion term, and obtain a probiotic-cancer cell model with diffusion term, which is as follows:</p>
        <p>$$
        \\left\\{ \\begin{array}{c}
        \t\\begin{array}{l}
        \t\\frac{dP}{dt}=\\tilde{d}_1\\varDelta P+rP-cIP\\\\
        \t\\frac{dI}{dt}=\\tilde{d}_2\\varDelta I+kP-\\delta I+h\\\\
        \\end{array}\\\\
        \t\\frac{\\partial P\\left( t,x,y \\right)}{\\partial n}=\\frac{\\partial I\\left( t,x,y \\right)}{\\partial n}=0\\\\
        \tP\\left( 0,x,y \\right) =P_0\\left( x,y \\right) ,I\\left( 0,x,y \\right) =I_0\\left( x,y \\right)\\\\
        \\end{array} \\right. 
        $$
        </p>
        <p>Among them, $\\tilde{d}_1\\varDelta P$ is used to characterize the spread of E. Coli while $\\tilde{d}_2\\varDelta I$ is used to characterize the spread of cancer cells in the body.</p>
        
        
        <h2>6.Model Results</h2>
        <p>We use MATLAB to solve the above E. coli cancer cell model with time-delay diffusion effect, and simulate the diffusion process of the modified E. coli and cancer cells in the two-dimensional direction of the patient. It can be seen from the figure that the modified E. coli and cancer cells will interact with time under given initial test conditions, and finally in a long enough time, A concave convex shape as shown below is approximately formed in the patient's body space. The results of the model show that when the modified E. coli is introduced into the patient, E. coli and cancer cells near the tumor interact for a period of time, E. coli and cancer cells will show uneven distribution in the two-dimensional space of the patient.</p>
        <h3>6.1 changes of cancer cells in patients over time:</h3>
        <img-fluid alt="Model_01" src="/resources/images/Model_01.jpg"></img-fluid>
        <p>Fig. 1 Distribution of cancer cells in patients over </p>
        <img-fluid alt="Model_02" src="/resources/images/Model_02.jpg"></img-fluid>
        <p>Fig. 2 two dimensional distribution of cancer cells over time</p>
        <p>From the above matlab solution results, we can see that with the change of time, the number of cancer cells increases first and then decreases in patients. When the time t was in the range of 0-50, the cancer cells gradually increased, reached the peak at t = 50, and gradually decreased after t = 50. It can be seen that with the introduction of corresponding probiotics to patients, the cancer cells have been restrained to a certain extent. Therefore, our experiment has certain research value for the future against breast cancer and other diseases.</p>
        <h3>6.2 changes of E. coli in patients over time:</h3>
        <img-fluid alt="Model_03" src="/resources/images/Model_03.jpg"></img-fluid>
        <p>Fig. 3 distribution of Escherichia coli in patients over time</p> 
        <img-fluid alt="Model_04" src="/resources/images/Model_04.jpg"></img-fluid>
        <p>Fig. 4 two dimensional distribution of Escherichia coli over time</p>
        <p>According to the results drawn by the above MATLAB, we can see that the two-dimensional change of E. coli in patients is: with the gradual increase of time, the number of E. coli gradually increases. And with the increase of time, the growth rate of E. coli gradually decreased, that is, at the beginning, E. coli increased at a large growth rate. Gradually, with the increase of the number of E. coli, the growth rate of E. coli decreased slowly. And the number of E. coli tends to peak. It can be seen that our modified probiotics can survive and reproduce smoothly in patients, and will not overproduce in patients.</p>
        
        <h2>7.Data and results of cytotoxicity test</h2>
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">Protein concentration</th>
                    <td>0</td>
                    <td>0.01</td>
                    <td>0.025</td>
                    <td>0.05</td>
                    <td>0.1</td>
                    <td>0.25</td>
                </tr>
                <tr>
                    <th scope="row">Cell viability</th>
                    <td>100.000%</td>
                    <td>40.415%</td>
                    <td>32.815%</td>
                    <td>25.389%</td>
                    <td>14.594%</td>
                    <td>0.475%</td>
                </tr>
                <tr>
                    <th scope="row">Cell inhibition rate</th>
                    <td>0.000%</td>
                    <td>59.585%</td>
                    <td>67.185%</td>
                    <td>74.611%</td>
                    <td>85.406%</td>
                    <td>99.525%</td>
                </tr>
                <tr>
                    <th scope="row">STD</th>
                    <td>1.33%</td>
                    <td>0.90%</td>
                    <td>1.79%</td>
                    <td>0.95%</td>
                    <td>0.44%</td>
                    <td>0.35%</td>
                </tr>
            </tbody>
        </table>
        
        <p>We set up several groups of control experiments and added different concentrations of protein to detect the effect of protein concentration on cell survival and inhibition rate. The experimental data are shown in the table above.</p>
        <img-fluid alt="Model_05" src="/resources/images/Model_05.jpg"></img-fluid>
        <p>Fig. 5 experimental diagram of trail cytotoxicity</p>
        <p>According to the experimental data and charts, when the protein concentration reaches 0.01mg/ml, the survival rate of cells decreases significantly, that is, when the protein concentration is 0.01mg/ml, it is the time to maximize the inhibition efficiency of cancer cells, and it is also the most economical and lowest cost stage to control cancer cells.</p>
        <img-fluid alt="Model_06" src="/resources/images/Model_06.png"></img-fluid>
        <p>Fig. 6 changes of cell inhibition rate.</p>
        <img-fluid alt="Model_07" src="/resources/images/Model_07.png"></img-fluid>
        <p>Fig. 7 changes of cell inhibition rate.</p>
        
        <h2>8.Conclusion</h2>
        <p>1. For the changes in the number and location of probiotics and cancer cells in patients, we constructed a probiotic cancer cell model with time-delay diffusion effect, modeled the two-dimensional spatial distribution of probiotics and cancer cells in patients based on time change, and obtained that with the change of time, the number of cancer cells first increased, reached the peak and then decreased gradually. It meets our experimental expectations. The number of probiotics increased gradually, but the growth rate decreased gradually. Therefore, probiotics do not overproduce in patients. Therefore, it is also in line with the experimental goal.</p>
        <p>2.For the cytotoxicity test, we fitted the experimental data of the biological group, and obtained the curve of cell survival rate and inhibition rate with the change of protein concentration. It can be seen from the experimental results that our protein concentration can play a good effect on the experiment when it reaches 0.01mg/ml. </p>
        
        <br/>
        <h1>Reference</h1>
        <p>[1]\t唐思甜,两类具有体液免疫的病毒感染模型研究,【D】,新疆大学,2019,undefined</p>
        <p>[2]\t韩云丽,若干病毒感染模型的动力学分析,【D】,中北大学,2015,undefined</p>
        <p>[3]\t任新志,几类空间异质反应扩散模型研究,【D】,西南大学,2018,undefined</p>
        <p>[4]\t黄雪玲;王振友,复杂动态微环境中多成分的肿瘤生长对流扩散反应模型,【J】,湖南理工学院学报(自然科学版),2017,20-26,20-26</p>
        <p>[5]\t张久远;冯兆永;刘成霞;卫雪梅,关于肿瘤细胞破坏并入侵正常组织或细胞质基质的数学模型的分析,【J】,中山大学学报(自然科学版),2013,53-59,53-59</p>
        <p>[6]\t黄秀婵,具有非连续治疗措施HIV感染模型的定性研究,【D】,西安科技大学,2019,undefined</p>
        <p>[7]\t董亚莹,三类反应扩散方程的正解,【D】,西北大学,2016,undefined</p>
        <p>[8]\t李善兵,两类反应扩散模型的动力学行为,【D】,陕西师范大学,2016,undefined</p>
    </writing-container>
    `,
    updated() {
        const {typesetElement} = this.$refs
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, typesetElement])
    }
}