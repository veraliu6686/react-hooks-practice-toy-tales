import React from "react";

function ToyCard({toy, handleDonte, updateLikes}) {
  // console.log (toy)
  const {id, name, image, likes} = toy

  const handleClick = () =>{
    handleDonte(id)
  }
  const handleLikes = ( )=>{
    const likeNum = {
      likes: likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(likeNum)
    })
      .then(r => r.json())
      .then(targetToys => updateLikes(targetToys))
    }

  return (
    <div className="card" id ={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick = {handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
