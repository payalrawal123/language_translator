import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "./ContextApi/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <UserContextProvider>

      <App />
      </UserContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);
