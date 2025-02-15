import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MetodyNauczania from "./pages/MetodyNauczania";

import TeacherDetails from "./pages/TeacherDetails";
import MainLayout from "./layouts/MainLayout";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import ONas from "./pages/ONas"; 

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metody-nauczania" element={<MetodyNauczania />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/nauczyciel/:id" element={<TeacherDetails />} /> 
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
