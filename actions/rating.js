import React from 'react';
import StarRating from 'react-star-ratings';

export const showAverage = (item) => {
	if (item && item.ratings) {
		const ratingsArray = item && item.ratings;
		let total = [];
		let length = ratingsArray.length;

		ratingsArray.map((rating) => total.push(rating.star));
		let totalReduced = total.reduce((prev, next) => prev + next, 0);
		let highest = length * 5;
		let result = totalReduced * 5 / highest;

		return (
			<div className="mb-2">
				<span>
					<StarRating
						starDimension="20px"
						rating={result}
						starSpacing="2px"
						starRatedColor="orange"
						editing={false}
						className
					/>
					<span className="ml-2 text-muted">({item.ratings.length})</span>
				</span>
			</div>
		);
	}
};
