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
      const updatedUsers = [...this.state.users]
      this.setState({ users: updatedUsers })
    } catch (err) {
      console.log(err)
    }
  }

 addNewUser = async (newUser) => {
    // try {
      // await this.createUser(newUser)
      const users = [...this.state.users]
      users.push(newUser)
      this.setState({ users })
    // }
    // catch (err) {
      // console.log(err)
    // }

  }
  render() {
    const JobsListComponent = (props) => (<JobsList addNewUser={this.addNewUser}{...props}/>)
    const EmployerFormComponent = (props) => (<EmployerForm addNewUser={this.addNewUser}/>)
    const JobSeekerFormComponent = (props) => (<JobSeekerForm addNewUser={this.addNewUser}/>)

    return (
      <Router>
      <Switch>
        <Route exact path="/jobs" component={JobsListComponent}/>
        <Route exact path="/employer/new" component={EmployerFormComponent} />
        <Route exact path="/job-seeker/new" component={JobSeekerFormComponent} />

      </Switch>
    </Router>
    )
  }
}

export default App
