const Total = ({ total }) => {
  return (
    <div>
      <p>Cantidad: {total.cantidad}</p>
      <p>Monto: $ {total.monto}</p>
      <button className="btn btn-primary">Pagar</button>
    </div>
  );
};

export default Total;
