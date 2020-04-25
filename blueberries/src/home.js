import  React, { Component, Fragment} from 'react';
import  blue                          from './blueberries.png'
import { NavLink }                    from 'react-router-dom';



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
                    <svg id="curveSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="white" fill-opacity="1" 
                    d="M0,224L60,186.7C120,149,240,75,360,90.7C480,107,
                    600,213,720,213.3C840,213,960,107,1080,69.3C1200,32,1320,
                    64,1380,80L1440,96L1440,320L1380,320C1320,320,1200,320,1080,
                    320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>
            </header>
            <main>
                <section id="options">
                    <NavLink to="/history" id="leftSide" className="boxes"><div ><p  className="textBox">History</p></div></NavLink>

                    <NavLink to="/nutrients"  className="boxes"><div><p className="textBox">Nutrients</p></div></NavLink>

                    <NavLink to="/health" id="leftSide" className="boxes"><div ><p id="weirdText" >Health <p>Benefits</p></p></div></NavLink>

                    <NavLink to="recipes" className="boxes"><div ><p className="textBox">Recipes</p></div></NavLink>
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