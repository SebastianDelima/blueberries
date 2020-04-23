import  React, { Component, Fragment} from 'react';
import  blue from './blueberries.png'

class Home extends Component {
    render(){
        return(
        <Fragment >

            <header>
                <div id="homeTitle">
                    <img id="blueImg" src={blue}/>
                    <p id="homeText">
                    Blueberries
                    </p>
                </div>
            </header>
            <footer>
                <div id="wave"></div>
                <div id="wavy">
                </div>
            </footer>
        </Fragment>
        )
    }
}

export default Home;