import { createApiClient } from "./baseApi";

const jsonApiClient = createApiClient({
  baseURL: "jrvjhnrvrvnr",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  getToken: () => null,
  logout: () => {},
});

const formDataClient = createApiClient({
  baseURL: "",
  responseType: "formdata",
  headers: {
    "Content-Type": "application/json",
  },
  getToken: () => null,
  logout: () => {},
});
