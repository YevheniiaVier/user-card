import axios from "axios";

const instance = axios.create({
  baseURL: "https://63ea2fca811db3d7ef08adf5.mockapi.io/users",
});

export const getTotalCount = async () => {
  try {
    const { data } = await instance.get(`/`);
    return data.length;
  } catch (error) {
    console.error("Error while fetching users:", error);
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await instance.get(`/${id}`);
    return data;
  } catch (error) {
    console.error("Error while fetching users:", error);
    throw error;
  }
};

export const getUsers = async (page = 1, limit = 3) => {
  try {
    const url = new URL("https://63ea2fca811db3d7ef08adf5.mockapi.io/users");
    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    console.error("Error while fetching users:", error);
    throw error;
  }
};

export const updateUser = async (card) => {
  const { data } = await instance.put(`/${card.id}`, {
    ...card,
    followers: card.followers,
  });
  return data;
};
