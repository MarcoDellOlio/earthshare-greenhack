import React, { Component } from 'react'
import styled from 'styled-components'

class JobsFilterSection extends Component {
    render() {
        return (
            <FilterSection>
                <div>filters here?</div>
                
            </FilterSection>
        );
    }
}

export default JobsFilterSection;

const FilterSection = styled.div`
    background: lightgrey;
    height: 100px;
    margin-bottom: 30px;
    color: white; 
    display: flex;
    justify-content: center;
    align-items: center;
`