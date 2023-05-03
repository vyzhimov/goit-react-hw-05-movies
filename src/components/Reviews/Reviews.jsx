import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEndPoint, fetchMovieData } from 'services/moviedb-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const endPoint = getEndPoint('reviews', movieId);

  useEffect(() => {
    // async function fetchReview() {
    //   const response = await axios.get(
    //     `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    //   );
    //   return response.data.results;
    // }

    async function getReview() {
      try {
        const review = await fetchMovieData(endPoint).then(r => r.data.results);
        setReview([...review]);
      } catch (error) {}
    }

    getReview();
  }, [endPoint]);

  return (
    <ul>
      {review &&
        review.map(reviewer => {
          return (
            <li key={reviewer.id}>
              <h2>
                Author: <span>{reviewer.author}</span>
              </h2>
              <p>{reviewer.content}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
