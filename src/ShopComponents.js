import Shop from "./Shop"
import Search from './Search';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                Pokémon Flatiron
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function ShopComponents({ pokemons, setSearch, setPokemons, addPokemonToCart, cart }) {
    const shopComponents = pokemons.map(pokemon => {
        return (
            <Shop
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                sprites={pokemon.sprites}
                typeOne={pokemon.type.typeOne}
                typeTwo={pokemon.type.typeTwo}
                addPokemonToCart={addPokemonToCart}
                hasOneInCart={cart?.some(cartItem => cartItem.name === pokemon.name)}
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
            <h1 className="shopTitle">Pokémart</h1>
            <Search setSearch={setSearch} />
            <div className="sortAllButtons">
                <Button className="sortButton" onClick={handleSort}>Sort A-Z</Button>
                <Button className="sortButtonReverse" onClick={handleSortReverse}>Sort Z-A</Button>
                <Button className="sortButtonById" onClick={handleSortById}>Sort By ID ↓</Button>
                <Button className="sortButtonById" onClick={handleSortByIdReverse}>Sort By ID ↑</Button>
                <Button className="sortButtonByType" onClick={handleSortByType}>Sort By Type</Button>
            </div>
            <div className="bigDiv">
                {shopComponents}
            </div>
            <Copyright />
        </>
    )
}

export default ShopComponents;