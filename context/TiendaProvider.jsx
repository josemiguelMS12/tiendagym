import { useState, useEffect, createContext } from "react"
import axios from "axios"


const TiendaContext = createContext()


const TiendaProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    const obtenerCategorias = async () => {
        const {data} = await axios ("/api/categorias")
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    return (
        <TiendaContext.Provider 
        value={{
            categorias,
            categoriaActual,
            handleClickCategoria
        }}
        >

            {children}
        </TiendaContext.Provider>    

    )

}

export {
    TiendaProvider
}
export default TiendaContext