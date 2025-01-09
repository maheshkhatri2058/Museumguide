import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Landing from "./Pages/Landing";
import PrivateRoute from "./Pages/PrivaterRoute";
import Bangalore from "./Pages/Museum/Bangalore";
import Hydrabad from "./Pages/Museum/Hydrabad";
import Delhi from './Pages/Museum/Delhi'
import Mumbai from './Pages/Museum/Mumbai'
import Kolkata from './Pages/Museum/Kolkata';




function App() {
  return (
    <>
      <Routes>
        {/*<Route path="/" element={<Intro />}></Route> */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bangalore" element={<Bangalore/>} />
        <Route path="/hydrabad" element={<Hydrabad/>} />
        <Route path="/delhi" element={<Delhi/>} />
        <Route path="/mumbai" element={<Mumbai/>} />
        <Route path="/kolkata" element={<Kolkata/>} />


        
        <Route 
          path="/" 
          element={<PrivateRoute/>} >
        <Route path="/profile" element={<Profile />} />
            
          </Route>
        <Route path="*" element={<h2>Page is not Found</h2>} />

      </Routes>
    </>
  );
}

export default App;
