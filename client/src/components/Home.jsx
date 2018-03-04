import React from 'react'
import { ButtonStyle, SeekingTextDiv, HiringTextDiv, HiringBlurb, SeekingBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv } from './styled-components/LandingStyle'
import NavBar from './NavBar'

const Home = (props) => {

    return (

        <div>
            <NavBar />
            <GreenJobsHeader>
            <HiringDiv>
                <HiringTextDiv>
                    <h1>Hiring?</h1>
                    <h4>Browse the top rated green companies.</h4>

                    <HiringBlurb>

                        Edison bulb polaroid butcher voluptate et,
                        copper mug prism occaecat biodiesel sed 90's.
                        Ad beard tacos tumblr. Pickled pop-up actually,
                        palo santo whatever aesthetic church-key deep v.
                        Four loko tofu dolore health goth lorem
                    </HiringBlurb>
                    <ButtonStyle>Create a Job Listing</ButtonStyle>
                    </HiringTextDiv>
                </HiringDiv>
                <SeekingDiv>
                    <SeekingTextDiv>
                    <h1>Seeking?</h1>
                    <h4>Access to ### earth friendly applicants.</h4>
                    <SeekingBlurb>
                        Edison bulb polaroid butcher voluptate et,
                        copper mug prism occaecat biodiesel sed 90's.
                        Ad beard tacos tumblr. Pickled pop-up actually,
                        palo santo whatever aesthetic church-key deep v.
                        Four loko tofu dolore health goth lorem
                    </SeekingBlurb>
                    <ButtonStyle>Join the Search</ButtonStyle>
                    </SeekingTextDiv>
                </SeekingDiv>
            </GreenJobsHeader>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
    )
}




export default Home