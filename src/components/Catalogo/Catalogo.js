import React, { useEffect, useState, useContext } from "react";
import Productos from "../Productos/Productos";
import Carro from "../Carro/Carro";
import Total from "../Total/Total";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CarroContexto } from '../../components/CarroContexto/CarroContexto';
import "./Catalogo.css";

// const products = [
//   {
//     id: 1,
//     img: "./img/Laptop_ASUS01.webp",
//     title:
//       "Laptop Asus Vivobook Go 15 R3 7320U 512GB SSD 8 GB RAM 15.6 Green Grey",
//     store: "Oechsle",
//     price: 1799,
//   },
//   {
//     id: 2,
//     img: "./img/Laptop_LENOVO01.png",
//     title:
//       "Laptop Gamer Lenovo IdeaPad Gaming3 15IAH7 i5-12450H 8GB RAM 512GB SSD RTX3060",
//     store: "Oechsle",
//     price: 3529,
//   },

//   {
//     id: 3,
//     img: "./img/Laptop_ACER01.webp",
//     title: "Laptop Acer A315-24PT Ryzen 5-7520U 16GB RAM 512GB SSD 15,6",
//     store: "Oechsle",
//     price: 2499,
//   },

//   {
//     id: 4,
//     img: "./img/Laptop_HP01.webp",
//     title: "Laptop HP 15-fc0002la AMD Ryzen 5 16GB RAM 512GB SSD 15.6",
//     store: "Oechsle",
//     price: 2499,
//   },

//   {
//     id: 5,
//     img: "./img/Laptop_APPLE01.webp",
//     title: "Apple Macbook Air MLXW3E/A Chip M2 8GB RAM 256GB 13.6",
//     store: "Oechsle",
//     price: 6099,
//   },

//   {
//     id: 6,
//     img: "./img/Laptop_LG01.webp",
//     title:
//       "Laptop LG Gram 17Z90Q-G.AH76 Intel Evo Core i7 12 Núcleos 16GB RAM 512GB SSD 17",
//     store: "Oechsle",
//     price: 6799,
//   },

//   {
//     id: 7,
//     img: "./img/Laptop_DELL.webp",
//     title: "Laptop Dell Inspiron I3520 Intel Core i5 8GB RAM 512GB SSD 15.6",
//     store: "Oechsle",
//     price: 1899,
//   },
// ];

const Catalogo = () => {
  // const [carro, setCarro] = useState([]);
  // const [total, setTotal] = useState({ cantidad: 0, monto: 0 });

  // const anadirCarro = (product) => {
  //   setCarro((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);

  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  //   actualizarTotal(product, "anadir");
  // };

  // const quitarCarrito = (product) => {
  //   setCarro((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);
  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       );
  //     }
  //   });
  //   actualizarTotal(product, "quitar");
  // };

  // const eliminarCarrito = (product) => {
  //   setCarro((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);
  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id ? { ...item, quantity: 0 } : item
  //       );
  //     }
  //   });
  //   actualizarTotal(product, "eliminar");
  // };

  // const actualizarTotal = (product, condicion) => {
  //   setTotal((prevTotal) => {
  //     switch (condicion) {
  //       case "anadir":
  //         return {
  //           cantidad: prevTotal.cantidad + 1,
  //           monto: prevTotal.monto + product.price,
  //         };
  //       case "quitar":
  //         return {
  //           cantidad: prevTotal.cantidad - 1,
  //           monto: prevTotal.monto - product.price,
  //         };
  //       case "eliminar":
  //         const precio = product.price * product.quantity;
  //         return {
  //           cantidad: prevTotal.cantidad - product.quantity,
  //           monto: prevTotal.monto - precio,
  //         };
  //       default:
  //         return prevTotal;
  //     }
  //   });
  // };
  const [products, setProducts] = useState([]);
  const { state, dispatch } = useContext(CarroContexto);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al recuperar productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const anadirCarro = (product) => {
    dispatch({ type: 'ANADIR_CARRO', product });
  };

  const quitarCarrito = (product) => {
    dispatch({ type: 'QUITAR_CARRO', product });
  };

  const eliminarCarrito = (product) => {
    dispatch({ type: 'ELIMINAR_CARRO', product });
  };

  return (
    <div>
      <Header />

      <div className="container my-4">
        <h1 className="text-center mb-4">Catálogo de Productos de todo tipo</h1>
        <p className="text-justify mb-4">
          Esta página es creada para poder presentar el catálogo de productos de{" "}
          <span className="text-danger">Diferentes tipos de productos y de diferentes marcas</span> para
          que los usuarios puedan ver diferentes opciones los cuales la tienda
          ofrece al público.
        </p>
      </div>

      <div className="m-4">
        <div className="row">
          <div className="col-12 col-md-8 mb-4">
            <div id="product-container" className="row">
              {products.map((producto) => (
                <Productos
                  key={producto.id}
                  product={producto}
                  addToCart={() => anadirCarro(producto)}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-2 mb-4">
            <div id="product-carrito">
              <p>Carrito de Compras</p>
              {state.carro.map((item, index) => (
                <Carro
                  key={index}
                  product={item}
                  addToCart={() => anadirCarro(item)}
                  quitarCarrito={() => quitarCarrito(item)}
                  eliminarCarrito={() => eliminarCarrito(item)}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-2 mb-4">
            <div id="price">
              <p>Total</p>
              <Total total={state.total} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalogo;
