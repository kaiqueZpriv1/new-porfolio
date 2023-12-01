import React from 'react';
import Global from './assets/styles/global';
import { HeaderComponents } from './assets/components/header/HeaderComponents';
import { HomeComponents } from './assets/components/home/HomeComponents';
import { AboutComponents } from './assets/components/about/AboutComponents';
import { HabilidadesComponents } from './assets/components/habilidades/HabilidadesComponents';
import ProjectComponents from './assets/components/projects/ProjectComponents';
import { ContactComponents } from './assets/components/contact/ContactComponents';
import { FooterComponents } from './assets/components/footer/FooterComponents';

function App() {
	return (
		<div className='App'>
			<Global />
			<HeaderComponents />
			<HomeComponents />
			<AboutComponents />
			<HabilidadesComponents />
			<ProjectComponents />
			<ContactComponents/>
			<FooterComponents/>
		</div>
	);
}
export default App;
