import IsLoading from 'components/IsLoading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getEndPoint, fetchMovieData } from 'services/moviedb-api';
import { ReviewsList, ReviewsListItem, NoReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const endPoint = getEndPoint('reviews', movieId);
    async function getReview() {
      try {
        setIsLoading(true);
        const review = await fetchMovieData(endPoint).then(r => r.data.results);
        setReviews([...review]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getReview();
  }, [movieId]);

  return (
    <>
      {isLoading && <IsLoading />}
      {!isLoading && (
        <ReviewsList>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => {
              return (
                <ReviewsListItem key={id}>
                  <h2>
                    Author: <span>{author}</span>
                  </h2>
                  <p>{content}</p>
                </ReviewsListItem>
              );
            })
          ) : (
            <NoReviews>No reviews was found</NoReviews>
          )}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
