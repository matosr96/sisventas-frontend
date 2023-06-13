export const getConfig = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Token not found in local storage");
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};
