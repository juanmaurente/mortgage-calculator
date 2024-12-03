import { useState } from 'react';
import styles from './NumberInput.module.css';
import { UseFormRegister } from 'react-hook-form';

type NumberInputProps = {
	label: string;
	id: string;
	placeholder?: string;
	error?: string;
	inputPrefix?: string;
	inputSuffix?: string;
	register: UseFormRegister<any>;
};

const NumberInput = ({
	label,
	id,
	placeholder,
	error,
	inputPrefix,
	inputSuffix,
	register,
}: NumberInputProps) => {
	const [value, setValue] = useState('');

	// Función para formatear el número con separadores de miles y dos decimales
	const formatNumber = (input: string) => {
		if (!input) {
			return '';
		}
		// Eliminar todos los caracteres no numéricos excepto punto
		let cleanedValue = '';
		for (let i = 0; i < input.length; i++) {
			const char = input[i];
			// Solo permitir números y punto como decimal
			if (char >= '0' && char <= '9') {
				cleanedValue += char;
			}
		}

		// Dividir en parte entera y decimal
		let [integerPart] = cleanedValue.split('.');

		// Si hay parte entera, agregar separadores de miles
		if (integerPart) {
			integerPart = parseInt(integerPart).toLocaleString();
		}

		// Devolver el número formateado
		return `${integerPart}`;
	};

	// Manejador de evento de cambio de valor
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const formattedValue = formatNumber(inputValue);

		// Update state only if formatted value is different
		if (formattedValue !== value) {
			setValue(formattedValue);
		}
	};

	return (
		<div className={styles.inputGroup}>
			<label htmlFor={id} className={`${styles.label} text-preset-4`}>
				{label}
			</label>
			<div className={styles.inputBox}>
				{inputPrefix && (
					<span className={`${styles.inputPrefix} text-preset-3`}>
						{inputPrefix}
					</span>
				)}
				<input
					type='text'
					id={id}
					{...register(id)}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className={`${styles.input} ${error ? styles.error : ''}`}
				/>
				{inputSuffix && (
					<span className={styles.inputSuffix}>{inputSuffix}</span>
				)}
			</div>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};

export default NumberInput;
