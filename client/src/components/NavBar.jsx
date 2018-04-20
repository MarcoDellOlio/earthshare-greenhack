import React from 'react'
import { Link } from 'react-router-dom'
import { NavDiv, SignInDiv, SignInText, UserIconContainer, SignInContainer, HamburgerContainer } from './styled-components/NavStyle'
import { LogoImage } from './styled-components/Images'
import FaUser from 'react-icons/lib/fa/user'
import FaBars from 'react-icons/lib/fa/bars'
import styled from 'styled-components'

const NavBar = (props) => {

    return (
        <NavDiv>
            <HamburgerContainer>
                <FaBars />
            </HamburgerContainer>
            <div>
                <img src="http://www.earthsharega.org/wp-content/uploads/2014/02/GREENJOBS-300x148.png" width="239" height="108" />
            </div>
            <SignInContainer>
                <Link to="/login">
                    <SignInDiv>
                        <UserIconContainer>
                            <FaUser />
                        </UserIconContainer>
                        <SignInText>Sign In</SignInText>
                    </SignInDiv>
                </Link>
            </SignInContainer>
        </NavDiv>
    )
}

export default NavBar

