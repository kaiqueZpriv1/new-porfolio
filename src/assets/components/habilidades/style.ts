import styled from 'styled-components';

export const Skills = styled.section`
	margin: 150px 0;
	.container-skills {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const SkillsContent = styled.div`
	margin-top: 50px;
	display: grid;
	grid-template-columns: 200px 200px 200px;
	gap: 30px;
	.box-skill {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
		align-items: center;
		border-radius: 10px;
		font-size: 1.5em;
		box-shadow: 0 0 10px #000;
		padding: 20px;
	}
`;
