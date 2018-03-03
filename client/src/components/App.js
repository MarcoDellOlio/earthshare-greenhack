import React, { Component } from 'react'
import EmployerForm from './EmployerForm'
import JobSeekerForm from './JobSeekerForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import JobsList from './JobsList'
import CompaniesList from './CompaniesList'
import Home from './Home'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    companies: []
  }


  //(POST) Create a User  
 createUser = async (newUser) => {

    try {
      // const res = await axios.post('/api/users', newUser)
      // newUser = res.data
      const updatedUsers = [...this.state.users]
      this.setState({ users: updatedUsers })
    } catch (err) {
      console.log(err)
    }
  }

 addNewUser = async (newUser) => {
    try {
      await this.createUser(newUser)
      const users = [...this.state.users]
      users.push(newUser)
      this.setState({ users })
    }
    catch (err) {
      console.log(err)
    }

  }

    //(POST) Create a User  
 createCompany = async (newCompany) => {

  try {
    // const res = await axios.post('/api/companies', newCompany)
    // newCompany = res.data
    const updatedCompanies = [...this.state.companies]
    this.setState({ companies: updatedCompanies })
  } catch (err) {
    console.log(err)
  }
}

addNewCompany = async (newCompany) => {
  try {
    await this.createCompany(newCompany)
    const companies = [...this.state.companies]
    companies.push(newCompany)
    this.setState({ companies })
  }
  catch (err) {
    console.log(err)
  }

}


  
  render() {
    const JobsListComponent = (props) => (<JobsList addNewUser={this.addNewUser}{...props}/>)
    const EmployerFormComponent = (props) => (<EmployerForm addNewCompany={this.addNewCompany}/>)
    const JobSeekerFormComponent = (props) => (<JobSeekerForm addNewUser={this.addNewUser}/>)
    const CompaniesListComponent = (props) => (<CompaniesList />)
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/jobs" component={JobsListComponent}/>
        <Route exact path="/companies" component={CompaniesListComponent}/>
        <Route exact path="/companies/new" component={EmployerFormComponent} />
        <Route exact path="/job-seeker/new" component={JobSeekerFormComponent} />
      </Switch>
    </Router>
    )
  }
}

export default App
