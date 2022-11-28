export default function Contact({ user }) {
  return (
    <div className='contact hover3'>
      <div className='contact_img'>
        <img src={user?.picture} alt='' />
      </div>
      <span>{user?.name}</span>
    </div>
  );
}
