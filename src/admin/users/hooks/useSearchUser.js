import { useState } from "react";

export const useSearchUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const fetchSearchResults = async () => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    try {
      const response = await apiClient.get(`/user/search?query=${searchTerm}`, {
        withCredentials: true,
      });
      if (response.data) {
        setResults(response.data.user);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  useEffect(() => {
  fetchSearchResults()
  
  }, [searchTerm])
  
  return {
   setSearchTerm,searchTerm, results
  };
};
