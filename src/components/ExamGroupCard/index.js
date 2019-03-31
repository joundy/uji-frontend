import React from "react"
import styled from "styled-components"
import Button from "../Button"
import Line from "../Line"
import Dot from "../Dot"

const ButtonC = (props) => (
  
  <Wrapper>
    <Header>Tryout UN SMP 2019</Header>
    <TagWrap>
      <Tag>#un</Tag>
      <Tag>#un</Tag>
    </TagWrap>
    <Desc>Contrary to popular belief, Lorem Ipsum is not simply random text.</Desc>
    <LWrap>
      <Line width={200}/>
    </LWrap>
    <LBWrap>
      <LCDWrap>
        <Level>SMA</Level>
        <Dot width={3} height={3}/>
        <Class>12</Class> 
      </LCDWrap>
      <BWrap>
        <Button title="View Exams"/>
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
`;

const Header = styled.h2`
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

export default ButtonC
