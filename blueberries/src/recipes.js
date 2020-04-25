import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'
import  arrow                          from './arrow.svg'
import  bowl                           from './blueBowl.png'
class Recipes extends Component{
    render(){
        return(
            <Fragment>
                <header className="genericHead">
                    <p id="historyTitle">Recipes</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                    <p id="recipeText">
                        Blueberries are conveniently located in the fresh fruit section right at your local grocery store.
                        Blueberries can be purchased year-round,
                        fresh or frozen. They are affordable to purchase, 
                        and even easier to eat!
                        </p>
                        <img id="arrow" src={arrow} alt="arrow"/>
                </header>
               <main>
                 <section id="recipe1">
                     <p id="recipe1Title">Blueberry Smoothie Bowl</p>

                     <div className="tables">
                         <div id="ing" className="recipeText">
                        <p className="genericSub">Ingredients</p>
                        
                        <p>- 1 Frozen Bannana</p>
                        <p>- 1 Cup fresh blueberries</p>
                        <p>- 1/2 Cup fresh blackberries</p>
                        <p>- 1 Cup unswetened almond milk</p>
                        <p>- 1 Tbsp Chia seeds</p>
                        <p>- 1/3 Cup plain greek yogurt</p>
                        <p>- Optional: Extra fruit & granola for topping</p>
                        
                         </div>
                         <div id="rec" className="recipeText">

                             <p className="genericSub">Instructions</p>
                             <p>1. Blend all ingredients</p>
                             <p>2. Pour ingredients in a bowl</p>
                             <p>3. Top with fruit and honey if desired</p>

                         </div>
                         
                     </div>
                     
                     <img id="bowl" src={bowl} alt="blue"/>
                     </section> 

                 <div id="recipe2"></div> 
                 <div id="recipe3"></div> 
               </main>
            </Fragment>
        )
    }
}

export default Recipes