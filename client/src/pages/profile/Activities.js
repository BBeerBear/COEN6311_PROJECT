export default function Activities({ activities }) {
  return (
    <div className='profile_card'>
      <div className='profile_card_header'>My Acitivity</div>
      <b>Online time</b>

      <br />
      <b>Activities</b>
      {activities?.reverse().map((a, i) => (
        <div key={i}>{a}</div>
      ))}
    </div>
  );
}
