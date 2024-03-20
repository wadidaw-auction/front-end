import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
            method : "get",
            url : "http://localhost:3000/products"
          });
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when component mounts
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

// export const useData = () => {
//   return useContext(DataContext);
// };
