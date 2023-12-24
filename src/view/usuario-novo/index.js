import React from "react";
import firebase from "../../config/firebase";
import 'firebase/auth';

import './usuario-novo.css';
import { useState } from "react";


function novoUsuario(){
    const [email, setEmail] = useState;
    const [password, setPassword] = useState;
    const [msgTipo, setMsgtipo] = useState;
    const [msg, setMsg] = useState;
    const [carregando, setCarregando] = useState;

    function Cadastrar(){
        setCarregando(1);
        setMsgtipo(null);
        if(!email || !password){
            setMsgtipo('erro');
            setMsg('Voce precisa informar email e senha');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(resultado =>{
            setCarregando(0);
            setMsg('sucesso')
        }).catch(erro =>{
            alert(erro)
        })

    }
    return(
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email"/>
                <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control my-2" placeholder="Senha"/>
                
                {
                    carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div>
                    : <button onClick={Cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                }
                
                <div className='msg-login text-black my-1'>
                {msgTipo === 'sucesso' &&  <span><strong>Wow! </strong>Usuario cadastrado! &#128526;</span>}
                {msgTipo === 'erro' && <span><strong>Ops! </strong> {msg} &#128546;</span>}
           </div>
            </form>

        </div>
    )
}

export default novoUsuario;