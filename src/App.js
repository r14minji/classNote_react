import './css/style.css';
import { Logo, Menu } from './components/Header.js';
import Panel from './components/Panel.js';
import Footer from './components/Footer.js';



function App() {
	return (
		<div className="App">

			<figure>
				<Logo />
				<Menu />

				<section>
					<Panel />
				</section>

				<Footer />
			</figure>
		</div>
	);
}

export default App;