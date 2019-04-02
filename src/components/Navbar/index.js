import React from "react"
import styled from "styled-components"

const NavbarC = (props) => (
  
  <Wrapper className={props.className}>
    <MainWrap>
      <Header onClick={props.titleOnlick}>{props.title}</Header>
      <MenuWrap>
        {props.menus.map((v) => (
          <MenuTitleWrap onClick={v.onClick}>
            <MenuTitle>{v.title}</MenuTitle>
          </MenuTitleWrap>
        ))}
      </MenuWrap>
    </MainWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  height: 60px;
  width: 100%;
  background-color: #2A76E5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  color: white;
  margin: 0px;
  cursor: pointer;
`

const MainWrap = styled.section`
  width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuTitle = styled.p`
  margin: 0px;
  color: white;
`
const MenuTitleWrap = styled.section`
  height: 4 0px;
  align-items: center; 
  justify-content: center;
  display: flex;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px
  cursor: pointer;

  :hover{
    background-color: #266ED6;
  }
`

const MenuWrap = styled.section`
  display: flex;
`

export default NavbarC
