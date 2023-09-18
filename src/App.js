import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Alert from "./Component/Alert";
import Exercise1 from "./Component/Exercise1";
import Exercise2 from "./Component/Exercise2";
import Exercise3 from "./Component/Exercise3";
import Exercise4 from "./Component/Exercise4";
import ApiExercise from "./Component/ApiExercise";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import AppBooking from "./Component/AppBooking";

function App() {
  return (
    <Router>
      <>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Exercise1" element={<Exercise1 />} />
            <Route path="/Exercise2" element={<Exercise2 />} />
            <Route path="/Exercise3" element={<Exercise3 />} />
            <Route path="/Exercise4" element={<Exercise4 />} />
            <Route path="/AppBooking" element={<AppBooking />} />
            <Route path="/ApiExercise" element={<ApiExercise />} />
            <Route path="*" element={<Alert />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
