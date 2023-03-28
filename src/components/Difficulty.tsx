import { ReactComponent as DifficultyEasyIcon } from "../assets/svgs/DifficultyEasyIcon.svg";
import { ReactComponent as DifficultyMediumIcon } from "../assets/svgs/DifficultyMediumIcon.svg";
import { ReactComponent as DifficultyHardIcon } from "../assets/svgs/DifficultyHardIcon.svg";

interface DifficultyProp {
    difficulty: String;
  }

// Returns the correct icon depending on input: 1 = Easy, 2 = Medium & 3 = Hard

// Example of usage: <Difficulty difficulty={2}/> will return the icon and text for medium.
  export const Difficulty = (props: DifficultyProp) => {
    let diff;
    switch(props.difficulty){
        case "Enkel": // Easy
            diff =  <>
                        <DifficultyEasyIcon className="m-auto"/>
                        <p>Lätt</p>
                    </>
            break;
        case "Medel": // Medium
            diff =  <>
                        <DifficultyMediumIcon className="m-auto"/>
                        <p>Medel</p>
                    </>
            break;
        case "Avancerad": // Hard
            diff =  <>
                        <DifficultyHardIcon className="m-auto"/>
                        <p>Svår</p>
                    </>
            break;
        default:
            diff = <>
                   </>
        }
    return( 
        <div className="absolute mt-[60%] ml-[10%] pt-[5%]
                        font-semibold text-white text-[10px] text-center
                        w-[54px] h-[54px] rounded-[40px] bg-primary-green-200">
            {diff}
        </div>
    )
  }