import NewsItem from './NewsItem';
export default function NewsList({ news, user }) {
  return (
    <div>
      <div>
        {news?.map((news, i) => {
          return (
            <div key={i}>
              <NewsItem news={news} user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
