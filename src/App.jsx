import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav";
import Home from "./containers/Home";
function App() {
  

  return (
    <div >
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
