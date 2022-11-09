import React,{useState} from "react";

function ToyForm({addToy}) {
  // const [ formData, setformData] = useState ({
  //   name : "",
  //   image : ""
  // })

  // const handleInput= e =>{
  //   const [name, value] = e.target
  //   setformData ({[name]:value})
  // }
  // const handleSubmit = e =>{
  //   e.preventDefault()
  //   addToy(formData)
  // }
    const [nameData, setNameData] = useState ( '')
    const [imageData, setImageData] = useState ('')

    console.log (nameData)
    const handleNameInput = e =>{
      setNameData(e.target.value)
    }
    const handleImageInput = e =>{
      setImageData(e.target.value)
    }

    const handleSubmit = e =>{
      e.preventDefault()
      const newToy = {
        id : nameData,
        name: nameData,
        image: imageData,
        likes: 0
      }

      fetch('http://localhost:3001/toys', {
        method: 'POST',
        headers: {
          'Accetpt': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newToy)
      })
      .then(r => r.json())
      .then(addToy(newToy))
    }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameInput}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageInput}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
