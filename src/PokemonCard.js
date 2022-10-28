import { Link } from 'react-router-dom';

function PokemonCard({ name, id, sprites, typeOne, typeTwo }) {

    return (
        <div className="mainContainer">
            <div className="fixerContainer">
                <Link to={`/PokeDex/${id}`} className="pokemonLink">
                    <tr>
                        <tr>
                            <img className="sprite" src={sprites} alt={name} />
                        </tr>
                        <tr>
                            <h3 className="pokemonName">{name}</h3>
                        </tr>
                        <tr>
                            <p className="pokemonNumber"><strong>#{id}</strong></p>
                        </tr>
                        <tr>
                            <img src={typeOne} alt="type" className="typeOne" />
                        </tr>
                        <tr>
                            <img src={typeTwo} alt="" className="typeTwo" />
                        </tr>
                    </tr>
                </Link>
            </div>
        </div>
    )
}

export default PokemonCard;