import { IonIcon } from '@ionic/react';
import { arrowBackOutline, chevronDown, filterCircle } from 'ionicons/icons';

export const RecipePage = () => {
	return (
		<div className="mx-10">
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
					<IonIcon
						className="text-beige-1200 hover:text-beige-1000 cursor-pointer hover:duration-300"
						icon={filterCircle}
						size="large"
					/>
				</div>

				{/* Add list of cards */}
			</div>
		</div>
	);
};
