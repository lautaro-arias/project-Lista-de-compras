import  { ChangeEvent, FormEvent } from 'react';
import '../../styles/list.css';
import { faPlus, faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FormProps = {
  tarea: string;
  nombre: string;
  cantidad:string;
  precio:string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChangeTarea: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeNombre: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCantidad: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangePrecio: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Modal = ({ tarea, nombre,cantidad,precio, handleSubmit, handleChangeTarea, handleChangeNombre, handleChangeCantidad, handleChangePrecio}: FormProps) => {

  return (
    <>
     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabindex-="-1" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                            <div className="modal-header bg-primary">
                                <h1 className="modal-title fs-5 " id="staticBackdropLabel">Compras</h1>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form className="bg-white "onSubmit={ handleSubmit }> 
                                  <div className="modal-body bg-white">
                                    <div className="input-group input-group-sm mb-3 ">
                                        <div className="input-group mb-3 ">
                                            <input
                                                placeholder="Titulo"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                name="nombre"
                                                className="form-control rounded-4"
                                                onChange={ handleChangeNombre }
                                                value={ nombre }
                                                list="opciones" // Asocia la lista de opciones al input
                                                />
                                                <datalist id="opciones"> 
                                                  <option value="Verduleria"/>
                                                  <option value="Kiosco"/>
                                                  <option value="Super mercado"/>
                                                  <option value="Ferreteria"/>
                                                  <option value="Tienda de ropa"/>
                                                  <option value="Libreria" />
                                                  <option value="Farmacia" />
                                                
                                                </datalist>
                                            </div>
                                          <div className="input-group mb-3">
                                              <input
                                                  type="text" 
                                                  placeholder="Producto" 
                                                  aria-label="Username" 
                                                  aria-describedby="basic-addon1"
                                                  name="tarea"
                                                  className="form-control  rounded-4"
                                                  onChange={ handleChangeTarea }
                                                  value={ tarea }
                                                />
                                          </div> 
                                          <div className="input-group mb-3">
                                              <input 
                                                  type="text"  
                                                  placeholder="unidades" 
                                                  aria-label="Username" 
                                                  aria-describedby="basic-addon1"
                                                  name="tarea"
                                                  className="form-control  rounded-4"
                                                  onChange={  handleChangeCantidad }
                                                  value={ cantidad }
                                                />
                                          </div> 
                                          <div className="input-group ">
                                              <input type="text"  placeholder="Precio" 
                                              aria-label="Username" 
                                              aria-describedby="basic-addon1"
                                              name="tarea"
                                              className="form-control rounded-4"
                                              onChange={  handleChangePrecio }
                                              value={ precio }
                                              />
                                          </div> 
                                      </div>
                                  </div>
                                    <div className="modal-footer bg-white  border-white">
                                          <FontAwesomeIcon 
                                              type="button" 
                                              className="btn  btn-outline-secondary btn-custom rounded-4" data-bs-dismiss="modal"
                                              icon={faReply} 
                                            />
                                        <button className='btn btn-white border border-white' value="AGREGAR">       
                                          <FontAwesomeIcon   
                                              className="btn btn-outline-primary btn-custom  rounded-4" type="submit" title="Agregar" data-bs-dismiss="modal" icon={faPlus} 
                                            /> 
                                        </button>
                                    </div>
                              </form>
                      </div>
               </div>
       </div>
  </>   //no me dejaba poner el value en el icono de AGREGAR //
  )
}

export default Modal;