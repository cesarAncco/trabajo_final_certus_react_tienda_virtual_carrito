/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Somos</h5>
            <p>
              Somos una tienda donde ofrecemos Laptops de diferentes marcas.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-white">Catalogo</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contactanos</h5>
            <ul className="list-unstyled">
              <li>
                <p className="text-white">mundoLaptop@gmail.com</p>
              </li>
              <li>
                <p className="text-white">+51 987654321</p>
              </li>
              <li>
                <p className="text-white">Arequipa</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              &copy; 2024 Mundo Laptop. Todos los Derechos Reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
