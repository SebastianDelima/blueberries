import  React, { Component, Fragment} from 'react';
import  blue from './blueberries.png'

class Home extends Component {
    render(){
        return(
        <Fragment >

            <header>
                <div id="homeTitle">
                    <p id="homeText">
                    Blueberries
                    </p>
                    <img id="blueImg" src={blue} alt="no img"/>
                </div>
            </header>
            <main>
                <section id="options">
                <div id="leftSide" className="boxes"><p  className="textBox">History</p></div>
                <div className="boxes"><p className="textBox">Nutrients</p></div>
                <div id="leftSide" className="boxes"><p id="weirdText" >Health <p>Benefits</p></p></div>
                <div className="boxes"><p className="textBox">Recipes</p></div>
                </section>
            </main>
            <footer>
                
                <div id="wavy">
                </div>
            </footer>
        </Fragment>
        )
    }
}

export default Home;