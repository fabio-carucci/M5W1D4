import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function MyFooter() {

  const {value} = useContext(ThemeContext);

  return (
    <footer className={`bg-${value} text-${value === "dark" ? "light" : "dark"} text-center py-3`}>
      <p className="mb-0">© 2024 EpiBooks</p>
    </footer>
  );
}