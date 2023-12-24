import React,{useState} from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import novoUsario from '../usuario-novo';

function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgTipo, setMsgtipo] = useState();

    function Logar(){
        firebase.auth().signInWithEmailAndPassword(email, password).then(res =>{
            setMsgtipo('sucesso');
        }).catch(erro =>{
            setMsgtipo('err');
        });
    }
    return(
        <div className='login-content d-flex aling-items-center'> 
        <form className='form-sigin mx-auto'>
            <div className='text-center mb-4'>
                {/* <img className="mb-4" src="" alt="" width="72" height="57"/> */}
                <h1 className="h3 mb-3 fw-normal text-white font-weight-bold">Login</h1>
            </div>
            <div className="form-floating my-2">
                <input onChange={(e)=> setEmail(e.target.value)} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email </label>
            </div>
            <div className="form-floating my-2">
                <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
                <label for="floatingPassword">Senha</label>
            </div>
           
            <button onClick={Logar} className="btn w-100 py-2 btn-login mt-4" type="button">Logar</button>
           <div className='T-login text-white my-1'>
                {msgTipo === 'sucesso' &&  <span><strong>Wow! </strong>Voce esta conectado! &#128526;</span>}
                {msgTipo === 'erro' && <span><strong>Ops! </strong>Verifique seu usuario e senha!&#128546;</span>}
           </div>
            <div className=" mt-4 opcoes-login">
                    <a href="#"className='mx-2'>Esqueci a senha</a> 
                    {/* <Link to={novousuario}></Link> */}
                    <span className='text-white'>&#9733;</span>
                    <Link to={novoUsario} className='mx-2'>Cadastrar</Link> 
            </div>
  </form>
  {/* <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p> */}
  </div>
    )
}


export default Login;