import React from 'react';
import { ButtonContact, Contact, TextContact } from './style';
import { TitleSection } from '../Titles';
import FrameImgTitle from '../svg/contactTitle.svg';
import { ListContact } from '../../data/listContact';

export const ContactComponents = () => {
	return (
		<Contact>
			<TitleSection>
				<img src={FrameImgTitle} alt='icon' className='img-section' />
				<h3 className='text-section'>Contatos</h3>
			</TitleSection>
			<TextContact>
				<p className='paragrafo-contact'>
					Estou sempre procurando por novos desafios e oportunidades de
					aprendizado. Se você tem um projeto em mente, entre em contato por um
					dos links abaixo e logo retornarei. Agradeço a sua atenção.
				</p>
			</TextContact>
			<ButtonContact>
				{ListContact.slice(0, 2).map((ctt) => {
					return (
						<button className='btn-ctt' key={ctt.id}>
							<a href={ctt.url} target='_blank' rel='noreferrer'>
								<img src={ctt.image} alt={ctt.title} className='img-ctt' />
								{ctt.title}
							</a>
							<span>{ctt.span}</span>
						</button>
					);
				})}
			</ButtonContact>
		</Contact>
	);
};
