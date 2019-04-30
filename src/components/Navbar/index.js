import React from "react"
import styled from "styled-components"

const NavbarC = (props) => (
  
  <Wrapper className={props.className}>
    <MainWrap>
      <Header onClick={props.titleOnlick}>{props.title}</Header>
      <MenuWrap>
        {props.menus.map((v,i) => (
          <MenuTitleWrap key={i} onClick={v.onClick}>
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
  background-color: #24304e;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 0px) and (max-width: 960px) {
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
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
    background-color: #1e2842;
  }
`

const MenuWrap = styled.section`
  display: flex;
`

export default NavbarC
