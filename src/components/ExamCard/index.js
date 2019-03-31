import React from 'react'
import styled from 'styled-components'
import Button from "../Button"
import Line from "../Line"

const ExamCardC = (props) => (
  <Wrapper>
    <LeftWrap>
      <Header>Matematika</Header>
      <Desc>Contrary to popular belief, Lorem Ipsum is not simply random text ...</Desc>
      <Detail>Source Pak anang | Passing grade 50 %</Detail>
    </LeftWrap>

    <CentertWrap>
      <Line height={65}/>
    </CentertWrap>

    <RightWrap>
      <MBWrap>
        <MainDetailWrap>
          <MainDetailTitle>Duration(min)</MainDetailTitle>
          <MainDetailValueWrap>
            <MainDetailValue>60</MainDetailValue>
          </MainDetailValueWrap>
        </MainDetailWrap>

        <MainDetailWrap>
          <MainDetailTitle>Total question</MainDetailTitle>
          <MainDetailValueWrap>
            <MainDetailValue>25</MainDetailValue>
          </MainDetailValueWrap>
        </MainDetailWrap>

        <Button title="Take Exam"/>
      </MBWrap>
    </RightWrap>

    
  </Wrapper>
)


const Wrapper = styled.section`
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #FFFFFF;
  height: 105px;
  width: 960px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.h2`
  margin: 0px;
  color: #232735;
`

const Desc = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: #8B90A0;
  margin-top: 13px;
  margin-bottom: 7px;
`

const Detail = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: #505565;
  margin: 0px;
`

const MainDetailTitle = styled.p`
  font-size: 12px;
  color: #505565;
  margin-bottom: 5px;
  margin-top: 0px;
`
const MainDetailValue = styled.h2`
  color: #505565;
`

const MainDetailValueWrap = styled.section`
  height: 40px;
  width: 95px;
  border: 1px solid #D3D4D8;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainDetailWrap = styled.section`
  padding-bottom: 18px;
  margin-right: 10px;
`

const MBWrap = styled.section`
  display: flex;
  align-items: center;
`

const LeftWrap = styled.section`
  
`

const CentertWrap = styled.section`

`

const RightWrap = styled.section`

`


export default ExamCardC
