import React from "react"
import styled from "styled-components"
import Box from "../Box"
import { strict } from "assert";

class PaginationC extends React.Component{

  state = {
    //limit page must ood
    limitPage: 5,
    pages: []
  }

  componentDidMount = () => {
    this.fillPages(this.props.totalPage)
  }

  fillPages = (totalPage) => {
    let pages = []

    let start = 0
    let deduction = 0
    let limit = this.state.limitPage

    if (limit % 2 == 0){
      limit += 1
    }

    deduction = (limit - 1) / 2

    if (this.props.activePage - deduction <= 1){
      start = 1
    }
    else if(this.props.activePage >= totalPage - deduction){
      start = totalPage - (limit - 1)
    }
    else{
      start = this.props.activePage - deduction
    }

    let end = start + (limit - 1)

    for (start; start <= end; start++) {
      if (start > 0 && start <= totalPage){
        pages.push(start)
      }
    }

    this.setState({
       pages
    })
  }

  render(){
    return (
      <Wrapper className={this.props.className}>
        {console.log(this.state)}
        {this.state.pages.map((v) => (
          <BoxWrap>
            <Box isFill={v === this.props.activePage} value={v} />
          </BoxWrap>
        ))}
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  display: flex;
`;

const BoxWrap = styled.section`
  margin-left:  2px;
  margin-right: 2px;
`

export default PaginationC
