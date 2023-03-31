import { useEffect, useRef, useState } from "react";
import { IonIcon } from "@ionic/react";
import { filterCircle } from "ionicons/icons";
import { ListItem } from "../recipe_components/ListItem";

interface FilteringProps {
	filters: string[];
}

export const Filtering = ({ filters }: FilteringProps) => {
	// Create a map which stores the status of the filters with initial values being false.
	const [activeFilters, setActiveFilters] = useState<Map<string, boolean>>(
		new Map(filters.map((key) => [key, false]))
	);
	const [isOpen, setIsOpen] = useState(false);
	const listRef = useRef<HTMLUListElement>(null);
	const buttonRef = useRef<HTMLIonIconElement>(null);

	useEffect(() => {
		console.log(activeFilters.entries());
	}, [activeFilters]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				!listRef.current?.contains(e.target as Node) &&
				!buttonRef.current?.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [listRef, buttonRef]);

	const handleFilterChange = (filter: string, isActive: boolean) => {
		setActiveFilters(new Map(activeFilters.set(filter, isActive)));
	};

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
					className="z-[1] p-3 space-y-1 bg-beige-200 rounded-xl absolute shadow-md right-0 top-12"
				>
					{/* {filters.map((filter) => (
						// <ListItem
						// 	onChange={handleFilterChange}
						// 	name={filter}
						// 	checked={activeFilters.get(filter) || false}
						// />
					))} */}
				</ul>
			)}
		</div>
	);
};
