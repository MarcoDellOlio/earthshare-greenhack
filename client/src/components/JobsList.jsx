import React, { Component } from 'react'
import JobsIndex from './JobsIndex'
import axios from 'axios'

class JobsList extends Component {

    state = {
        jobs: []
    }
    
    componentWillMount = () => {
        this.getAllJobs()
    }

    getAllJobs = async () => {
        const response = await axios.get('/api/companies/jobs')
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
        this.setState({jobs: jobsList})
    }

    render() {

        return (
            <div>
                {
                    this.state.jobs.map((item, index)=> {
                        return <div key={index}>
                                    <h1>{item.job.title}</h1>                                
                                    <h4>Department: {item.job.department}</h4>
                                    <div>Job Posted by: {item.user.organization}</div>                                
                                </div>
                    })
                }
            </div>
        )
    }
}

export default JobsList