import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Footer } from './components/Footer';
import './styles/app.scss';

function App() {
	const [user, setUser] = useState('');

	useEffect(() => {
		
	}, []);

	return (
		<>
			<Header></Header>
			<Footer />
		</>
	)
}

export default App
