import { useEffect, useRef, useState } from 'react';
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
			<div className="inline-flex flex-row items-center my-10 text-beige-1400 font-semibold text-base hover:text-beige-1000 hover:duration-300 cursor-pointer">
				<IonIcon icon={arrowBackOutline} size="large" />
				Tillbaka
			</div>

			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center space-x-24">
					<p className="font-bold text-3xl">Receptförslag</p>
					<p className="">
						Dina ingredienser gav <strong>11</strong> matchningar
					</p>
				</div>

				<div className="flex flex-row items-center space-x-24">
					<div className="flex flex-row space-x-2 items-center space-x text-beige-1200 hover:text-beige-1000 hover:duration-300 cursor-pointer text-sm">
						<p>Sortera efter</p>
						<IonIcon icon={chevronDown} />
					</div>
					<Filtering
						filters={['Vegetariskt', 'Veganskt', 'Glutenfritt', 'Laktosfritt']}
					/>
				</div>

				{/* Add list of cards */}
			</div>
		</div>
	);
};

interface FilteringProps {
	filters: string[];
}

const Filtering = (props: FilteringProps) => {
	const { filters } = props;
	const [activeFilters, setActiveFilters] = useState(new Map());
	const [isOpen, setIsOpen] = useState(false);
	const listRef = useRef<HTMLUListElement>(null);
	const buttonRef = useRef<HTMLIonIconElement>(null);

	useEffect(() => {
		let handler = (e: { target: any }) => {
			if (
				!listRef.current?.contains(e.target) &&
				!buttonRef.current?.contains(e.target)
			) {
				// Outside click registered. User didn't click the list or the icon.
				// Close the list
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handler);
	});

	function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
		const filter = event.target.name;
		const isChecked = event.target.checked;
		setActiveFilters((activeFilters) => activeFilters.set(filter, isChecked));
		console.log(activeFilters.entries());
	}

	return (
		<div className="relative">
			<IonIcon
				className="text-beige-1200 hover:text-beige-1000 cursor-pointer"
				icon={filterCircle}
				size="large"
				ref={buttonRef}
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ul
					ref={listRef}
					className="py-4 px-6 space-y-1 bg-beige-200 rounded-xl absolute shadow-md right-0 top-12"
				>
					{filters.map((filter) => (
						<ListItem
							onCheckboxChange={handleFilterChange}
							name={filter}
							preChecked={activeFilters.get(filter)}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

interface ListItemProps {
	name: string;
	onCheckboxChange: any;
	preChecked: boolean;
}

const ListItem = (props: ListItemProps) => {
	const { name, onCheckboxChange: onCheckboxChange, preChecked } = props;

	return (
		<li className="flex cursor-pointer flex-row space-x-2 items-center text-beige-1200">
			<input
				type="checkbox"
				id={name}
				name={name}
				onChange={onCheckboxChange}
			/>
			<label htmlFor={name} className="text-sm cursor-pointer">
				{name}
			</label>
		</li>
	);
};
