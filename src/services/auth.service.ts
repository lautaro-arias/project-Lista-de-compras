import { services } from './global';
import {  LoginData } from '../modules/Login/model/login.model';


export class AuthService {
    private url: string = "";

    constructor() {
        if (services.environment === "devel")
            this.url = services.login.dev.apiUrl;
    }

    async login(email: string, password: string): Promise<LoginData> {
        try {
            const body: string = JSON.stringify({ email: email, password: password });
            console.log("auth.body",body) 

            const response = await fetch(
                `${this.url}/login`, 
                {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                },
               
            ); 

            let json = await response.json();
          console.log("auth.json.token",json) 

            if (!response.ok) {
                throw new Error(JSON.parse(json.message).message)
                 
            }
            console.log("auth.service.token",json.token)
            return json;
        } catch (error) {
            console.error(error)
            throw error;
        }
    }

    async register(email: string, password: string): Promise<LoginData> {
        try {
            const body: string = JSON.stringify({ email: email, password: password });
           console.log("auth.body.register", body);
    
            const response = await fetch(
                `${this.url}/register`,
                {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                    },
    
                },
    
            );
    
            let json = await response.json();
           console.log("auth.json.token.register", json);
    
            if (!response.ok) {
                throw new Error(JSON.parse(json.message).message);
            }
            return json;
        } catch (error) {
            throw error;
        }

    }

}