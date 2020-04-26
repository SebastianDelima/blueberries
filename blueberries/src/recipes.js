import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'
import  arrow                          from './arrow.svg'
import  bowl                           from './blueBowl.png'
import  cake                           from './littleCake.png'
import  gran                           from './gran.png'

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

                    <section id="recipe2">
                    <p id="recipe2Title">Mini Bundt Cakes</p>

                     <div className="tables">
                         <div id="recipe2Text1">
                                <p className="genericSub">Ingredients</p>
                                <p>- 1/4 cup butter, softened</p>
                                <p>- 1/2 cup sugar</p>
                                <p>- 1 large egg</p>
                                <p>- 1/4 cup 2% milk</p>
                                <p>- 1/2 teaspoon vanilla extract</p>
                                <p>- 1 cup all-purpose flour</p>
                                <p>- 1 teaspoon baking powder</p>
                                <p>1/4 teaspoon salt</p>
                                <p>1-1/2 cups fresh or frozen blueberries</p>
                                <p>LEMON ICING:</p>
                                <p>1/2 cup confectioners' sugar</p>
                                <p>1-1/2 teaspoons 2% milk</p>
                                <p>1 teaspoon lemon juice</p>
                                <p>Additional blueberries, optional</p>
                         </div>
                         

                         <div id="recipe2Text2">
                             <p className="genericSub">Instructions</p>
                             <p>1. In a small bowl, cream butter and sugar. 
                                    Beat in the egg, milk and vanilla. 
                                    Combine the flour, baking powder and salt; stir into creamed mixture. Fold in blueberries.</p><br></br>
                             <p>2. Pour into three 4-in. fluted tube pans coated with cooking spray.
                                  Bake at 350° for 25-30 minutes or until a toothpick inserted in the center 
                                  comes out clean. Cool for 10 minutes before removing from pans to wire racks to cool completely.</p><br></br>
                             <p>3. For icing, in a small bowl, combine the confectioners' sugar, milk and lemon juice; 
                                 drizzle over cakes. Garnish with additional berries if desired.</p>
                         </div> 
                     </div>
                     
                     <img id="cake" src={cake} alt="blue"/>
                     <img id="cake2" src={cake} alt="blue"/>
                     </section> 

                 <section id="recipe3">
                 <p id="recipe1Title">Blueberry Granola</p>
                     <div className="tables">
                         <div id="ing" className="recipeTextThree">

                        <p className="genericSub">Ingredients</p>
                        <p>- 1 cup dried blueberries</p>
                        <p>- 2 cups  oats </p>
                        <p>- 1/2 cup sliced almonds</p>
                        <p>- 1/2 tsp cinnamon</p>
                        <p>- pinch of salt</p>
                        <p>- 1/4 cup maple syrup</p>
                        <p>- 2 tsp vanilla extract</p>
                        <p>- 3 tbsp coconut oil</p>
                        
                         </div>
                         <div id="rec2" className="recipeText3">

                             <p className="genericSub">Instructions</p>
                             <div id="weirdP">
                             <p>1. Preheat the oven to 300 degrees F and line a baking pan with parchment paper.</p>
                             <p>2. Mix the oats, sliced almonds, cinnamon, and salt together in a bowl.</p>
                             <p>3. Mix the maple syrup, vanilla extract and coconut oil together in a separate bowl.</p>
                             <p>4. Pour the liquid into the bowl of dry ingredients and mix together until everything is evenly coated.</p>
                             <p>5. Spread out evenly on the baking pan and bake for 25-30 minutes, until lightly toasted. Let cool then mix in the dried blueberries.</p>
                             </div>

                         </div>
                         
                     </div>
                  

                     <img id="gran" src={gran} alt="gran"/>
                     
                     
                     </section> 
               </main>
            </Fragment>
        )
    }
}

export default Recipes