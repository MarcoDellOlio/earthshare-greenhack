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
export const SplashHeaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`

export const SplashImageContainer = styled.div`
    font-size: 10em;
    position: relative;
    text-align: center;
    color: white;
    color: white;
    font-family: 'Raleway', sans-serif;
    text-shadow: 1px 1px rgba(0,0,0, 0.50);  
    @media only screen and (max-width: 787px){
        font-size: 5em
    
    }
    @media only screen and (max-width: 600px){
        font-size: 3em
    
    }
    @media only screen and (max-width: 400px){
        font-size: 2em
    
    }
    @media only screen and (max-width: 350px){
        font-size: 1.5em
    
    }
    @media only screen and (max-width: 300px){
        font-size: 1em
    
    }
`

export default { 
    SplashImageContainer,
    SplashHeaderContainer,
    CompanyIndexContainer,
    CompanyHeaderContainer, 
    CompanyContainer
 }