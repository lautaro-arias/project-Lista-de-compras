import '../../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal/Modal';
import useMainHandler from '../../handlers/main.handler';
import ListAdd from './ListAdd';

const Main = () => {
  const {
    handleSubmit,
    handleChangeTarea,
    handleChangeCantidad,
    handleChangePrecio,
    handleChangeNombre,
    onActualizarTarea,
    onBorrarTarea,
    handleSearch,
    handleLogout,
    tarea, 
    nombre, 
    cantidad,
    precio,
    searchQuery, 
    listadoTareas,
  }=useMainHandler()

  return (
    <> 
       <div className="back text-white">
                  <nav className="navbar navbar-expand-lg bg-primary">
                       <div className="container-fluid">
                            <div className="navbar-brand  p-1  text-white  border-white border rounded-4" >Listas de compra</div>
                                <button className="navbar-toggler  text-white border-1 border-white rounded-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                                  <span className="navbar-text">
                                          <div className=" pointer text-white mx-1  " onClick={ handleLogout }>Cerrar Sesión
                                              <FontAwesomeIcon className="mx-1 fas" icon={ faArrowRightToBracket }/> 
                                          </div>
                                  </span>
                            </div>
                      </div>
                 </nav>
              <nav className="navbar navbar-expand-lg justify-content-center ">
                    <div className="container-fluid justify-content-end mt-4">
                            <form className="d-flex mt-4" role="search">
                                    <input 
                                          className="form-control me-4 bg-transparent rounded-4 
                                          text-white border-white mt-4 " 
                                          type="search" 
                                          placeholder="Buscar..." 
                                          aria-label="Search" 
                                          value={ searchQuery }
                                          onChange={ handleSearch }
                                        />
                            </form>
                      </div>
                </nav>
              <div className="container mb-4  mt-4">
                   <button type="button" className="btn btn-primary border-white text-start  rounded-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Nueva lista <FontAwesomeIcon icon={ faPlus } />
                    </button>
               </div>

                  { listadoTareas.map((tarea:any) => (
                        
                          <ListAdd
                          key={ tarea._id }
                          onActualizarTarea={ onActualizarTarea }
                          onBorrarTarea={ onBorrarTarea }
                          tarea={{
                            _id: tarea._id,
                            tarea: tarea.tarea,
                            completado: false,
                            nombre: tarea.nombre,
                            cantidad: tarea.cantidad,
                            precio: tarea.precio,
                          }}
                          />
                      )
                    )
                  }
                  <Modal
                    nombre={ nombre }
                    tarea={ tarea }
                    cantidad={ cantidad } 
                    precio={ precio }
                    handleSubmit={ handleSubmit }
                    handleChangeNombre={ handleChangeNombre }
                    handleChangeTarea={ handleChangeTarea }
                    handleChangeCantidad={ handleChangeCantidad }
                    handleChangePrecio= { handleChangePrecio}
                   />
        </div>
    </>
  )
}

export default Main