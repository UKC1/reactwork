import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './component/Home';
import Search from './component/Search';
import Country from './component/Country';
import NotFound from "./component/NotFound";


function App() {
    const nav = useNavigate();
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/country/:code" element={<Country />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/search"}>Search</Link>
            <Link to={"/country/:id"}>Country</Link>
            <button onClick={()=>{nav("/search")}}>검색</button>
        </div>
    </div>
  );
}

export default App;
