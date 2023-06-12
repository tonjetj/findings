let accessToken = null;

export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
  accessToken = token;
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
};

export const clearAccessToken = () => {
  localStorage.removeItem('accessToken');
  accessToken = null;
};
