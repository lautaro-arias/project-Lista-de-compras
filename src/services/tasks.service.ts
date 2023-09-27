import { services } from './global';
import { TasksData } from '../modules/Lista de compra/model/tasks.model'
export class TaskService {

    private url: string = "";
    constructor() {
        if (services.environment === "devel")
            this.url = services.tasks.dev.apiUrl;
    }
    
    async newTasks (nombre : string,tarea : string,cantidad : string,precio : string): Promise<TasksData> {
        try {
            const body: string = JSON.stringify({nombre : nombre,tarea : tarea,cantidad : cantidad,precio : precio});
            const response = await fetch(
                `${this.url}/newTasks`, 
                {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            ); 

            let json = await response.json();

            if (!response.ok) {
                throw new Error(JSON.parse(json.message).message)
            }
            return json;
        } catch (error) {
            throw error;
        }
    }
    //
    async listing ()  {
        const body: string = JSON.stringify(this.newTasks)
        try {
            const response = await fetch(
              `${this.url}/listing`,
              {
                  method: 'GET',
                  body:body,
                  headers: {
                      'Content-Type': 'application/json',
                  },
              },
            );
    
            let json = await response.json();
    
            if (!response.ok) {
              throw new Error(JSON.parse(json.message).message)
            }
            return json;
        } catch (error) {
          throw error;
        }
    }
    //
    async editingList ( nombre : string ,tarea : string,cantidad : string,precio : string,id:any): Promise<TasksData> {
        try {
            const body:string  = JSON.stringify({nombre :nombre,tarea : tarea,cantidad : cantidad,precio : precio,id:id});
            const response = await fetch(
                `${this.url}/edit/${id}`, 
                {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            ); 

            let json = await response.json();

            if (!response.ok) {
                throw new Error(JSON.parse(json.message).message)
            }
            return json;
        } catch (error) {
            console.error(error)
            throw error;
        }
    }
    //
    async deliting (id:string) {
        try {
            const body: string = JSON.stringify({  });
            const response = await fetch(
                `${this.url}/delete/${id}`, 
                {
                    method: 'DELETE',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            ); 

            let json = await response.json();

            if (!response.ok) {
                throw new Error(JSON.parse(json.message).message)
            }
            return json;
        } catch (error) {
            console.error(error)
            throw error;
        }
    }
}
