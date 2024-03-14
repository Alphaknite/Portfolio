import NavbarItems from "./NavbarItems";

import './Navbar.css'

const Navbar = () => {
  



  return (
    <>
      <nav  className="navbar">
        <ul className="navbar-ul">
          {NavbarItems.map((items) => (
            <li key={items.id}>
                <a
                    href={items.link}>
                    {items.title}
                </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar;