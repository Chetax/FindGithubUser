import { useState, useEffect } from "react";

const CustomHook = (username ) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const responseData = await response.json();
        setUser(responseData);
        setLoading(false);
        console.log(responseData);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  // Return an object instead of an array
  return { user, error, loading };
};

export default CustomHook;
