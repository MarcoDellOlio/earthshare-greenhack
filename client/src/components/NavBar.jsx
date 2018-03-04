import React from 'react'
import { Link } from 'react-router-dom'
import { NavDiv, NavItems } from './styled-components/NavStyle'
import { LogoImage } from './styled-components/Images'

const NavBar = (props) => {

    return (
        <NavDiv>
            <Link to="/">Home</Link>
        
        </NavDiv>
    )

}


export default NavBar