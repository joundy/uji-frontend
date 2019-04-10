import React from "react"
import styled from "styled-components"
import ButtonC from "../Button"
import Line from "../Line"
import Dot from "../Dot"

const ExamGroupCard = (props) => (
  
  <Wrapper className={props.className}>
    <Header>{props.title}</Header>
    <TagWrap>
      {props.tag.map((v) => <Tag>#{v}</Tag>)}
    </TagWrap>
    <Desc>{props.description}</Desc>
    <LWrap>
      <Line width={200}/>
    </LWrap>
    <LBWrap>
      <LCDWrap>
        <Level>{props.level}</Level>
        <Dot width={3} height={3}/>
        <Class>{props.class}</Class> 
      </LCDWrap>
      <BWrap>
        <Button onClick={props.onClick} title="View Exams"/>
      </BWrap>
    </LBWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  width: 310px;
  height: 211px;
  background-color: white;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;

  @media (min-width: 0px) and (max-width: 480px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Header = styled.h3`
  text-align: center;
  line-height: 32px;
  margin: 0px;
  color: #232735;
`

const TagWrap = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10px
`

const Tag = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #505565;
  margin: 0px 2px 0px 2px;
`
const Desc = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #8B90A0;
  text-align: center;
  height: 40px;
`

const Level = styled.h4`
  margin-right: 5px;
  color: #505565;
`

const Class = styled.h4`
  margin-left: 5px;
  color: #505565;
`

const LCDWrap = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LBWrap = styled.section`
  display: flex;
`

const BWrap = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LWrap = styled.section`
  margin-bottom: 5px;
  margin-top: 15px;
  justify-content: center;
  display: flex;  
`

const Button = styled(ButtonC)`
  width: 100%;  
`

export default ExamGroupCard
