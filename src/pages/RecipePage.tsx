import { IonIcon } from '@ionic/react';
import {
	arrowBackOutline,
	chevronDown,
} from 'ionicons/icons';
import { Filtering } from '../components/recipe_components/Filtering';

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
