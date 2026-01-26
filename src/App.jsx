/*

## ejercicio 10: mini proyecto final

* crea una página de perfil simple con:

  * navbar responsive
  * card de usuario con foto, nombre y descripción
  * botón que cambia de estado
  * lista de actividades con efecto hover
* aplica spacing, tipografía, colores y transiciones.
* combina todos los ejercicios previos en un solo componente `App.jsx`.
* prueba los breakpoints y los efectos hover para int

*/

import Navbar from './components/ej9.jsx';
import Cajita from './components/ej1.jsx';
import Card from './components/ej6.jsx';
import BotonInteractivo from './components/ej7.jsx';
import ListaConHover from './components/ej8.jsx';


export default function App() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Navbar />
      <main className="p-6 space-y-12 max-w-5xl mx-auto">
      
        <section className="flex flex-col items-center gap-6">
          <Card
            title="Usuario Ejemplo"
            description="Descripción simple del usuario usando Tailwind."
            image="https://via.placeholder.com/400x200"
          />
          <BotonInteractivo />
        </section>
        
        <section className="flex flex-col items-center gap-6">
          <Cajita />
        </section>
        
        <section className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6">
            Actividades
          </h3>
          <ListaConHover />
        </section>
      </main>
    </div>
  );
}