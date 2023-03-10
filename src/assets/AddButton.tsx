export const AddButton: React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
      <div className=" w-[16px] h-[16px] cursor-pointer" onClick={onClick}>
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 8 3.5 V 12.5 M 12.5 8 H 3.5"
            stroke="#434036"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
        </svg>
      </div>
    );
  }