import React, { Component } from 'react'
import JobsIndex from './JobsIndex'
import axios from 'axios'
import { NavDiv } from './styled-components/NavStyle'
import NavBar from './NavBar'
import styled from 'styled-components'
class JobsList extends Component {

    state = {
        jobs: [],
        sidebarShowing: false
    }

    componentWillMount = () => {
        this.getAllJobs()
    }

    toggleSidebar = () => {
        this.setState({ sidebarShowing: !this.state.sidebarShowing })
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
            <div>
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
                                    <ListingWrapper onClick={this.toggleSidebar}>

                                        <ListingImageDiv>
                                            <img width="180" src="https://i.imgur.com/rJ7Tc4P.jpg" alt="" />
                                        </ListingImageDiv>
                                        <ListingDetailDiv>
                                            <PostTitle>{item.job.title}</PostTitle>
                                            <PostSubTitle>{item.user.organization} - {item.user.city}</PostSubTitle>
                                            <div>{item.job.description.slice(0, 300)} ...</div>
                                            <BottomPost>
                                                <BottomPostData>
                                                    <BottomPostItem>3 days ago</BottomPostItem>
                                                    <BottomPostItem>{item.job.click} clicks</BottomPostItem>
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
                            <div>Company 1</div>
                            <div>Name</div>
                            <div>Place</div>
                            <div>Job Title</div>


                        </Sidebar>
                        : null
                    }
                </JobPage>

            </div>
        )
    }
}

export default JobsList

const ListingWrapper = styled.div`
    display: flex;
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
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
    width: 200px;

`

const PostTitle = styled.div`
    font-size: 25px;
`

const PostSubTitle = styled.div`
    font-size: 18px;
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
    width: 500px;
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
    height: 17px;
    margin: 10px;
`
const SearchInput = styled.input`
    border-radius: 5px;
    height: 23px;
    margin: 10px;
    width: 250px;
`

const BottomPostItem = styled.div`
    padding: 10px;
`

const ApplyButton = styled.div`
    background-color: rgb(191, 191, 199);
    color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
`