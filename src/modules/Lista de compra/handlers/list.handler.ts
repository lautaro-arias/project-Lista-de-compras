import React, { ChangeEvent, useState} from 'react';

  type TareaProps = {
    tarea: { _id?: string;  tarea: string; completado: boolean; nombre: string; cantidad:string; precio:string; };
    onActualizarTarea: (objEditarTarea: { _id?: string;tarea: string; completado: boolean; nombre: string; cantidad:string; precio:string; }) => void;
    onBorrarTarea:  (_id?: string) => void;
  };

const useListHandler:any = ({
    tarea,
    onActualizarTarea,
    onBorrarTarea,
  }: TareaProps ) => { 
  const [edit, setEdit] = useState(false);
  const [completada, setCompletada] = useState(false);
  const [valor, setValor] = useState(tarea.tarea);
  const [nombre, setNombre] = useState(tarea.nombre);
  const [cantidad,setCantidad] =useState(tarea.cantidad)
  const [precio,setPrecio] =useState(tarea.precio)
    
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      if (name === 'tarea') {
        setValor(value);
      } else if (name === 'nombre') {
        setNombre(value);
      }else if (name === 'cantidad') {
        setCantidad(value);
      }else if (name === 'precio') {
        setPrecio(value);
      }
  };
  
  //Click para editar 
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onActualizarTarea({
      nombre: nombre,
      tarea: valor,
      completado: tarea.completado,
      cantidad:cantidad,
      precio:precio,
      _id: tarea._id,
    });
   setEdit(false);
  };
  //

  //Borrar
  const handleClickBorrar = async (e: React.MouseEvent<HTMLButtonElement>,_id:string) => {
    e.preventDefault()
    onBorrarTarea(tarea._id)
  };
  //

  return {
    handleChange,
    handleClick,
    edit, 
    setEdit,
    valor, 
    completada, 
    setCompletada,
    nombre, 
    cantidad,
    precio,
    tarea,
    onActualizarTarea,
    onBorrarTarea,
    handleClickBorrar,
  }
}
export default useListHandler;


