import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDonte, updateLikes}) {

  const renderToyCard = toys.map (toy =>{
    return <ToyCard
      key = {toy.id}
      toy = {toy}
      handleDonte = {handleDonte}
      updateLikes = {updateLikes}/>
  })
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
      {renderToyCard}
    </div>
  );
}

export default ToyContainer;
