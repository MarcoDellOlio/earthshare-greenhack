import React from 'react'
import CompaniesIndex from './CompaniesIndex'
import { CompanyIndexContainer, SplashImageContainer, SplashHeaderContainer } from './styled-components/Containers'
import { SplashImage } from './styled-components/Images'


const CompaniesList = (props) => {
    console.log(props.companies)
    const companiesList = props.companies.map((company, index) => {
        console.log(company)

        return (
            <div>

                <CompaniesIndex 
                // picture={company.picture}
                                // id={company._id}
                                />
            </div>
        )
    })

    return (
        <div>
             <SplashImageContainer>
                <SplashImage src="https://i.imgur.com/CMSTGj4.jpg?1" />
                <SplashHeaderContainer>Organizations</SplashHeaderContainer>
            </SplashImageContainer>
            <CompanyIndexContainer>
                        {companiesList}
            </CompanyIndexContainer>
        </div>
     
    )
}






export default CompaniesList