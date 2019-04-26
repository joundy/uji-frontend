import React from "react"
import styled from "styled-components"
import iconArrowDown from "../../images/icon-arrow-down.svg"

const FilterC = (props) => (
  <Wrapper className={props.className}>
    <Title>{props.title}</Title>
    <SelectWrap>
      <Select onChange={props.onChange}>
        <Option value="">-- All --</Option>
        {props.options.map((v, i) => 
          <Option 
            key={i} 
            selected={v.value === props.activeValue ? "selected" : ""} 
            value={v.value}>{v.title}
          </Option>
        )}
      </Select>
    </SelectWrap>
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
  appearance:none;
  padding-left: 10px;
  cursor: pointer;
  color: #505565;
  background-color: white;
  background: url(${iconArrowDown}) right no-repeat;
  background-size: 15px 15px;
  background-position-x: 90px;

  :focus {
    outline: none;
  }
`
const Title = styled.p`
  font-size: 12px;
  color: #505565;
  margin-bottom: 5px;
  margin-top: 0px;  
`

const SelectWrap = styled.section`
  background-color: white;
`

const Option = styled.option`
  background-color: red;
`

export default FilterC
