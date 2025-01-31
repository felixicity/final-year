import axios from "axios";

export const register = async (email, password, firstname, lastname) => {
  const response = await axios.post("localhost:3000/user/register/", {
    email: email,
    firstname: firstname,
    lastname: lastname,
    password: password,

  });

  // const response = {
  //   email: "damilola@gmail.com",
  //   token:"Bearer gfyuygdifygsyfgwygrfrhvyfirgyhsfgh",
  //   user_id:12653765,
  // }

  const token = response.data.token;
  const user = response.data._id;

  // Save the token to local storage
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", user);

  return {
    type: "REGISTER",
    payload: {
      token,
      user
    },
  };
};

export const login = async (email, password) => {
  const response = await axios.post("localhost:3000/user/ogin", {
    email: email ,
    password: password,
  });

  // const response = {
  //   email: "damilola@gmail.com",
  //   token:"Bearer gfyuygdifygsyfgwygrfrhvyfirgyhsfgh",
  //   user_id:12653765,
  // }

  const token = response.data.access_token;

  // Save the token to local storage
  localStorage.setItem("token", `Bearer ${token}`);

  return {
    type: "LOGIN",
    payload: {
      email,
      token,
      // user_id: response.id
    },
  };
};

export const logout = async () => {
  // Remove the token from local storage
  localStorage.removeItem("token");

  return {
    type: "LOGOUT",
  };
};
