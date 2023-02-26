import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav";

function App() {
  

  return (
    <div >
      <BrowserRouter>
        <Nav></Nav>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
