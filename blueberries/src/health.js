import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'

class Health extends Component{
    render(){
        return(
            <Fragment>
                <header className="genericHead">
                    <p id="historyTitle">Health Benefits</p>
                    <img id="blueLogo" src={blue} alt="no img"/>
                </header>
               <main>

               </main>
            </Fragment>
        )
    }
}

export default Health