import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const baseUrl = "https://google-search1.p.rapidapi.com/";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const data = await (
      await fetch(`${baseUrl}${type}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "google-search1.p.rapidapi.com",
          "x-rapidapi-key": process.env.SEARCH_API_KEY,
        },
      })
    ).json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
