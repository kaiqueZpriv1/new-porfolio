import React from 'react';
import { About, AboutImage, AboutText } from './style';
import FrameAbout from '../svg/FrameAbout.svg';
import PessoalImg from '../../../img/image-pessoal.jpeg';
export const AboutComponents = () => {
	return (
		<About>
			<h3 className='text-about'>
				<img src={FrameAbout} className='about-frame' alt='about' />
				About
			</h3>
			<div className='container-about'>
				<AboutImage>
					<img src={PessoalImg} alt='Minha imagem' className='image-pessoal' />
				</AboutImage>
				<AboutText>
					<div className='container-text-about'>
						<h3 className='title-about'>Kaique Ferreira</h3>
						<p className='paragrafo-about'>
							Tenho 17 anos e sou um desenvolvedor Front-End na cidade de São
							Paulo. Estou no meu último ano do ensino médio e busco me formar
							em Análise e Desenvolvimento de Sistemas. Meu primeiro contato com
							o desenvolvimento web foi em 2022, quando comecei a estudar e
							realizar meus primeiros projetos em HTML, CSS e JavaScript.
							Atualmente, estudo e desenvolvo projetos como freelancer, buscando
							evoluir e ampliar meus conhecimentos em Front-End.
						</p>
					</div>
				</AboutText>
			</div>
		</About>
	);
};
