import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav"
import AboutUs from "./pages/AboutUs"
import OurWorks from "./pages/OurWorks"
import ContactUs from "./pages/ContactUs"
import { Routes, Route, useLocation } from "react-router-dom"
import MovieDetail from "./pages/MovieDetail"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Nav />

      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname} >
          <Route exact index element={<AboutUs />} />
          <Route exact path="/work" element={<OurWorks />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default App