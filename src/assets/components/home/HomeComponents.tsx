import React from 'react';
import { Home, HomeButton, HomeImage, HomeText } from './style';
import IconMao from '../../../img/icons8-mão-48.png';
import { Cubo } from '../svg/cubo';
import TypewriterComponent from 'typewriter-effect';
import ImgHome from '../svg/home2.svg';
export const HomeComponents = () => {
	return (
		<Home>
			<div className='container-home'>
				<Cubo />
				<HomeText>
					<div className='sub'>
						<img src={IconMao} className='icon-mao waving' alt='Mao' />
						<p className='subText'>Olá, eu sou</p>
					</div>
					<h1 className='name-home '>
						<TypewriterComponent
							options={{
								strings: ['Kaique Ferreira'],
								autoStart: true,
								loop: true,
								skipAddStyles: true,
							}}
						/>
					</h1>
					<h3 className='subtext2'>
						<TypewriterComponent
							options={{
								strings: ['Desenvolvedor Front-End'],
								autoStart: true,
								loop: true,
								skipAddStyles: true,
							}}
						/>
					</h3>
					<HomeButton>
						<div className='container-btn'>
							<button className='btn-home btn1'>Portfólio</button>
							<button className='btn-home btn2'>Git-Hub</button>
						</div>
					</HomeButton>
				</HomeText>
				<HomeImage>
					<img src={ImgHome} alt='home' className='image-home' />
				</HomeImage>
			</div>
		</Home>
	);
};
