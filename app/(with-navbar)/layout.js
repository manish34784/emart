"use client";

import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import AuthContext from "@/context/AuthContext/AuthContext";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({ children }) {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    function getStorageState() {
      const storageState = localStorage.getItem("redux-store");
      // console.log("storageState: ", storageState);
    }

    getStorageState();
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <Provider store={store}>
        <NavBar />
        {children}
      </Provider>
    </AuthContext.Provider>
  );
}
