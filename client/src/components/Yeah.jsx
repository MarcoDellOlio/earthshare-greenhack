import React, { Component } from 'react'
import Select from 'react-select'
// import { Redirect, Link } from 'react-router-dom'
import { FormWrapper, FormBody, SelectField } from './styled-components/FormStyle'

class NewUser extends Component {

    state = {
        user: {
        }
    }
    handleInputChange = (event) => {
        const attribute = event.target.name
        let value = event.target.value

        const newUser = { ...this.state.newUser }
        newUser[attribute] = value
        this.setState({ newUser })
    }
    // resetForm = () => {
    //     const newUser = { ...this.defaultState.newUser }
    //     this.setState({ newUser, redirect: true })
    // }
    // addNewUser = (event) => {
    //     event.preventDefault()
    //     this.props.addNewUser(this.state.newUser)
    //     this.resetForm()
    // }


    render() {
        return (
            <div>

                {/* {this.state.redirect ? <Redirect to="/users">Users</Redirect> : */}
                <FormWrapper>
                    <div>
                        <p>New User</p>
                    </div>
                    <FormBody onSubmit={this.addNewUser}>
                        <field>
                            <input
                                type="string"
                                name="firstName"
                                placeholder="First Name"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="username"
                                placeholder="Username"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="organization"
                                placeholder="Organization"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="website"
                                placeholder="Website"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="image"
                                placeholder="Profile Picture"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="streetAddress"
                                placeholder="Street Address"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="streetAddress"
                                placeholder="Street Address"
                                onChange={this.handleInputChange} />
                        </field>
                        <field>
                            <input
                                type="string"
                                name="zip"
                                placeholder="Zip"
                                onChange={this.handleInputChange} />
                            <input
                                type="submit"
                                value="Add New User" />
                        </field>
                        <SelectField>

                            <input
                                type="checkbox"
                                name="sustainability"
                            />Sustainability
                            <input
                                type="checkbox"
                                name="recycling"
                            />Recycling
                                  <input
                                type="checkbox"
                                name="greenThinking"
                            />Green Thinking
                        </SelectField>
                        <field>
                            <input>
                                {/* <Link to="/users">Cancel</Link> */}
                            </input>
                        </field>
                    </FormBody>
                </FormWrapper>
                {/* } */}
            </div>
        )

    }
}

export default NewUser