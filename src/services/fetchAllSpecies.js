import { getSpecies } from "../api-client";

export const fetchSpecies = async () => {
  try {
    const response = await getSpecies();
    if (response) return response.data;
  } catch (error) {
    return error;
  }
};
