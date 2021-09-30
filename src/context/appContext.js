import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import data from '../modify_me.json'

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const supabaseUrl = process.env.REACT_APP_URL;
  const supabaseKey = process.env.REACT_APP_API_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const info = data

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [isGuest, setIsGuest] = useState(true);
  const [countryCode, setCountryCode] = useState("");

  const getLocation = async () => {
    try {
      const res = await fetch("https://api.db-ip.com/v2/free/self");
      const resJSON = await res.json();
      setCountryCode(resJSON.countryCode);
      localStorage.setItem("countryCode", resJSON.countryCode);
    } catch (error) {
      console.log(`error getting location`, error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getData = async () => {
    try {
      let { data: projects, error } = await supabase
        .from("projects")
        .select("project_title");
      return { projects, error };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
        loadingInitial,
        setLoadingInitial,
        error,
        setError,
        username,
        setUsername,
        isGuest,
        setIsGuest,
        country: countryCode,
        info,
        getData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
