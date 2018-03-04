import styled from 'styled-components'

export const NavDiv = styled.div`
width: 100vw;
// position: fixed;  
color: #f9f9f9;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
margin-bottom: 25px;
background-color: #2FAE1C;
box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
z-index: 1;
a{
    text-decoration: none;
    color: #f9f9f9;
    margin: 10px;
    margin-right: 20px;
    font-size: 1.25em;
    text-shadow: 1px 1px rgba(0,0,0, 0.1);
}
`




export default {
   NavDiv
}