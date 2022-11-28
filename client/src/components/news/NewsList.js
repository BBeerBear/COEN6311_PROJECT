import NewsItem from './NewsItem';
import LikeButton from './LikeButton';
import SavedButton from './SavedButton';
export default function NewsList({ news, user }) {
  return (
    <div>
      <div>
        {news?.map((news, i) => {
          return (
            <div key={i}>
              <NewsItem news={news} user={user} />
              {/* <LikeButton news={news} user={user} /> */}
              {/* <SavedButton news={news} user={user} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
