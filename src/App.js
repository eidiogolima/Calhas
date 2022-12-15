import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./JS/Global/Footer";
import Header from "./JS/Global/Header";
import Home from "./JS/Pages/Home";


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
