import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonCollection from "./PokemonCollection";
import PokemonDataCollection from "./PokemonDataCollection";
import { Route, Routes } from "react-router-dom";
import ShopComponents from "./ShopComponents";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./Checkout";
import OrderHistory from "./OrderHistory";
import AddNewPokemon from "./AddNewPokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [shop, setShop] = useState();
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [lastOrder, setLastOrder] = useState();

  useEffect(() => {
    fetch("http://localhost:5005/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
        setShop(data);
      });

    fetch("http://localhost:5005/orders")
      .then((res) => res.json())
      .then((orders) => {
        setLastOrder(orders[orders.length - 1]);
      });
  }, []);

  const searchPokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  function addPokemonToCart(pokemon) {
    setCart([
      ...cart,
      {
        name: pokemon.name,
        sprites: pokemon.sprites,
        price: Math.random() * 1000,
      },
    ]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PokemonCollection
              pokemons={searchPokemonsByName}
              setSearch={setSearch}
              setPokemons={setPokemons}
            />
          }
        />
        <Route
          path="/PokeDex/:id"
          element={<PokemonDataCollection pokemons={pokemons} />}
        />
        <Route
          path="/AddNewPokemon"
          element={
            <AddNewPokemon pokemons={pokemons} setPokemons={setPokemons} />
          }
        />
        <Route
          exact
          path="/PokeMart"
          element={
            <ShopComponents
              setSearch={setSearch}
              shop={shop}
              setPokemons={setPokemons}
              pokemons={searchPokemonsByName}
              addPokemonToCart={addPokemonToCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/Checkout"
          element={<Checkout cart={cart} setLastOrder={setLastOrder} />}
        />
        <Route
          path="/OrderHistory"
          element={<OrderHistory lastOrder={lastOrder} />}
        />
      </Routes>
    </>
  );
}

export default App;
