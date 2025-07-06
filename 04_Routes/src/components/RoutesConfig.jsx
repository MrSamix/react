import { Route, Routes } from "react-router-dom"
import Company from "./Company"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Home from "./Home"
import Profile from "./Profile"
import Team from "./Team"

function RoutesConfig() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/about/team" element={<Team />}/>
        <Route path="/about/company" element={<Company />}/>
        <Route path="/profile" element={<Profile enabled={false} />}/>
    </Routes>
  )
}

export default RoutesConfig