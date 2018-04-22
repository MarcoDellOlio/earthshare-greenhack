import styled from 'styled-components'

export const HiringDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #57a619;
`
export const SeekingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #63a0c8;
`

export const GreenJobsHeader = styled.div`
    display:flex;
    margin-top: 40px;
`
export const GreenJobsParagraph = styled.p`
    width: 50%;
`
export const HiringBlurb = GreenJobsParagraph.extend`
    padding-right: 10px;
`
export const SeekingBlurb = GreenJobsParagraph.extend`
    padding-left: 10px;
`
export const HiringTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #57a619;
    margin-right: 25px;
`
export const SeekingTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #63a0c8;
    margin-left: 25px;
`

export const ButtonStyle = styled.button`
    width: 150px;
    height: 40px;
    margin-bottom: 25px;
    border-radius: 4px;
`

export const TreesImage = styled.img`
    width: 100vw;
    height: 25vh;
`

export const TreesImgDiv = styled.div`
    display: flex;
    justify-content: center; 
    padding-top: 40px;
    padding-right: 30px;
    padding-left: 30px;
`

export const SocialMediaDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;

`

export const GetConnectedDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const EarthShareDiv = styled.div`
    display: flex;
    
`

export const EarthshareDescriptionTitle = styled.h1`
    margin-bottom: 0px;
`

export const EarthShareInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding-left: 50px;
`

export const CompaniesDiv = styled.div`
    height: 522px;
    background-color: #63a0c8;
    display: flex;
    padding: 40px;
`

export const TestimonialsDiv = styled.div`
    height: 40vh;
    
`
export const LookingToHire = styled.div`
    display: flex;
    height: 30vh;
    background-color: #57a619;

`

export const Advertisement = styled.div`
    height: 45vh;
    display: flex;
`

export const Footer = styled.div`
    display: flex;
    height: 30vh;
    background-color: #63a0c8;
`

export const SocialMediaImages = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
`

export const ThreeAds = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SocialTitle = styled.h2`
    margin-top: 0px;
`

export const HomeCompanyWrapper = styled.div`
    margin: 0 20px;
`

export const HomeCompanyName = styled.div`
    text-align: center;
`

export const FeaturedCompanyWrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FeaturedCompanyName = styled.div`

`

export const CompanyList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export default {  ThreeAds, SocialMediaImages, Footer, Advertisement, LookingToHire, 
                TestimonialsDiv, CompaniesDiv, EarthShareDiv, EarthShareInfo, SocialMediaDiv, 
                TreesImage, ButtonStyle, SeekingTextDiv, HiringTextDiv, SeekingBlurb, HiringBlurb, 
                GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv, TreesImgDiv,
                GetConnectedDiv, FeaturedCompanyWrapper }
