import Image from "next/image";
import useTienda from "../hooks/useTienda";

const Categoria = ({ categoria }) => {
  const {categoriaActual, handleClickCategoria} = useTienda()

  const { nombre, icono, id } = categoria;
  return (
    <div className={`${
      categoriaActual?.id === id ? 'bg-red-700' : ''
    } flex items-center gap-4 w-full border p-5 hover:bg-red-700`}>
  <Image
    width={50}
    height={50}
    src={`/assets/img/icono_${icono}.svg`}
    alt="Imagen icono"

  />
  <button
    type="button"
    className="text-2xl font-bold hover:cursor-pointer "
    onClick={() => handleClickCategoria(id)}
  >
    {nombre}
  </button>
</div>
  );
};

export default Categoria
 





