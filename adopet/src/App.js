import "./app.css";

//Components
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Hooks
import { useAuth } from "./Hooks/useAuth";

//Pages
import { Home } from "./Pages/Home/Home";
import { Contact } from "./Pages/Contact/Contact";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Gallery } from "./Pages/Gallery/Gallery";
import { Profile } from "./Pages/Profile/Profile";
import { EditProfile } from "./Pages/EditProfile/EditProfile";

function App() {
  const { loading, auth } = useAuth();

  if (loading) {
    return <h2>Carregando . . . </h2>;
  }

  return (
    <>
      <div className="container">
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={!auth ? <Home /> : <Navigate to="/petgallery" />}
            />
            <Route
              path="/mail"
              element={auth ? <Contact /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!auth ? <Login /> : <Navigate to="/petgallery" />}
            />
            <Route
              path="/sign"
              element={!auth ? <Register /> : <Navigate to="/petgallery" />}
            />
            <Route
              path="/petgallery"
              element={auth ? <Gallery /> : <Navigate to="/" />}
            />
            <Route
              path="/update/profile"
              element={auth ? <EditProfile /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:id"
              element={auth ? <Profile /> : <Navigate to="/" />}
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
