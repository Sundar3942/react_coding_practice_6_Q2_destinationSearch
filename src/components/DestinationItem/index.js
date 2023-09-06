// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item

  console.log(props)

  return (
    <li type="none" className="item">
      <img src={imgUrl} className="image" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
