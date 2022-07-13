import axios from "axios";

export const fetchAllUsers = async () => {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
