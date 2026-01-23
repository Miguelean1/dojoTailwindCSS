/*

## ejercicio 8: lista de elementos con hover

* crea una lista de 5 elementos.
* aplica padding y bordes redondeados a cada item.
* al pasar el mouse cambia el fondo y el texto de color.
* usa `hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200`.

*/
export default function ListaConHover() {
  const items = [
    "objeto 1 de lista",
    "objeto 2 de lista",
    "objeto 3 de lista",
    "objeto 4 de lista",
    "objeto 5 de lista"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Tecnologías Web
        </h2>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-6 py-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}