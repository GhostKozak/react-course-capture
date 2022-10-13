import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav"
import AboutUs from "./pages/AboutUs"
import OurWorks from "./pages/OurWorks"
import ContactUs from "./pages/ContactUs"
import { Routes, Route } from "react-router-dom"
import MovieDetail from "./pages/MovieDetail"

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route exact index element={<AboutUs />} />
        <Route exact path="/work" element={<OurWorks />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

    </>
  )
}

export default App