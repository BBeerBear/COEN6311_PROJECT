import axios from 'axios';
export const createPost = async (text, user, news) => {
  try {
    const { data } = await axios.post(`/api/createPost`, {
      text,
      user,
      news,
    });
    return 'ok';
  } catch (error) {
    return error.response.data.message;
  }
};
