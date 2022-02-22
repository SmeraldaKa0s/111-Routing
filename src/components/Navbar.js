import {Link} from "react-router-dom"


const Navbar = () => {
  return(
    <div>
      <ul>
        <li><Link to="/">Principal</Link></li>
        <li><Link to="/personajes">Personajes</Link></li>
        <li><Link to="/ubicaciones">Ubicaciones</Link></li>
        <li><Link to="/episodios">Episodios</Link></li>
      </ul>
    </div>
  )
}

export default Navbar