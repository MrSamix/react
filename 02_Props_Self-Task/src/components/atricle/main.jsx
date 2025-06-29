import "./style.css"


function Article(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h4>Author: {props.author}</h4>
            <p>{props.content}</p>
            <img src={props.photourl} />
            <div className="source">
                <p>Source: </p>
                <a href={props.link}>{props.link}</a>
            </div>
        </div>
    )
}

export default Article