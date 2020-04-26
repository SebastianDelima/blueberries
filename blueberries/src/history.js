import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'


class History extends Component{
    render(){
        return(
            <Fragment>
                <header className="genericHead">
                    <p id="historyTitle">History & Background</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                    <div>
                        <p id="historyText">
                    <p className="colorBoxes one">- Blueberries are perennial flowering plants with blue/purple colored berries.<br></br></p>
                    <p className="colorBoxes two">- They come from the genus Vaccinium, which also includes cranberries, bilberries, and huckleberries.<br></br></p>
                    <p className="colorBoxes three">- The plants are bush like structures and can grow up to 10 feet tall.<br></br></p>
                    <p className="colorBoxes four">- Blueberries are native to North America, but have been transported to other parts of the world as well</p>
                    <p className="colorBoxes five">- They grow best in warm climates, (June-August)<br></br></p>
                    <p className="colorBoxes six">- Their dark purple color comes from the rich anthocyanin content in the fruit<br></br></p> 
                        </p>
                    </div>
                   

                    
                </header>
               <main>

               </main>
            </Fragment>
        )
    }
}

export default History