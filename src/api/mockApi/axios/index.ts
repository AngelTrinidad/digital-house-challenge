/**
 * Setup Axios instance with default values
 * @todo Move sensitive values(BASE_URL, API_VERSION) to env variables with {@link https://github.com/luggit/react-native-config}
 */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {MockApiModuleUrl} from '../types';

export const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api';
export const API_VERSION = 'v1';

// Create axios instance
const axiosInstance = axios.create();

// Set default values
axiosInstance.defaults.baseURL = `${BASE_URL}/${API_VERSION}`;

// For mock request
const mockInstance = new MockAdapter(axiosInstance);

export const mockApiOnGet = (moduleUrl: MockApiModuleUrl) =>
  mockInstance.onGet(`${BASE_URL}/${API_VERSION}/${moduleUrl}`);

export default axiosInstance;
