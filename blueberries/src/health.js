import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'
import  heart                         from './heart.png'
import  chart                         from './chart.jpg'
import  arrow                          from './arrow.svg'


class Health extends Component{
    render(){
        return(
            <Fragment>
                <header id="genericHeadHeart">
                    <p id="historyTitle" className="healthTitle">Health Benefits</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                    <p id="genSub">Scroll down to check out various health benefits associated with 
                        the regular conspumption of blueberries!</p>
                        <img id="arrow" src={arrow} alt="arrow"/>
                </header>
                <main>
                    <section>
                        <div id="firstSlide">
                            <p id="heartSub" className="genericSub">Protects against heart disease</p>
                            <div className="flexHealth">
                            <img id="heartImg" src={heart} alt="heart"/>
                            <p className="healthText">
                                <p>-The fiber, potassium, folate, and phytonutrients in blueberries 
                                    supports heart health. </p><br></br>
                                <p>-The absence of cholesterol is beneficial for the heart.</p><br></br>
                                <p>- Fiber content helps reduce the total amount of
                                cholesterol in the blood and decrease the risk of heart disease.</p><br></br>
                                <p>-According to a study from the Harvard School of Public Health in the U.K, regular consumption of 
                                anthocyanins can reduce the risk of heart attack by 32% in middle aged women. 
                                Official Results of  Study linked <a id="link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3762447/">here</a></p> 
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="secondSlide">
                        <p id="heartSub" className="genericSub">Cancer Prevention</p>
                            <div className="flexHealth">
                            <p className="healthText2">
                                <p>-Vitamin C and A, along with the phytonutrients in blueberries are powerful antioxidants
                                    that may protect cells against damage. </p><br></br>
                                <p>-Blueberries contain folate, which plays a role in DNA synthesis and repair. This can 
                                    prevent the formation of cancer cells due to mutations in DNA.</p><br></br>
                                <p>-In one study, 168 people drank 34oz of blueberry juice. After one month oxidative DNA damage 
                                     was reduced by 20%.</p><br></br>
                                <p>-Click <a id="link" href="https://www.ncbi.nlm.nih.gov/pubmed/17602170">here</a> to check the Results
                                of this study</p> 
                                </p>
                                <iframe  title="cancervideo" id="videoCancer" width="560" height="315" src="https://www.youtube.com/embed/CDNyZeD87oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="thirdSlide">
                        <p id="heartSub" className="genericSub">Improves Memory</p>
                            <div id="text3" className="flexHealth">
                            <img id="chart"  src={chart} alt="chart"/>
                            <p className="healthText2">
                                <p>-Antioxidants in blueberries may affect areas of the brain that are essential to intelligence </p><br></br>
                                <p>-studies have shown that consumption of blueberries can improve a person's short term memory.</p><br></br>
                                <p>-In one study, 9 older adults with mild cognitive impairment consumed blueberry juice every day.
                                    After 12 weeks, they experienced improvements in brain function</p><br></br>
                                <p>-Click <a id="link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2850944/">here</a> to check the Results
                                of this study</p> 
                                </p>
                               
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                
                </footer>
               <main>

               </main>
            </Fragment>
        )
    }
}

export default Health