import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'
import  bush                          from './bush.png'
import  stick                         from './Happ.png'


class History extends Component{
    render(){
        return(
            <Fragment>
                <header className="genericHead">
                    <p id="historyTitle">Background</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                    <div id="flexText">
                   <img src={bush} alt="bush"></img>
                        <p id="historyText">
                        Blueberries are perennial flowering plants that are native to North America, Asia,
                        and Scandinavia. Their genius is Vaccinium, sharing the same family as cranberries,
                        bilberries, and huckleberries. Blueberries are nutrient and antioxidant rich fruits with
                        many health benefits. Blueberries get their signature royal blue pigment from the
                        phytonutrient anthocyanin in their skin. Blueberries can be enjoyed year-round as the
                        North American blueberry season runs from May-August and in the colder months,
                        imports from South America fill the grocery store shelves. 
                        </p>
                   </div>
            
                </header>
               <main>
                   <div className="sub">
                    <p id="historyTitle">History</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                   </div>
                   <div id="timeline">
                    <img id="stick" src={stick} alt="stick"></img>
                    <div id="timelineText">
                    <p>1911 - Frederick Coville (a USDA botanist) and Elizabeth White (daughter of a
                        cranberry grower) and teamed up to domesticate blueberries. They used Whites family
                        farm for their experiment.</p><br></br>
                        <p>1912 - The team discovered blueberries could only thrive in acidic soil AND HAD THEIR
                            FIRST SUCCESS IN FIELD PLANTING!</p><br></br>
                        <p>1916 - The first highbush blueberries were harvested and sold in New Jersey!</p><br></br>
                    </div>
                   </div>

               </main>
            </Fragment>
        )
    }
}

export default History