import { Outlet, useParams } from "react-router-dom";
import Appbar from "../../components/AppBar/AppBar";
import "./Home.css";
const Home = () => {
  const {chatName} = useParams();
  return (
    <div className="Home_wrapper">
      {!chatName && <Appbar />}
      <Outlet />
    </div>
  );
};
export default Home;
