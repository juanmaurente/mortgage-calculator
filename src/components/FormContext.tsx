import { createContext, useContext, useState } from 'react';

// Definir los tipos para los datos del formulario
interface FormData {
	amount: string;
	term: string;
	interestRate: string;
}

interface FormContextProps {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

// Crear el contexto
const FormContext = createContext<FormContextProps | undefined>(undefined);

// Hook para consumir el contexto
export const useFormContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error('useFormContext must be used within a FormProvider');
	}
	return context;
};

// Componente proveedor del contexto
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [formData, setFormData] = useState<FormData>({
		amount: '',
		term: '',
		interestRate: '',
	});

	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormContext.Provider>
	);
};
