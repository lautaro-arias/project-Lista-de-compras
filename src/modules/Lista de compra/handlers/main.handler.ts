import  { ChangeEvent, FormEvent, useState,useMemo,useEffect } from 'react';
import  {TaskService}  from '../../../services/tasks.service'; 
import Auth from '../../../libs/auth';
import '../styles/main.css';
import { TasksData } from '../model/tasks.model';

  type Tarea = {
    tarea: string;
    completado: boolean;
    nombre:string;
    cantidad:string;
    precio:string;
    _id?:any
  };

const useMainHandler = () => { 

    const [tarea, setTarea] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad,setCantidad] =useState('')
    const [precio,setPrecio] = useState('$')
    const [searchQuery, setSearchQuery] = useState("");
    const [listadoTareasOriginal, setListadoTareasOriginal] = useState<Tarea[]>([]);
    const [listadoTareas, setListadoTareas] = useState<Tarea[]>([]);

    //services
    const newTasks = new TaskService()
    const deliting = new TaskService()
    const editingList = new TaskService()
    const listing = useMemo(() => new TaskService(), []); 
    //
    
    //cambios de valores de inputs 
    const handleChangeTarea = async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setTarea(e.target.value);
    };
    const handleChangeNombre = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setNombre(e.target.value);
    };
    const handleChangeCantidad = (e:ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setCantidad(e.target.value)
    }
    const handleChangePrecio = (e:ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setPrecio(e.target.value)
    }
    //

    //Crear tarea
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const nuevoId = await newTasks.newTasks(nombre, tarea, cantidad, precio);

      if (tarea === '') {
        alert('Complete los campos por favor');
        return;
      }
      const nuevaTarea: Tarea = {
        tarea: tarea,
        completado: false,
        nombre:nombre,
        cantidad:cantidad,
        precio:precio,
        _id:nuevoId._id,
      }

      const temp = [nuevaTarea, ...listadoTareas];
      setListadoTareas(temp);
      setListadoTareasOriginal(temp);

      //inputs
      setTarea('');
      setNombre('');
      setCantidad('');
      setPrecio('$');

    };
    //

    //Actualizar tarea 
    const onActualizarTarea = async (objEditarTarea:TasksData) => {
      const { nombre, tarea, precio, cantidad, _id } = objEditarTarea;

      const temp = listadoTareas.map((item) =>
        item._id === _id ? { ...item, nombre, tarea, precio, cantidad,_id } : item
      );
      const tempOriginal = listadoTareasOriginal.map((item) =>
        item._id === _id ? { ...item, nombre, tarea, precio, cantidad,_id} : item
      );

      setListadoTareas(temp);
      setListadoTareasOriginal(tempOriginal);
    
      try {
        await editingList.editingList( nombre ,tarea ,cantidad ,precio,_id)
      } catch (error) {
        console.error(error);
      }
    };
    //

    //Borrar tarea
    const onBorrarTarea = async (_id:any ) => {
      const temp = listadoTareas.filter(item => item._id !== _id);
      const tempOriginal = listadoTareasOriginal.filter((item) => item._id !== _id);

      setListadoTareas(temp);
      setListadoTareasOriginal(tempOriginal);
      
      await deliting.deliting(_id);
    };
    //
    //Filtrador tarea
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchQuery(value);
    
      if (value === '') {
        setListadoTareas(listadoTareasOriginal); 
      } else {
        // Filtrar la lista local (listadoTareas)
        const filteredLocalResults = listadoTareas.filter((user: Tarea) =>
          user.tarea.toLowerCase().includes(value.toLowerCase()) ||
          user.nombre.toLowerCase().includes(value.toLowerCase()) ||
          user.precio.toLowerCase().includes(value.toLowerCase()) ||
          user.cantidad.toLowerCase().includes(value.toLowerCase())
        );
        // Combinar los resultados de ambas listas
        const combinedResults = [...filteredLocalResults];
        setListadoTareas(combinedResults);
      }
    };
    //

    // Retorna la lista de la base de datos 
    useEffect(() => {
      const fetchTasks = async () => {
        const response = await listing.listing();
        setListadoTareas(response);
        setListadoTareasOriginal(response)
      };
      fetchTasks();

    }, [ listing ]); 
    //

    // cerrar secion
    const handleLogout = () => {
      const auth = new Auth();
      auth.clearSession(); 
      window.location.href = "/"; 
    };//

    return {
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
      setListadoTareas,
      listadoTareasOriginal, 
    };
}
export default useMainHandler;




