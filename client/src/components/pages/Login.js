import React from 'react';
import logo from '../assets/img/logo_cei.png';

import BtnComBorda from '../assets/buttons/BtnComBorda';
import BtnSemBorda from '../assets/buttons/BtnSemBorda';
import InpComum from '../assets/inputs/InpComum';

import '../styles/Login.css';

function Login(){
	function irParaTelaCadastro(){
		alert('Cadastrar');
	}

	function logar(){
		alert('Logar');
	}

	return(
		<div className='layout'>
			<div className='lateralEsquerda '>
				<img className='logo' src={logo} alt='Logo do Censo Inclusivo'/>
				<h1 style={{color:'white'}}>CENSO INCLUSIVO</h1>
				<h2 style={{color:'white'}}>Seja bem vindo!</h2>
				<h3 style={{color:'white'}}>Ajude a construir benefícios para você e sua cidade!</h3>
				<BtnComBorda event={irParaTelaCadastro} text="Cadastrar" />
				<a className='link' href='/#'>Esqueci minha senha</a>
			</div>

			<div className='corpo'>
				<h1 className='titulo'>ACESSE SUA CONTA</h1>
				<InpComum text="Digite seu CPF..."/>
				<InpComum text="Digite sua Senha..."/>
				<BtnSemBorda event={logar} text="Entrar"/>
			</div>
		</div>
	);
}

export default Login;