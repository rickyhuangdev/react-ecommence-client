import React from 'react';
import StartRating from 'react-star-ratings'

const Star = ({starClick, numberOfStar}) => {
    return (
        <>
            <StartRating
                changeRating={() => starClick(numberOfStar)}
                numberOfStars={numberOfStar}
                starDimension="20px"
                starSpacing="6px"
                startHoverColor="red"
                startEmptyColor="red"
            />
        </>
    );
};

export default Star;
