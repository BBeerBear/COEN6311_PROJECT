import axios from 'axios';
export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `/updateProfilePicture`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const updateCover = async (url, token) => {
  try {
    const { data } = await axios.put(
      `updateCover`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const addFriend = async (id) => {
  try {
    const { data } = await axios.put(`/api/addFriend/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const cancelRequest = async (id) => {
  try {
    const { data } = await axios.put(`/api/cancelRequest/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const follow = async (id) => {
  try {
    const { data } = await axios.put(`/api/follow/${id}`);
    return 'ok';
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};
export const unfollow = async (id) => {
  try {
    const { data } = await axios.put(`/api/unfollow/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const acceptRequest = async (id) => {
  try {
    const { data } = await axios.put(`/api/acceptRequest/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const unfriend = async (id) => {
  try {
    const { data } = await axios.put(`/api/unfriend/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const deleteRequest = async (id) => {
  try {
    const { data } = await axios.put(`/api/deleteRequest/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const block = async (id) => {
  try {
    const { data } = await axios.put(`/api/block/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const unblock = async (id) => {
  try {
    const { data } = await axios.put(`/api/unblock/${id}`);
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const search = async (searchTerm) => {
  try {
    const { data } = await axios.post(`/api/search/${searchTerm}`);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const saveNews = async (news) => {
  try {
    const { data } = await axios.put(`/api/saveNews`, { news });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const rateNews = async ({ news, star }) => {
  try {
    const { data } = await axios.put(`/api/rateNews/${star}`, { news });
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const saveAcivity = async (activity) => {
  try {
    const { data } = await axios.put(`/api/saveActivity`, { activity });
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const saveOnlineTime = async (onlineTime) => {
  try {
    const { data } = await axios.put(`/api/saveOnlineTime`, { onlineTime });
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
export const getFriendsPageInfos = async () => {
  try {
    const { data } = await axios.get(`/api/getFriendsPageInfos`);
    return { status: 'ok', data };
  } catch (error) {
    return error.response.data.message;
  }
};
