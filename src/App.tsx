import { Header } from './components/Header';
import { Footer } from './components/Footer';
import BlurMobileSup from './assets/BlurMobileSup.png';
import BlurMobileInf from './assets/BlurMobileInf.png';
import BlurDesktopRight from './assets/BlurDesktopRight.png';
import BlurDesktopLeft from './assets/BlurDesktopLeft.png';
import './styles/app.scss';

function App() {
	return (
		<>
			<img className='blur-mobile-sup' src={BlurMobileSup} alt="" />
			<img className='blur-mobile-inf' src={BlurMobileInf} alt="" />
			<img className='blur-desktop-right' src={BlurDesktopRight} alt="" />
			<img className='blur-desktop-left' src={BlurDesktopLeft} alt="" />
			<Header></Header>
			<Footer />
		</>
	)
}

export default App
