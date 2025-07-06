function Contact() {
    const formSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={formSubmit}>
        <label>
            <h5>Name:</h5>
            <input type="text" />
        </label>
        <label>
            <h5>Phone:</h5>
            <input type="tel" />
        </label>
        <div style={{marginTop: "20px"}}>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default Contact