import styled from 'styled-components';

export const Contact = styled.section`
	margin: 100px 0;
	.container-contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const TextContact = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.paragrafo-contact {
		font-size: 1.3em;
		color: #adb5bd;
		font-weight: 500;
		margin: 80px 300px;
	}
`;

export const ButtonContact = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	.btn-ctt {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
		padding: 20px 35px;
		box-shadow: 0 0 10px #000;
		border-radius: 10px;
		border: none;
		background-color: #0d1b2a;
		cursor: pointer;
	}
	.btn-ctt:hover {
		box-shadow: 0 0 10px #fca311;
	}
	.btn-ctt a {
		display: flex;
		color: #fca311;
		font-weight: 700;
		font-size: 2em;
	}
	.img-ctt {
		width: 30px;
	}
	.btn-ctt span {
		font-size: 1em;
		font-weight: 400;
		color: #adb5bd;
	}
`;


