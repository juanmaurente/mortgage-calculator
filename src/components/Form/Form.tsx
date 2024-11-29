import LinkComponent from './form-components/LinkComponent/LinkComponent';
import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Inputs = {
	amount: number;
	term: number;
	interestRate: number;
};

const Form = () => {
	const {
		register,
		control,
		reset,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const { name, ref, onChange, onBlur } = register('amount');

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch('example')); // watch input value by passing the name of it

	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<h3>Mortgage Calculator</h3>
				<LinkComponent reset={reset} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='amount'>Mortgage Amount</label>
				<div className={styles.inputBox}>
					<span className={styles.leftPlaceholder}>$</span>
					<input type='number' {...register('amount')} id='amount' />
				</div>

				<label htmlFor='term'>Mortgage Term</label>
				<div className={styles.inputBox}>
					<input type='number' {...register('term')} id='term' />
					<span className={styles.rightPlaceholder}>years</span>
				</div>
				<label htmlFor='interestRate'>Interest Rate</label>
				<div className={styles.inputBox}>
					<input
						type='number'
						{...register('interestRate')}
						id='interest'
					/>
					<span className={styles.rightPlaceholder}>%</span>
				</div>
				<label htmlFor='mortgageType'>Mortgage Type</label>
				<div>
					<input
						type='radio'
						name='mortgageType'
						id='Repayment'
						value='Repayment'
					/>
					<label htmlFor='Repayment'>Repayment</label>
				</div>
				<div>
					<input
						type='radio'
						name='mortgageType'
						id='InterestOnly'
						value='InterestOnly'
					/>
					<label htmlFor='InterestOnly'>Interest Only</label>
				</div>
				<button className={styles.submitButton}>
					Calculate Repayments
				</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default Form;
