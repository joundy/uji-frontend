import React, {useState} from "react"
import styled from "styled-components"

const AnswerC = (props) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
  
    <Wrapper className={props.className}>
      <AnswerWrap isChecked={isChecked} onClick={() => setIsChecked(!isChecked)}>
        <RadioWrap isChecked={isChecked}>
          <Radio onChange={() => setIsChecked(!isChecked)}/>
        </RadioWrap>
        <AnswerTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</AnswerTitle>
      </AnswerWrap>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`;

const Radio = styled.input.attrs({type: "checkbox"})`
  width: 20px;
  height: 20px;
  cursor: pointer; 
  opacity: 0;
`

const RadioWrap = styled.section`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  
  border: 1px solid #A1A4B1;
  box-sizing: border-box;

  ${(props) => props.isChecked ? `
    background: #2A76E5;
    border: 1px solid #2A76E5;
  ` : `background: white;`};
`

const AnswerTitle = styled.p`
  margin: 0px;
  margin-left: 10px;
  color: #232735;
  cursor: pointer;
  line-height: 20px;
`
const AnswerWrap = styled.section`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;

  ${(props) => props.isChecked ? `
    background: #f6faff;
  ` : `background: white;`};
`


export default AnswerC
