import axios, { AxiosError, CreateAxiosDefaults, ResponseType } from "axios";

export const createApiClient = ({
  baseURL,
  responseType = "json",
  headers,
  options,
  getToken,
  logout,
}: {
  baseURL: string;
  responseType?: ResponseType | undefined;
  headers?: CreateAxiosDefaults["headers"];
  options?: Omit<CreateAxiosDefaults, "baseURL" | "method" | "responseType">;
  getToken: () => string | undefined | null;
  logout: () => void;
}) => {
  const apiClient = axios.create({
    baseURL: baseURL,
    responseType: responseType,
    headers: headers ?? { "Content-Type": "application/json" },
    ...options,
  });

  apiClient.interceptors.request.use(
    (config) => {
      const token = getToken();
      config.headers["Authorization"] = `bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      const status = error.response?.status;
      if (status === 401) {
        logout();
      }
    }
  );

  return apiClient;
};
