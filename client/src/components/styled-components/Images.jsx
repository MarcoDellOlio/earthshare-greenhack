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

export const EarthShareImage = styled.img`
    width: 100vw;
`

export const LogoImage = styled.img`
    width: 5vw;
    height: 50%;
`
export const CompanyShowImage = styled.img`
    height: 50vh;
    width: 100vw;
`

export const SocialImage = styled.img`
    width: 40px;
    height: 40px;
    padding: 0 10px;
`

export const HomeCompanyItemImg = styled.img`
    width: 170px;
    height: 170px;
    object-fit: cover;
    border: lightgrey 10px solid;
    border-radius: 5px;
`

export const FeaturedCompanyImg = styled.img`
    width: 360px;
    height: 360px;
    object-fit: cover;
    border: lightgrey 10px solid;
    border-radius: 5px;
`

export default { SocialImage, CompanyShowImage, SplashImage, CompanyImage, FeaturedCompanyImg}
