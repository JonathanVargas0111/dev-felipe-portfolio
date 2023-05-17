import { API_URL_RANDOM_USER } from "../config/apiConfig";

const ENDPONT = "";

// Función para obtener perfiles de usuarios
export const getUserProfiles = async (quantity) => {
  try {
    const url = `${API_URL_RANDOM_USER}?results=${quantity}`
    const response = await fetch(url);
    const data = await response.json();
    const userProfiles = data.results;
    return userProfiles;
  } catch (error) {
    console.log('Error:', error);
    return [];
  }
};