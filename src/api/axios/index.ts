/**
 * Setup Axios instance with default values
 * @todo Move sensitive values(BASE_URL, API_VERSION) to env variables with {@link https://github.com/luggit/react-native-config}
 */

import axios from 'axios';

export const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api';
export const API_VERSION = 'v1';

// Create axios instance
const axiosInstance = axios.create();

// Set default values
axiosInstance.defaults.baseURL = `${BASE_URL}/${API_VERSION}`;

export default axiosInstance;
