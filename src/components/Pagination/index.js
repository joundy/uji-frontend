import React from "react"
import styled from "styled-components"
import Box from "../Box"

class PaginationC extends React.Component{

  state = {
    //limit page must ood
    limitPage: 5,
    activePage: 1,
    pages: []
  }

  componentDidMount = () => {
    this.fillPages(this.props.totalPage)
  }

  componentWillReceiveProps = async (nextProps) => {
    //set activePage
    await this.setState({
      activePage: nextProps.activePage
    })

    // set totalPage
    this.fillPages(nextProps.totalPage)
  }

  fillPages = (totalPage) => {
    let pages = []

    let start = 0
    let deduction = 0
    let limit = this.state.limitPage

    if (limit % 2 === 0){
      limit += 1
    }

    deduction = (limit - 1) / 2

    if (this.state.activePage - deduction <= 1){
      start = 1
    }
    else if(this.state.activePage >= totalPage - deduction){
      start = totalPage - (limit - 1)
    }
    else{
      start = this.state.activePage - deduction
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
          <BoxWrap onClick={() => this.props.onClickPage(v)}>
            <Box isFill={v === this.state.activePage} value={v} />
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
