import { ReactComponent as StarIcon } from "../assets/svgs/StarIcon.svg";
import { ReactComponent as HalfStarIcon } from "../assets/svgs/HalfStarIcon.svg";
import { ReactComponent as EmptyStarIcon } from "../assets/svgs/EmptyStarIcon.svg";

interface RecipeRatingProp{
    rating : number;
}


// Takes a number between 0-5 and returns a correct amount of filled stars.

// Example of usage: <RecipeRating rating={3.6}/> will return five stars where three are fully filled, one is half-filled and the last one empty
  export const RecipeRating = (props: RecipeRatingProp) => {

    const ratingClass = "w-[100px] h-[26px] absolute mt-[65%] ml-[50%] flex items-center justify-around"

    if(props.rating <= 0){ // In case rating is <= 0
        return(        
        <div className={ratingClass}> 
            <EmptyStarIcon/><EmptyStarIcon/><EmptyStarIcon/><EmptyStarIcon/><EmptyStarIcon/>
        </div>)
    }
    else if(props.rating >= 5){ // In case rating is >= 5
        return(        
            <div className={ratingClass}> 
                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
            </div>)
    }
    else{
        const numStars = Math.floor(props.rating); // How many stars
        let numHalfStars = 0;
        if(props.rating - numStars >= 0.5){ // How many half-stars
            numHalfStars = 1;
        }
        else{
            numHalfStars = 0;
        }
        let numEmptyStars = 5 - numStars - numHalfStars; // How many empty-stars
        
        // Map stars, halfstars and emptystars by the amounts calculated above
        const Stars = [...Array(numStars)].map(() => (
            <StarIcon/>
          ));
        const HalfStars = [...Array(numHalfStars)].map(() => (
            <HalfStarIcon/>
          ));
        const EmptyStars = [...Array(numEmptyStars)].map(() => (
            <EmptyStarIcon/>
          ));
    
        // Return result
        return( 
            <div className={ratingClass}> 
                {Stars}
                {HalfStars}
                {EmptyStars}
            </div>
        )
    }
  }