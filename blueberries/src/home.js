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
                <div className="boxes">hello</div>
                <div className="boxes">hello</div>
                <div className="boxes">hello</div>
                <div className="boxes">hello</div>
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