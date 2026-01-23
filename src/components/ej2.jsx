/*

## ejercicio 2: layout con flexbox

* crea un contenedor `div` con `flex` y `gap-4`.
* coloca 3 cajas (`div`) de 50x50px con colores rojo, azul y verde.
* centra vertical y horizontalmente las cajas.
* usa `items-center` y `justify-center`.

*/

export default function Flexbox() {
  return (
    <div className="flex items-center justify-center gap-4 h-screen">
      <div className="w-[50px] h-[50px] bg-red-500"></div>
      <div className="w-[50px] h-[50px] bg-blue-500"></div>
      <div className="w-[50px] h-[50px] bg-green-500"></div>
    </div>
  );
}
