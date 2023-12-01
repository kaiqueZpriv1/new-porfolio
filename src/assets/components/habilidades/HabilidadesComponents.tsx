import React from 'react';
import { Skills, SkillsContent } from './style';
import FrameHabilidade from '../svg/notbook.svg';
import habilidadesSkills from '../../data/listHabilidades';
import { TitleSection } from '../Titles';

export const HabilidadesComponents = () => {
	return (
		<Skills>
			<div className='container-skills'>
				<TitleSection>
					<img
						className='img-section'
						src={FrameHabilidade}
						alt='Habilidades'
					/>
					<h3 className='text-section'>Habilidades</h3>
				</TitleSection>
				<SkillsContent>
					{habilidadesSkills.map((skill) => {
						return (
							<div className='box-skill' key={skill.id}>
								<img width={120} src={skill.image} alt={skill.title} />
								<h3 style={{ color: skill.color }}>{skill.title}</h3>
							</div>
						);
					})}
				</SkillsContent>
			</div>
		</Skills>
	);
};
