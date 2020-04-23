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