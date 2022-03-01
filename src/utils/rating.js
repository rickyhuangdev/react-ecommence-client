import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

export const showAverage = (p) => {
    if (p && p.ratings) {
        let ratingArray = p && p.ratings
        let total = []
        let length = ratingArray.length
        ratingArray.map((r) => total.push(r.star))
        let totalReduced = total.reduce((p, n) => p + n, 0)
        let highest = length * 5
        let result = (totalReduced * 5) / highest

         return (
            <div className="d-flex" style={{height:'30px'}}>
                <StarRatings rating={result}
                             starRatedColor="rgb(252, 190, 0)"
                             starHoverColor="rgb(252, 190, 0)"
                             numberOfStars={5}
                             starSpacing='1px'
                             starDimension="20px"
                             isSelectable={false}
                />
            </div>
        )
    }
}
