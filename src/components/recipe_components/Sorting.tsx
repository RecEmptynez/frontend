import { useEffect, useRef, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import { ListItem } from "./ListItem";

type SortingProps = {
	sortings: string[];
	initialSorting: string;
	onChange: (event: string) => void;
};

export const Sorting = ({ sortings, initialSorting, onChange }: SortingProps) => {
	const [activeSorting, setActiveSorting] = useState(initialSorting);
	const [isOpen, setIsOpen] = useState(false);
	const listRef = useRef<HTMLUListElement>(null);
	const dropDownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				!listRef.current?.contains(e.target as Node) &&
				!dropDownRef.current?.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [listRef, dropDownRef]);

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
					className="z-[1] p-3 space-y-1 bg-beige-200 rounded-xl absolute shadow-md right-0 top-12"
				>
					{sortings.map((sorting) => (
						<ListItem
							name={sorting}
							isChecked={sorting === activeSorting}
							onChange={() => {
								setActiveSorting(sorting);
								onChange(sorting);
							}}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

