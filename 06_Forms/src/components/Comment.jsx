import './Comment.css';

function Comment({ username, email, photoUrl, age, description, tags, gender }) {
  return (
    <div className="comment">
        <img src={photoUrl} alt="photo avatar" />
        <h3>{username}</h3>
        <h4>Email: {email}</h4>
        <h5>Age: {age}</h5>
        <h5>Gender: {gender}</h5>
        <p>{description}</p>
        <p><b>Tags:</b> {tags}</p>
        
    </div>
  )
}

export default Comment