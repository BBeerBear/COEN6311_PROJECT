export default function Cover({ cover }) {
  return (
    <div className='profile_cover'>
      {cover && <img src={cover} className='cover' alt='' />}
    </div>
  );
}
