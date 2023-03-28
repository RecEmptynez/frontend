import { ReactComponent as StarIcon } from "../assets/svgs/StarIcon.svg";
import { ReactComponent as HalfStarIcon } from "../assets/svgs/HalfStarIcon.svg";
import { ReactComponent as EmptyStarIcon } from "../assets/svgs/EmptyStarIcon.svg";

interface RecipeRatingProp{
    rating : number;
}

// Takes a number between 0-5 and returns a correct amount of filled stars.
// Example of usage: <RecipeRating rating={3.6}/> will return five stars where three are fully filled, one is half-filled and the last one empty
  export const RecipeRating = (props: RecipeRatingProp) => {
    const emptyStars = <><EmptyStarIcon /><EmptyStarIcon /><EmptyStarIcon /><EmptyStarIcon /><EmptyStarIcon /></>;
    const fullStars = <><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></>

    let stars;
    if(props.rating <= 0){ // In case rating is <= 0
        stars = emptyStars;
    }
    else if(props.rating >= 5){ // In case rating is >= 5
        stars = fullStars;
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
        stars = <>{Stars}{HalfStars}{EmptyStars}</>
    }
    return(stars)
  }