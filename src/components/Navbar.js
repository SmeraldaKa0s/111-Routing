import {Link} from "react-router-dom"


const Navbar = () => {
  return(
    <div>
      <ul>
        <li><Link to="/111-Routing/">Principal</Link></li>
        <li><Link to="/111-Routing/personajes">Personajes</Link></li>
        <li><Link to="/111-Routing/ubicaciones">Ubicaciones</Link></li>
        <li><Link to="/111-Routing/episodios">Episodios</Link></li>
      </ul>
    </div>
  )
}

export default Navbar