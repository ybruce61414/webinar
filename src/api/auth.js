import ApiHelper from "./apiHelper";
const API_HOST = "https://g1api.finlogix.com/v1";

const fetchPostUserLogin = (apiConfig) => {
  const { bodyData } = apiConfig;
  const apiHelper = new ApiHelper();

  return apiHelper.post(`${API_HOST}/auth/login/email`, bodyData);
};

const fetchPostUserLogout = (apiConfig) => {
  const { bodyData = {} } = apiConfig;
  const apiHelper = new ApiHelper();

  return apiHelper.post(`${API_HOST}/me/user/logout`, bodyData);
};

export { fetchPostUserLogin, fetchPostUserLogout };
