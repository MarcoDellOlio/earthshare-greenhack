import React, { Component } from 'react'
import CompaniesIndex from './CompaniesIndex'
import { CompanyIndexContainer } from './styled-components/Containers'
import { SplashImage } from './styled-components/Images'

const CompaniesList = (props) => {
    const companiesList = props.companies.map((company, index)=>{
        return(
            <div>
                
                <CompaniesIndex />
            </div>
        )
    })

    return(
        <CompanyIndexContainer>
            <SplashImage src="https://i.imgur.com/CMSTGj4.jpg?1"/>
        {companiesList}
        </CompanyIndexContainer>
    )
}






export default CompaniesList