/*

## ejercicio 7: botón que cambia de clase dinámicamente

* crea un botón que cambie de color al hacer clic.
* estado inicial: azul (`bg-blue-500`) con texto `Inactivo`.
* al hacer clic: verde (`bg-green-500`) y texto `Activo`.
* aplica transición de color.
* usa `useState` y template literals: ``className={`bg-${color} ...`}``

*/

import { useState } from 'react';

export default function BotonInteractivo() {
  const [activo, setActivo] = useState(false);

  return (
    <button 
      className={`px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 active:scale-95 ${
        activo 
          ? 'bg-green-500 hover:bg-green-600' 
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
      onClick={() => setActivo(!activo)}
    >
      {activo ? 'Activo' : 'Inactivo'}
    </button>
  );
}