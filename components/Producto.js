import Image from "next/image";
import useTienda from "../hooks/useTienda";

const Producto = ({producto}) => {

    const { nombre, imagen, precio } = producto
  return (
    <div className="border p-3">
       <Image 
       src={`/assets/img/${imagen}.jpg`}  
       alt={`/Imagen Prenda ${nombre}`}
       width={400}
       height={500}
       />
    </div>
  )
}

export default Producto