import '../../styles/list.css';
import '../../styles/main.css';
import useListHandler from '../../handlers/list.handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faPlus,  faTrash } from '@fortawesome/free-solid-svg-icons';

type TareaProps = {
  tarea: { _id?:  string; tarea: string; completado: boolean; nombre: string; cantidad:string; precio:string; };
  onActualizarTarea: (objEditarTarea: { _id?:  string; tarea: string; completado: boolean; nombre: string; cantidad:string; precio:string; }) => void;
  onBorrarTarea: (_id?:string) => void;
};

const ListAdd = ( {
  tarea,
  onActualizarTarea,
  onBorrarTarea,
 
}: TareaProps ) => {

  const {
    handleChange,
    handleClick,
    handleClickBorrar,
    edit, 
    setEdit,
    valor, 
    completada, 
    setCompletada,
    nombre, 
    cantidad,
    precio,
  } = useListHandler({ tarea,onActualizarTarea,onBorrarTarea})

  const ModoEdicionActivado = () => {
    return(
      <> 
          <div className="container mt-2 rounded-4 bg-primary ">
                   <ul className="list-group ">
                          <li className="list-group-item">
                                  <div className="d-flex justify-content-between align-items-center  ">
                                        <h4 className="bg-primary text-white rounded-4 p-1 border">{nombre}</h4>
                                       </div>
                                  <div className="form-check text-start mt-2 ">
                                      <input
                                          className='form-control mt-2 rounded-4'
                                          name="nombre" 
                                          type="text"
                                          value={ nombre }
                                          onChange={(e) => handleChange(e)}
                                          />
                                      <input
                                          className='form-control mt-2 rounded-4'
                                          name="tarea"
                                          type="text"
                                          value={ valor } 
                                          onChange={(e) => handleChange(e)}
                                          />
                                    <input
                                          className='form-control mt-2 rounded-4'
                                          name="cantidad"
                                          type="text"
                                          value={ cantidad } 
                                          onChange={(e) => handleChange(e)}
                                          />
                                      <input
                                          className='form-control mt-2 rounded-4'
                                          name="precio"
                                          type="text"
                                          value={ precio } 
                                          onChange={(e) => handleChange(e)}
                                          />
                                  </div>
                                <div className="card-footer text-end  ">
                                        <FontAwesomeIcon 
                                            className="btn btn-outline-danger btn-custom rounded-4 mx-1 mt-2 "
                                            title="Eliminar"
                                            onClick={(e) => handleClickBorrar(e, tarea._id)}
                                            icon={faTrash} 
                                          />
                                        <FontAwesomeIcon 
                                            className="btn  btn-outline-primary rounded-4 btn-custom  mt-2 mx-2" 
                                            title="Guardar"
                                            data-bs-dismiss="" 
                                            onClick={(e) => handleClick(e)} 
                                            icon={faCheck} 
                                          />
                                  </div>
                            </li>
                      </ul>
             </div>
     </> 

    )

  }
  
  const ModoTareasGuardadas = () =>{ 
    return (
    <>  
        <div className="container tarea mt-3">
             <ul className="list-group">
                 <li className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                         <h4>{nombre}</h4>
                        </div>
                            <div className="form-check text-start mt-2">
                                <input
                                  type="checkbox"
                                  className={completada ? 'form-check-input todoTarea spanSubrayada pointer' : 'form-check-input todoTarea pointer'}
                                  onClick={() => setCompletada(!completada)}
                                  />
                                  <span className={`form-check-label ${completada ? 'spanSubrayada' : ''}`}>
                                    <a href="0" className="text-primary sin-cursor mx-2">{cantidad}</a>
                                    {valor}
                                    <a href="0" className="text-success sin-cursor mx-2">{precio}</a>
                                  </span>
                              </div>
                          <div className='text-end pt-2'>
                              <FontAwesomeIcon 
                                className="btn btn-outline-primary btn-custom mx-1 rounded-4"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                title="Agregar"
                                icon={faPlus} 
                                />
                              <FontAwesomeIcon 
                                className="btn  btn-outline-success btn-custom rounded-4 text-center mx-1"
                                title="Actualizar"
                                onClick={() => setEdit(true)}
                                icon={faPenToSquare} 
                                />
                              <FontAwesomeIcon 
                                className="btn btn-outline-danger btn-custom rounded-4 mx-1 "
                                title="Eliminar"
                                onClick={(e) => handleClickBorrar(e, tarea._id)}
                                icon={faTrash} 
                                />
                            </div>
                        </li>
                  </ul>
            </div>
      </>
    )
  } 

  return( 
    <> 
        <div className="" id={tarea && tarea._id ? tarea._id.toString() : ''}>
          {edit ? ModoEdicionActivado() :ModoTareasGuardadas()}
        </div>
    </>
  )
} 

export default ListAdd;