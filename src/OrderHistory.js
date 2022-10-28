import Card from '@mui/material/Card'

function OrderHistory({ lastOrder }) {
    console.log({ lastOrder })
    return (
        <div>
            <h4 className="orderHistory" style={{ color: "gray" }}>Order Number: #{lastOrder.id}</h4>
            {lastOrder.cart.map(pokemon => {
                return (
                    <>
                        <Card className="orderHistory">
                            <h4>{pokemon.name}</h4>
                            <img src={pokemon.sprites} alt={pokemon.name} />
                            <h5>${pokemon.price.toFixed(2)}</h5>
                        </Card>
                    </>
                )
            })}
        </div>
    )
}

export default OrderHistory;