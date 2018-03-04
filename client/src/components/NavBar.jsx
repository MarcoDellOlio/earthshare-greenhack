import React from 'react'
import { Link } from 'react-router-dom'
import { NavDiv } from './styled-components/NavStyle'
import { LogoImage } from './styled-components/Images'

const NavBar = (props) => {

    return (
        <NavDiv>
            <div>Hamburger</div>
            <div>
        <img  src="http://www.earthsharega.org/wp-content/uploads/2014/02/GREENJOBS-300x148.png" width="239" height="108"/>
        </div>
        <div>
            <h2>Sign In/Sign Up</h2>
            {/* <h2>Sign Up</h2> */}
        </div>
        </NavDiv>
    )

}


export default NavBar