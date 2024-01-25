const cartItems = [
  { id: 1, name: "Adidasi Nike Air Max", price: 100, quantity: 1 },
  { id: 2, name: "Adidasi Nike Air Force", price: 40, quantity: 2 },
];

const CartPage = () => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Coșul Meu</h1>
      {cartItems.length === 0 ? (
        <p>Coșul tău este gol.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{`Preț: $${item.price}`}</p>
              <p>{`Cantitate: ${item.quantity}`}</p>
            </div>
          ))}
          <h3>{`Total: $${total}`}</h3>
          {}
        </div>
      )}
    </div>
  );
};

export default CartPage;
