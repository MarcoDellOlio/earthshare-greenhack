import React, { Component } from 'react'
import { CompanyShowImage } from './styled-components/Images'
import { FocusHeader, FocusAreas, Advertisement, LookingToHire, TestimonialsDiv, CompaniesDiv, EarthShareInfo, EarthShareDiv, LinksDiv, TreesImage, ButtonStyle, SeekingTextDiv, HiringTextDiv, HiringBlurb, SeekingBlurb, GreenJobsParagraph, GreenJobsHeader, SeekingDiv, HiringDiv } from './styled-components/CompanyShowStyle'
import NavBar from './NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'
import Footer from './Footer'


class CompanyShow extends Component{
    state = {
        company: {}
    }

    componentWillMount(){
        this.getOneCompany
    }
    async getOneCompany() {
        try {
            const res = await axios.get(`/api/companies/${this.props.match.params.company_id}`)
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
                <CompanyShowImage src="https://i.imgur.com/Jk7JydQ.jpg"/>
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
            <div>
                <hi>Get Notified</hi>
                <p>Four loko tofu dolore health goth lorem marfa, veniam lo-fi excepteur wayfarers labore. Celiac copper mug tofu air.</p>
            </div>
            <div>
                <hi>Read the Blog</hi>
                <p>Four loko tofu dolore health goth lorem marfa, veniam lo-fi excepteur wayfarers labore. Celiac copper mug tofu air.</p>
            </div>
            <div>
                <hi>Job Coaching</hi>
                <p>Four loko tofu dolore health goth lorem marfa, veniam lo-fi excepteur wayfarers labore. Celiac copper mug tofu air.</p>
            </div>       
        </Advertisement>
        <Footer />

        </div>
            </div>
        )
    }
}

export default CompanyShow