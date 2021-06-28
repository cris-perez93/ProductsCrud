import { Fragment, useEffect } from "react";
import Producto from './Producto'

// Redux
import { useSelector, useDispatch } from "react-redux";
import {obtenerProductosAction}  from '../actions/productoActions'


const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
         // consultar la api
         const cargarProductos = () => dispatch(obtenerProductosAction());
         cargarProductos();

    }, []);

    // OBTENER SL STSTAE
    const productos = useSelector (state => state.productos.productos)
    const error = useSelector( state => state.productos.error);
    const cargando = useSelector (state => state.productos.loading)


    return (
       <Fragment>
         <h2>Listado de Productos</h2>

         { error ? <p>Hubo un error</p> : null}
         {cargando ? <p>Cargando...</p> :null}
          
          <table className="table" cellpadding="0" cellspacing="0" border="0">
            <thead className="thead">
              <tr className="titulos">
                 <th scope= "col">Nombre</th>
                 <th scope= "col">Precio</th>
                 <th scope= "col">Acciones</th>
                
                
              </tr>
            </thead>
            <tbody>
              { productos.length === 0 ? ' No Hay Productos' : (
                productos.map(producto =>(
                  <Producto
                     key ={producto.id}
                     producto = {producto}
                  />
                ))
              )}
            </tbody>
          </table>

       </Fragment>
      );
}
 
export default Productos;