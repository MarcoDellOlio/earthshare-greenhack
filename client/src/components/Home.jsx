import React from 'react'
import { ThreeAds, SocialMediaImages, Advertisement, LookingToHire, TestimonialsDiv, CompaniesDiv, EarthShareInfo, EarthShareDiv, SocialMediaDiv, TreesImage, ButtonStyle, SeekingTextDiv, HiringTextDiv, HiringBlurb, SeekingBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv, TreesImgDiv, EarthshareDescriptionTitle, SocialTitle } from './styled-components/LandingStyle'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { SocialImage } from './styled-components/Images'
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
                        <Link to="/companies/new"><ButtonStyle>Create a Job Listing</ButtonStyle></Link>
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
                        <Link to="/users/new"><ButtonStyle>Join the Search</ButtonStyle></Link>
                    </SeekingTextDiv>
                </SeekingDiv>
            </GreenJobsHeader>
            <TreesImgDiv>
                <TreesImage src="https://i.imgur.com/SkJPLeT.jpg?2" alt="Green Jobs logo" />
            </TreesImgDiv>
            <EarthShareDiv>
                <EarthShareInfo>
                    <EarthshareDescriptionTitle>
                        EarthShare
                    </EarthshareDescriptionTitle>
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
                </EarthShareInfo>
                <SocialMediaDiv>
                    <div>
                        <SocialTitle>Get Connected:</SocialTitle>
                    </div>
                    <SocialMediaImages>
                        <SocialImage src="https://i.imgur.com/zTNll8B.png" alt="Twitter logo" />
                        <SocialImage src="https://i.imgur.com/8TVx4IQ.png" alt="Facebook logo" />
                        <SocialImage src="https://i.imgur.com/o8a59rU.png" alt="Linked In logo" />
                        <SocialImage src="https://i.imgur.com/cQ4Kj8E.png" alt="Instagram logo" />
                    </SocialMediaImages>
                </SocialMediaDiv>
            </EarthShareDiv>
            <CompaniesDiv>
            </CompaniesDiv>
            <TestimonialsDiv>
                CAROUSEL HERE
            </TestimonialsDiv>
            <LookingToHire>
                <div>
                    <button>
                        HELLO
                </button>
                    <button>
                        HELLO
                </button>
                </div>
            </LookingToHire>
            <Advertisement>
                <ThreeAds>
                    <h2>Get Notified</h2>
                    <p>Four loko tofu dolore health goth lorem marfa, veniam lo-fi excepteur wayfarers labore. Celiac copper mug tofu air.</p>
                </ThreeAds>
                <ThreeAds>
                    <h2>Read the Blog</h2>
                    <p>Four loko tofu dolore health goth lorem marfa, veniam lo-fi excepteur wayfarers labore. Celiac copper mug tofu air.</p>
                </ThreeAds>
                <ThreeAds>
                    <h2>Job Coaching</h2>
                    <p>Four loko tofu dolore health goth lorem marfa, veniam lo-fi excepteur wayfarers labore. Celiac copper mug tofu air.</p>
                </ThreeAds>
            </Advertisement>
            <Footer />

        </div>
    )
}




export default Home