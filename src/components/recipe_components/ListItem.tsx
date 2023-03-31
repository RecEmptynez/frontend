import { IonIcon } from "@ionic/react";
import { checkbox, squareOutline } from "ionicons/icons";

interface ListItemProps {
	name: string;
	isChecked: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const ListItem = ({ name, isChecked, onChange }: ListItemProps) => {
	return (
		<li className="flex flex-row cursor-pointer items-center hover:bg-beige-600 rounded-lg text-beige-1200">
			<label
				className="cursor-pointer space-x-2 flex flex-row items-center w-full p-2"
				htmlFor={name}
			>
				<span className="flex">
					<IonIcon
						icon={isChecked ? checkbox : squareOutline}
						className={`text-xl ${
							isChecked ? "text-primary-green-400 bg-slate-200" : "text-inherit"
						}`}
					/>
				</span>
				<input
					id={name}
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
					className="hidden"
				/>
				<span className="text-sm select-none w-full">{name}</span>
			</label>
		</li>
	);
};
