import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className = "navbar">
            <div className="container">
                <h1><Link to ={'/'}>CRUD</Link></h1>
            </div>

            <Link to={"/productos/nuevo"} >Agregar Producto &#43;</Link>
        </nav>
      );
}
 
export default Header;
