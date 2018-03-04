import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

import { UserFormContainer, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton } from './styled-components/FormStyle'

class JobSeekerForm extends Component {
    state = {
        redirect: false
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault()
    }
    resetForm = () => {
        const newUser = { ...this.state.newUser }
        this.setState({ newUser, redirect: true })
    }
    addNewUser = (event) => {
        event.preventDefault()
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            isEmployer: false
        }
        console.log(newUser)
        axios.post("/api", newUser)
            .then(res => {
                this.setState({id: res.data._id})
            })
            .catch(error => console.log(error))
    }


    //REDIRECT TO USERS PAGE
    render() {
        return (
            <UserFormContainer>

                {this.state.redirect ? <Redirect to="/jobs">Users</Redirect> :
                    <FormWrapper>
                        <FormBody onSubmit={this.addNewUser}>
                            <FormField>
                                <FormHeader>
                                    <FormHeading>New User</FormHeading>
                                </FormHeader>
                                <FormInput
                                    type="string"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={this.handleInputChange} />
                            </FormField>

                            <FormField>

                                <FormInput
                                    type="string"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={this.handleInputChange} />
                            </FormField>
                            <FormField>
                                <FormInput
                                    type="string"
                                    name="email"
                                    placeholder="Email"
                                    onChange={this.handleInputChange} />
                            </FormField>
                            <FormField>
                                <FormInput
                                    type="string"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.handleInputChange} />
                            </FormField>
                            <FormField>
                                <FormInputButton
                                    type="submit"
                                    value="Add New User" />
                            </FormField>
                            <FormField>
                                <FormButton><Link to="/">Cancel</Link></FormButton>
                            </FormField>
                        </FormBody>
                    </FormWrapper>}
            </UserFormContainer>
        )

    }
}

export default JobSeekerForm