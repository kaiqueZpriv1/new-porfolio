import styled from 'styled-components';
// #adb5bd
export const Header = styled.header`
	height: 70px;
	width: 100%;
	box-shadow: 0 0 5px #000;
	position: fixed;
	z-index: 9;
	background-color: #0d1b2a;
	.container-header {
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #fafafa;
		padding-top: 20px;
	}
	.logo {
	}
`;
export const Logo = styled.div`
	display: flex;
	align-items: center;
	.image-logo {
		width: 30px;
	}
	.name-logo {
		font-size: 1.5em;
		font-weight: 600;
		color: #fca311;
	}
`;
export const ContainerText = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 20px;
	.about-route {
		font-size: 1.5em;
		font-weight: 700;
		color: #adb5bd;
		border: none;
		background-color: transparent;
		position: relative;
	}
	.about-route:hover {
		color: #fca311;
	}
	.about-route::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fca311;
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}
	.about-route:hover::before {
		visibility: visible;
		width: 100%;
	}
`;
