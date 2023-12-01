import styled from 'styled-components';

export const About = styled.section`
	margin-top: 220px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.text-about {
		font-size: 5vw;
		font-weight: 900;
		color: #fca311;
	}
	.about-frame {
		width: 60px;
	}
	.container-about {
		box-shadow: 0 0 10px #000;
		border-radius: 15px;
		background-color: #0d1b2a;
		width: 1200px;
		height: 450px;
		display: flex;
		align-items: center;
	}
`;

export const AboutImage = styled.div`
	.image-pessoal {
		border-radius: 15px;
		width: 280px;
		margin-left: 80px;
		border: 1.5px solid transparent;
		animation: pulse 4s infinite;
	}
	@keyframes pulse {
		0% {
			border-color: #ffcc00;
		}
		25% {
			border-color: #fa442a;
		}
		50% {
			border-color: #fca311;
		}
		75% {
			border-color: #ffdb57;
		}
		100% {
			border-color: #ffcc00;
		}
	}
`;
export const AboutText = styled.div`
	width: 60%;
	margin: 0 140px;
	.container-text-about {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
	.title-about {
		font-size: 3em;
		font-weight: 700;
		color: #adb5bd;
	}
	.paragrafo-about {
		font-size: 1.2em;
		font-weight: 500;
		color: #697389;
		position: relative;
		display: inline-block;
		overflow: hidden;
	}

	.paragrafo-about::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 100%;
		background: linear-gradient(to right, #adb5bd, transparent);
		opacity: 0.7;
		z-index: -1;
		transition: left 0.5s;
	}

	.paragrafo-about:hover::before {
		left: 0;
	}
`;
