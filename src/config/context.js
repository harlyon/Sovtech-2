import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

const API_URL = "https://api.chucknorris.io/jokes/categories";

export function ContextController({ children }) {
  let intialState = {
    quote_categories: []
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => {
        setState({
          quote_categories: res.data
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
