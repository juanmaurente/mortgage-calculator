import styles from './LinkComponent.module.css';

type LinkComponentProps = {
	reset: () => void; // Declaramos el tipo para la función reset
};

const LinkComponent = ({ reset }: LinkComponentProps) => {
	return (
		<div className={`${styles.clearLink} text-preset-4 `}>
			<a
				onClick={(e) => {
					e.preventDefault();
					reset();
				}}>
				Clear All
			</a>
		</div>
	);
};

export default LinkComponent;
