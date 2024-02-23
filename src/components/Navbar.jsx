import React from 'react'

function Navbar() {
  return (
    <div>
    <div className="navbar-container">
      <Link to={"/createData"}>Add More Characters</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/JohnCena"}>Reasons</Link>
      </div>
    </div>
  )
}

export default Navbar