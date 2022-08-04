//Styles
import { NavBarStyle } from "./NavBarStyle";

//Sources
import Logo from "../../Assets/Images/Logo.png";

//Components
import { NavLink } from "react-router-dom";

//Hooks
import { useAuth } from "../../Hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Redux
import { logout, reset } from "../../Slices/authSlice";

//Icons
import { RiGalleryLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHome, AiOutlineLogin, AiTwotoneEdit } from "react-icons/ai";

export const NavBar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/");
  };

  return (
    <NavBarStyle>
      <img src={Logo} alt="Logo" />
      <div className="contact-home">
        {!auth ? (
          <NavLink to="/">
            <AiOutlineHome />
          </NavLink>
        ) : (
          <>
            <NavLink to="/petgallery">
              <RiGalleryLine />
            </NavLink>
            <NavLink to="/mail">
              <GoMail />
            </NavLink>
            {user && (
              <NavLink to={`/profile/${user._id}`}>
                <BsFillPersonFill />
              </NavLink>
            )}

            <div className="logout">
              <AiOutlineLogin onClick={handleLogout} />
            </div>
          </>
        )}
      </div>
    </NavBarStyle>
  );
};
