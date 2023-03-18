import './index.css'

const ThumbnailsItem = props => {
  const {imageList, thumbnailClick} = props
  const {imageUrl, thumbnailUrl} = imageList

  const passUrl = () => {
    thumbnailClick(imageUrl)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={passUrl}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default ThumbnailsItem
