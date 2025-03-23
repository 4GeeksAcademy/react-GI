import React from "react";

const Card = (props)=>{
;
    return (
    <div className="card">
  <img src={props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{props.tittle}</h5>
    <p className="card-text flex-grow-1">{props.content}</p>
    <a href={props.linkUrl} target="_blank" className="btn btn-primary mt-auto">Click To See</a>
  </div>
</div>
    )
}


export default Card;