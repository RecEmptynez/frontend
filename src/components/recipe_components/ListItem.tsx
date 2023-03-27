import { IonIcon } from '@ionic/react';
import { checkbox, squareOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';

interface ListItemProps {
	name: string;
	onCheckboxChange: (name: string, isChecked: boolean) => void;
	preChecked: boolean;
}

export const ListItem = ({
	name,
	onCheckboxChange,
	preChecked,
}: ListItemProps) => {
	const [isChecked, setIsChecked] = useState(preChecked);

	useEffect(() => {
		onCheckboxChange(name, isChecked);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isChecked]);

	return (
		<li
			onClick={() => setIsChecked(!isChecked)}
			className="flex flex-row space-x-2 p-2 cursor-pointer items-center hover:bg-beige-600 rounded-lg text-beige-1200"
		>
			<IonIcon
				icon={isChecked ? checkbox : squareOutline}
				className={`text-xl ${
					isChecked ? 'text-primary-green-400' : 'text-inherit'
				}`}
			/>
			<p className="text-sm select-none">{name}</p>
		</li>
	);
};
