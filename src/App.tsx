import './App.css';
import Form from './components/Form/Form';
import ResultsDisplay from './components/Results/ResultsDisplay';

function App() {
	return (
		<>
			<div className='containerWrapper'>
				<Form />
				<ResultsDisplay />
			</div>
		</>
	);
}

export default App;
