import Card from "@mui/material/Card";

function OrderHistory({ lastOrder }) {
  console.log({ lastOrder });
  return (
    <div>
      <h4 className="orderHistory" style={{ color: "gray" }}>
        Order Number: #{lastOrder.id}
      </h4>
      {lastOrder.cart.map((pokemon) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              className="orderHistory"
              style={{ width: "40vw", background: "lightgray" }}
            >
              <h4>{pokemon.name}</h4>
              <img src={pokemon.sprites} alt={pokemon.name} />
              <h5>${pokemon.price.toFixed(2)}</h5>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default OrderHistory;
