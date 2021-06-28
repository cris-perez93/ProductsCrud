
import { useDispatch, useSelector } from 'react-redux'; //usesleector = hook para leer lo que tengamos en el state.
import {useState} from 'react'

// Actions de Redux
import {crearNuevoProductoAction} from '../actions/productoActions'
import  {mostrarAlerta, ocultarAlertaAction} from '../actions/alertaActions'

const NuevoProducto = ({history}) => {  //{history} viene con reactrouter


    // state del componente
    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState('')


      // utilizar use dispatch y te devuelve una fn
      const dispatch = useDispatch();


      //  Acceder al state del store
      const cargando = useSelector((state) => state.productos.loading);
      const error = useSelector((state) => state.productos.error);
      const alerta = useSelector(state => state.alerta.alerta)
      
      


    // llama la action de productoAction
     const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto))
 

    //SUBMIT
    const submitNuevoProducto = e =>{
        e.preventDefault();

        //validar
         if (nombre.trim() === '' || precio <= 0){

             const alerta = {
                 msg: 'Ambos campos son obligatorios',
                 classes:'alerta_error'
             }
             dispatch(mostrarAlerta(alerta));

             return;
         }
        //si no hay errores
        dispatch (ocultarAlertaAction()) ;

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        // redireccionar
        history.push('/')
    }

    return ( 
        <div className="nuevoproducto_container">

            <form 
              className="form_container"
              onSubmit={submitNuevoProducto}
            >
                <h2 className="agregar_producto">Agregar Nuevo Producto</h2>

                { alerta ? <p className ={alerta.classes}> {alerta.msg}</p> : null}
                
                <label>Nombre Producto</label>
                <input
                 type="text" 
                 className="form-control" 
                 placeholder="Nombre Producto"
                 value ={nombre}
                 onChange={e =>guardarNombre(e.target.value)}
                 />

                <label>Precio Producto</label>
                <input 
                type="number" 
                className="form-control" 
                placeholder="Precio Producto"
                value ={precio}
                onChange={e =>guardarPrecio(Number(e.target.value))}
                />
                
                <button 
                 className="btn_nuevoproducto"
                 type="submit">Agregar
                </button>
           </form>

           { cargando ? <p>Cargando...</p> :null}
           {error ? <p className="alert_error">Hubo un error</p> : null }

        </div>
     );
}
 
export default NuevoProducto;