
import {useDispatch, useSelector} from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'



const EditarProducto = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  //Nuevo state de producto
  const[producto, guardarProducto] = useState({
    nombre:'',
    precio: ''
  });
  
  // producto a editar 
  const productoeditar = useSelector(state => state.productos.productoeditar);
  

  //llenar el state automaticamente
  useEffect(() =>{
      guardarProducto(productoeditar);
  },[productoeditar]);

  // leer los datos del form 
  const onchangeFormulario = e =>{
    guardarProducto({
      ...producto,
      [e.target.name] : e.target.value
    })

  }


  const { nombre , precio, } = producto;

  const submitEditarProducto = e => {
    e.preventDefault();

    dispatch(editarProductoAction(producto));

    history.push('/');
  }
   

    return (
      
      <div className="nuevoproducto_container">

      <form 
        className="form_container"
        onSubmit ={submitEditarProducto}
        >
          <h2 className="form-signin-heading">Editar Producto</h2>

          <label>Nombre Producto</label>
          <input
              type="text" 
              className="form-control" 
              placeholder="Nombre Producto"
              name= "nombre"
              value = {nombre}
              onChange={onchangeFormulario}
              
           />

          <label>Precio Producto</label>
          <input 
              type="number" 
              className="form-control" 
              placeholder="Precio Producto"
              name ="precio"
              value = {precio}
              onChange={onchangeFormulario}
              
          />
          
          <button 
              className="btn_nuevoproducto"
              type="submit">Guardar Cambios
          </button>
     </form>

  </div>
);
    };

 
export default EditarProducto;