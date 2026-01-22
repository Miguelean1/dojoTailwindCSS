/*

## ejercicio 5: responsive

* crea un `div` con un texto que sea:

  * `text-sm` en móviles
  * `text-lg` en tablets (`md:`)
  * `text-2xl` en desktops (`lg:`)
* cambia el color de fondo para cada breakpoint.


*/

export default function TextoResponsive() {
  return (
    <div className="text-sm md:text-lg lg:text-2xl bg-red-200 md:bg-yellow-200 lg:bg-green-200">
      Este texto cambia de tamaño y color de fondo según el tamaño de pantalla.
    </div>
  );
}
