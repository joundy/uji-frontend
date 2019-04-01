import React from "react"
import styled from "styled-components"
import Box from "../Box"

const PaginationC = (props) => (
  <Wrapper className={props.className}>
    {props.pages.map((v) => (
      <BoxWrap>
        <Box isFill={v.isFill} value={v.value} />
      </BoxWrap>
    ))}
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex;
`;

const BoxWrap = styled.section`
  margin-left:  2px;
  margin-right: 2px;
`

export default PaginationC
