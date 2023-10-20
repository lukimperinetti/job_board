import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
//pages import
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Ads from "./pages/Ads";
import CreateAd from "./pages/CreateAd";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import Dashboard from "./pages/Dashboard";
import Apply from "./pages/Apply";
import ApplyUser from "./pages/ApplyUser";
// import SelectedJob from "./pages/Ads";
//components import
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <style>{`
            body {
              background: linear-gradient(to top, #fdfdfd, #e5e4f3, #cbccea, #afb6e2, #90a0d9, #7a8ac2, #6475ab, #4e6195, #3f486d, #2e3148, #1c1c27, #010101) no-repeat;
              background-size: cover;
            }
          `}</style>
        </Helmet>
        <BrowserRouter>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:jobId" element={<Ads />} />
              <Route path="/profil/createad" element={<CreateAd />} />
              <Route path="/profil" element={<UserProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/apply/:id" element={<Apply />} />
              <Route path="/applyUser/:id" element={<ApplyUser />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
