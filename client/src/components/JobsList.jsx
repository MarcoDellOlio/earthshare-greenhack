import React, { Component } from 'react'
import JobsIndex from './JobsIndex'
import axios from 'axios'
import { NavDiv } from './styled-components/NavStyle'
import NavBar from './NavBar'
import Footer from './Footer'
import styled from 'styled-components'
import moment from 'moment'

class JobsList extends Component {

    state = {
        jobs: [],
        sidebarShowing: false,
        jobInSideBar: {},
        indexToStyle: '',
    }

    componentWillMount = () => {
        this.getAllJobs()
    }

    toggleSidebar = () => {
        this.setState({ sidebarShowing: !this.state.sidebarShowing })
    }

    handleClick = (item, index) => {
        if (!this.state.jobInSideBar.id || item.job._id === this.state.jobInSideBar.id || (item.job._id !== this.state.jobInSideBar.id && !this.state.sidebarShowing)) {
            this.toggleSidebar()
        }

        // nothing has been clicked on  OR the id's do not match 
        // Still need to save to the database and determine what technically counts as a "View"
        if (!this.state.jobInSideBar.id || (item.job._id !== this.state.jobInSideBar.id)) {
            this.incrementClick(item, index)

        }

        this.setState({
            jobInSideBar: {
                title: item.job.title,
                city: item.user.city,
                organization: item.user.organization,
                id: item.job._id,
                datePosted: item.job.createdAt,
                numberOfViews: item.job.click,
                description: item.job.description
            }
        })
    }

    incrementClick = (item, index) => {
        item.job.click++
        console.log("INDEX", index);
        this.setState({ indexToStyle: index })
    }

    getAllJobs = async () => {
        const response = await axios.get('/api/jobs')
        const users = response.data
        const jobsList = []
        for (let i = 0; i < users.length; i++) {
            if (users[i].isEmployer) {
                for (let j = 0; j < users[i].jobs.length; j++) {
                    jobsList.push(
                        {
                            user: users[i],
                            job: users[i].jobs[j]
                        })
                }
            }
        }

        this.setState({ jobs: jobsList })
    }

    render() {

        return (
            <Main>
                <NavBar />
                <SearchWrapper>
                    <SearchInput type="text" placeholder="search jobs" />
                    <SearchInput type="text" placeholder="search location" />
                    <SearchButton>Search</SearchButton>
                </SearchWrapper>
                <JobPage>
                    <JobListings>
                        {
                            this.state.jobs.map((item, index) => {
                                return <div key={index}>
                                    <ListingWrapper onClick={() => this.handleClick(item, index)} index={index} indexToStyle={this.state.indexToStyle}>
                                        <ListingImageDiv>
                                            <ListingImg src={item.user.picture} alt="" />
                                        </ListingImageDiv>
                                        <ListingDetailDiv>
                                            <PostTitle name="jobInSideBar">{item.job.title}</PostTitle>
                                            <PostSubTitle>{item.user.organization} - {item.user.city}</PostSubTitle>
                                            <div>{item.job.description.slice(0, 270)} ...</div>
                                            <BottomPost>
                                                <BottomPostData>
                                                    <BottomPostItem>Posted {moment(item.job.createdAt).startOf('hour').fromNow()}</BottomPostItem>
                                                    <BottomPostItem>{item.job.click} views</BottomPostItem>
                                                </BottomPostData>
                                                <ApplyButton>Apply Now</ApplyButton>
                                            </BottomPost>
                                        </ListingDetailDiv>

                                    </ListingWrapper>
                                </div>
                            })
                        }
                    </JobListings>
                    {this.state.sidebarShowing ?
                        <Sidebar>
                            <SidebarTop>
                                <PostTitle>{this.state.jobInSideBar.title}</PostTitle>
                                <PostSubTitle>{this.state.jobInSideBar.organization} - {this.state.jobInSideBar.city}</PostSubTitle>
                                <BottomPostData>
                                    <BottomPostItem>Posted {moment(this.state.jobInSideBar.datePosted).startOf('hour').fromNow()}</BottomPostItem>
                                    <BottomPostItem>{this.state.jobInSideBar.numberOfViews} views</BottomPostItem>
                                </BottomPostData>
                                <SidebarButtonContainer>
                                    <ApplyButton>Apply Now</ApplyButton>
                                    <SaveJobButton>Save Job</SaveJobButton>
                                </SidebarButtonContainer>
                            </SidebarTop>
                            <SidebarDescriptionSection>
                                {this.state.jobInSideBar.description}
                            </SidebarDescriptionSection>

                        </Sidebar>
                        : null
                    }
                </JobPage>

                <Footer />
            </Main>
        )
    }
}

export default JobsList

const Main = styled.div`
    font-family: helvetica;
`

const ListingWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    padding-left: 40px;
    padding-right: 30px;
	border-right: 10px solid transparent;
    transition: border .3s;
    background-color: ${props => (props.index === props.indexToStyle) ? "rgb(191, 191, 199)" : null };
    /* border-left: ${props => (props.index === props.indexToStyle) ? "13px solid orange" : null }; */
    border-right: ${props => (props.index === props.indexToStyle) ? "13px solid orange" : null };
    &:hover {
        background-color: #eff5f9;
    }
`

const BottomPost = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const BottomPostData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 270px;
`

const PostTitle = styled.div`
    font-size: 25px;
`

const PostSubTitle = styled.div`
    font-size: 18px;
    color: grey;
`

const ListingImageDiv = styled.div`
    padding-right: 10px;
`

const JobPage = styled.div`
    display: flex;
    flex-direction: row;
`

const JobListings = styled.div`
    /* display: flex; */
`

const Sidebar = styled.div`
    width: 1150px;
    padding: 10px;
    margin-right: 35px;
    border: lightgrey 3px solid;
`

const ListingDetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100px;
    align-items: center;
`

const SearchButton = styled.div`
    background-color: #57A619;
    color: white;
    padding: 5px;
    border-radius: 5px;
    width: 100px;
    text-align: center;
    margin: 10px;
`
const SearchInput = styled.input`
    border-radius: 5px;
    border: 1px solid grey;
    font-size: 20px;
    height: 30px;
    margin: 10px;
    width: 340px;
    padding-left: 10px;
    color: black;
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: lightgrey;
    }
    &::-moz-placeholder { /* Firefox 19+ */
        color: lightgrey;
    }
    &:-ms-input-placeholder { IE 10+
        color: lightgrey;
    }
    &:-moz-placeholder { /* Firefox 18- */
        color: lightgrey;
    } 
`

const BottomPostItem = styled.div`
    padding: 10px;
`

const ApplyButton = styled.div`
    background-color: rgb(191, 191, 199);
    color: white;
    width: 100px;
    height: 35px;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
        background-color: rgb(100, 100, 100);
    }
`

const SidebarTop = styled.div`
    border-bottom: lightgrey 3px solid;
`

const ListingImg = styled.img`
    width: 180px;
    height: 180px;
    object-fit: cover;
`

const SidebarButtonContainer = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
    margin-bottom: 20px;
`

const SaveJobButton = styled.div`
    background-color: orange;
    color: white;
    width: 100px;
    height: 35px;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
        background-color: rgb(100, 100, 100);
    }
`

const SidebarDescriptionSection = styled.div`
    padding-top: 20px;
`