import WritingContainer from '/Template/AHUT_China/COM/WritingContainer.js';

export default {
    components: {
        'writing-container': WritingContainer
    },
    template: `    
    <writing-container>
        <h1>Cooperative Experiment</h1>
        <hr/>
        <p>In the process of cooperation, we decided to cooperate on the experiment, so as to further understand and practice the purpose of iGEM after discussion and communication.</p>
        <hr/>

        <h2>1. AHUT help USTC</h2>
        <p>In order to deepen the public’s understanding of the iGEM project, the USTC team took the form of “ The Magic World of Synthetic Biology Week” to promote iGEM Contest. During this week, members would be divided into different groups, and use different ways to attract more people’s attention and render them understand more about the project. Here the USTC team had put our team in charge of two interesting experiments to help them achieve their goals together.</p>
        <img-fluid alt="Partnership_01" src="/resources/images/Partnership_01.jpg" caption="Image 1: Promotional Conceptual Poster"></img-fluid>

        <h3>1.1 Experiment 1: extraction of DNA from fruits</h3>
        <p>Fruit:bananas</p>
        <p>Step:1）Take 100g bananas, cut it up and mash it into a fluid</p>
        <p>2）Add 30ml distilled water to make a banana fluid, then transfer it to a beaker</p>
        <p>3）Add 15ml detergent, stir it for 5 minutes or so</p>
        <p>4）Add 4g Nacl to the fluid, stir it for 5 minutes</p>
        <p>5）Filter the fluid (50ml beaker) , add 15ml ice ethanol to the filtrate, stand it still to acquire white flocculent precipitate (crude DNA extract)</p>
        <div class="row px-5 pb-5">
            <img class="col-4 px-5" alt="Partnership_02" src="/resources/images/Partnership_02.jpg">
            <img class="col-4 px-5" alt="Partnership_03" src="/resources/images/Partnership_03.jpg">
            <img class="col-4 px-5" alt="Partnership_04" src="/resources/images/Partnership_04.jpg">
        </div>

        <h3>1.2 Experiment 2: Fluorescence</h3>
        <p>Steps: 1) gently pipet and mix 125ml DMEM (- -) + 4 UL plasmid (2 UG), and then add 3ul P300 to pipet and mix.</p>
        <p>2) 125ml DMEM (- -) + 4ul 1: P300, gently pipet and mix</p>
        <p>3)Add the solution of step 2 to the solution of step 1, gently blow and mix</p>
        <p>4)Incubation in greenhouse for 15min</p>
        <p>5)Drip to 6-orifice plate (no need to blow again during drip)</p>

        <p>Results:</p>
        <div class="row">
            <img-fluid class="col-6" alt="Partnership_05" src="/resources/images/Partnership_05.jpg"></img-fluid>
            <img-fluid class="col-6" alt="Partnership_06" src="/resources/images/Partnership_06.jpg"></img-fluid>
        </div>
        <p>In order to further deepen the cooperative relationship and let the USTC team know more about our project, we invited the USTC team to help us do the induced expression and detection experiment of eukaryotic gene in E. coli BL21 (DE3). At the same time, we can also verify the accuracy and implementation of our team's experimental project through this experiment.</p>

        <h2>2. USTC help AHUT</h2>
        <p>Induced expression and detection of eukaryotic gene in Escherichia coli BL21 (DE3)</p>
        <h3>2.1 equipment</h3>
        <p>Pipette gun, gun head, bioclean bench , bacterial culture shaker, electrophoresis instrument power supply and electrophoresis tank, low-temperature high-speed centrifuge, centrifuge tube, latex gloves, constant temperature biochemical incubator and microwave oven.</p>
        <h3>2.2 reagent</h3>
        <p>LB liquid medium, transfer 1 μ L plasmid 20 μ L Escherichia coli BL21 (DE3), kanamycin (100 mg / ml), plate, IPTG (100 mm), 10% SDS, 30% ACR BIS, 1.5m Tris HCl pH 8.8, 1.0m Tris HCl pH 6.8, 10% APS, TEMED, absolute ethanol, protein marker, 5 × SDS, Coomassie brilliant blue dye solution, cell lysate, decolorization solution.</p>
        <h3>2.3 Experimental steps</h3>
        <h4>2.3.1 Dilution coating</h4>
        <p>At 5:00 p.m. on September 4, the plate was coated with the bacteria received. The plate was kana resistant. It was placed in the bacterial incubator for 15 hours for the next operation.</p>
        <h4>2.3.2 Pick monoclonal</h4>
        <p>At 8 a.m. on September 5, take out the plate and use it for 10 minutes μ L with a small sterilized gun head, pick out a single clone colony on the plate and inoculate it in 10 ml LB medium (containing 10 ml) μ L kanamycin), incubated in a shaking table at 37 ℃ for 12 hours.</p>

        <h4>2.3.3 Expanded culture and induced expression:</h4>
        <p>1. At 8:00 p.m. on September 5, take four 50ml centrifuge tubes and add 10ml lb, 10 ml into each centrifuge tube μ L kanamycin, 100μl bacterial solution, expand the culture for 4h.</p>
        <p>2. At 0:00 on September 6, take out the centrifuge tube and put it into a 4 ℃ refrigerator for refrigeration.</p>
        <p>3. At 2 p.m. on September 11, take out the centrifuge tube and add 5 to the bacterial solution of the experimental group μ L IPTG (final concentration 0.5 mm), the control group was cultured in a shaking table (220 RPM) for 4 hours without IPTG.</p>
        <p>4. After the induction was completed at 6:00 p.m. on September 11, 1ml bacterial solution of the experimental group and the control group were taken respectively, centrifuged at 4 ℃ 10000 rpm for 10 min, and the supernatant was discarded.</p>
        <p>5. Add 150 to the precipitation μ L cell lysate was resuspended and precipitated.</p>
        <p>6. Add 37.5 to the suspension μ L 5xsds was boiled in boiling water for 5min and vortex oscillated.</p>
        <div class="row">
            <img-fluid class="col-6" alt="Partnership_07" src="/resources/images/Partnership_07.jpg"></img-fluid>
            <img-fluid class="col-6" alt="Partnership_08" src="/resources/images/Partnership_08.jpg"></img-fluid>
        </div>

        <h4>2.3.4 Protein detection:</h4>
        <p>1. Glue preparation: 12% polyacrylamide separation glue and 5% polyacrylamide concentrated glue</p>
        <p>2. Electrophoresis: Maker 1.5μl;  Sample 5μl. It is divided into four tracks: experimental group, experimental group, control group and control group. Glue running starts at 7 p.m. on September 11 and ends at 8:30 p.m.</p>
        <p>3. Test dyeing: Test dyeing of Coomassie brilliant blue for 1.5min</p>
        <p>4. Elution: wash with distilled water until the background is colorless</p>
        <img-fluid alt="Partnership_09" src="/resources/images/Partnership_09.jpg" caption="(Ladder Atlas)"></img-fluid>
        <img class="img-fluid" alt="Partnership_10" src="/resources/images/Partnership_10.png">
        <p class="img-caption">1,2: control group<br/>3,4: experimental group</p>

        <h3>2.4 Result analysis</h3>
        <p>About 32KD bands appeared in the experimental group, but not in the control group. It is proved that the gene has been induced to express in E. coli.</p>

        <h2>3. Epilogue</h2>
        <p>Through this in-depth cooperation with USTC, we learned about the specific project content of USTC team and broadened our vision, which is what iGEM hopes we can get in coloboration.</p>
        <p>We also look forward to another in-depth cooperation with an excellent team like USTC. The results of this cooperation experiment are perfect and meet the expectations of both sides. At the same time, we also hope USTC can get a good place in this iGEM.</p>
    </writing-container>
    `
}