import styled from 'styled-components';

export const Home = styled.main`
	padding-top: 200px;
	.container-home {
		display: flex;
		margin: 0 40px;
	}

	@keyframes cubo {
		0% {
			transform: rotateY(90deg);
		}
		25% {
			transform: rotateY(-90deg);
		}
	}
`;
export const CuboBox = styled.div`
	position: absolute;
	width: 40px;
	top: 90px;
	color: #fca322;
	animation: cubo 5s infinite linear;
`;
export const HomeText = styled.section`
	display: flex;
	flex-direction: column;
	.sub {
		display: flex;
	}
	.icon-mao.waving {
		width: 35px;
		animation: wavingAnimation 2s infinite linear;
	}
	@keyframes wavingAnimation {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(20deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-20deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.subText {
		font-size: 2em;
		font-weight: 600;
		color: #adb5bd;
	}
	.name-home {
		font-size: 4em;
		white-space: nowrap;
		background: linear-gradient(
			to right,
			#ffcc00 20%,
			#fa442a 30%,
			#fca311 70%,
			#ffdb57 80%
		);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 500% auto;
		animation: textShine 5s ease-in-out infinite alternate;
	}
	.subtext2 {
		font-size: 2em;
		font-weight: 700;
		color: #adb5bd;
	}

	@keyframes textShine {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}

	
`;

export const HomeButton = styled.div`
	margin-top: 30px;
	margin-left: 20px;
	.container-btn {
		display: flex;
		gap: 20px;
	}
	.btn-home {
		padding: 12px 32px;
		border-radius: 10px;
		border: #fca311 2px solid;
		background-color: #0d1b2a;
		font-weight: 700;
		font-size: 1.5em;
		cursor: pointer;
		color: #adb5bd;
	}
	.btn-home:hover {
		background: linear-gradient(
			to right,
			#ffcc00 20%,
			#fa442a 30%,
			#fca311 70%,
			#ffdb57 80%
		);
		-webkit-background-clip: border-box;
		background-clip: border-box;
		background-size: 500% auto;
		animation: textShine 5s ease-in-out infinite alternate;
		color: #000;
	}
`;

export const HomeImage = styled.section`
	margin-left: 100px;
	position: absolute;
	right: 100px;
	z-index: 1;
	.image-home {
		width: 550px;
	}
`;
