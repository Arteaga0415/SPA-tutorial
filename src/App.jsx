import "./App.css";
import "./globals.css";
import Profile from "./components/profile";
import UserList from "./components/userList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViteHomePage from "./components/vite-home-page";
import UserListSlice from "./components/userListSlice";
import Navbar from "./components/nav-bar";
import HomePage from "./components/home-page";
import AboutPage from "./components/about-page";

function App() {
  return (
    <div className="flex flex-col justify-start h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vite" element={<ViteHomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/slice" element={<UserListSlice />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
