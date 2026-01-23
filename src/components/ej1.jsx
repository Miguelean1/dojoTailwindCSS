/*
ejercicio 1: caja con utilities básicas

crea un `div` con fondo gris claro (`bg-zinc-200`), padding de 6 (`p-6`), 
bordes redondeados (`rounded-lg`) y sombra (`shadow-md`).
dentro coloca un párrafo con texto mediano y negrita. usa clases tailwind directamente en jsx.

*/

export default function Cajita() {
  return (
    <div className="bg-zinc-200 p-6 rounded-lg shadow-md">
      <p className="text-md font-bold">
        Cajita apañá con párrafo mediano y negrita
      </p>
    </div>
  );
}