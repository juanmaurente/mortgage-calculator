import LinkComponent from './form-components/LinkComponent/LinkComponent';
import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import ButtonComponent from './form-components/ButtonComponent/ButtonComponent';
import NumberInput from './form-components/NumberInput/NumberInput';
import RadioButton from './form-components/RadioButton/RadioButton';

type Inputs = {
	amount: number;
	term: number;
	interestRate: number;
};

interface Props {
	handleSubmit: () => void;
}

const Form = ({ handleSubmit }: Props) => {
	const { register, control, reset } = useForm<Inputs>();

	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<h3 className={`${styles.header} text-preset-2`}>
					Mortgage Calculator
				</h3>
				<LinkComponent reset={reset} />
			</div>
			<form onSubmit={handleSubmit}>
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
				<RadioButton />
				<ButtonComponent />
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default Form;
