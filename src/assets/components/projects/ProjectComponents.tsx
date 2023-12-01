import React, { useState } from 'react';
import { ContentProject, MidiaProject, Projects } from './style';
import { TitleSection } from '../Titles';
import IconImage from '../svg/trofeu.svg';
import ProjectsList from '../../data/ListProjects';

interface ProjectComponentsProps {}

const ProjectComponents: React.FC<ProjectComponentsProps> = () => {
	const [visibleProjectId, setVisibleProjectId] = useState<string | null>(null);

	const handleMouseEnter = (projectId: string) => {
		setVisibleProjectId(projectId);
	};

	const handleMouseLeave = () => {
		setVisibleProjectId(null);
	};

	return (
		<Projects>
			<TitleSection>
				<img src={IconImage} alt='icon' className='img-section' />
				<h3 className='text-section'>Projetos</h3>
			</TitleSection>
			<ContentProject>
				{ProjectsList.map((project) => (
					<MidiaProject
						key={project.id}
						onMouseEnter={() => handleMouseEnter(project.id.toString())}
						onMouseLeave={handleMouseLeave}>
						<img
							className='midia-project'
							src={project.banner}
							alt={project.title}
						/>
						<div
							className='description-project'
							style={{
								visibility:
									visibleProjectId === project.id.toString()
										? 'visible'
										: 'hidden',
							}}>
							<h3 className='title-project'>{project.title}</h3>
							<div className='icons-project'>
								{project.tags.map((tag) => (
									<img
										width={40}
										height={40}
										key={tag.name}
										src={tag.icon}
										alt={tag.name}
									/>
								))}
							</div>
						</div>
					</MidiaProject>
				))}
			</ContentProject>
		</Projects>
	);
};

export default ProjectComponents;
