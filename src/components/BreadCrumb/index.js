import React from 'react'
import styled from 'styled-components'
import iconArrowRight from "../../images/icon-arrow-right.svg"


const BreadCrumbC = (props) => (
  
  <Wrapper>
    <MainWrap>
      {props.links.map((v, i) => (
        <div>
          <MainText as="a" href={v.link} >{v.title}</MainText>
          { i + 1 !== props.links.length ? <IconNext/> : null}
        </div>
      ))}
    </MainWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  
`;

const MainText = styled.a`
  color: #8B90A0;
  font-size: 14px;
  margin: 0px;
`

const IconNext = styled.img.attrs({
    src: iconArrowRight
})`
    width: 10px;
    height: 10px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 1px;
`

const MainWrap = styled.section`
  display: flex;
  align-items: center;
`

export default BreadCrumbC
