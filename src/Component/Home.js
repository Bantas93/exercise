import { Link } from "react-router-dom";
import js_icon from "../assets/js_icon.png";
import react_icon from "../assets/react_icon.png";
const Home = () => {
  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <h1 className="p-3">Latihan React & Javascript</h1>
      <div className="d-flex justify-content-center">
        <img src={react_icon} alt="JS"></img>
        <h1 className="m-3">&</h1>
        <img src={js_icon} alt="JS"></img>
      </div>
      <div className="m-3 p-3">
        <Link target="blank" to="https://github.com/Bantas93" className="tc">
          @Bantas_syarif
        </Link>
      </div>
    </div>
  );
};
export default Home;
