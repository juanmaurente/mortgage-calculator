import LinkComponent from './form-components/LinkComponent/LinkComponent';
import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import ButtonComponent from './form-components/ButtonComponent/ButtonComponent';
import NumberInput from './form-components/NumberInput/NumberInput';

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
				<h3 className={`${styles.header} text-preset-2`}>
					Mortgage Calculator
				</h3>
				<LinkComponent reset={reset} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<NumberInput
					label={'Mortgage Amount'}
					id={'amount'}
					inputPrefix={'$'}
					register={register}
				/>
				<NumberInput
					label={'Mortgage Term'}
					id={'term'}
					register={register}
					inputSuffix={'years'}
				/>
				<NumberInput
					label={'Interest Rate'}
					id={'interest'}
					register={register}
					inputSuffix={'%'}
				/>
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
				<ButtonComponent />
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default Form;
