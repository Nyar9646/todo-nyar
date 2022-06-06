/** top level component */

import "./css/reset.css"
import React from "react";
import Header from "./components/Header"
import Todo from "./components/todo/Todo";
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