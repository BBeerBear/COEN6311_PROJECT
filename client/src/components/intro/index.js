import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { countries } from '../../data/countriesList';
import EditDetails from './EditDetails';
export default function Intro({ profile, visitor }) {
  const [details, setDetails] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setDetails(profile);
    setInfos(profile);
  }, [profile]);

  const initial = {
    preferredCategories: profile?.preferredCategories
      ? profile.preferredCategories
      : [],
    country: profile?.country ? profile.country : '',
  };
  const [infos, setInfos] = useState(initial);
  const updateDetails = async () => {
    try {
      const { data } = await axios.put('/api/updateProfile', { infos: infos });
      setDetails(data);
      setVisible(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfos({ ...infos, [name]: value });
  };
  return (
    <div className='profile_card'>
      <div className='profile_card_header'>Intro</div>
      {details?.preferredCategories && (
        <div className='info_profile'>
          {/* <img src='../../../icons/job.png' alt='' /> */}
          <b>Like Topics:</b>
          <br />
          {details?.preferredCategories.map((c, i) => {
            return <div key={i}>{c.charAt(0).toUpperCase() + c.slice(1)},</div>;
          })}
        </div>
      )}
      {details?.country && (
        <div className='info_profile'>
          {/* <img src='../../../icons/job.png' alt='' /> */}
          <b>Country:</b>
          {
            countries.find((e) => e.value.toLowerCase() === details?.country)
              .label
          }
        </div>
      )}
      {visible && !visitor && (
        <EditDetails
          details={details}
          handleChange={handleChange}
          updateDetails={updateDetails}
          infos={infos}
          setVisible={setVisible}
          setInfos={setInfos}
        />
      )}
      {!visitor && (
        <button
          className='gray_btn hover1 w100'
          onClick={() => setVisible(true)}
        >
          Edit Details
        </button>
      )}
    </div>
  );
}
