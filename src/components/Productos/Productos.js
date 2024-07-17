import React from "react";
import './Productos.css';

const Productos = ({product, addToCart}) => {
  return (
    // <div className="col-md-6 col-lg-4 mb-4 d-flex" key={product.id}>
    //   <div className="card flex-fill">
    //     <img src={product.img} className="card-img-top" alt={product.title} />
    //     <div className="card-body">
    //       <p className="card-title">{product.title}</p>
    //       <p className="card-text">{product.store}</p>
    //       <p className="card-text">S/ {product.price}</p>
    //       <button className="btn btn-primary" onClick={addToCart}>Comprar</button>
    //     </div>
    //   </div>
    // </div>
    <div className="product-card col-12 col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Precio: ${Math.round(product.price)}</p>
          <button onClick={addToCart} className="btn btn-primary">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productos;
