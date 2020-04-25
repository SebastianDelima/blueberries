import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'

class Nutrients extends Component{
    render(){
        return(
            <Fragment>
                <header className="genericHead">
                    <p id="historyTitle">Nutrients</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                </header>
               <main>

               </main>
            </Fragment>
        )
    }
}

export default Nutrients