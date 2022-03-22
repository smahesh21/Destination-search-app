import './index.css'

const DestinationItem = props => {
  const {eachDestinationDetails} = props
  const {imgUrl, name} = eachDestinationDetails
  return (
    <li className="card-container">
      <div className="card">
        <img src={imgUrl} className="image" alt={name} />
        <p className="heading">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
