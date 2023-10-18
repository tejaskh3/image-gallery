import { useState, createContext } from "react";
import useAxios from "../hooks/useAxios";
export const ImageContext = createContext();

export const ImageProvider = () => {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`
  );
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };
  return <ImageContext.Provider value={value}></ImageContext.Provider>;
};
