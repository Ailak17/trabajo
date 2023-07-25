import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBarE = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to={"/"} className="navbar-brand"  >Sofia Lacosta </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/SobreMi'}>Sobre Mi</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/Aprendizaje"} >Aprendizaje</NavLink>
        
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/Contacto"} > Contacto</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBarE