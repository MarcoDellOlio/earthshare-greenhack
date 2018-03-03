import React, { Component } from 'react'
import EmployerForm from './EmployerForm'
import JobSeekerForm from './JobSeekerForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import JobsList from './JobsList'
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }


  //(POST) Create a User  
 createUser = async (newUser) => {

    try {
      const res = await axios.post('/api/users', newUser)
      newUser = res.data
      const updatedUsers = [...this.state.Users]
      this.setState({ users: updatedUsers })
    } catch (err) {
      console.log(err)
    }
  }

 addNewUser = async (newUser) => {
    try {
      await this.createUser(newUser)
      const users = [...this.state.Users]
      users.push(newUser)
      this.setState({ users })
    }
    catch (err) {
      console.log(err)
    }

  }
  render() {
    const JobsListComponent = (props) => (<JobsList {...props}/>)
    return (
      <Router>
      <Switch>
        <Route exact path="/jobs" component={JobsListComponent}/>
        <Route exact path="/employer/new" component={EmployerForm} />
        <Route exact path="/job-seeker/new" component={JobSeekerForm} />

      </Switch>
    </Router>
    )
  }
}

export default App
