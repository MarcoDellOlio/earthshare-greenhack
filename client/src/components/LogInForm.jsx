import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { UserFormContainer, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton } from './styled-components/FormStyle'
import { withAlert } from 'react-alert'

class LogInForm extends Component {
  state = {
    email: "",
    password: "",
    id: "",
    isEmployer: false
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault()
  }
  handleSubmit = (event) => {
    const email = this.state.email
    const password = this.state.password
    event.preventDefault()
    axios.post("/api/authenticate", {email, password}) 
    .then(res => {
      console.log(res)
     
      const id = res.data._id
      const isEmployer = res.data.isEmployer
      const response = res.data.response
      if (id) { this.setState({id, isEmployer})}
      else if (response === "User not found") {
        this.props.alert.error('User does not exists')
      }
      else if (response === "Password is incorrect") {
        this.props.alert.error('Password is incorrect')
      }   
    })

    .catch (err => console.log(err)) 
  }


  //REDIRECT TO JobS PAGE
  render() {
    return (
      <UserFormContainer>
        {this.state.id ? <Redirect to={

          this.state.isEmployer ? 
          `/companies/${this.state.id}` :
          `/users/${this.state.id}`


        }>Jobs</Redirect> :
          <FormWrapper>
            <FormBody onSubmit={this.handleSubmit}>
              <FormField>
                <FormHeader>
                  <FormHeading>Log in</FormHeading>
                </FormHeader>
                <FormInput
                  type="string"
                  name="email"
                  placeholder="Insert email"
                  onChange={this.handleChange} />
              </FormField>

              <FormField>
                <FormInput
                  type="string"
                  name="password"
                  placeholder="Insert password"
                  onChange={this.handleChange} />
              </FormField>
              <FormField>
                <FormButton>Submit</FormButton>
              </FormField>
            </FormBody>
          </FormWrapper>}
      </UserFormContainer>
    )

  }
}

export default withAlert(LogInForm)