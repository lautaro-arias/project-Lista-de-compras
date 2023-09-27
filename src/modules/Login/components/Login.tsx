import '../styles/login.css'
import useLoginHandler from '../handlers/loginHandler'

const Login = () => {
    const {
        handleForm,
        handleLogin,
        form,
    } = useLoginHandler();
  return (
    <>
        <div className="Login">
            <div className="container">
                <div className="row d-flex justify-content-center center ">
                    <div className="col col-md-6 col-xl-4 p-4 border-3 border-white border rounded-4 box ">
                        <div className="content-login  p-3 ">
                            <form className="d-flex justify-content-center" id="form">
                                <div className="col">
                                    
                                    <div className="mb-3">
                                        <label className="form-label d-flex text-white" htmlFor="email"><b>Email</b></label>
                                        <input 
                                        minLength={11}
                                        maxLength={30}
                                        id="email"
                                        type="email" 
                                        className="form-control rounded-4" 
                                        name="email" 
                                        placeholder="Email" 
                                        value={ form.email } onChange={ handleForm }  />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label d-flex text-white" htmlFor="password"><b>Password</b></label>
                                        <input 
                                        minLength={8}
                                        maxLength={15}
                                        id="password"
                                        type="password" 
                                        className="form-control rounded-4 " 
                                        name="password" placeholder="Password"  
                                        value={ form.password } onChange={ handleForm }
                                        />
                                    </div>
                                </div>
                            </form>
                            <div className="mt-4 mb-3">
                                <button className="btn btn-md w-100 bg-green text-white"
                                onClick={ handleLogin } ><b>Ingresar</b></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Login