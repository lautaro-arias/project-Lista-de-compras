import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Auth from '../libs/auth';

import Login from '../modules/Login/components/Login'
import Main from '../modules/Lista de compra/components/crud/Main';


const Urls = () => {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect( () => {
        const auth = new Auth();
        const checkAuthentication = () => {
            const token             =  auth.getTokenFromLocalStorage();

            if (token != null)
            {
                const expirationTime    = token.exp;
                const currentTime       = Math.floor(Date.now() / 1000);

                if (expirationTime > currentTime)
                    return setAuthenticated(true);
            }
            //console.log("error")
            return setAuthenticated(false);
        };

       /// console.log("error")
        checkAuthentication();

    }, []);

    return (
        <Router>
            <Routes>
                
            <Route 
            path="/"     
            element={ authenticated ? <Navigate to="/lista-de-tareas" /> : <Login />   }   
            />
           
           <Route
              path="/lista-de-tareas"
              element={ authenticated ? <Main /> : <Navigate to="/" /> }
            />
          
            </Routes>


            
        </Router>
    );
};

export default Urls;