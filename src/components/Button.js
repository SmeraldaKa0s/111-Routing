import { useContext } from "react"
import UserContext from "../context/UserContext"

const Button = ({ title }) => {

  const usuario = useContext(UserContext)

  return (
    <button 
      className={usuario.isEminent ? "boton-azul" : "boton-rojo"}
      onClick={handleClick}>
      {title}
    </button>
  )
}

export default Button