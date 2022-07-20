/** top level component */

import "./css/reset.css"
import "./css/tab.css"
import React from "react";
import Header from "./components/Header"
import Todo from "./components/todo/Index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Todo />
      <Footer />
    </>
  )
}


export default App