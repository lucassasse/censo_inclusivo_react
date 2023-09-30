import React from 'react';
import logo from '../assets/img/logo_cei.png';

import BtnComBorda from '../assets/buttons/BtnComBorda';
import BtnSemBorda from '../assets/buttons/BtnSemBorda';
import InpComum from '../assets/inputs/InpComum';

import styled from 'styled-components';
import './Login';

const Layout = styled.div`
	margin: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const LateralEsquerda = styled.div`
	background-color: #4169E1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 80vh;
	border-radius: 10px 0 0 10px;
`;

const Corpo = styled.div`
	background-color: #A9A9A9;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 80vh;
	border-radius: 0 10px 10px 0;
`;

function Login(){
	return(
		<Layout>
			<LateralEsquerda >
				<img style={{}} src={logo} alt='Logo do Censo Inclusivo'/>
				<h1 style={{color:'white'}}>CENSO INCLUSIVO</h1>
				<h2 style={{color:'white'}}>Seja bem vindo!</h2>
				<h3 style={{color:'white'}}>Ajude a construir benefícios para você e sua cidade!</h3>
				<BtnComBorda text="Cadastrar"/>
				<p style={{color:'white'}}>Esqueci minha senha</p>
			</LateralEsquerda>

			<Corpo>
				<h1 style={{color:'white'}}>ACESSE SUA CONTA</h1>
				<InpComum text="Digite seu CPF..."/>
				<InpComum text="Digite sua Senha..."/>
				<BtnSemBorda text="Entrar"/>
			</Corpo>
		</Layout>
	);
}

export default Login;