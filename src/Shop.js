function Shop({ name, id, sprites, typeOne, typeTwo, addPokemonToCart, hasOneInCart }) {

    return (
        <div className="pokemonCard">
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
                <tr>
                    <button className="purchaseButton" onClick={() => addPokemonToCart({ name, sprites })}>Add To Cart</button>
                </tr>
                <tr>
                    {hasOneInCart ? <p>Added to cart</p> : <p></p>}
                </tr>
            </tr>
        </div >
    )
}

export default Shop;