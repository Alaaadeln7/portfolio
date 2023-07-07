import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/contact/Contact";
export default function App() {
  return (
    <main className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
  )
}