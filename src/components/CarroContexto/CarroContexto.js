import React, { createContext, useReducer } from 'react';
import CarroReducer from '../CarroReducer/CarroReducer';

const CarroContexto = createContext();

const initialState = {
  carro: [],
  total: { cantidad: 0, monto: 0 },
};

const CarroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CarroReducer, initialState);

  return (
    <CarroContexto.Provider value={{ state, dispatch }}>
      {children}
    </CarroContexto.Provider>
  );
};

export { CarroContexto, CarroProvider };