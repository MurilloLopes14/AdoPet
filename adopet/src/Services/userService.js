import { api, requestConfig } from "../Utils/config";

//Get user details
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(api + "/users/profile", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//Update user
const updateProfile = async (data, token) => {
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(api + `/users/update/profile`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  profile,
  updateProfile,
};

export default userService;
