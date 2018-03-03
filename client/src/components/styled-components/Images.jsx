import styled from 'styled-components'

export const SplashImage = styled.img `
width: 100vw;
`
export const CompanyImage = styled.img`
    width: 24.75vw;
    height: 286.86px;
    padding: 10px;
    
    @media only screen and (max-width: 1280px){
        width: 30vw;
        height: 286.86px;
    
    }
 
    @media only screen and (max-width: 1000px){
        width: 49.75vw;
        height: 60vh;
    
    }
    @media only screen and (max-width: 830px){
        width: 100vw;
        height: 90vh;
    
    }
    @media only screen and (max-width: 787px){
        width: 100%;
        height: auto;
    
    }
`

export default { SplashImage, CompanyImage}
