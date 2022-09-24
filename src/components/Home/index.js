import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import './index.css'

class Home extends Component {
  state = {blogdata: [], isLoading: true}

  componentDidMount() {
    this.blogData()
  }

  blogData = async () => {
    const data = await fetch('https://apis.ccbp.in/blogs')
    const datas = await data.json()
    const updatedBlogList = datas.map(eachData => ({
      id: eachData.id,
      imageUrl: eachData.image_url,
      title: eachData.title,
      topic: eachData.topic,
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
    }))
    this.setState({blogdata: updatedBlogList, isLoading: false})
  }

  render() {
    const {blogdata, isLoading} = this.state
    return (
      <>
        <div className="home-container">
          <UserInfo />
          {isLoading ? (
            <div>
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-cont">
              {blogdata.map(data => (
                <BlogList data={data} key={data.oid} />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}
export default Home
