import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {
	arrowBackOutline,
	checkbox,
	chevronDown,
	filterCircle,
	squareOutline,
} from 'ionicons/icons';

export const RecipePage = () => {
	return (
		<div className="mx-16">
			{/* Back Button */}
			<div className="inline-flex flex-row items-center my-10 text-beige-1400 font-semibold text-base hover:text-beige-1000 hover:duration-300 cursor-pointer">
				<IonIcon icon={arrowBackOutline} size="large" />
				Tillbaka
			</div>

			{/* Header */}
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center space-x-24">
					<p className="font-bold text-3xl">Receptförslag</p>
					<p className="">
						Dina ingredienser gav <strong>11</strong> matchningar
					</p>
				</div>

				<div className="flex flex-row items-center space-x-24">
					{/* Sorting */}
					<div className="flex flex-row space-x-2 items-center space-x text-beige-1200 hover:text-beige-1000 hover:duration-300 cursor-pointer text-sm">
						<p>Sortera efter</p>
						<IonIcon icon={chevronDown} />
					</div>
					{/* Filter */}
					<Filtering />
				</div>

				{/* Add list of cards */}
			</div>
		</div>
	);
};

const Filtering = () => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		// setIsHovering(false);
	};

	return (
		<div
			className="relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<IonIcon
				className="text-beige-1200 hover:text-beige-1000 cursor-pointer hover:duration-300"
				icon={filterCircle}
				size="large"
			/>
			{isHovering && (
				<div className="absolute top-12 px-6 right-0 bg-beige-200 p-4 rounded-xl drop-shadow-md space-y-1">
					<ListItem name="Vegetariskt" />
					<ListItem name="Veganskt" />
					<ListItem name="Glutenfritt" />
					<ListItem name="Laktosfritt" />
				</div>
			)}
		</div>
	);
};

interface ListItemProps {
	name: string;
}

const ListItem = (props: ListItemProps) => {
	const { name } = props;
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="flex flex-row space-x-2 items-center">
			<div onClick={handleCheckboxChange} className="pt-1.5">
				{isChecked ? (
					<IonIcon icon={checkbox} style={{ 'font-size': 24 }} />
				) : (
					<IonIcon icon={squareOutline} style={{ 'font-size': 24 }} />
				)}
			</div>
			<p className="text-sm">{name}</p>
		</div>
	);
};
