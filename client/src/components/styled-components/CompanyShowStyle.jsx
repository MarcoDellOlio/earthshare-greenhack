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
    a{
        text-decoration: none;
        color: #1b1b1b;
    }
   
`

export const JobsLink = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

export const TreesImage = styled.img`
    width: 100vw;
    height: 30vh;
`

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 15vh;
    background-color: rgba(99, 160, 200, 0.25);
`
export const FocusAreas = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100vw;
`

export const FocusHeader = styled.div`
    margin-top: 25px;
`

export const EarthShareDiv = styled.div`
    display: flex;
`
export const EarthShareInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;

`

export const CompaniesDiv = styled.div`
    height: 40vh;
    background-color: #63a0c8;

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


export default {  JobsLink, FocusHeader, Advertisement, LookingToHire, TestimonialsDiv, CompaniesDiv, EarthShareDiv, EarthShareInfo, LinksDiv, TreesImage, ButtonStyle, SeekingTextDiv, HiringTextDiv, SeekingBlurb, HiringBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv }
