import { LoginData, LoginModel,RegisterData} from '../model/login.model';
import Auth from '../../../libs/auth';
import  {AuthService}  from '../../../services/auth.service';
import   useForm  from '../hooks/useForm'

const useLoginHandler   = () => {

    const authService       = new AuthService();

    const auth             = new Auth();

    const initialFormData: LoginModel = {       
        email :"",
        password :"",
    };

    const { handleForm, form } = useForm<LoginModel>(initialFormData);

    const handleLogin  = async () => {
        try { 
            const loginData: LoginData = await authService.login(form.email, form.password);
            if (loginData && loginData.token) {
                console.log("login.data.token", loginData.token);
                auth.setSession(loginData.token);
                window.location.href = "/lista-de-tareas";
            } else {
                console.error("El objeto loginData no tiene la propiedad 'token'.");
            }
        } catch (error) {
            alert("contraseña o correo electronico erroneo")
            console.error("Error al iniciar sesión", error);
        }
          
        try {
            const registerData :RegisterData = await authService.register(form.email, form.password)
            if (registerData && registerData.token) {
                console.log("login.data.token", registerData.token);
                auth.setSession(registerData.token);
                window.location.href = "/lista-de-tareas";
            } else {
                console.error("El objeto registerData no tiene la propiedad 'token'.");
            }
        } catch (error) {
            
        }
    }

    return {
        handleForm,
        handleLogin,
        form,
    };
}

export default useLoginHandler;