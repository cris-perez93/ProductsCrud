import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'


// Redux

import { useDispatch } from "react-redux";
import { borrarProductoAction, obtenerProductoEditar } from "../actions/productoActions";


const Producto = ({producto}) => {

    const {nombre, precio, id} = producto;

    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redireccionar.

    // Confirmas si desea eliminarlo
    const confirmarEliminarProducto = id =>{

        //preguntar al usuario 
        Swal.fire({
            title: 'Estas seguro?',
            text: "No puedes volver atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {

        // pasarlo al action
        dispatch(borrarProductoAction(id));

            
            }
          });

    

    }

    // función que rederigie de forma programada
    const redireccionarEdicion = producto =>{
             dispatch(obtenerProductoEditar(producto));
             history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr>
            <td className="nombre_producto">{nombre}</td>
            <td><span>$ {precio}</span></td>
            <td>
                <button 
                    className="editar"
                    type ="button"
                    onClick ={ ()=> redireccionarEdicion(producto)}
                >Editar
                </button>
                <button
                    type ="button" 
                    className="btn_eliminar"
                    onClick={()=>confirmarEliminarProducto(id)}
                 >Eliminar</button>
               
            </td>
        </tr>
      );
}
 
export default Producto;