import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import ResultsDisplay from './components/Results/ResultsDisplay';

function App() {
	const [resultsPending, setResultsPending] = useState(false);

	const handleForm = () => {
		setResultsPending(!resultsPending);
	};

	return (
		<>
			<div className='containerWrapper'>
				<Form handleSubmit={handleForm} />
				<ResultsDisplay resultsPending={resultsPending} />
			</div>
		</>
	);
}

export default App;
