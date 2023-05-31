const baseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return "https://mywebsite.com";
};
export default baseURL;
