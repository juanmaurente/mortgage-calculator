import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	amount: number;
	term: number;
	interestRate: number;
};

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch('example')); // watch input value by passing the name of it

	return (
		<div>
			<div className={styles.container}>
				<h3>Mortgage Calculator</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<button>Clear All</button>
					<label htmlFor='amount'>Mortgage Amount</label>
					<input type='number' {...register('amount')} id='amount' />

					<label htmlFor='term'>Mortgage Term</label>
					<input type='number' {...register('term')} id='term' />

					<label htmlFor='interestRate'>Interest Rate</label>
					<input
						type='number'
						{...register('interestRate')}
						id='interest'
					/>

					<label htmlFor='mortgageType'>Mortgage Type</label>
					<input
						type='radio'
						name='mortgageType'
						id='Repayment'
						value='Repayment'
					/>
					<label htmlFor='Repayment'>Repayment</label>

					<input
						type='radio'
						name='mortgageType'
						id='InterestOnly'
						value='InterestOnly'
					/>
					<label htmlFor='InterestOnly'>Interest Only</label>

					<button>Calculate Repayments</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
