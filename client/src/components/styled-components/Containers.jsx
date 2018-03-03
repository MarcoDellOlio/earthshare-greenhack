import styled from 'styled-components'

export const CompanyContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 4.75em;
    color: white;
    border: solid 1px white;
    text-shadow: 1px 1px rgba(0,0,0, 0.50);   
    @media only screen and (max-width: 787px){
        font-size: 3em
    
    }

    @media only screen and (max-width: 600px){
        font-size: 2.5em
    
    }
`



export const CompanyHeaderContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
        a {
            text-decoration: none;
            color: white;
        }

`
export const CompanyIndexContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`


export default { 
    CompanyIndexContainer,
    CompanyHeaderContainer, 
    CompanyContainer
 }