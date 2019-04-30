import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { push } from "connected-react-router"
import qs from 'querystring'

import BreadCrumbC from "../../components/BreadCrumb"
import TitleC from "../../components/Title"
import FilterC from "../../components/Filter"
import ExamGroupCardC from "../../components/ExamGroupCard"
import PaginationC from "../../components/Pagination"
import LineC from "../../components/Line"
import LoaderC from "../../components/Loader"
import NoResultsC from "../../components/NoResults"
import ErrorDataC from "../../components/ErrorData"

import actions from "../../redux/actions"

class Home extends React.Component{

  state = {
    limitItems: 6,
    totalPage: 0,
    page: 1
  }

  componentDidMount = async () => {
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
    window.scroll({ top: 500, left: 0, behavior: 'smooth' })
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
        <Banner>
          <BannerContentWrap>
            <BannerTitle>Selamat Datang di Uji Yuksinau</BannerTitle>
            <BannerDesc>Uji yuksinau adalah sebuah website ujian online,  pada website ini terdapat banyak course/tryout gratis mulai dari ujian nasional sampai sbmptn</BannerDesc>
            {/* <Button title="Signup now" onClick={() => console.log("hello boy")} width={130}/> */}
          </BannerContentWrap>
        </Banner>
        <MainWrap>
          <BreadCrumb
            links={[
              {
                title:"exam-groups",
                onClick: () => this.props.dispatch(push("/"))
              }
            ]}
          />
          <Title title="Exam Groups"/>
          <FiltersWrap>
            <Filter
              title="Level"
              options={filterLevel}
              activeValue={this.props.examGroups.filter.level}
              onChange={(e) => this.handleFilterChange(e, "level")}
            />
            <Filter
              title="Class"
              options={filterClass}
              activeValue={this.props.examGroups.filter.class}
              onChange={(e) => this.handleFilterChange(e, "class")}
            />
            <Filter
              title="Tag"
              options={filterTag}
              activeValue={this.props.examGroups.filter.tag}
              onChange={(e) => this.handleFilterChange(e, "tag")}
            />
          </FiltersWrap>

          <Line/> 

          <ExamGroupCardWrap>

          {this.props.examGroups.isLoading ? (
            <Loader/>
          ): (this.props.examGroups.error !== null ? (
            <ErrorData error={this.props.examGroups.error.message}/>
          ): this.props.examGroups.payload.data.length === 0 ? (
            <NoResults/>
          ): 
            this.props.examGroups.payload.data.map((v) => (
              <ExamGroupCard
                key={v.id}
                title={v.title}
                tag={[v.tag]}
                description={v.description}
                level={v.level.toUpperCase()}
                class={v.class.toUpperCase()}
                onClick={() => this.props.dispatch(push(`/exam-groups/${v.slug}`))}
              />
            ))
          )}

          {/* fill examGroupCard fake to fix flex wrap */}
          {this.props.examGroups.payload.data.length % 3 === 2 ? (
            <ExamGroupCardFake/>
          ):null}

          </ExamGroupCardWrap>

          <Line/>

          <Pagination
            activePage={this.state.page}
            totalPage={this.state.totalPage}
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
  // min-height: 2000px;
`
const Banner = styled.section`
  @media (min-width: 0px) and (max-width: 960px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  width: 100%;
  height: 500px;
  background-color: #24304e;
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media (min-width: 0px) and (max-width: 960px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  width: 960px;
  align-self: center;
  display: flex; 
  flex-direction: column;
  margin-bottom: 150px;
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
const ExamGroupCardFake = styled.section`
  width: 310px;
  height: 211px;
  margin-bottom: 15px;
  @media (min-width: 0px) and (max-width: 480px) {
    display: none;
  }
`

const ExamGroupCardWrap = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
  min-height: 241px;
  // margin-bottom: 50px;

  @media (min-width: 481px) and (max-width: 960px) {
    width: 635px;
    align-self: center;
  }
`

const Line = styled(LineC)`
  width: 100%;
`

const Loader = styled(LoaderC)`
  margin: auto;
`

const NoResults = styled(NoResultsC)`
  margin: auto;
`

const ErrorData = styled(ErrorDataC)`
  margin: auto;
`

const Pagination = styled(PaginationC)`
  margin-top: 50px;
  align-self: center;
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