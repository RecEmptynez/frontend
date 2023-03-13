import { IonIcon } from '@ionic/react';
import { arrowBackOutline, chevronDown, filterCircle } from 'ionicons/icons';

export const RecipePage = () => {
	return (
		<div className="mx-10">
			<div className="flex flex-row items-center my-10">
				<IonIcon icon={arrowBackOutline} size="large" />
				<p>Tillbaka</p>
			</div>

			{/* Header */}
			<div className="flex flex-row items-center justify-between">
				{/* Left */}
				<div className="flex flex-row items-center space-x-24">
					<p className="font-bold text-3xl">Receptförslag</p>
					<p className="">
						Dina ingredienser gav <strong>11</strong> matchningar
					</p>
				</div>

				{/* Right */}
				<div className="flex flex-row items-center space-x-24">
					<div className="flex flex-row space-x-2 items-center space-x">
						<p>Sortera efter</p>
						<IonIcon icon={chevronDown} />
					</div>
					<IonIcon icon={filterCircle} size="large" />
				</div>

				{/* Add list of cards */}
			</div>
		</div>
	);
};
