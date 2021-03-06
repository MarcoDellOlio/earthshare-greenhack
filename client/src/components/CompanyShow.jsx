import React, { Component } from 'react'
import { CompanyShowImage } from './styled-components/Images'
import { JobsLink, FocusHeader, FocusAreas, Advertisement, LookingToHire, TestimonialsDiv, CompaniesDiv, EarthShareInfo, EarthShareDiv, LinksDiv, TreesImage, ButtonStyle, SeekingTextDiv, HiringTextDiv, HiringBlurb, SeekingBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv } from './styled-components/CompanyShowStyle'
import NavBar from './NavBar'
import axios from 'axios'
import { ThreeAds } from './styled-components/LandingStyle'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'
import Footer from './Footer'


class CompanyShow extends Component{
    state = {
        company: {}
    }

    componentWillMount(){
        this.getOneCompany()
    }
    async getOneCompany() {
        try {
            console.log("test", this.props.match.params.companyId)
            const res = await axios.get(`/api/companies/${this.props.match.params.companyId}`)
            const company = res.data
            this.setState({ company: company })
        }
        catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div>
                <div>
            <NavBar />
            <GreenJobsHeader>
                <CompanyShowImage src="https://i.imgur.com/Jk7JydQ.jpg" alt="green jobs company logo"/>
            </GreenJobsHeader>
            <LinksDiv>
                <FocusHeader>
                    Areas of focus:
                </FocusHeader>
                <FocusAreas>
                    <ol>Climate Change</ol>
                    <ol>Conservation</ol>
                    <ol>Solar Energy</ol>
                    <ol>Recycling</ol>
                    <ol>Renewable Energy</ol>
                </FocusAreas>
            </LinksDiv>
            <EarthShareDiv>
            <div>
                <MapContainer />
            </div>
          
            </EarthShareDiv>
            <CompaniesDiv>
            </CompaniesDiv>
            <TestimonialsDiv>
                    CAROUSEL HERE
            </TestimonialsDiv>
        <LookingToHire>
            <JobsLink>
                <Link to="/jobs"><ButtonStyle>See Jobs</ButtonStyle></Link>
            </JobsLink>
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
            </div>
        )
    }
}

export default CompanyShow