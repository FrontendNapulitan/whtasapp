import { Outlet } from "react-router-dom";
import Appbar from "../../components/AppBar/AppBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home_wrapper">
      <Appbar />

      <Outlet />
    </div>
  );
};
export default Home;
