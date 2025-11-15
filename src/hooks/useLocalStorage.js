import { useState, useEffect } from "react";
export const useLocalStorage = (key, initialData) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
        localStorage.setItem(key, JSON.stringify(existingData));
        setData(existingData);
    } else {
      setData(initialData);
    }
  }, []);

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setData(newData);
  };
  return [data, updateLocalStorage];
};
