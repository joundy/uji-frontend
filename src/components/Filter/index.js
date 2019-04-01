import React from 'react'
import styled from 'styled-components'
import iconArrowDown from "../../images/icon-arrow-down.svg"

const FilterC = (props) => (
  <Wrapper>
    <Title>Level</Title>
    <Select>
      <option>-- All --</option>
      <option>lorem</option>
    </Select>
  </Wrapper>
)

const Wrapper = styled.section`
  
`;

const Select = styled.select`
  height: 40px;
  width: 120px;
  border: 1px solid #D3D4D8;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  appearance:none;
  padding-left: 10px;
  cursor: pointer;
  color: #505565;
  background: url(${iconArrowDown}) right no-repeat;
  background-size: 15px 15px;
  background-position-x: 90px;
`
const Title = styled.p`
  font-size: 12px;
  color: #505565;
  margin-bottom: 5px;
  margin-top: 0px;  
`

export default FilterC
