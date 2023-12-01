import React from 'react';
import { ContainerText, Header, Logo } from './style';
import LogoImg from '../../../img/logo-icon.png';
export const HeaderComponents = () => {
	return (
		<Header>
			<div className='container-header'>
				<Logo>
					<img className='image-logo' src={LogoImg} alt='logo' />
					<h3 className='name-logo'>Kaique</h3>
				</Logo>
				<ContainerText>
						<button className='about-route'>Inicio</button>
						<button className='about-route'>Sobre</button>
						<button className='about-route'>Habilidades</button>
						<button className='about-route'>Portfólio</button>
						<button className='about-route'>Contatos</button>
				</ContainerText>
			</div>
		</Header>
	);
};
