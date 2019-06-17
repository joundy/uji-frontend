import React from "react"
import styled from "styled-components"
import { Parser } from "html-to-react"

const htmlToReactParser = new Parser()

const setColor = (color = "") => {
  switch (color) {
    case "warning":
      return "#EF7923"
    case "primary":
      return "#f6faff"
    case "danger":
      return "#ffefef"
    case "success":
      return "#e1fff3"
    default:
      return "#f6faff"
  }
}

const AnswerRadioC = (props) => (

  <Wrapper className={props.className} onClick={props.onClick}>
   <AnswerWrap isChecked={props.isChecked} color={setColor(props.color)}>
      <Radio isRadioChecked={props.isRadioChecked}/>
      <AnswerTitle>{htmlToReactParser.parse(props.title)}</AnswerTitle>
    </AnswerWrap>
  </Wrapper>
)

const Wrapper = styled.section`

`;

const Radio = styled.section`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  
  border: 1px solid #A1A4B1;
  box-sizing: border-box;
  flex: 0 0 20px;
  margin-top: 15px;

  ${(props) => props.isRadioChecked ? `
    background: #2A76E5;
    border: 1px solid #2A76E5;
  ` : `background: white;`};

  :hover{
    border: 1px solid #2A76E5;
  }
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
    background: ${props.color};
  ` : `background: white;`};
`


export default AnswerRadioC
