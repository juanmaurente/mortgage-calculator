import styles from './ButtonComponent.module.css';
import { Icon } from '@iconify/react';

const ButtonComponent = () => {
	return (
		<div>
			<button className={`${styles.button} text-preset-3 `}>
				<Icon icon='mdi:calculator' className={styles.calculator} />
				Placeholder
			</button>
		</div>
	);
};

export default ButtonComponent;
