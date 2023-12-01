import React from 'react';
import { Footer, RedesSociais } from './style';
import { ListContact } from '../../data/listContact';
export const FooterComponents = () => {
	return (
		<Footer>
			<div className='container-footer'>
				<div className='text-footer'>
					&copy;
					<span>Kaique Ferreira</span>
				</div>
				<RedesSociais>
					{ListContact.slice(2, 4).map((redes) => {
						return (
							<a href={redes.url} target='_blank' rel='noreferrer'>
								<img
									src={redes.image}
									alt={redes.title}
									className='img-footer'
								/>
							</a>
						);
					})}
				</RedesSociais>
			</div>
		</Footer>
	);
};
