import React from 'react';
import './login.css';
import BtnLogin from '../../components/btnlogin';
import { MdEmail , MdLock} from "react-icons/md";

const Login = () => {
    return(
        <div className="login">
            <div className="login-logo">
                <img 
                    src="https://www.tutoreye.com/images/home/login-illus-1.svg"
                    alt="Login"
                />
            </div>    

                <div className="login-right">
                    <h1>Acessar App</h1>

                        <div className="loginInputEmail">
                            <MdEmail />
                            <input 
                                type="text"
                                placeholder="Digite um Email"
                            />
                        </div>
            
                        <div className="loginInputEmail">
                            <MdLock />
                            <input 
                                type="password"
                                placeholder="Digite sua Senha"
                            />
                        </div>   

                   <BtnLogin type="foco" txt="Entrar"/>

                    <h4>Você ainda não tem uma conta ? <a href="#">Cadastrar-se</a></h4>

                   
                    
                </div>
            
        </div>
    )
}

export default Login;