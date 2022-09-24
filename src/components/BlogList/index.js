// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogList = props => {
  const {data} = props
  const {id, title, author, imageUrl, topic, avatarUrl} = data

  return (
    <Link to={`/blogs/${id}`}>
      <li className="List-items">
        <img src={imageUrl} alt={title} className="image-style" />
        <div className="list-card">
          <p>{topic}</p>
          <p>{title}</p>
          <div className="author-cont">
            <img src={avatarUrl} alt={author} className="avatar-image-style" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogList
