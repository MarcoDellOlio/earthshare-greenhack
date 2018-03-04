import React from 'react'
import { Link } from 'react-router-dom'
import { CompanyHeaderContainer, CompanyContainer } from './styled-components/Containers'
import { CompanyImage } from './styled-components/Images'

const CompaniesIndex = (props) => {
    return(
     <div>
        <CompanyContainer>
        <CompanyHeaderContainer>
            <Link to={`companies/${props.id}`}></Link>
            </CompanyHeaderContainer>
        <CompanyImage src={props.picture} alt={props.picture}/> 
        </CompanyContainer>
        </div>
 
    )
}
export default CompaniesIndex