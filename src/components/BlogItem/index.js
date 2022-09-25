// Write your JS code here
import {Component} from 'react'

class BlogItem extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.particularBlogData()
  }

  particularBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const blogDetail = {
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
    }
    this.setState({blogData: blogDetail})
  }

  render() {
    const {blogData} = this.state
    const {content, imageUrl, title, author, avatarUrl} = blogData
    return (
      <div className="log-items-card">
        <h1>{title}</h1>
        <div className="author-cont">
          <img src={avatarUrl} alt={author} className="avatar-image-style" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="particular-image-style" />
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItem
