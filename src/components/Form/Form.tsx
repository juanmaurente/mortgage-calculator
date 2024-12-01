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
		<div className={styles.sectionWrapper}>
			<div className={styles.heading}>
				<h3 className={`${styles.header} text-preset-2`}>
					Mortgage Calculator
				</h3>
				<LinkComponent reset={reset} />
			</div>
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit}>
					<div className={styles.amount}>
						<NumberInput
							label={'Mortgage Amount'}
							id={'amount'}
							inputPrefix={'$'}
							register={register}
						/>
					</div>
					<div className={styles.term}>
						<NumberInput
							label={'Mortgage Term'}
							id={'term'}
							register={register}
							inputSuffix={'years'}
						/>
					</div>
					<div className={styles.interest}>
						<NumberInput
							label={'Interest Rate'}
							id={'interest'}
							register={register}
							inputSuffix={'%'}
						/>
					</div>
					<div className={styles.type}>
						<RadioButton />
					</div>
					<ButtonComponent />
				</form>
			</div>
			<DevTool control={control} />
		</div>
	);
};

export default Form;
