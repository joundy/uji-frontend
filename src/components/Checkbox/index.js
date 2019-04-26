import React, {useState} from "react"
import styled from "styled-components"
import iconCheck from "../../images/icon-check.svg"

const DotC = (props) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <Wrapper>
      <CheckboxWrap isChecked={isChecked}>
        <Checkbox onChange={() => setIsChecked(!isChecked)}/>
      </CheckboxWrap>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`;

const Checkbox = styled.input.attrs({type: "checkbox"})`
  opacity: 0;
`

const CheckboxWrap = styled.section`
  
  ${(props) => props.isChecked ? `
    background: url(${iconCheck}) no-repeat;
    background-size: 10px 10px;
    background-position: 1px 2px;
  ` : `background: white;`};

  border: 1px solid #D3D4D8;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border-radius: 2px;
`

export default DotC
