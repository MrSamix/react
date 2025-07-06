function Card(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '16px' }}>
        <img src={props.thumbnail} alt="Card Image" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h2>{props.price}$</h2>
        <p>Rating: {props.rating}</p>
    </div>
  )
}

export default Card