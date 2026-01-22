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
  const [estado, setEstado] = useState('blue');
  const [texto, setTexto] = useState('Inactivo');

  const toggleEstado = () => {
    if (estado === 'blue') {
      setEstado('green');
      setTexto('Activo');
    } else {
      setEstado('blue');
      setTexto('Inactivo');
    }
  };

  return (
    <button 
      className={`bg-${estado}-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:${estado === 'blue' ? 'bg-blue-600' : 'bg-green-600'} active:scale-95`}
      onClick={toggleEstado}
    >
      {texto}
    </button>
  );
}
