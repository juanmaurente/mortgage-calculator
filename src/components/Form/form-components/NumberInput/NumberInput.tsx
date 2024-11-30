import styles from './NumberInput.module.css';

type NumberInputProps = {
	label: string; // Etiqueta para el input
	id: string; // ID único para el input
	placeholder?: string; // Placeholder opcional
	register: any; // Función register de React Hook Form
	error?: string; // Error relacionado al campo, si existe
	inputPrefix?: string; // Texto a la izquierda del input
	inputSuffix?: string; // Texto a la derecha del input
};

const NumberInput = ({
	label,
	id,
	placeholder,
	register,
	error,
	inputPrefix,
	inputSuffix,
}: NumberInputProps) => {
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
					type='string'
					id={id}
					placeholder={placeholder}
					{...register(id)}
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
