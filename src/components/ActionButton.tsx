interface ActionButtonProps {
	label: string;
	onClickAction: () => void;
}

export const ActionButton = (props: ActionButtonProps) => {
	const { label, onClickAction } = props;

	return (
		<button
			className={`font-semibold 
         text-beige-400 
         bg-primary-orange-600 
         py-[15px] px-[50px]
         border-2
         border-beige-400
         rounded-full
         hover:bg-primary-orange-400
         hover:ease-out 
         hover:duration-300
         active:bg-primary-orange-200
         active:ease-out 
         active:duration-300`}
			onClick={onClickAction}
		>
			{label}
		</button>
	);
};
