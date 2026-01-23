/*

## ejercicio 9: navbar básica con responsive

* crea un `nav` con fondo azul (`bg-blue-500`) y padding.
* coloca un logo a la izquierda y 3 enlaces a la derecha.
* en móviles los enlaces deben apilarse verticalmente.
* usa flexbox y breakpoints.

*/
import { useState } from 'react';

export default function ResponsiveNavbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">MiLogo</div>

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-blue-200">Inicio</a>
            <a href="#servicios" className="hover:text-blue-200">Servicios</a>
            <a href="#contacto" className="hover:text-blue-200">Contacto</a>
          </div>
        </div>

        {menuAbierto && (
          <div className="md:hidden mt-4 flex flex-col space-y-3">
            <a href="#inicio" className="hover:text-blue-200">Inicio</a>
            <a href="#servicios" className="hover:text-blue-200">Servicios</a>
            <a href="#contacto" className="hover:text-blue-200">Contacto</a>
          </div>
        )}
      </nav>

      <div className="px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido</h1>
        <p className="text-gray-600">Navbar responsive con Tailwind CSS</p>
      </div>
    </div>
  );
}