import styled from 'styled-components';

export const Footer = styled.footer`
	box-shadow: 5px 0 10px #000;
	height: 55px;
	.container-footer {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.text-footer {
        margin-top: 10px;
		font-size: 1.5em;
		color: #adb5bd;
		display: flex;
	}
	.text-footer span {
		font-size: 1em;
		color: #fca311;
		font-family: 'Inter', sans-serif;
		font-weight: 900;
	}
`;

export const RedesSociais = styled.div`
margin-top: 10px;
	display: flex;
	gap: 20px;
	.img-footer {
		width: 35px;
	}
`;
