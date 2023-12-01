import styled from 'styled-components';

export const Projects = styled.section`
	margin: 200px 0;
`;

export const ContentProject = styled.div`
	margin-top: 100px;
	display: grid;
	align-items: center;
	justify-content: center;
	gap: 30px;
	grid-template-columns: 400px 400px 400px;
`;

export const MidiaProject = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 199px;
	.midia-project {
		border: 2px solid #adb5bd;
		border-radius: 10px;
		width: 392px;
		height: 205px;
		position: relative;
		top: 45px;
	}

	.midia-project:hover {
		filter: blur(1px);
		border: 2px solid #fca311;
	}
	.description-project {
		visibility: hidden;
		position: relative;
		bottom: 100px;
		right: -120px;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;
		gap: 10px;
		transform: translateX(-100%);
	}
	.title-project {
		font-size: 2em;
		font-weight: 800;
		color: #fca311;
	}
	.icons-project {
		display: flex;
	}
	.icons-project img {
		width: 40px;
	}
`;
