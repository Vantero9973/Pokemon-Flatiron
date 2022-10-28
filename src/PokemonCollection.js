import PokemonCard from './PokemonCard';
import Search from './Search';
import Button from '@mui/material/Button'

function PokemonCollection({ pokemons, setSearch, setPokemons }) {

    const pokemonComponents = pokemons.map(pokemon => {
        return (
            <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                sprites={pokemon.sprites}
                typeOne={pokemon.type.typeOne}
                typeTwo={pokemon.type.typeTwo}
            />
        )
    })

    function handleSort() {
        const sortedData = [...pokemons].sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        })
        setPokemons(sortedData);
    }

    function handleSortById() {
        const sortedData = [...pokemons].sort((a, b) => {
            return a.id > b.id ? 1 : -1;
        })
        setPokemons(sortedData);
    }

    function handleSortByIdReverse() {
        const sortedData = [...pokemons].sort((a, b) => {
            return a.id > b.id ? -1 : 1;
        })
        setPokemons(sortedData);
    }

    function handleSortReverse() {
        const sortedData = [...pokemons].sort((a, b) => {
            return b.name > a.name ? 1 : -1;
        })
        setPokemons(sortedData);
    }

    function handleSortByType() {
        const sortedData = [...pokemons].sort((a, b) => {
            return b.type.typeOne > a.type.typeOne ? 1 : -1;
        })
        setPokemons(sortedData);
    }

    return (
        <>
            <h1 className="pokedexTitle">Hoenn PokéDex</h1>
            <div className="PokeBackground">
                <Search setSearch={setSearch} />
                <div className="sortAllButtons">
                    <Button className="sortButton" onClick={handleSort}>Sort A-Z</Button>
                    <Button className="sortButtonReverse" onClick={handleSortReverse}>Sort Z-A</Button>
                    <Button className="sortButtonById" onClick={handleSortById}>Sort By ID ↓</Button>
                    <Button className="sortButtonById" onClick={handleSortByIdReverse}>Sort By ID ↑</Button>
                    <Button className="sortButtonByType" onClick={handleSortByType}>Sort By Type</Button>
                </div>
            </div>
            <div className="background">
                <div className="cardContainer bigDiv">
                    {pokemonComponents}
                </div>
            </div>
        </>
    )
}

export default PokemonCollection;