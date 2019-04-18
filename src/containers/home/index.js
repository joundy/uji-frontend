import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { push } from "connected-react-router"
import qs from 'querystring'
import Loader from "react-loader-spinner"

import Button from "../../components/Button"
import BreadCrumbC from "../../components/BreadCrumb"
import TitleC from "../../components/Title"
import FilterC from "../../components/Filter"
import ExamGroupCardC from "../../components/ExamGroupCard"
import PaginationC from "../../components/Pagination"
import LineC from "../../components/Line"

import actions from "../../redux/actions"

class Home extends React.Component{

  state = {
    limitItems: 2,
    totalPage: 0,
    page: 1
  }

  componentDidMount = async () => {
    // this.fetchExamGroups()
    await this.getPage()    
  }
  
  componentWillReceiveProps = (nextProps) => {
    this.getTotalPage(nextProps.examGroups.payload.count)
  }

  //pagination
  getTotalPage = (count) => {
    this.setState({
      totalPage: Math.ceil(count / this.state.limitItems)
    })
  }
    
  getPage = async () => {
    const params = qs.parse(this.props.location.search.replace("?",""))
    await this.setState({
      page: parseInt(params.page || 1)
    })

    await this.setFilterPageAndFetchExamGroups()
  }

  setFilterPageAndFetchExamGroups = async () => {
    const filter = {
      start: this.state.limitItems * (this.state.page - 1),
      limit: this.state.limitItems
    }

    await this.props.dispatch(actions.setExamGroupsFilter(filter))

    this.fetchExamGroups()
  }

  onClickPage = async (v) => {
    this.props.dispatch(push(`/?page=${v}`))

    //set state Page
    await this.setState({
      page: v
    })

    this.setFilterPageAndFetchExamGroups()
  }
  //end pagination

  fetchExamGroups = () => {
    this.props.dispatch(actions.fetchExamGroupsData(this.props.examGroups.filter))
  }

  handleFilterChange = async (e, name) => {
    let filter = {}
    
    if(name === "level"){
      filter = {
        level: e.target.value
      }
    }
    else if(name === "class"){
      filter = {
        class: e.target.value
      }
    }
    else if(name === "tag"){
      filter = {
        tag: e.target.value
      }
    }

    await this.props.dispatch(actions.setExamGroupsFilter(filter))
    await this.onClickPage(1)
    this.fetchExamGroups()
  }

  render(){
    return (
      <Wrapper>
        {/* {console.log(this.state)} */}
        <Banner>
          <BannerContentWrap>
            <BannerTitle>Selamat Datang di Uji Yuksinau</BannerTitle>
            <BannerDesc>Uji yuksinau adalah sebuah website ujian online,  pada website ini terdapat banyak course/tryout gratis mulai dari ujian nasional sampai smbpn</BannerDesc>
            <Button title="Signup now" onClick={() => console.log("hello boy")} width={130}/>
          </BannerContentWrap>
        </Banner>
        <MainWrap>
          <BreadCrumb
            links={[
              {
                title:"exam-groups",
                link:"#"
              }
            ]}
          />
          <Title title="Exam Groups"/>
          <FiltersWrap>
            <Filter
              title="Level"
              options={filterLevel}
              onChange={(e) => this.handleFilterChange(e, "level")}
            />
            <Filter
              title="Class"
              options={filterClass}
              onChange={(e) => this.handleFilterChange(e, "class")}
            />
            <Filter
              title="Tag"
              options={filterTag}
              onChange={(e) => this.handleFilterChange(e, "tag")}
            />
          </FiltersWrap>
          <Line/> 
          <ExamGroupCardWrap>
          {this.props.examGroups.isLoading ? (
            <LoaderWrap>
              <Loader 
                type="TailSpin"
                color="#00BFFF"
                height="30"	
                width="30"
              />
              <LoaderTitle>Loading fetching data...</LoaderTitle>
            </LoaderWrap>
          ): 
            this.props.examGroups.payload.data.length === 0 ? (
              <NoResultsWrap>
                <NoResultsTitle>No results ...</NoResultsTitle>
              </NoResultsWrap>
            ): 
            this.props.examGroups.payload.data.map((v) => (
              <ExamGroupCard
                title={v.title}
                tag={["UN"]}
                description={v.description}
                level={v.level.title}
                class={v.class.title}
                onClick={() => this.props.dispatch(push(`/exam-groups/${v.slug}`))}
              />
            ))
          }
          </ExamGroupCardWrap>
          <Line/>


          <Pagination
            activePage={this.state.page}
            totalPage={this.state.totalPage}
            // totalPage={20}
            onClickPage={this.onClickPage}
          />
        </MainWrap>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ examGroups }) => {
  return {
    examGroups
  }
}

export default connect(mapStateToProps)(Home)

const Wrapper = styled.section`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  min-height: 2000px;
`
const Banner = styled.section`
  @media (min-width: 0px) and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  width: 100%;
  height: 500px;
  background-color: #24304e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const BannerTitle = styled.h1`
  font-weight: 600;
  font-size: 44px;
  line-height: 55px;
  margin: 0px;
  color: white;
  max-width: 435px;
  margin-bottom: 10px;
`

const BannerDesc = styled.p`  
  max-width: 570px;
  color: white;
  margin: 0px;
  line-height: 25px;
  margin-bottom: 30px;
`

const BannerContentWrap = styled.section`
  width: 960px;
  padding-bottom: 50px;
`
const MainWrap = styled.section`
  @media (min-width: 0px) and (max-width: 480px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  width: 960px;
  align-self: center;
  display: flex; 
  flex-direction: column;
`
const BreadCrumb = styled(BreadCrumbC)`
  margin-top: 20px;
  margin-bottom: 10px;
`
const Title = styled(TitleC)`
  margin-bottom: 30px;
`
const Filter = styled(FilterC)`
  margin-right: 10px;
`

const FiltersWrap = styled.section`
  display: flex;
  margin-bottom: 50px;
  overflow: auto;
`
const ExamGroupCard = styled(ExamGroupCardC)`
  margin-bottom: 15px;
`
const ExamGroupCardWrap = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
  min-height: 241px;
  // margin-bottom: 50px;
`

const Line = styled(LineC)`
  width: 100%;
`

const LoaderWrap = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoaderTitle = styled.p`
  font-size: 14px;
  color: #505565;
`

const NoResultsWrap = styled.section`
  margin: auto;
`

const NoResultsTitle = styled.p`
  font-size: 14px;
  color: #505565;
`

const Pagination = styled(PaginationC)`
  margin-top: 50px;
  align-self: center;
  margin-bottom: 100px;
`

//filter options

const filterTag = [
  {
    value: "uts",
    title: "UTS"
  },
  {
    value: "uas",
    title: "UAS"
  },
  {
    value: "un",
    title: "UN"
  },
  {
    value: "sbmptn",
    title: "SBMPTN"
  }
]

const filterLevel = [
  {
    value: "sd",
    title: "SD"
  },
  {
    value: "smp",
    title: "SMP"
  },
  {
    value: "sma/smk",
    title: "SMA/SMK"
  }
]

const filterClass = [
  {
    value: "1",
    title: "1"
  },
  {
    value: "2",
    title: "2"
  },
  {
    value: "3",
    title: "3"
  },
  {
    value: "4",
    title: "4"
  },
  {
    value: "5",
    title: "5"
  },
  {
    value: "6",
    title: "6"
  },
  {
    value: "7",
    title: "7"
  },
  {
    value: "8",
    title: "8"
  },
  {
    value: "9",
    title: "9"
  },
  {
    value: "10",
    title: "10"
  },
  {
    value: "11",
    title: "11"
  },
  {
    value: "12",
    title: "12"
  }
]