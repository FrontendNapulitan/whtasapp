import camera from "../../assets/icons/camera.svg";
import search from "../../assets/icons/search.svg";
import kebabmenu from "../../assets/icons/kebabmenu.svg";
import community from "../../assets/icons/community.svg";
import "./AppBar.css";
import { NavLink } from "react-router-dom";
const Appbar = () => {
  /********************* INIZIO VARIABILI *******************/

  /********************* FINE VARIABILI *******************/
  /********************************************************/
  /********************* INIZIO LIFECYCLE *******************/

  /********************* FINE LIFECYCLE *******************/
  /********************************************************/
  /********************* INIZIO METODI *******************/

  /********************* FINE METODI *******************/

  return (
    <div className="Appbar_wrapper">
      <div className="Appbar_infoHeader">
        <div className="AppBar_topContainer">
          {/* TITOLO APP */}
          <div className="Appbar_appLogo">ChatApp</div>
          {/* INIZIO ICONE CAMERA,LENTE DI INGRANDIMENTO, KEBABMENU */}
          <div className="Appbar_iconsContainer">
            <img src={camera} alt="camera" />
            <img src={search} alt="search" />
            <img src={kebabmenu} alt="kebabmenu" />
            {/* FINE ICONE CAMERA,LENTE DI INGRANDIMENTO, KEBABMENU */}
          </div>
        </div>
        {/* INIZIO TABS DI NAVIGAZIONE */}
        <div className="Appbar_tabs">
          {/* INIZIO TAB COMMUNITY */}
          <div className="tab">
            <NavLink
              to={"community"}
              className={({ isActive, isPending }) =>
                isPending ? "loading" : isActive ? "active" : ""
              }
            >
              <img src={community} alt="community" />
            </NavLink>
          </div>
          {/* FINE TAB COMMUNITY */}

          {/* INIZIO TAB CHATS */}
          <div className="tab">
            <NavLink
              to={"chats"}
              className={({ isActive, isPending }) =>
                isPending ? "loading" : isActive ? "active" : ""
              }
            >
              <span>Chats</span>
              {/* BADGE TOTALE MESSAGGI DA LEGGERE */}
              <span className="badge">1</span>
            </NavLink>
          </div>
          {/* FINE TAB CHATS */}

          {/* INIZIO TAB STATUS */}
          <div className="tab">
            <NavLink
              to={"status"}
              className={({ isActive, isPending }) =>
                isPending ? "loading" : isActive ? "active" : ""
              }
            >
              Status
            </NavLink>
          </div>
          {/* FINE TAB STATUS */}

          {/* INIZIO TAB CALLS */}
          <div className="tab">
            <NavLink
              to={"calls"}
              className={({ isActive, isPending }) =>
                isPending ? "loading" : isActive ? "active" : ""
              }
            >
              Calls
            </NavLink>
          </div>
          {/* FINE TAB CALLS */}
        </div>
        {/* FINE TABS DI NAVIGAZIONE */}
      </div>
    </div>
  );
};
export default Appbar;
