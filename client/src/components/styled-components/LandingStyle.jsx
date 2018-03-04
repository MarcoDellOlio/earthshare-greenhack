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

export default { ButtonStyle, SeekingTextDiv, HiringTextDiv, SeekingBlurb, HiringBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv }
