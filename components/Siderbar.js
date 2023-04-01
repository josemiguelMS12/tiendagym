import Image from "next/image"
import useTienda from "../hooks/useTienda"
import Categoria from "./categoria"

const Siderbar = () => {
    const {categorias} = useTienda()

  return (
    <>
        <Image 
        width={200} 
        height={100}
        src="/assets/img/gymshop.svg"
        alt="imagen logotipo"
        priority={true}
        className= "ml-12"
        />

        <nav className="mt-10">
            {categorias.map(categoria =>(
                <Categoria
                key={categoria.id}
                categoria={categoria}
                />
            ))}
        </nav>
    </>
  )
}

export default Siderbar 