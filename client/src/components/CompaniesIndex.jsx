import React from 'react'
import { Link } from 'react-router-dom'
import { CompanyHeaderContainer, CompanyContainer } from './styled-components/Containers'
import { CompanyImage } from './styled-components/Images'

const CompaniesIndex = (props) => {
    return(
     <div>
        <CompanyContainer>
        <CompanyHeaderContainer>
            <Link to={`cities/${props.CompanyId}`}>{props.name}</Link>
            </CompanyHeaderContainer>
        <CompanyImage src="https://i.imgur.com/RJg1FIv.jpg" alt={props.name}/> 
        </CompanyContainer>
        </div>
 
    )
}
export default CompaniesIndex