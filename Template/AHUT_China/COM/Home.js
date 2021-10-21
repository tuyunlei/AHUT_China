export default {
    template: `
    <div>
        <link rel="stylesheet" type="text/css" href="/Template/AHUT_China/CSS/Home.css">
        <div class="container-fluid" style="padding: 0 128px;">
            <div class="mt-5 rounded-32" style="padding: 40px; background-color: #E4C1BF;">
                <video class="rounded-32" style="width: 100%;" src="/resources/videos/main.mp4" 
                type="video/mp4" autoplay="autoplay" controls="controls"></video>
            </div>
        </div>
    
        <div class="bg-light" style="position: relative;">
            <img id="background" src="/resources/images/background.jpg" alt="background">
    
            <p id="background-tip">Tips: Move the cursor over the text below to view the details.</p>
    
            <div class="text-box-group">
                <div class="text-box" style="top: 9%; left: 12%; width: 40%; height: auto; font-size: 4.5vw;">
                    <p>The urgent need</p>
                    <p>for biotechnology</p>
                    <p>to treat breast</p>
                    <p>cancer</p>
                </div>
    
                <div class="detail-box" style="width: 28%; height: auto; font-size: 1.3vw;">
                    <div class="arrow"></div>
                    <div class="detail-inner-box">
                        The incidence of breast cancer is increasing among young people. All current conventional cancer
                        therapies have high toxicity and side effects. Some bacteria have been found to have the function of
                        targeting breast cancer cells and inhibiting their growth. Therefore, using biotechnology to treat
                        breast cancer is an urgent need.
                    </div>
                </div>
            </div>
    
            <div class="text-box-group">
                <div class="text-box" style="top: 32%; left: 55%; width: 40%; height: auto; font-size: 4vw;">
                    <p>Advantages of</p>
                    <p>modified bacteria to</p>
                    <p>target breast cancer</p>
                    <p>cells and inhibit</p>
                    <p>their growth</p>
                </div>
    
                <div class="detail-box" style="width: 30%; height: auto; font-size: 1.3vw;">
                    <div class="arrow"></div>
                    <div class="detail-inner-box">
                        In this project, we decide to use a non-toxic and harmless bacterium (Ecoli-Nissle 1917) to act on
                        breast cancer cells. Compared with other methods, it has the characteristics of small side effect,
                        high safety and high high tumor targeting ability. Because the bacteria themselves target the low
                        oxygen and low ph microenvironment of cancer cells, we also modify the bacteria and plasmids. The
                        hypoxia-inducible promoter was introduced into the plasmid, and an artificial antibody to Her2 was
                        enhanced on the surface of the bacteria, which secreted the sTRAIL fusion protein capable of causing
                        apoptosis in cancer cells.
                    </div>
                </div>
            </div>
            <div class="text-box-group">
                <div class="text-box" style="top: 56%; left: 14%; width: 34%; height: auto; font-size: 4vw;">
                    <p>The process by</p>
                    <p>which modified</p>
                    <p>probiotics cause</p>
                    <p>breast cancer cell</p>
                    <p>apoptosis</p>
                </div>
    
                <div class="detail-box" style="width: 32%; height: auto; font-size: 1.3vw;">
                    <div class="arrow"></div>
                    <div class="detail-inner-box">The low-oxygen, low-PH microenvironment, which tumors are living in,
                        attracts our modified probiotics to express around the tumors. Meanwhile, the probiotics are able to
                        release fusion proteins. In the action of a secreted peptide the His tagged fusion protein into the
                        environment, then the Her2 artificial antibody(small size, containing only 58 amino acids) will
                        recognize the specific receptor on the surface of breast cancer cells, and subsequently the sTRAIL
                        fusion protein in the soluble fusion protein will bind to the cytoplasmic death domains of the death
                        receptors DR4 and DR5 on the surface of cancer cells to transduce the apoptotic signal, which will
                        then allow cancer cells to apoptosis. In this design, the Her2 antibody enhances the targeting of
                        the treatment and reduces the damage of the fusion protein to other cells in the body.
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    mounted() {
        let groups = [].slice.call(document.querySelectorAll('.text-box-group'))
        groups.map(function (group) {
            let text_box = group.querySelector('.text-box')
            let detail_box = group.querySelector('.detail-box')
            let popper = Popper.createPopper(text_box, detail_box, {
                placement: 'right',
                modifiers: [{
                    name: 'offset',
                    options: {
                        offset: [0, 128],
                    }
                }]
            })

            function show() {
                detail_box.setAttribute('data-show', '');

                // We need to tell Popper to update the tooltip position
                // after we show the tooltip, otherwise it will be incorrect
                popper.update();
            }

            function hide() {
                detail_box.removeAttribute('data-show');
            }

            const showEvents = ['mouseenter', 'focus'];
            const hideEvents = ['mouseleave', 'blur'];

            showEvents.forEach((event) => {
                text_box.addEventListener(event, show);
            });

            hideEvents.forEach((event) => {
                text_box.addEventListener(event, hide);
            });
        })
    },
}