import './style.css';

export default function NewsList({ news, user }) {
  return (
    <div className='card'>
      <img src={news.urlToImage} alt='Avatar' style={{ width: '100%' }} />
      <div className='container'>
        <h4>
          <b>{`"${news.source.name}"`}</b>
        </h4>
        <p>{`"${news.content}"`}</p>
      </div>
    </div>
  );
}
