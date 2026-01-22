/*

## ejercicio 3: botón con estados

* crea un botón con padding y bordes redondeados.
* al pasar el mouse cambia el color de fondo.
* al hacer focus aplica un `ring`.
* el texto debe ser blanco.
* clases `hover:bg-blue-600 focus:ring-4 focus:ring-blue-300`.


*/
export default function Boton() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
   clic 
    </button>
  );
}
