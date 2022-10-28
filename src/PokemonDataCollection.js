import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PokemonDataCollection({ pokemons }) {

    const [pokeDetails, setPokeDetails] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5005/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                setPokeDetails(data)
            })
    }, [id])

    console.log(pokeDetails);

    if (!pokeDetails) return <h2>Loading...</h2>

    const { name, sprites, type, species, height, weight, abilities, stats, background } = pokeDetails;

    pokemons.map(pokemon => {
        return (
            <Link to={`/PokeDex/${pokemon.id}`} >
                {pokemons[pokemon]}
            </Link>
        )
    })

    const myStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundColor: "#000000",
        height: "909px",
        margin: "0 auto",
    }


    return (
        <>
            <div className="pokemonData" style={myStyle}>
                <div className="cardDataBackground">
                    <table className="tableBorder">
                        <tr className="imageRow">
                            <img className="spriteData" src={sprites} alt={name} />
                        </tr>
                        <tr>
                            <h3 className="pokemonNameData"><u>{name}</u></h3>
                        </tr>
                        <tr>
                            <th className="pokemonNumber"><strong>#{id}</strong></th>
                        </tr>
                        <tr>
                            <img src={type.typeOne} alt="" className="typeOne" />
                        </tr>
                        <tr>
                            <img src={type.typeTwo} alt="" className="typeTwo" />
                        </tr>
                        <th style={{ color: "darkGray" }} className="trTwo">{species}</th>
                        <tr className="trTwo"><strong>Height: </strong>{height} m</tr>
                        <tr className="trTwo"><strong>Weight: </strong>{weight} kg</tr>
                        <th className="trTwo"><u>Abilities</u></th>
                        <tr className="trTwo">{abilities.one}</tr>
                        <tr className="trTwo">{abilities.two}</tr>
                        <th className="trTwo"><u>Base Stats</u></th>
                        <tr className="trTwo"><strong>HP: </strong>{stats.hp}</tr>
                        <tr className="trTwo"><strong>Attack: </strong>{stats.attack}</tr>
                        <tr className="trTwo"><strong>Defense: </strong>{stats.defense}</tr>
                        <tr className="trTwo"><strong>Sp. Atk: </strong>{stats.special_attack}</tr>
                        <tr className="trTwo"><strong>Sp. Def: </strong>{stats.special_defense}</tr>
                        <tr className="trTwo"><strong>Speed: </strong>{stats.speed}</tr>
                    </table>
                </div >
            </div>
        </>
    )
}

export default PokemonDataCollection;