import { useEffect, useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDown } from 'ionicons/icons';
import { ListItem } from './ListItem';

const sortings = ['Relevans', 'Svårighetsgrad', 'Betyg'];

export const Sorting = () => {
	// Relevans should be active by default
	const [activeSortings, setActiveSortings] = useState<Map<string, boolean>>(
		new Map(sortings.map((key, index) => [key, index === 0]))
	);
	const [isOpen, setIsOpen] = useState(false);
	const listRef = useRef<HTMLUListElement>(null);
	const dropDownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log(activeSortings.entries());
	}, [activeSortings]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				!listRef.current?.contains(e.target as Node) &&
				!dropDownRef.current?.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [listRef, dropDownRef]);

	function handleSortingChange(sorting: string, isActive: boolean): void {
		setActiveSortings(new Map(activeSortings.set(sorting, isActive)));
	}

	return (
		<div className="relative">
			<div
				ref={dropDownRef}
				onClick={() => setIsOpen(!isOpen)}
				className="hover:bg-beige-600 rounded-lg py-1.5 px-3 flex flex-row space-x-2 items-center space-x text-beige-1200 hover:duration-300 cursor-pointer text-sm"
			>
				<p className="whitespace-nowrap pl-1">Sortera efter</p>
				<IonIcon icon={chevronDown} />
			</div>
			{isOpen && (
				<ul
					ref={listRef}
					className="p-3 space-y-1 bg-beige-200 rounded-xl absolute shadow-md right-0 top-12"
				>
					{sortings.map((sorting) => (
						<ListItem
							onCheckboxChange={handleSortingChange}
							name={sorting}
							preChecked={activeSortings.get(sorting) || false}
						/>
					))}
				</ul>
			)}
		</div>
	);
};
