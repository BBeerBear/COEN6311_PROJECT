import NewsItem from './NewsItem';
import CreatePost from '../createPost';
import LikeButton from './LikeButton';
import SavedButton from './SavedButton';
import StarsRating from 'stars-rating';
export default function NewsList({ news, user }) {
  const ratingChanged = (newRating) => {
    console.log(typeof newRating);
  };
  return (
    <div>
      <div>
        {news?.map((news, i) => {
          return (
            <div key={i}>
              <NewsItem news={news} user={user} />
              <CreatePost user={user} news={news} />
              <StarsRating
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'}
              />
              {/* <LikeButton news={news} user={user} /> */}
              {/* <SavedButton news={news} user={user} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
