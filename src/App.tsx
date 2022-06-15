/** top level component */

import "./css/reset.css"
import "./css/tab.css"
import React from "react";
import Header from "./components/Header"
import Todo from "./components/todo/Tab";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Todo />
      <Footer />
    </>
  )
}


export default App