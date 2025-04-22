"use client";
import { AxiosInstance } from "axios";
import { createContext, ReactNode, useContext } from "react";
import { createApiClient } from "../api/helpers/baseApi";
interface IApiContext {
  jsonApiClient: AxiosInstance;
}
const ApiContext = createContext<IApiContext | null>(null);
const ApiProvider = ({ children }: { children: ReactNode }) => {
  const jsonApiClient = createApiClient({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    getToken: () => null,
    logout: () => "",
  });
  return (
    <ApiContext.Provider value={{ jsonApiClient }}>
      {children}
    </ApiContext.Provider>
  );
};
const useApi = () => {
  const context = useContext(ApiContext);
  if (context) {
    throw new Error("your child must be wrapped within create context");
  }
  return context;
};

export { ApiProvider, useApi };
