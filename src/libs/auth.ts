import jwtDecode from 'jwt-decode';
import { LoginData } from '../modules/Login/model/login.model';

export default class Auth {

    private key         : string;

    constructor() {
        this.key = "session_token_pm";
    }

    getTokenFromLocalStorage(): LoginData | null {
        const token     = localStorage.getItem(this.key);

        if (token == null)
            return null;

        const decoded   = jwtDecode(token);

        return decoded as LoginData;
    }

    getToken(): string
    {
        const token     = localStorage.getItem(this.key);

        return String(token);
    }

    setSession(token: string){
        localStorage.setItem(this.key, token);
    }

    clearSession(){
        localStorage.clear();
    }
}
