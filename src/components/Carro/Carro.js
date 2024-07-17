const Carro = ({ product, addToCart, quitarCarrito, eliminarCarrito }) => {
  if (!product.quantity) return null;

  return (
    <div className="cart-item p-2" key={product.id}>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
        <p className="card-text">${Math.round(product.price)}</p>
          <p id="amount" className="card-text">
            Cantidad: {product.quantity}
          </p>
          <button className="btn btn-primary p-1 m-1" onClick={() => addToCart(product)}><i className="bi bi-plus-lg"></i></button>
          <button className="btn btn-danger p-1 m-1" onClick={() => quitarCarrito(product)}><i className="bi bi-x"></i></button>
          <button className="btn btn-secondary p-1 m-1" onClick={() => eliminarCarrito(product)} ><i className="bi bi-trash"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Carro;
