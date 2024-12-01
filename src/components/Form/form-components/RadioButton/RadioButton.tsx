import styles from './RadioButton.module.css';

const RadioButton = () => {
	return (
		<div className={styles.inputGroup}>
			<label
				htmlFor='mortgageType'
				className={`${styles.groupLabel} text-preset-4`}>
				Mortgage Type
			</label>
			<div className={styles.inputBox}>
				<input
					type='radio'
					name='mortgageType'
					id='Repayment'
					value='Repayment'
				/>
				<label
					htmlFor='Repayment'
					className={`${styles.inputLabel} text-preset-3`}>
					Repayment
				</label>
			</div>
			<div className={styles.inputBox}>
				<input
					type='radio'
					name='mortgageType'
					id='InterestOnly'
					value='InterestOnly'
				/>
				<label
					htmlFor='InterestOnly'
					className={`${styles.inputLabel} text-preset-3`}>
					Interest Only
				</label>
			</div>
		</div>
	);
};

export default RadioButton;
