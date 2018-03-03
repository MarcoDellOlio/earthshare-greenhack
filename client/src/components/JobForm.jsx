import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { UserFormContainer, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/FormStyle'

class JobSeekerForm extends Component {
    state = {
        newJob: {},
        redirect: false
    }
    handleInputChange = (event) => {
        const attribute = event.target.name
        let value = event.target.value
        const newJob = {...this.state.newJob}
        newJob[attribute] = value
        this.setState({newJob})
    }
    resetForm = () => {
        const newJob = {...this.state.newJob}
        this.setState({newJob, redirect: true})
    }
    addNewJob = (event) => {
        event.preventDefault()
        this.props.addNewJob(this.state.newJob)
        this.resetForm()
    }


    //REDIRECT TO JobS PAGE
    render() {
        return (
            <JobFormContainer>

                {this.state.redirect ? <Redirect to="/jobs">Jobs</Redirect> :
                <FormWrapper>
                      <FormBody onSubmit={this.addNewJob}>
                    <FormField>
                        <FormHeader>
                            <FormHeading>New Job</FormHeading>
                        </FormHeader>
                        <FormInput
                            type="string"
                            name="title"
                            placeholder="Title"
                            onChange={this.handleInputChange} />
                    </FormField>

                    <FormField>
                        <FormInput
                            type="string"
                            name="link"
                            placeholder="Link to Listing"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="salary"
                            placeholder="Salary"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="requirements"
                            placeholder="Requirements"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="type"
                            placeholder="Job Type"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="image"
                            placeholder="Image"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="text-area"
                            name="description"
                            placeholder="Description"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInputButton
                            type="submit"
                            value="Add New Job" />
                    </FormField>
                    <FormField>
                    <FormButton><Link to="/Jobs">Cancel</Link></FormButton>
                    </FormField>
                </FormBody>
                </FormWrapper>}
            </JobFormContainer>
        )

    }
}

export default JobSeekerForm