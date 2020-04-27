import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'


class Nutrients extends Component{
    render(){
        return(
            <Fragment>
                <header id="nutrientsHead">
                    <p id="historyTitle">Nutrients</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                    
                </header>
               <main>
                   <section>
                       <p id="oneCup">
                        1 cup of blueberries contains:
                       </p>
                       <div id="flexNutrients">

                    <div className="nutrientsText">
                       <p>- 84 calories.</p>
                       <p>- 0 g of cholesterol.</p>
                       <p>- 1.1 g of protein.</p>
                       <p>- 0.49 g of fat.</p>
                       <p>- 21.45 g of carbohydrate.</p>
                    </div>
                    <div className="nutrientsText">
                       <p>- 21.45 g of carbohydrate.</p>
                       <p>- 14.74 g of total sugars.</p>
                       <p>- Fiber: 4 grams.</p>
                       <p>- Vitamin C: 24% of the RDI.</p>
                       <p>- Vitamin K: 36% of the RDI.</p>
                       <p>- Manganese: 25% of the RDI.</p>
                    </div>
                    
                       </div>
                       <img id="blueLogo2" src={blue} alt="no img"/>
                       <p id="heartSub" className="genericSub">Pytonutrients</p>
                       <p id="extraText">
                            Blueberries contain copper, beta-carotene, folate, choline, vitamins A and E, and
                            manganese. As well as anthocyanins, vitamins, and minerals, blueberries contain a
                            diverse range of phenolic compounds such as quercetin, kaempferol, and myricetin.
                        </p>
                   </section>
               </main>
            </Fragment>
        )
    }
}

export default Nutrients