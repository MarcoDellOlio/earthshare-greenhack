import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

import { TextArea, UserFormContainer, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/FormStyle'

class CompanyForm extends Component {
    state = {
        newCompany: {},
        redirect: false
    }
    handleInputChange = (event) => {
        const attribute = event.target.name
        let value = event.target.value
        const newCompany = {...this.state.newCompany}
        newCompany[attribute] = value
        this.setState({newCompany})
    }
    resetForm = () => {
        const newCompany = {...this.state.newCompany}
        this.setState({newCompany, redirect: true})
    }
    addNewCompany = (event) => {
        event.preventDefault()
        const newCompany ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            organization: this.state.email,
            password: this.state.password,
            picture: this.state.image,
            isEmployer: true
        }
        axios.post("/api")
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }



    //REDIRECT TO CompanyS PAGE
    render() {
        return (
            <UserFormContainer>

                {this.state.redirect ? <Redirect to="/companies">Companies</Redirect> :
                <FormWrapper>
                      <FormBody onSubmit={this.addNewCompany}>
                    <FormField>
                        <FormHeader>
                            <FormHeading>New Company</FormHeading>
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
                            name="organization"
                            placeholder="Organization"
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
                        <FormInput
                            type="string"
                            name="image"
                            placeholder="Image"
                            onChange={this.handleInputChange} />
                    </FormField>
                    {/* <TextArea>
                        <FormInput
                            type="text-area"
                            name="description"
                            placeholder="Description"
                            onChange={this.handleInputChange} />
                    </TextArea> */}
                    <FormField>
                        <FormInputButton
                            type="submit"
                            value="Add New Company" />
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

export default CompanyForm