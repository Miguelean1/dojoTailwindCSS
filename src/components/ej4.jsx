/*


## ejercicio 4: tipografía

* crea 3 párrafos con tamaños distintos (`text-sm`, `text-lg`, `text-2xl`).
* usa diferentes pesos (`font-normal`, `font-medium`, `font-bold`).
* ajusta la altura de línea con `leading-relaxed`.

*/
export default function Parrafos() {
  return (
    <div className="space-y-4">
      <p className="text-sm font-normal leading-relaxed">
       parrafito con text pequeño
      </p>
      <p className="text-lg font-medium leading-relaxed">
       parrafito con text grandote
      </p>
      <p className="text-2xl font-bold leading-relaxed">
        parrafito con texto muy grandeF
        </p>
    </div>
  );
}
