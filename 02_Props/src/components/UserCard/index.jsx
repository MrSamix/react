function UserCard({name, age, email, isOnline=false, avatarUrl}) {
const circleStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: isOnline ? "green" : "gray",
    display: "inline-block",
    marginRight: "10px"
};

return (
    <div style={{display: "flex", alignItems: "center", border: "1px solid #ccc", padding: "10px", borderRadius: "5px", gap: "20px"}}>
        <div style={circleStyle}></div>
        {avatarUrl && <img src={avatarUrl} style={{width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px"}} />}
        <p>{name}</p>
        <p>Age: {age}</p>
        <a href={`mailto:${email}`}>{email}</a>
    </div>
)
}

export default UserCard