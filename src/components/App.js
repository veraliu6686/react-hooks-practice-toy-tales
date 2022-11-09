import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState ([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch ("http://localhost:3001/toys")
    .then (r =>r.json())
    .then (toyData => setToys(toyData) )
  },[])

  const addToy = (newToy) =>{
    setToys([...toys, newToy])
  }

  const handleDonte= toyId =>{
    const leftToy = toys.filter( toy => {
      return toy.id !== toyId
    })
    setToys(leftToy)
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method : "DELETE"})
  }
  const updateLikes = (likeAToy)=>{
    const likedToy = toys.map(toy =>{
      if (toy.id === likeAToy.id){
        return likeAToy
      } else return toy
    })
    setToys(likedToy)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDonte ={handleDonte} updateLikes= {updateLikes} />
    </>
  );
}

export default App;
