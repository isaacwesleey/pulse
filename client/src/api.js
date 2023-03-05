const apiUrl = 'http://localhost:3005/api/';

export const getNews = async (keyword = '') => {
  const response = await fetch(`${apiUrl}/news?keyword=%${keyword}%`);
  const data = await response.json();
  return data;
};

export const getNewsById = async (id) => {
  const response = await fetch(`${apiUrl}/news/${id}`);
  const data = await response.json();
  return data;
};

export const getUserById = async () => {
  const response = await fetch(`${apiUrl}/user/`, {
    headers: {
      Authorization: token,
    },
  });

  const data = await response.json();
  return data;
};
