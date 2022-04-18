import { Rating } from 'react-simple-star-rating'

const StarRating = (ratingValue: any): JSX.Element => {
    const { rating } = ratingValue;

    return (
        <Rating ratingValue={rating * 10}
            size={20}
            readonly
            fillColor='violet'
            emptyColor='gray' />
    );
}


export { StarRating }