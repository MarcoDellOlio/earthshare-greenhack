import React from 'react'
import { SocialMediaDiv, TreesImage, ButtonStyle, SeekingTextDiv, HiringTextDiv, HiringBlurb, SeekingBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv } from './styled-components/LandingStyle'
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
                <TreesImage src="https://i.imgur.com/SkJPLeT.jpg?2"/>
            </div>
            <div>
                <h1>
                    EarthShare
                </h1>
                <p>
                EarthShare of Georgia connects people to trusted non-profit
                 organizations dedicated to conserving and protecting our air, 
                 land and water. EarthShare of Georgia raises funds primarily 
                 through workplace-giving partnerships with more than 50 employers 
                 that help support more than 60 environmental and conservation organizations.
                  Approximately 30 of these organizations are based in Georgia, 
                  the others are national member groups – some of which have offices 
                  or have field representatives in Georgia.
                </p>
            </div>
            <SocialMediaDiv>
                <div>
                    <h2>Get Connected:</h2>
                </div>
                <img src="#"/>
                <img src="#"/>
                <img src="#"/>
                <img src="#"/>
                
            </SocialMediaDiv>
            <div>
                
            </div>
        </div>
    )
}




export default Home