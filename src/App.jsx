import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav"
import AboutUs from "./pages/AboutUs"
import OurWorks from "./pages/OurWorks"
import ContactUs from "./pages/ContactUs"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route exact index element={<AboutUs />} />
        <Route path="/works" element={<OurWorks />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

    </>
  )
}

export default App