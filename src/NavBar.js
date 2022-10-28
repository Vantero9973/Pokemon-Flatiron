import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navBar">
            <h1 className="siteTitle"><img className="logo" src="https://i.imgur.com/Ii8W4Uj.png" alt="logo" />Pokémon Flatiron</h1>
            <ul>
                <li>
                    <Link to="/"><a href="/" className="pokeDexLink">PokéDex</a></Link>
                </li>
                <li>
                    <Link to="/AddNewPokemon"><a href="/AddNewPokemon" className="pokeDexLink">Add New Pokémon</a></Link>
                </li>
                <li>
                    <Link to="/PokeMart"><a href="/PokeMart" className="shopLink">PokéMart</a></Link>
                </li>
                <li>
                    <Link to="/Checkout"><a href="/Checkout" className="shopLink">Checkout</a></Link>
                </li>
                <li>
                    <Link to="/OrderHistory"><a href="/OrderHistory" className="shopLink">Order History</a></Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;