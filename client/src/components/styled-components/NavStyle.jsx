import styled from 'styled-components'


export const NavDiv = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgba(99, 160, 200, 0.1);
    a {
        text-decoration: none;
        color: #1b1b1b;
    }
    
`

export const SignInDiv = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
`
export const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    background-color: #63a0c8;
    color: white;
    p{
        margin-top: 25px;
        margin-left: 45px;
    }
`
export const FooterFormat = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    li {
        list-style-type: none;
    }
    color: white;
`

export default {
   NavDiv, FooterStyle, FooterFormat, SignInDiv
}