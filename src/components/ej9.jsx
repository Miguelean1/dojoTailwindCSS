/*

## ejercicio 9: navbar básica con responsive

* crea un `nav` con fondo azul (`bg-blue-500`) y padding.
* coloca un logo a la izquierda y 3 enlaces a la derecha.
* en móviles los enlaces deben apilarse verticalmente.
* usa flexbox y breakpoints.

*/
export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">

        <div className="text-2xl font-bold mb-4 md:mb-0">
          Logo
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:text-blue-200 transition-colors">Enlace 1</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Enlace 2</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Enlace 3</a>
        </div>

      </div>
    </nav>
  );
}
