/*

## ejercicio 6: componente card con imagen

* crea un componente `Card` que reciba `title`, `description` y `image` como props.
* muestra la imagen en la parte superior de la tarjeta con bordes redondeados.
* aplica padding, sombra y bordes redondeados al contenedor.
* el título debe ser grande y en negrita, el texto descriptivo gris.
* usa `max-w-sm bg-white rounded-xl shadow p-6` para el contenedor.
* para la imagen, usa `rounded-t-xl w-full h-48 object-cover`.

*/

export default function Card({ title, description, image }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow p-6">
      <img
        src={image}
        alt={title}
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
