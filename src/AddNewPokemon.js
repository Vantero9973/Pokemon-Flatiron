import React, { useState } from 'react';

function AddNewPokemon({ pokemons, setPokemons }) {

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [sprites, setSprites] = useState("");
    const [typeOne, setTypeOne] = useState("");
    const [typeTwo, setTypeTwo] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5005/pokemon/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    id: id,
                    sprites: sprites,
                    type: {
                        typeOne: typeOne,
                        typeTwo: typeTwo,
                    }
                }),
            })
            .then(res => res.json())
            .then(data => setPokemons([data, ...pokemons]))
    }

    return (
        <>
            <h1 className="shopTitle addNew">Add New Pokemon</h1>
            <div className="pokemon-form">
                <form id="pokemon-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="id"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input
                        type="text"
                        name="sprites"
                        placeholder="Image URL"
                        value={sprites}
                        onChange={(e) => setSprites(e.target.value)}
                    />
                    <input
                        type="text"
                        name="typeOne"
                        placeholder="Type 1 URL"
                        value={typeOne}
                        onChange={(e) => setTypeOne(e.target.value)}
                    />
                    <input
                        type="text"
                        name="typeTwo"
                        placeholder="Type 2 URL"
                        value={typeTwo}
                        onChange={(e) => setTypeTwo(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <h4 className="helloworld"><u>Type URLs</u></h4>
                <div className="imrunningoutofnames">
                    <div className="typeURL">
                        <p><strong>Grass:</strong> https://i.imgur.com/znpXv4B.png</p>
                        <p><strong>Water:</strong> https://i.imgur.com/igZtGEs.png</p>
                        <p><strong>Fire:</strong> https://i.imgur.com/xJDGf6I.png</p>
                        <p><strong>Ground:</strong> https://i.imgur.com/Du7uqX3.png</p>
                        <p><strong>Rock:</strong> https://i.imgur.com/35bWh03.png</p>
                        <p><strong>Electric:</strong> https://i.imgur.com/eUgSGHc.png</p>
                        <p><strong>Flying:</strong> https://i.imgur.com/VaOP7kP.png</p>
                        <p><strong>Fighting:</strong> https://i.imgur.com/L6G6dBa.png</p>
                        <p><strong>Poison:</strong> https://i.imgur.com/jjyVFCI.png</p>
                    </div>
                    <div className="typeURL2">
                        <p><strong>Fairy:</strong> https://i.imgur.com/LibrtDn.png</p>
                        <p><strong>Dark:</strong> https://i.imgur.com/IncRkB0.png</p>
                        <p><strong>Ghost:</strong> https://i.imgur.com/dlNnPik.png</p>
                        <p><strong>Psychic:</strong> https://i.imgur.com/0pzZcMR.png</p>
                        <p><strong>Steel:</strong> https://i.imgur.com/JcCWPAs.png</p>
                        <p><strong>Bug:</strong> https://i.imgur.com/VcOLNbf.png</p>
                        <p><strong>Dragon:</strong> https://i.imgur.com/tkCVdAj.png</p>
                        <p><strong>Ice:</strong> https://i.imgur.com/kXtfhb6.png</p>
                        <p><strong>Normal:</strong> https://i.imgur.com/nBERXtL.png</p>
                    </div>
                </div>
                <h4 className="helloworld"><u>Image URL</u></h4>
                <p>https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<strong style={{ color: "red" }}>*INSERT POKEMON'S ID*</strong>.png</p>
            </div>
        </>
    )
}

export default AddNewPokemon;

// import React, { useState } from "react";
// import { Form } from "semantic-ui-react";

// function PokemonForm({ pokemons, setPokemons }) {

//   const [name, setName] = useState();
//   const [hp, setHp] = useState();
//   const [backUrl, setBackUrl] = useState();
//   const [frontUrl, setFrontUrl] = useState();

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:3001/pokemon/",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           "name": name,
//           "hp": hp,
//           sprites: {
//             "back": backUrl,
//             "front": frontUrl,
//           }
//         }),
//       })
//       .then(res => res.json())
//       .then(data => setPokemons([data, ...pokemons]))
//   }

//   return (
    // <div>
    //   <h3>Add a Pokemon!</h3>
    //   <Form id="pokemon-form" onSubmit={handleSubmit}>
    //     <Form.Group widths="equal">
    //       <Form.Input onChange={(e) => setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
    //       <Form.Input onChange={(e) => setHp(parseInt(e.target.value))} fluid label="hp" placeholder="hp" name="hp" />
    //       <Form.Input
    //         onChange={(e) => setFrontUrl(e.target.value)}
    //         fluid
    //         label="Front Image URL"
    //         placeholder="url"
    //         name="frontUrl"
    //       />
    //       <Form.Input
    //         onChange={(e) => setBackUrl(e.target.value)}
    //         fluid
    //         label="Back Image URL"
    //         placeholder="url"
    //         name="backUrl"
    //       />
    //     </Form.Group>
    //     <Form.Button>Submit</Form.Button>
    //   </Form>
    // </div>
//   );
// }

// export default PokemonForm;
