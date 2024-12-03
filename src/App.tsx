import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import ResultsDisplay from './components/Results/ResultsDisplay';

function App() {
	const [results, setResults] = useState<{
		monthlyRepayments: string | null;
		totalPayments: string | null;
	}>({
		monthlyRepayments: null,
		totalPayments: null,
	});

	const handleFormSubmit = (data: {
		amount: string;
		term: string;
		interest: string;
	}) => {
		console.log('Form Data:', data);

		const amount = parseFloat(data.amount);
		const term = parseFloat(data.term);
		const interestRate = parseFloat(data.interest); // Use 'interest' here instead of 'interestRate'

		console.log('Parsed Amount:', amount);
		console.log('Parsed Term:', term);
		console.log('Parsed Interest Rate:', interestRate);

		// Check for NaN values
		if (isNaN(amount) || isNaN(term) || isNaN(interestRate)) {
			console.log('Invalid input detected');
			return; // Exit the function if any value is invalid
		}

		const interestRateMonthly = interestRate / 100 / 12; // Monthly rate
		const numberOfPayments = term * 12; // Months

		const monthlyRepayment =
			(amount * interestRateMonthly) /
			(1 - Math.pow(1 + interestRateMonthly, -numberOfPayments));
		const totalPayments = monthlyRepayment * numberOfPayments;

		setResults({
			monthlyRepayments: monthlyRepayment.toFixed(2),
			totalPayments: totalPayments.toFixed(2),
		});
	};

	return (
		<div className='containerWrapper'>
			<Form handleFormSubmit={handleFormSubmit} />
			{/* Pass the results to ResultsDisplay */}
			<ResultsDisplay results={results} />
		</div>
	);
}

export default App;
